'use strict';
let rebound = {};
(function () {
    let util = rebound.util = {};
    let concat = Array.prototype.concat;
    let slice = Array.prototype.slice;

    util.bind = function bind(func, context) {
        let args = slice.call(arguments, 2);
        return function () {
            func.apply(context, concat.call(args, slice.call(arguments)));
        };
    };
    util.extend = function extend(target, source) {
        for (let key in source) {
            if (source.hasOwnProperty(key))target[key] = source[key];
        }
    };
    let SpringSystem = rebound.SpringSystem = function SpringSystem(looper) {
        this._springRegistry = {};
        this._activeSprings = [];
        this.listeners = [];
        this._idleSpringIndices = [];
        this.looper = looper || new AnimationLooper();
        this.looper.springSystem = this;
    };

    util.extend(SpringSystem.prototype, {
        _springRegistry: null,
        _isIdle: true,
        _lastTimeMillis: -1,
        _activeSprings: null,
        listeners: null,
        _idleSpringIndices: null,
        createSpring: function createSpring(tension, friction) {
            let springConfig;
            if (tension === undefined || friction === undefined) {
                springConfig = SpringConfig.DEFAULT_ORIGAMI_SPRING_CONFIG;
            } else {
                springConfig = SpringConfig.fromOrigamiTensionAndFriction(tension, friction);
            }
            return this.createSpringWithConfig(springConfig);
        },
        createSpringWithBouncinessAndSpeed: function createSpringWithBouncinessAndSpeed(bounciness, speed) {
            let springConfig;
            if (bounciness === undefined || speed === undefined) {
                springConfig = SpringConfig.DEFAULT_ORIGAMI_SPRING_CONFIG;
            } else {
                springConfig = SpringConfig.fromBouncinessAndSpeed(bounciness, speed);
            }
            return this.createSpringWithConfig(springConfig);
        },
        createSpringWithConfig: function createSpringWithConfig(springConfig) {
            let spring = new Spring(this);
            this.registerSpring(spring);
            spring.setSpringConfig(springConfig);
            return spring;
        },
        getIsIdle: function getIsIdle() {
            return this._isIdle;
        },
        registerSpring: function registerSpring(spring) {
            this._springRegistry[spring.getId()] = spring;
        },
        deregisterSpring: function deregisterSpring(spring) {
            removeFirst(this._activeSprings, spring);
            delete this._springRegistry[spring.getId()];
        },

        advance: function advance(time, deltaTime) {
            while (this._idleSpringIndices.length > 0) {
                this._idleSpringIndices.pop();
            }for (let i = 0, len = this._activeSprings.length; i < len; i++) {
                let spring = this._activeSprings[i];
                spring.systemShouldAdvance() ? spring.advance(time / 1000.0, deltaTime / 1000.0) :  this._idleSpringIndices.push(this._activeSprings.indexOf(spring));
            }
            while (this._idleSpringIndices.length > 0) {
                let idx = this._idleSpringIndices.pop();
                idx >= 0 && this._activeSprings.splice(idx, 1);
            }
        },

        loop: function loop(currentTimeMillis) {
            let listener;
            if (this._lastTimeMillis === -1)  this._lastTimeMillis = currentTimeMillis - 1;
            let ellapsedMillis = currentTimeMillis - this._lastTimeMillis;
            this._lastTimeMillis = currentTimeMillis;

            let i = 0,
                len = this.listeners.length;
            for (i = 0; i < len; i++) {
                listener = this.listeners[i];
                listener.onBeforeIntegrate && listener.onBeforeIntegrate(this);
            }
            this.advance(currentTimeMillis, ellapsedMillis);
            if (this._activeSprings.length === 0) {
                this._isIdle = true;
                this._lastTimeMillis = -1;
            }
            for (i = 0; i < len; i++) {
                listener = this.listeners[i];
                listener.onAfterIntegrate && listener.onAfterIntegrate(this);
            }
            if (!this._isIdle)  this.looper.run();
        },
        activateSpring: function activateSpring(springId) {
            let spring = this._springRegistry[springId];
            if (this._activeSprings.indexOf(spring) == -1) this._activeSprings.push(spring);
            if (this.getIsIdle()) {
                this._isIdle = false;
                this.looper.run();
            }
        },
        addListener: function addListener(listener) {
            this.listeners.push(listener);
        },
        removeListener: function removeListener(listener) {
            removeFirst(this.listeners, listener);
        },
        removeAllListeners: function removeAllListeners() {
            this.listeners = [];
        }
    });

    let Spring = rebound.Spring = function Spring(springSystem) {
        this._id = 's' + Spring._ID++;
        this._springSystem = springSystem;
        this.listeners = [];
        this._currentState = new PhysicsState();
        this._previousState = new PhysicsState();
        this._tempState = new PhysicsState();
    };

    util.extend(Spring, {
        _ID: 0,
        MAX_DELTA_TIME_SEC: 0.064,
        SOLVER_TIMESTEP_SEC: 0.001
    });

    util.extend(Spring.prototype, {
        _id: 0,
        _springConfig: null,
        _overshootClampingEnabled: false,
        _currentState: null,
        _previousState: null,
        _tempState: null,
        _startValue: 0,
        _endValue: 0,
        _wasAtRest: true,
        _restSpeedThreshold: 0.001,
        _displacementFromRestThreshold: 0.001,
        listeners: null,
        _timeAccumulator: 0,
        _springSystem: null,
        destroy: function destroy() {
            this.listeners = [];
            this.frames = [];
            this._springSystem.deregisterSpring(this);
        },
        getId: function getId() {
            return this._id;
        },
        setSpringConfig: function setSpringConfig(springConfig) {
            this._springConfig = springConfig;
            return this;
        },
        setCurrentValue: function setCurrentValue(currentValue, skipSetAtRest) {
            this._startValue = currentValue;
            this._currentState.position = currentValue;
            if (!skipSetAtRest) this.setAtRest();
            this.notifyPositionUpdated(false, false);
            return this;
        },
        getCurrentValue: function getCurrentValue() {
            return this._currentState.position;
        },
        getDisplacementDistanceForState: function getDisplacementDistanceForState(state) {
            return Math.abs(this._endValue - state.position);
        },
        setEndValue: function setEndValue(endValue) {
            if (this._endValue == endValue && this.isAtRest())  return this;
            this._startValue = this.getCurrentValue();
            this._endValue = endValue;
            this._springSystem.activateSpring(this.getId());
            for (let i = 0, len = this.listeners.length; i < len; i++) {
                let listener = this.listeners[i];
                let onChange = listener.onSpringEndStateChange;
                onChange && onChange(this);
            }
            return this;
        },
        setVelocity: function setVelocity(velocity) {
            if (velocity === this._currentState.velocity)  return this;
            this._currentState.velocity = velocity;
            this._springSystem.activateSpring(this.getId());
            return this;
        },
        setRestSpeedThreshold: function setRestSpeedThreshold(restSpeedThreshold) {
            this._restSpeedThreshold = restSpeedThreshold;
            return this;
        },
        isOvershooting: function isOvershooting() {
            let start = this._startValue;
            let end = this._endValue;
            return this._springConfig.tension > 0 && (start < end && this.getCurrentValue() > end || start > end && this.getCurrentValue() < end);
        },
        advance: function advance(time, realDeltaTime) {
            let isAtRest = this.isAtRest();

            if (isAtRest && this._wasAtRest) return;
            let adjustedDeltaTime = realDeltaTime;
            if (realDeltaTime > Spring.MAX_DELTA_TIME_SEC)  adjustedDeltaTime = Spring.MAX_DELTA_TIME_SEC;
            this._timeAccumulator += adjustedDeltaTime;

            let tension = this._springConfig.tension,
                friction = this._springConfig.friction,
                position = this._currentState.position,
                velocity = this._currentState.velocity,
                tempPosition = this._tempState.position,
                tempVelocity = this._tempState.velocity,
                aVelocity,
                aAcceleration,
                bVelocity,
                bAcceleration,
                cVelocity,
                cAcceleration,
                dVelocity,
                dAcceleration,
                dxdt,
                dvdt;

            while (this._timeAccumulator >= Spring.SOLVER_TIMESTEP_SEC) {
                this._timeAccumulator -= Spring.SOLVER_TIMESTEP_SEC;
                if (this._timeAccumulator < Spring.SOLVER_TIMESTEP_SEC) {
                    this._previousState.position = position;
                    this._previousState.velocity = velocity;
                }
                aVelocity = velocity;
                aAcceleration = tension * (this._endValue - tempPosition) - friction * velocity;

                tempPosition = position + aVelocity * Spring.SOLVER_TIMESTEP_SEC * 0.5;
                tempVelocity = velocity + aAcceleration * Spring.SOLVER_TIMESTEP_SEC * 0.5;
                bVelocity = tempVelocity;
                bAcceleration = tension * (this._endValue - tempPosition) - friction * tempVelocity;

                tempPosition = position + bVelocity * Spring.SOLVER_TIMESTEP_SEC * 0.5;
                tempVelocity = velocity + bAcceleration * Spring.SOLVER_TIMESTEP_SEC * 0.5;
                cVelocity = tempVelocity;
                cAcceleration = tension * (this._endValue - tempPosition) - friction * tempVelocity;

                tempPosition = position + cVelocity * Spring.SOLVER_TIMESTEP_SEC * 0.5;
                tempVelocity = velocity + cAcceleration * Spring.SOLVER_TIMESTEP_SEC * 0.5;
                dVelocity = tempVelocity;
                dAcceleration = tension * (this._endValue - tempPosition) - friction * tempVelocity;
                dxdt = 1.0 / 6.0 * (aVelocity + 2.0 * (bVelocity + cVelocity) + dVelocity);
                dvdt = 1.0 / 6.0 * (aAcceleration + 2.0 * (bAcceleration + cAcceleration) + dAcceleration);
                position += dxdt * Spring.SOLVER_TIMESTEP_SEC;
                velocity += dvdt * Spring.SOLVER_TIMESTEP_SEC;
            }
            this._tempState.position = tempPosition;
            this._tempState.velocity = tempVelocity;
            this._currentState.position = position;
            this._currentState.velocity = velocity;
            if (this._timeAccumulator > 0) this._interpolate(this._timeAccumulator / Spring.SOLVER_TIMESTEP_SEC);
            if (this.isAtRest() || this._overshootClampingEnabled && this.isOvershooting()) {
                if (this._springConfig.tension > 0) {
                    this._startValue = this._endValue;
                    this._currentState.position = this._endValue;
                } else {
                    this._endValue = this._currentState.position;
                    this._startValue = this._endValue;
                }
                this.setVelocity(0);
                isAtRest = true;
            }
            let notifyActivate = false;
            if (this._wasAtRest) {
                this._wasAtRest = false;
                notifyActivate = true;
            }
            let notifyAtRest = false;
            if (isAtRest) {
                this._wasAtRest = true;
                notifyAtRest = true;
            }
            this.notifyPositionUpdated(notifyActivate, notifyAtRest);
        },

        notifyPositionUpdated: function notifyPositionUpdated(notifyActivate, notifyAtRest) {
            for (let i = 0, len = this.listeners.length; i < len; i++) {
                let listener = this.listeners[i];
                if (notifyActivate && listener.onSpringActivate) listener.onSpringActivate(this);
                if (listener.onSpringUpdate) listener.onSpringUpdate(this);
                if (notifyAtRest && listener.onSpringAtRest) listener.onSpringAtRest(this);
            }
        },
        systemShouldAdvance: function systemShouldAdvance() {
            return !this.isAtRest() || !this.wasAtRest();
        },
        wasAtRest: function wasAtRest() {
            return this._wasAtRest;
        },
        isAtRest: function isAtRest() {
            return Math.abs(this._currentState.velocity) < this._restSpeedThreshold && (this.getDisplacementDistanceForState(this._currentState) <= this._displacementFromRestThreshold || this._springConfig.tension === 0);
        },
        setAtRest: function setAtRest() {
            this._endValue = this._currentState.position;
            this._tempState.position = this._currentState.position;
            this._currentState.velocity = 0;
            return this;
        },
        _interpolate: function _interpolate(alpha) {
            this._currentState.position = this._currentState.position * alpha + this._previousState.position * (1 - alpha);
            this._currentState.velocity = this._currentState.velocity * alpha + this._previousState.velocity * (1 - alpha);
        },
        getListeners: function getListeners() {
            return this.listeners;
        },
        addListener: function addListener(newListener) {
            this.listeners.push(newListener);
            return this;
        },
        removeListener: function removeListener(listenerToRemove) {
            removeFirst(this.listeners, listenerToRemove);
            return this;
        },
        removeAllListeners: function removeAllListeners() {
            this.listeners = [];
            return this;
        }
    });

    let PhysicsState = function PhysicsState() {};
    util.extend(PhysicsState.prototype, {
        position: 0,
        velocity: 0
    });
    let SpringConfig = rebound.SpringConfig = function SpringConfig(tension, friction) {
        this.tension = tension;
        this.friction = friction;
    };
    let AnimationLooper = rebound.AnimationLooper = function AnimationLooper() {
        this.springSystem = null;
        let _this = this;
        let _run = function _run() {
            _this.springSystem.loop(Date.now());
        };
        this.run = function () {
            util.onFrame(_run);
        };
    };
    rebound.SimulationLooper = function SimulationLooper(timestep) {
        this.springSystem = null;
        let time = 0;
        let running = false;
        timestep = timestep || 16.667;
        this.run = function () {
            if (running)  return;
            running = true;
            while (!this.springSystem.getIsIdle()) {
                this.springSystem.loop(time += timestep);
            }
            running = false;
        };
    };

    rebound.SteppingSimulationLooper = function (timestep) {
        this.springSystem = null;
        let time = 0;
        this.run = function () {};
        this.step = function (timestep) {
            this.springSystem.loop(time += timestep);
        };
    };
    let OrigamiValueConverter = rebound.OrigamiValueConverter = {
        tensionFromOrigamiValue: function tensionFromOrigamiValue(oValue) {
            return (oValue - 30.0) * 3.62 + 194.0;
        },
        frictionFromOrigamiValue: function frictionFromOrigamiValue(oValue) {
            return (oValue - 8.0) * 3.0 + 25.0;
        }
    };

    let BouncyConversion = rebound.BouncyConversion = function (bounciness, speed) {
        this.speed = speed;
        var b = this.normalize(bounciness / 1.7, 0, 20.0);
        b = this.projectNormal(b, 0.0, 0.8);
        var s = this.normalize(speed / 1.7, 0, 20.0);
        this.bouncyTension = this.projectNormal(s, 0.5, 200);
        this.bouncyFriction = this.quadraticOutInterpolation(b, this.b3Nobounce(this.bouncyTension), 0.01);
    };

    util.extend(BouncyConversion.prototype, {
        normalize: function normalize(value, startValue, endValue) {
            return (value - startValue) / (endValue - startValue);
        },
        projectNormal: function projectNormal(n, start, end) {
            return start + n * (end - start);
        },
        linearInterpolation: function linearInterpolation(t, start, end) {
            return t * end + (1.0 - t) * start;
        },
        quadraticOutInterpolation: function quadraticOutInterpolation(t, start, end) {
            return this.linearInterpolation(2 * t - t * t, start, end);
        },
        b3Friction1: function b3Friction1(x) {
            return 0.0007 * Math.pow(x, 3) - 0.031 * Math.pow(x, 2) + 0.64 * x + 1.28;
        },
        b3Friction2: function b3Friction2(x) {
            return 0.000044 * Math.pow(x, 3) - 0.006 * Math.pow(x, 2) + 0.36 * x + 2.;
        },
        b3Friction3: function b3Friction3(x) {
            return 0.00000045 * Math.pow(x, 3) - 0.000332 * Math.pow(x, 2) + 0.1078 * x + 5.84;
        },
        b3Nobounce: function b3Nobounce(tension) {
            let friction = 0;
            if (tension <= 18) {
                friction = this.b3Friction1(tension);
            } else if (tension > 18 && tension <= 44) {
                friction = this.b3Friction2(tension);
            } else {
                friction = this.b3Friction3(tension);
            }
            return friction;
        }
    });

    util.extend(SpringConfig, {
        fromOrigamiTensionAndFriction: function fromOrigamiTensionAndFriction(tension, friction) {
            return new SpringConfig(OrigamiValueConverter.tensionFromOrigamiValue(tension), OrigamiValueConverter.frictionFromOrigamiValue(friction));
        },
        fromBouncinessAndSpeed: function fromBouncinessAndSpeed(bounciness, speed) {
            var bouncyConversion = new rebound.BouncyConversion(bounciness, speed);
            return this.fromOrigamiTensionAndFriction(bouncyConversion.bouncyTension, bouncyConversion.bouncyFriction);
        }
    });

    SpringConfig.DEFAULT_ORIGAMI_SPRING_CONFIG = SpringConfig.fromOrigamiTensionAndFriction(40, 7);
    util.extend(SpringConfig.prototype, { friction: 0, tension: 0 });
    let colorCache = {};
    util.hexToRGB = function (color) {
        if (colorCache[color]) return colorCache[color];
        color = color.replace('#', '');
        if (color.length === 3)  color = color[0] + color[0] + color[1] + color[1] + color[2] + color[2];
        let parts = color.match(/.{2}/g);
        let ret = {
            r: parseInt(parts[0], 16),
            g: parseInt(parts[1], 16),
            b: parseInt(parts[2], 16)
        };
        colorCache[color] = ret;
        return ret;
    };
    util.rgbToHex = function (r, g, b) {
        r = r.toString(16);
        g = g.toString(16);
        b = b.toString(16);
        r = r.length < 2 ? '0' + r : r;
        g = g.length < 2 ? '0' + g : g;
        b = b.length < 2 ? '0' + b : b;
        return '#' + r + g + b;
    };

    let MathUtil = rebound.MathUtil = {
        mapValueInRange: function mapValueInRange(value, fromLow, fromHigh, toLow, toHigh) {
            let fromRangeSize = fromHigh - fromLow;
            let toRangeSize = toHigh - toLow;
            let valueScale = (value - fromLow) / fromRangeSize;
            return toLow + valueScale * toRangeSize;
        },
        degreesToRadians: function degreesToRadians(deg) {
            return deg * Math.PI / 180;
        }
    };
    util.extend(util, MathUtil);
    function removeFirst(array, item) {
        let idx = array.indexOf(item);
        idx != -1 && array.splice(idx, 1);
    }
    let _onFrame;
    if (typeof window !== 'undefined') {
        _onFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame || function (callback) {
            window.setTimeout(callback, 1000 / 60);
        };
    }
    if (!_onFrame && typeof process !== 'undefined' && process.title === 'node') _onFrame = setImmediate;
    util.onFrame = function onFrame(func) {
        return _onFrame(func);
    };
    if (typeof exports != 'undefined') {
        util.extend(exports, rebound);
    } else if (typeof window != 'undefined') {
        window.rebound = rebound;
    }
})();

'use strict';

/**
 * Polygon.
 * Create a regular polygon and provide api to compute inscribed child.
 */

var _createClass = function () { function defineProperties(target, props) { for (let i = 0; i < props.length; i++) { let descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

let Polygon = function () {
    function Polygon() {
        let radius = arguments.length <= 0 || arguments[0] === undefined ? 100 : arguments[0];
        let sides = arguments.length <= 1 || arguments[1] === undefined ? 3 : arguments[1];
        let depth = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];
        let colors = arguments[3];
        _classCallCheck(this, Polygon);
        this._radius = radius;
        this._sides = sides;
        this._depth = depth;
        this._colors = colors;
        this._x = 0;
        this._y = 0;
        this.rotation = 0;
        this.scale = 1;
        this.points = this._getRegularPolygonPoints();
    }

    _createClass(Polygon, [{
        key: '_getRegularPolygonPoints',
        value: function _getRegularPolygonPoints() {
            let points = [];
            let i = 0;
            while (i < this._sides) {
                let x = -this._radius * Math.sin(i * 2 * Math.PI / this._sides);
                let y = this._radius * Math.cos(i * 2 * Math.PI / this._sides);
                points.push({ x: x, y: y });
                i++;
            }
            return points;
        }
    }, {
        key: '_getInscribedPoints',
        value: function _getInscribedPoints(points, progress) {
            let _this = this;
            let inscribedPoints = [];
            points.forEach(function (item, i) {
                let start = item;
                let end = points[i + 1];
                if (!end) end = points[0];
                let point = _this._getInterpolatedPoint(start, end, progress);
                inscribedPoints.push(point);
            });
            return inscribedPoints;
        }
    }, {
        key: '_getInterpolatedPoint',
        value: function _getInterpolatedPoint(start, end, progress) {
            let Ax = start.x;
            let Ay = start.y;
            let Bx = end.x;
            let By = end.y;
            let Cx = Ax + (Bx - Ax) * progress;
            let Cy = Ay + (By - Ay) * progress;
            return {
                x: Cx,
                y: Cy
            };
        }
    }, {
        key: '_getUpdatedChildren',
        value: function _getUpdatedChildren(progress) {
            let children = [];
            for (let i = 0; i < this._depth; i++) {
                let points = children[i - 1] || this.points;
                let inscribedPoints = this._getInscribedPoints(points, progress);
                children.push(inscribedPoints);
            }
            return children;
        }
    }, {
        key: 'renderChildren',
        value: function renderChildren(context, progress) {
            let _this2 = this;
            let children = this._getUpdatedChildren(progress);
            children.forEach(function (points, i) {
                context.beginPath();
                points.forEach(function (point) {
                    return context.lineTo(point.x, point.y);
                });
                context.closePath();
                let strokeColor = _this2._colors.stroke;
                let childColor = _this2._colors.child;

                if (strokeColor) {
                    context.strokeStyle = strokeColor;
                    context.stroke();
                }

                if (childColor) {
                    let rgb = rebound.util.hexToRGB(childColor);
                    let alphaUnit = 1 / children.length;
                    let alpha = alphaUnit + alphaUnit * i;
                    let rgba = 'rgba(' + rgb.r + ', ' + rgb.g + ', ' + rgb.b + ', ' + alpha + ')';
                    context.fillStyle = rgba;
                    context.shadowColor = 'rgba(0,0,0, 0.1)';
                    context.shadowBlur = 10;
                    context.shadowOffsetX = 0;
                    context.shadowOffsetY = 0;
                    context.fill();
                }
            });
        }
    }, {
        key: 'render',
        value: function render(context) {
            context.save();
            context.translate(this._x, this._y);
            if (this.rotation !== 0) context.rotate(rebound.MathUtil.degreesToRadians(this.rotation));
            if (this.scale !== 1) context.scale(this.scale, this.scale);
            context.beginPath();
            this.points.forEach(function (point) {
                return context.lineTo(point.x, point.y);
            });
            context.closePath();
            let strokeColor = this._colors.stroke;
            let childColor = this._colors.base;
            if (strokeColor) {
                context.strokeStyle = strokeColor;
                context.stroke();
            }
            if (childColor) {
                context.fillStyle = childColor;
                context.fill();
            }
            context.restore();
        }
    }]);
    return Polygon;
}();
'use strict';

/**
 * Spinner.
 * Create a canvas element, append it to the body, render polygon with
 * inscribed children, provide init and complete methods to control spinner.
 */
var _createClass = function () { function defineProperties(target, props) { for (let i = 0; i < props.length; i++) { let descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

let Spinner = function () {
    function Spinner(params) {
        _classCallCheck(this, Spinner);
        let radius = params.radius,
            sides = params.sides,
            depth = params.depth,
            colors = params.colors,
            alwaysForward = params.alwaysForward,
            restAt = params.restAt,
            renderBase = params.renderBase;
        if (sides < 3) {
            console.warn('At least 3 sides required.');
            sides = 3;
        }
        this._canvas = document.createElement('canvas');
        this._canvas.style.backgroundColor = colors.background;
        this._canvas.style.zIndex = 1100;
        this._canvasW = null;
        this._canvasH = null;
        this._canvasOpacity = 1;
        this._centerX = null;
        this._centerY = null;
        this._alwaysForward = alwaysForward;
        this._restThreshold = restAt;
        this._renderBase = renderBase;
        this._springRangeLow = 0;
        this._springRangeHigh = this._restThreshold || 1;
        this._basePolygon = new Polygon(radius, sides, depth, colors);
        this._progress = 0;
        this._isAutoSpin = null;
        this._isCompleting = null;
    }

    _createClass(Spinner, [{
        key: 'init',
        value: function init(spring, autoSpin) {
            this._addCanvas();
            this._spring = spring;
            this._addSpringListener();
            this._isAutoSpin = autoSpin;
            if (autoSpin) {
                this._spin();
            } else {
                this._spring.setEndValue(0);
                this.render();
            }
        }
    }, {
        key: '_addCanvas',
        value: function _addCanvas() {
            document.body.appendChild(this._canvas);
            this._context = this._canvas.getContext('2d');
            this._setCanvasSize();
        }
    }, {
        key: '_setCanvasSize',
        value: function _setCanvasSize() {
            this._canvasW = this._canvas.width = window.innerWidth;
            this._canvasH = this._canvas.height = window.innerHeight;
            this._canvas.style.position = 'fixed';
            this._canvas.style.top = 0;
            this._canvas.style.left = 0;
            this._centerX = this._canvasW / 2;
            this._centerY = this._canvasH / 2;
        }
    }, {
        key: '_addSpringListener',
        value: function _addSpringListener() {
            let ctx = this;
            this._spring.addListener({
                onSpringUpdate: function onSpringUpdate(spring) {
                    let val = spring.getCurrentValue();
                    let fromLow = 0,
                        fromHigh = 1,
                        toLow = ctx._springRangeLow,
                        toHigh = ctx._springRangeHigh;
                    val = rebound.MathUtil.mapValueInRange(val, fromLow, fromHigh, toLow, toHigh);
                    ctx.render(val);
                }
            });
        }
    }, {
        key: 'setComplete',
        value: function setComplete() {
            this._isCompleting = true;
        }
    }, {
        key: '_completeAnimation',
        value: function _completeAnimation() {
            this._canvasOpacity -= 0.1;
            this._canvas.style.opacity = this._canvasOpacity;
            if (this._canvasOpacity <= 0) {
                this._isAutoSpin = false;
                this._spring.setAtRest();
                this._canvas.remove();
            }
        }
    }, {
        key: '_spin',
        value: function _spin() {
            if (this._alwaysForward) {
                let currentValue = this._spring.getCurrentValue();
                if (this._restThreshold && currentValue === 1) this._switchSpringRange();
                if (currentValue === 1) this._spring.setCurrentValue(0).setAtRest();
            }
            this._spring.setEndValue(this._spring.getCurrentValue() === 1 ? 0 : 1);
        }
    }, {
        key: '_switchSpringRange',
        value: function _switchSpringRange() {
            let threshold = this._restThreshold;
            this._springRangeLow = this._springRangeLow === threshold ? 0 : threshold;
            this._springRangeHigh = this._springRangeHigh === threshold ? 1 : threshold;
        }
    }, {
        key: 'render',
        value: function render(progress) {
            if (progress) this._progress = Math.round(progress * 10000) / 10000;
            if (this._isAutoSpin && this._spring.isAtRest()) this._spin();
            if (this._isCompleting) this._completeAnimation();
            this._context.clearRect(0, 0, this._canvasW, this._canvasH);
            this._context.save();
            this._context.translate(this._centerX, this._centerY);
            this._context.lineWidth = 1.5;
            if (this._renderBase)  this._basePolygon.render(this._context);
            this._basePolygon.renderChildren(this._context, this._progress);
            this._context.restore();
        }
    }]);
    return Spinner;
}();
'use strict';
