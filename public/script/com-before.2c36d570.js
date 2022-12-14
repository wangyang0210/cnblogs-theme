(self["webpackChunkcnblogs_theme"] = self["webpackChunkcnblogs_theme"] || []).push([["com-before"],{

/***/ "./node_modules/exports-loader/dist/cjs.js?exports=rebound,Spinner!./src/vendor/loading/loading.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/exports-loader/dist/cjs.js?exports=rebound,Spinner!./src/vendor/loading/loading.js ***!
  \*********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Spinner": function() { return /* binding */ Spinner; },
/* harmony export */   "rebound": function() { return /* binding */ rebound; }
/* harmony export */ });
let rebound={};(function(){let util=rebound.util={};let concat=Array.prototype.concat;let slice=Array.prototype.slice;util.bind=function bind(a,b){let args=slice.call(arguments,2);return function(){a.apply(b,concat.call(args,slice.call(arguments)))}};util.extend=function extend(a,b){for(let key in b){if(b.hasOwnProperty(key))a[key]=b[key]}};let SpringSystem=rebound.SpringSystem=function SpringSystem(a){this._springRegistry={};this._activeSprings=[];this.listeners=[];this._idleSpringIndices=[];this.looper=a||new AnimationLooper();this.looper.springSystem=this};util.extend(SpringSystem.prototype,{_springRegistry:null,_isIdle:true,_lastTimeMillis:-1,_activeSprings:null,listeners:null,_idleSpringIndices:null,createSpring:function createSpring(a,b){let springConfig;if(a===undefined||b===undefined){springConfig=SpringConfig.DEFAULT_ORIGAMI_SPRING_CONFIG}else{springConfig=SpringConfig.fromOrigamiTensionAndFriction(a,b)}return this.createSpringWithConfig(springConfig)},createSpringWithBouncinessAndSpeed:function createSpringWithBouncinessAndSpeed(a,b){let springConfig;if(a===undefined||b===undefined){springConfig=SpringConfig.DEFAULT_ORIGAMI_SPRING_CONFIG}else{springConfig=SpringConfig.fromBouncinessAndSpeed(a,b)}return this.createSpringWithConfig(springConfig)},createSpringWithConfig:function createSpringWithConfig(a){let spring=new Spring(this);this.registerSpring(spring);spring.setSpringConfig(a);return spring},getIsIdle:function getIsIdle(){return this._isIdle},registerSpring:function registerSpring(a){this._springRegistry[a.getId()]=a},deregisterSpring:function deregisterSpring(a){removeFirst(this._activeSprings,a);delete this._springRegistry[a.getId()]},advance:function advance(a,b){while(this._idleSpringIndices.length>0){this._idleSpringIndices.pop()}for(let i=0,len=this._activeSprings.length;i<len;i++){let spring=this._activeSprings[i];spring.systemShouldAdvance()?spring.advance(a/1000.0,b/1000.0):this._idleSpringIndices.push(this._activeSprings.indexOf(spring))}while(this._idleSpringIndices.length>0){let idx=this._idleSpringIndices.pop();idx>=0&&this._activeSprings.splice(idx,1)}},loop:function loop(a){let listener;if(this._lastTimeMillis===-1)this._lastTimeMillis=a-1;let ellapsedMillis=a-this._lastTimeMillis;this._lastTimeMillis=a;let i=0,len=this.listeners.length;for(i=0;i<len;i++){listener=this.listeners[i];listener.onBeforeIntegrate&&listener.onBeforeIntegrate(this)}this.advance(a,ellapsedMillis);if(this._activeSprings.length===0){this._isIdle=true;this._lastTimeMillis=-1}for(i=0;i<len;i++){listener=this.listeners[i];listener.onAfterIntegrate&&listener.onAfterIntegrate(this)}if(!this._isIdle)this.looper.run()},activateSpring:function activateSpring(a){let spring=this._springRegistry[a];if(this._activeSprings.indexOf(spring)==-1)this._activeSprings.push(spring);if(this.getIsIdle()){this._isIdle=false;this.looper.run()}},addListener:function addListener(a){this.listeners.push(a)},removeListener:function removeListener(a){removeFirst(this.listeners,a)},removeAllListeners:function removeAllListeners(){this.listeners=[]}});let Spring=rebound.Spring=function Spring(a){this._id='s'+Spring._ID++;this._springSystem=a;this.listeners=[];this._currentState=new PhysicsState();this._previousState=new PhysicsState();this._tempState=new PhysicsState()};util.extend(Spring,{_ID:0,MAX_DELTA_TIME_SEC:0.064,SOLVER_TIMESTEP_SEC:0.001});util.extend(Spring.prototype,{_id:0,_springConfig:null,_overshootClampingEnabled:false,_currentState:null,_previousState:null,_tempState:null,_startValue:0,_endValue:0,_wasAtRest:true,_restSpeedThreshold:0.001,_displacementFromRestThreshold:0.001,listeners:null,_timeAccumulator:0,_springSystem:null,destroy:function destroy(){this.listeners=[];this.frames=[];this._springSystem.deregisterSpring(this)},getId:function getId(){return this._id},setSpringConfig:function setSpringConfig(a){this._springConfig=a;return this},setCurrentValue:function setCurrentValue(a,b){this._startValue=a;this._currentState.position=a;if(!b)this.setAtRest();this.notifyPositionUpdated(false,false);return this},getCurrentValue:function getCurrentValue(){return this._currentState.position},getDisplacementDistanceForState:function getDisplacementDistanceForState(a){return Math.abs(this._endValue-a.position)},setEndValue:function setEndValue(a){if(this._endValue==a&&this.isAtRest())return this;this._startValue=this.getCurrentValue();this._endValue=a;this._springSystem.activateSpring(this.getId());for(let i=0,len=this.listeners.length;i<len;i++){let listener=this.listeners[i];let onChange=listener.onSpringEndStateChange;onChange&&onChange(this)}return this},setVelocity:function setVelocity(a){if(a===this._currentState.velocity)return this;this._currentState.velocity=a;this._springSystem.activateSpring(this.getId());return this},setRestSpeedThreshold:function setRestSpeedThreshold(a){this._restSpeedThreshold=a;return this},isOvershooting:function isOvershooting(){let start=this._startValue;let end=this._endValue;return this._springConfig.tension>0&&(start<end&&this.getCurrentValue()>end||start>end&&this.getCurrentValue()<end)},advance:function advance(a,b){let isAtRest=this.isAtRest();if(isAtRest&&this._wasAtRest)return;let adjustedDeltaTime=b;if(b>Spring.MAX_DELTA_TIME_SEC)adjustedDeltaTime=Spring.MAX_DELTA_TIME_SEC;this._timeAccumulator+=adjustedDeltaTime;let tension=this._springConfig.tension,friction=this._springConfig.friction,position=this._currentState.position,velocity=this._currentState.velocity,tempPosition=this._tempState.position,tempVelocity=this._tempState.velocity,aVelocity,aAcceleration,bVelocity,bAcceleration,cVelocity,cAcceleration,dVelocity,dAcceleration,dxdt,dvdt;while(this._timeAccumulator>=Spring.SOLVER_TIMESTEP_SEC){this._timeAccumulator-=Spring.SOLVER_TIMESTEP_SEC;if(this._timeAccumulator<Spring.SOLVER_TIMESTEP_SEC){this._previousState.position=position;this._previousState.velocity=velocity}aVelocity=velocity;aAcceleration=tension*(this._endValue-tempPosition)-friction*velocity;tempPosition=position+aVelocity*Spring.SOLVER_TIMESTEP_SEC*0.5;tempVelocity=velocity+aAcceleration*Spring.SOLVER_TIMESTEP_SEC*0.5;bVelocity=tempVelocity;bAcceleration=tension*(this._endValue-tempPosition)-friction*tempVelocity;tempPosition=position+bVelocity*Spring.SOLVER_TIMESTEP_SEC*0.5;tempVelocity=velocity+bAcceleration*Spring.SOLVER_TIMESTEP_SEC*0.5;cVelocity=tempVelocity;cAcceleration=tension*(this._endValue-tempPosition)-friction*tempVelocity;tempPosition=position+cVelocity*Spring.SOLVER_TIMESTEP_SEC*0.5;tempVelocity=velocity+cAcceleration*Spring.SOLVER_TIMESTEP_SEC*0.5;dVelocity=tempVelocity;dAcceleration=tension*(this._endValue-tempPosition)-friction*tempVelocity;dxdt=1.0/6.0*(aVelocity+2.0*(bVelocity+cVelocity)+dVelocity);dvdt=1.0/6.0*(aAcceleration+2.0*(bAcceleration+cAcceleration)+dAcceleration);position+=dxdt*Spring.SOLVER_TIMESTEP_SEC;velocity+=dvdt*Spring.SOLVER_TIMESTEP_SEC}this._tempState.position=tempPosition;this._tempState.velocity=tempVelocity;this._currentState.position=position;this._currentState.velocity=velocity;if(this._timeAccumulator>0)this._interpolate(this._timeAccumulator/Spring.SOLVER_TIMESTEP_SEC);if(this.isAtRest()||this._overshootClampingEnabled&&this.isOvershooting()){if(this._springConfig.tension>0){this._startValue=this._endValue;this._currentState.position=this._endValue}else{this._endValue=this._currentState.position;this._startValue=this._endValue}this.setVelocity(0);isAtRest=true}let notifyActivate=false;if(this._wasAtRest){this._wasAtRest=false;notifyActivate=true}let notifyAtRest=false;if(isAtRest){this._wasAtRest=true;notifyAtRest=true}this.notifyPositionUpdated(notifyActivate,notifyAtRest)},notifyPositionUpdated:function notifyPositionUpdated(a,b){for(let i=0,len=this.listeners.length;i<len;i++){let listener=this.listeners[i];if(a&&listener.onSpringActivate)listener.onSpringActivate(this);if(listener.onSpringUpdate)listener.onSpringUpdate(this);if(b&&listener.onSpringAtRest)listener.onSpringAtRest(this)}},systemShouldAdvance:function systemShouldAdvance(){return!this.isAtRest()||!this.wasAtRest()},wasAtRest:function wasAtRest(){return this._wasAtRest},isAtRest:function isAtRest(){return Math.abs(this._currentState.velocity)<this._restSpeedThreshold&&(this.getDisplacementDistanceForState(this._currentState)<=this._displacementFromRestThreshold||this._springConfig.tension===0)},setAtRest:function setAtRest(){this._endValue=this._currentState.position;this._tempState.position=this._currentState.position;this._currentState.velocity=0;return this},_interpolate:function _interpolate(a){this._currentState.position=this._currentState.position*a+this._previousState.position*(1-a);this._currentState.velocity=this._currentState.velocity*a+this._previousState.velocity*(1-a)},getListeners:function getListeners(){return this.listeners},addListener:function addListener(a){this.listeners.push(a);return this},removeListener:function removeListener(a){removeFirst(this.listeners,a);return this},removeAllListeners:function removeAllListeners(){this.listeners=[];return this}});let PhysicsState=function PhysicsState(){};util.extend(PhysicsState.prototype,{position:0,velocity:0});let SpringConfig=rebound.SpringConfig=function SpringConfig(a,b){this.tension=a;this.friction=b};let AnimationLooper=rebound.AnimationLooper=function AnimationLooper(){this.springSystem=null;let _this=this;let _run=function _run(){_this.springSystem.loop(Date.now())};this.run=function(){util.onFrame(_run)}};rebound.SimulationLooper=function SimulationLooper(a){this.springSystem=null;let time=0;let running=false;a=a||16.667;this.run=function(){if(running)return;running=true;while(!this.springSystem.getIsIdle()){this.springSystem.loop(time+=a)}running=false}};rebound.SteppingSimulationLooper=function(b){this.springSystem=null;let time=0;this.run=function(){};this.step=function(a){this.springSystem.loop(time+=a)}};let OrigamiValueConverter=rebound.OrigamiValueConverter={tensionFromOrigamiValue:function tensionFromOrigamiValue(a){return(a-30.0)*3.62+194.0},frictionFromOrigamiValue:function frictionFromOrigamiValue(a){return(a-8.0)*3.0+25.0}};let BouncyConversion=rebound.BouncyConversion=function(a,c){this.speed=c;var b=this.normalize(a/1.7,0,20.0);b=this.projectNormal(b,0.0,0.8);var s=this.normalize(c/1.7,0,20.0);this.bouncyTension=this.projectNormal(s,0.5,200);this.bouncyFriction=this.quadraticOutInterpolation(b,this.b3Nobounce(this.bouncyTension),0.01)};util.extend(BouncyConversion.prototype,{normalize:function normalize(a,b,c){return(a-b)/(c-b)},projectNormal:function projectNormal(n,a,b){return a+n*(b-a)},linearInterpolation:function linearInterpolation(t,a,b){return t*b+(1.0-t)*a},quadraticOutInterpolation:function quadraticOutInterpolation(t,a,b){return this.linearInterpolation(2*t-t*t,a,b)},b3Friction1:function b3Friction1(x){return 0.0007*Math.pow(x,3)-0.031*Math.pow(x,2)+0.64*x+1.28},b3Friction2:function b3Friction2(x){return 0.000044*Math.pow(x,3)-0.006*Math.pow(x,2)+0.36*x+2.},b3Friction3:function b3Friction3(x){return 0.00000045*Math.pow(x,3)-0.000332*Math.pow(x,2)+0.1078*x+5.84},b3Nobounce:function b3Nobounce(a){let friction=0;if(a<=18){friction=this.b3Friction1(a)}else if(a>18&&a<=44){friction=this.b3Friction2(a)}else{friction=this.b3Friction3(a)}return friction}});util.extend(SpringConfig,{fromOrigamiTensionAndFriction:function fromOrigamiTensionAndFriction(a,b){return new SpringConfig(OrigamiValueConverter.tensionFromOrigamiValue(a),OrigamiValueConverter.frictionFromOrigamiValue(b))},fromBouncinessAndSpeed:function fromBouncinessAndSpeed(a,b){var c=new rebound.BouncyConversion(a,b);return this.fromOrigamiTensionAndFriction(c.bouncyTension,c.bouncyFriction)}});SpringConfig.DEFAULT_ORIGAMI_SPRING_CONFIG=SpringConfig.fromOrigamiTensionAndFriction(40,7);util.extend(SpringConfig.prototype,{friction:0,tension:0});let colorCache={};util.hexToRGB=function(a){if(colorCache[a])return colorCache[a];a=a.replace('#','');if(a.length===3)a=a[0]+a[0]+a[1]+a[1]+a[2]+a[2];let parts=a.match(/.{2}/g);let ret={r:parseInt(parts[0],16),g:parseInt(parts[1],16),b:parseInt(parts[2],16)};colorCache[a]=ret;return ret};util.rgbToHex=function(r,g,b){r=r.toString(16);g=g.toString(16);b=b.toString(16);r=r.length<2?'0'+r:r;g=g.length<2?'0'+g:g;b=b.length<2?'0'+b:b;return'#'+r+g+b};let MathUtil=rebound.MathUtil={mapValueInRange:function mapValueInRange(a,b,c,d,e){let fromRangeSize=c-b;let toRangeSize=e-d;let valueScale=(a-b)/fromRangeSize;return d+valueScale*toRangeSize},degreesToRadians:function degreesToRadians(a){return a*Math.PI/180}};util.extend(util,MathUtil);function removeFirst(a,b){let idx=a.indexOf(b);idx!=-1&&a.splice(idx,1)}let _onFrame;if(typeof window!=='undefined'){_onFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame||function(a){window.setTimeout(a,1000/60)}}if(!_onFrame&&typeof process!=='undefined'&&process.title==='node')_onFrame=setImmediate;util.onFrame=function onFrame(a){return _onFrame(a)};if(typeof exports!='undefined'){util.extend(exports,rebound)}else if(typeof window!='undefined'){window.rebound=rebound}})();'use strict';var _createClass=function(){function defineProperties(a,b){for(let i=0;i<b.length;i++){let descriptor=b[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(a,descriptor.key,descriptor)}}return function(a,b,c){if(b)defineProperties(a.prototype,b);if(c)defineProperties(a,c);return a}}();let Polygon=function(){function Polygon(){let radius=arguments.length<=0||arguments[0]===undefined?100:arguments[0];let sides=arguments.length<=1||arguments[1]===undefined?3:arguments[1];let depth=arguments.length<=2||arguments[2]===undefined?0:arguments[2];let colors=arguments[3];_classCallCheck(this,Polygon);this._radius=radius;this._sides=sides;this._depth=depth;this._colors=colors;this._x=0;this._y=0;this.rotation=0;this.scale=1;this.points=this._getRegularPolygonPoints()}_createClass(Polygon,[{key:'_getRegularPolygonPoints',value:function _getRegularPolygonPoints(){let points=[];let i=0;while(i<this._sides){let x=-this._radius*Math.sin(i*2*Math.PI/this._sides);let y=this._radius*Math.cos(i*2*Math.PI/this._sides);points.push({x:x,y:y});i++}return points}},{key:'_getInscribedPoints',value:function _getInscribedPoints(b,c){let _this=this;let inscribedPoints=[];b.forEach(function(a,i){let start=a;let end=b[i+1];if(!end)end=b[0];let point=_this._getInterpolatedPoint(start,end,c);inscribedPoints.push(point)});return inscribedPoints}},{key:'_getInterpolatedPoint',value:function _getInterpolatedPoint(a,b,c){let Ax=a.x;let Ay=a.y;let Bx=b.x;let By=b.y;let Cx=Ax+(Bx-Ax)*c;let Cy=Ay+(By-Ay)*c;return{x:Cx,y:Cy}}},{key:'_getUpdatedChildren',value:function _getUpdatedChildren(a){let children=[];for(let i=0;i<this._depth;i++){let points=children[i-1]||this.points;let inscribedPoints=this._getInscribedPoints(points,a);children.push(inscribedPoints)}return children}},{key:'renderChildren',value:function renderChildren(c,d){let _this2=this;let children=this._getUpdatedChildren(d);children.forEach(function(b,i){c.beginPath();b.forEach(function(a){return c.lineTo(a.x,a.y)});c.closePath();let strokeColor=_this2._colors.stroke;let childColor=_this2._colors.child;if(strokeColor){c.strokeStyle=strokeColor;c.stroke()}if(childColor){let rgb=rebound.util.hexToRGB(childColor);let alphaUnit=1/children.length;let alpha=alphaUnit+alphaUnit*i;let rgba='rgba('+rgb.r+', '+rgb.g+', '+rgb.b+', '+alpha+')';c.fillStyle=rgba;c.shadowColor='rgba(0,0,0, 0.1)';c.shadowBlur=10;c.shadowOffsetX=0;c.shadowOffsetY=0;c.fill()}})}},{key:'render',value:function render(b){b.save();b.translate(this._x,this._y);if(this.rotation!==0)b.rotate(rebound.MathUtil.degreesToRadians(this.rotation));if(this.scale!==1)b.scale(this.scale,this.scale);b.beginPath();this.points.forEach(function(a){return b.lineTo(a.x,a.y)});b.closePath();let strokeColor=this._colors.stroke;let childColor=this._colors.base;if(strokeColor){b.strokeStyle=strokeColor;b.stroke()}if(childColor){b.fillStyle=childColor;b.fill()}b.restore()}}]);return Polygon}();'use strict';var _createClass=function(){function defineProperties(a,b){for(let i=0;i<b.length;i++){let descriptor=b[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(a,descriptor.key,descriptor)}}return function(a,b,c){if(b)defineProperties(a.prototype,b);if(c)defineProperties(a,c);return a}}();function _classCallCheck(a,b){if(!(a instanceof b)){throw new TypeError("Cannot call a class as a function");}}let Spinner=function(){function Spinner(a){_classCallCheck(this,Spinner);let radius=a.radius,sides=a.sides,depth=a.depth,colors=a.colors,alwaysForward=a.alwaysForward,restAt=a.restAt,renderBase=a.renderBase;if(sides<3){console.warn('At least 3 sides required.');sides=3}this._canvas=document.createElement('canvas');this._canvas.style.backgroundColor=colors.background;this._canvas.style.zIndex=1100;this._canvasW=null;this._canvasH=null;this._canvasOpacity=1;this._centerX=null;this._centerY=null;this._alwaysForward=alwaysForward;this._restThreshold=restAt;this._renderBase=renderBase;this._springRangeLow=0;this._springRangeHigh=this._restThreshold||1;this._basePolygon=new Polygon(radius,sides,depth,colors);this._progress=0;this._isAutoSpin=null;this._isCompleting=null}_createClass(Spinner,[{key:'init',value:function init(a,b){this._addCanvas();this._spring=a;this._addSpringListener();this._isAutoSpin=b;if(b){this._spin()}else{this._spring.setEndValue(0);this.render()}}},{key:'_addCanvas',value:function _addCanvas(){document.body.appendChild(this._canvas);this._context=this._canvas.getContext('2d');this._setCanvasSize()}},{key:'_setCanvasSize',value:function _setCanvasSize(){this._canvasW=this._canvas.width=window.innerWidth;this._canvasH=this._canvas.height=window.innerHeight;this._canvas.style.position='fixed';this._canvas.style.top=0;this._canvas.style.left=0;this._centerX=this._canvasW/2;this._centerY=this._canvasH/2}},{key:'_addSpringListener',value:function _addSpringListener(){let ctx=this;this._spring.addListener({onSpringUpdate:function onSpringUpdate(a){let val=a.getCurrentValue();let fromLow=0,fromHigh=1,toLow=ctx._springRangeLow,toHigh=ctx._springRangeHigh;val=rebound.MathUtil.mapValueInRange(val,fromLow,fromHigh,toLow,toHigh);ctx.render(val)}})}},{key:'setComplete',value:function setComplete(){this._isCompleting=true}},{key:'_completeAnimation',value:function _completeAnimation(){this._canvasOpacity-=0.1;this._canvas.style.opacity=this._canvasOpacity;if(this._canvasOpacity<=0){this._isAutoSpin=false;this._spring.setAtRest();this._canvas.remove()}}},{key:'_spin',value:function _spin(){if(this._alwaysForward){let currentValue=this._spring.getCurrentValue();if(this._restThreshold&&currentValue===1)this._switchSpringRange();if(currentValue===1)this._spring.setCurrentValue(0).setAtRest()}this._spring.setEndValue(this._spring.getCurrentValue()===1?0:1)}},{key:'_switchSpringRange',value:function _switchSpringRange(){let threshold=this._restThreshold;this._springRangeLow=this._springRangeLow===threshold?0:threshold;this._springRangeHigh=this._springRangeHigh===threshold?1:threshold}},{key:'render',value:function render(a){if(a)this._progress=Math.round(a*10000)/10000;if(this._isAutoSpin&&this._spring.isAtRest())this._spin();if(this._isCompleting)this._completeAnimation();this._context.clearRect(0,0,this._canvasW,this._canvasH);this._context.save();this._context.translate(this._centerX,this._centerY);this._context.lineWidth=1.5;if(this._renderBase)this._basePolygon.render(this._context);this._basePolygon.renderChildren(this._context,this._progress);this._context.restore()}}]);return Spinner}();'use strict';

/*** EXPORTS FROM exports-loader ***/



/***/ }),

/***/ "./src/template/banner.html":
/*!**********************************!*\
  !*** ./src/template/banner.html ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Module
var code = "<div class=\"main-header\" id=\"main-header\"> <div id=\"nhBannerAnimation\"> <ul class=\"circles\"> <li></li> <li></li> <li></li> <li></li> <li></li> <li></li> <li></li> <li></li> <li></li> <li></li> </ul> </div> <div class=\"vertical\"> <div class=\"main-header-content inner\"> <h1 class=\"page-title\" id=\"homeTopTitle\"><span></span></h1> <h2 class=\"page-description\" id=\"hitokoto\"></h2> <h3 class=\"page-author\" id=\"hitokotoAuthor\"></h3> <h1 class=\"sb-title\" id=\"sbTitle\"> <span id=\"sbTitleText\"></span> <span id=\"sbTitleConsole\"></span> </h1> <p class=\"article-info\" id=\"articleInfo\"></p> </div> </div> <a class=\"scroll-down\" href=\"javascript:void(0);\" data-offset=\"-45\"> <span class=\"hidden\">Scroll Down</span> <i class=\"scroll-down-icon iconfont icon-fanhui\"></i> </a> </div>";
// Exports
/* harmony default export */ __webpack_exports__["default"] = (code);

/***/ }),

/***/ "./src/template/sidebar.html":
/*!***********************************!*\
  !*** ./src/template/sidebar.html ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Module
var code = "<div class=\"container\"> <div class=\"menu-wrap optiscroll\" id=\"menuWrap\" style=\"display:none\"> <div class=\"close-button\" id=\"close-button\"> <i class=\"iconfont icon-close\"></i> </div> <div class=\"sidebar-header\"> <i class=\"iconfont icon-guangbo\"></i> &nbsp;&nbsp; <span class=\"sidebar-title-msg\"></span> </div> <div class=\"sidebar-profile\"> <div class=\"user-pic\" id=\"menuBlogAvatar\"></div> <div class=\"sidebar-userinfo\" id=\"introduce\"></div> </div> <div class=\"sidebar-stats\"></div> <div class=\"sidebar-search\"> <div class=\"sidebar-search-div\"> <div class=\"input-group\"> <span id=\"sb-sidebarSearchBox\"></span> <div class=\"input-group-append\"> <span class=\"input-group-text\"> <i class=\"iconfont icon-sousuo\"></i> </span> </div> </div> </div> </div> <div class=\"customize-nav\"></div> <div id=\"calendar-box\"></div> <div class=\"sidebar-menu\" id=\"customize-sidebar-menu\"> <ul></ul> </div> <div class=\"sidebar-menu\"> <ul> <li class=\"ng-star-inserted sidebar-dropdown\"> <a href=\"javascript:void(0)\" class=\"ng-star-inserted sidebar-dropdown-box\"> <i class=\"iconfont icon-collection-fill\"></i> <span class=\"sidebar-dropdown-title\">积分排名</span> </a> <div class=\"sidebar-submenu\" id=\"sb-sidebarScorerank\"></div> </li> <li class=\"ng-star-inserted sidebar-dropdown\"> <a href=\"javascript:void(0)\" class=\"ng-star-inserted sidebar-dropdown-box\"> <i class=\"iconfont icon-time-fill\"></i> <span class=\"sidebar-dropdown-title\">最新随笔</span> </a> <div class=\"sidebar-submenu\" id=\"sb-sidebarRecentposts\"></div> </li> <li class=\"ng-star-inserted sidebar-dropdown\"> <a href=\"javascript:void(0)\" class=\"ng-star-inserted sidebar-dropdown-box\"> <i class=\"iconfont icon-label-fill\"></i> <span class=\"sidebar-dropdown-title\">我的标签</span> </a> <div class=\"sidebar-submenu\" id=\"sb-toptags\"></div> </li> <li class=\"ng-star-inserted sidebar-dropdown\"> <a href=\"javascript:void(0)\" class=\"ng-star-inserted sidebar-dropdown-box\"> <i class=\"iconfont icon-fenleicur\"></i> <span class=\"sidebar-dropdown-title\">随笔分类</span> </a> <div class=\"sidebar-submenu\" id=\"sb-classify\"></div> </li> <li class=\"ng-star-inserted sidebar-dropdown\"> <a href=\"javascript:void(0)\" class=\"ng-star-inserted sidebar-dropdown-box\"> <i class=\"iconfont icon-fenlei\"></i> <span class=\"sidebar-dropdown-title\">文章分类</span> </a> <div class=\"sidebar-submenu\" id=\"sb-ArticleCategory\"></div> </li> <li class=\"ng-star-inserted sidebar-dropdown\"> <a href=\"javascript:void(0)\" class=\"ng-star-inserted sidebar-dropdown-box\"> <i class=\"iconfont icon-browse-fill\"></i> <span class=\"sidebar-dropdown-title\">阅读排行</span> </a> <div class=\"sidebar-submenu\" id=\"sb-topview\"></div> </li> <li class=\"ng-star-inserted sidebar-dropdown\"> <a href=\"javascript:void(0)\" class=\"ng-star-inserted sidebar-dropdown-box\"> <i class=\"iconfont icon-like-fill\"></i> <span class=\"sidebar-dropdown-title\">推荐排行</span> </a> <div class=\"sidebar-submenu\" id=\"sb-topDiggPosts\"></div> </li> <li class=\"ng-star-inserted sidebar-dropdown\"> <a href=\"javascript:void(0)\" class=\"ng-star-inserted sidebar-dropdown-box\"> <i class=\"iconfont icon-comments\"></i> <span class=\"sidebar-dropdown-title\">最新评论</span> </a> <div class=\"sidebar-submenu\" id=\"sb-recentComments\"></div> </li> <li class=\"ng-star-inserted sidebar-dropdown\"> <a href=\"javascript:void(0)\" class=\"ng-star-inserted sidebar-dropdown-box\"> <i class=\"iconfont icon-task-fill\"></i> <span class=\"sidebar-dropdown-title\">随笔档案</span> </a> <div class=\"sidebar-submenu\" id=\"sb-record\"></div> </li> <li class=\"ng-star-inserted sidebar-dropdown\"> <a href=\"javascript:void(0)\" class=\"ng-star-inserted sidebar-dropdown-box\"> <i class=\"iconfont icon-document-fill\"></i> <span class=\"sidebar-dropdown-title\">文章档案</span> </a> <div class=\"sidebar-submenu\" id=\"sb-articlearchive\"></div> </li> </ul> </div> <div class=\"sidebar-footer\"></div> <div class=\"morph-shape\" id=\"morph-shape\" style=\"display:none\" data-morph-open=\"M-7.312,0H15c0,0,66,113.339,66,399.5C81,664.006,15,800,15,800H-7.312V0z;M-7.312,0H100c0,0,0,113.839,0,400c0,264.506,0,400,0,400H-7.312V0z\"> <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" viewBox=\"0 0 100 800\" preserveAspectRatio=\"none\"> <path d=\"M-7.312,0H0c0,0,0,113.839,0,400c0,264.506,0,400,0,400h-7.312V0z\"/> </svg> </div> </div> <button class=\"menu-button\" id=\"open-button\">MENU</button> <div class=\"content-wrap\" id=\"content-wrap\"></div> </div> ";
// Exports
/* harmony default export */ __webpack_exports__["default"] = (code);

/***/ }),

/***/ "./src/template/sidebarNav.html":
/*!**************************************!*\
  !*** ./src/template/sidebarNav.html ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Module
var code = "<div class=\"dropdown\"> <a href=\"https://www.cnblogs.com/##user##\" target=\"_self\"> <i class=\"iconfont icon-home-fill\"></i>首页 </a> </div> <div class=\"dropdown\"> <a href=\"https://msg.cnblogs.com/send/##user##\" target=\"_blank\"> <i class=\"iconfont icon-zhifeiji\"></i>联系 </a> </div> <div class=\"dropdown\"> <a href=\"javascript:void(0)\" onclick='$(\"#blog_nav_rss\").trigger(\"click\")' data-rss=\"https://www.cnblogs.com/##user##/rss/\"> <i class=\"iconfont icon-keaide\"></i>订阅 </a> </div> <div class=\"dropdown\"> <a href=\"https://i.cnblogs.com/\" target=\"_blank\"> <i class=\"iconfont icon-shezhi-fill\"></i>管理 </a> </div> ";
// Exports
/* harmony default export */ __webpack_exports__["default"] = (code);

/***/ }),

/***/ "./src/style/menu_bubble.css":
/*!***********************************!*\
  !*** ./src/style/menu_bubble.css ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/banner/banner.js":
/*!*****************************************!*\
  !*** ./src/components/banner/banner.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ main; }
/* harmony export */ });
/* harmony import */ var _template_banner_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../template/banner.html */ "./src/template/banner.html");
/**
 * UPDATES AND DOCS AT: https://github.com/wangyang0210
 * https://www.cnblogs.com/wangyang0210/
 * @author: WangYang, wangyang.0210@foxmail.com
 * @Date 2022-08-25 15:19
 * ----------------------------------------------
 * @describe: banner背景图片处理
 */


function main() {

    $('#sidebar_news').prepend(_template_banner_html__WEBPACK_IMPORTED_MODULE_0__["default"]);

    /**
     * 设置banner背景图片，初始化高度
     * （该处理需在loading结束之前处理）
     */
    (() => {
        let mainHeader = $('#main-header');
        let topImg, bgImg, height;

        // 设置图片
        if ( $.__status.pageType === 'home') {
            topImg = $.__config.banner.home.background.length > 0 ? $.__config.banner.home.background : ['https://images.cnblogs.com/cnblogs_com/wangyang0210/1943283/o_220917053600_wallhaven-6k3oox.webp'];
        }  else {
            topImg = $.__config.banner.article.background.length > 0 ? $.__config.banner.article.background : [	'https://images.cnblogs.com/cnblogs_com/wangyang0210/1943283/o_220917053937_wallhaven-j5mz95.webp'];
            height = '40vh';
            $('#homeTopTitle').hide();
            $('.scroll-down').hide();
            $('#home').css('margin-top', '40vh');
            $('#cb_post_title_url').addClass('post-del-title');
        }

        // 设置高度
        if (height) mainHeader.css('height', height);

        // banner动效
        if ( $.__config.animate.bannerImages?.enable) {
            // 开启图片自动切换
            Promise.all(/*! import() | banner-images */[__webpack_require__.e("vendors-node_modules_gsap_dist_gsap_min_js"), __webpack_require__.e("banner-images")]).then(__webpack_require__.bind(__webpack_require__, /*! ../bannerImages/bannerImages */ "./src/components/bannerImages/bannerImages.js")).then(module => {
                let bannerImages = module.default;
                bannerImages(
                    'main-header',
                    topImg,
                    $.__config.animate.bannerImages.options.itemNum,
                    $.__config.animate.bannerImages.options.time,
                    $.__config.animate.bannerImages.options.sort,
                    $.__config.animate.bannerImages.options.current < 0
                        ? $.__tools.randomNum(0, topImg.length - 1)
                        : $.__config.animate.bannerImages.options.current
                );
            });
        } else {
            // 随机指定一个图片

            if (topImg.length > 1) bgImg = topImg[ $.__tools.randomNum(0, topImg.length - 1)]
            else bgImg = topImg[0] || ""

            mainHeader.css({
                'background': '#222 url(\'' + encodeURI(bgImg) + '\')  center center no-repeat',
                'background-size': 'cover'
            });
        }

        // Banner文字是否可选
        if(! $.__config.banner.text) $('.main-header-content.inner').addClass('textUnselect')

    })();

    // 添加事件监听
    $.__event.scroll.handle.push(() => {
        let openButton = $('#open-button');

        if ( $.__event.scroll.temScroll < $.__event.scroll.docScroll && $.__event.scroll.homeScroll <= $.__event.scroll.docScroll && !openButton.hasClass('menu-button-scroll')) { // 向下滚动
            openButton.addClass('menu-button-scroll');
            openButton.text('');
        }

        if ( $.__event.scroll.temScroll > $.__event.scroll.docScroll && $.__event.scroll.homeScroll >= $.__event.scroll.docScroll && openButton.hasClass('menu-button-scroll')) { // 滚入头图
            openButton.removeClass('menu-button-scroll');
            openButton.text('MENU');
        }
    });
}


/***/ }),

/***/ "./src/components/common/comBefore.js":
/*!********************************************!*\
  !*** ./src/components/common/comBefore.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ main; }
/* harmony export */ });
/* harmony import */ var _loading_loading__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../loading/loading */ "./src/components/loading/loading.js");
/* harmony import */ var _sidebar_sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sidebar/sidebar */ "./src/components/sidebar/sidebar.js");
/* harmony import */ var _banner_banner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../banner/banner */ "./src/components/banner/banner.js");
/* harmony import */ var _event_event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../event/event */ "./src/components/event/event.js");
/* harmony import */ var _vendor_rotate_jquery_rotate_min__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../vendor/rotate/jquery.rotate.min */ "./src/vendor/rotate/jquery.rotate.min.js");
/* harmony import */ var _vendor_rotate_jquery_rotate_min__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_vendor_rotate_jquery_rotate_min__WEBPACK_IMPORTED_MODULE_4__);
/**
 * UPDATES AND DOCS AT: https://github.com/wangyang0210
 * https://www.cnblogs.com/wangyang0210/
 * @author: WangYang, wangyang.0210@foxmail.com
 * @Date 2022-08-25 15:20
 * ----------------------------------------------
 * @describe: 前置公共处理
 */






function main() {

    let loadingObj = (0,_loading_loading__WEBPACK_IMPORTED_MODULE_0__["default"])();

    // 默认字体图标库
    __webpack_require__.e(/*! import() | iconfont */ "iconfont").then(__webpack_require__.bind(__webpack_require__, /*! ../../style/iconfont.css */ "./src/style/iconfont.css"));

    // 谷歌字体
    __webpack_require__.e(/*! import() | google-fonts */ "google-fonts").then(__webpack_require__.bind(__webpack_require__, /*! ../../style/google-fonts.css */ "./src/style/google-fonts.css"));

    /**
     * 开启 loading
     */
    (() => {
        loadingObj.start();
    })();

    /**
     * 国家公祭日和自定义重要的缅怀的日子
     */
    (() => {
        if ( $.__tools.getTodayDate() == '12-13' || $.__config.memorialDays.includes( $.__tools.getTodayDate()) ) $('html').addClass('htmlGray')
    })();

    /**
     * 定时清除全部计时器
     */
    (() => {
        setTimeout(() => {
            $.each( $.__timeIds, (e) => {
                null != $.__timeIds[e] && window.clearInterval( $.__timeIds[e]);
            });
        }, 30000);
    })();

    /**
     * 事件绑定
     */
    (() => {
        _event_event__WEBPACK_IMPORTED_MODULE_3__["default"].init();
    })();

    /**
     * 侧边栏
     */
    (() => {
        (0,_sidebar_sidebar__WEBPACK_IMPORTED_MODULE_1__["default"])();
    })();

    /**
     * 头图
     */
    (() => {
        (0,_banner_banner__WEBPACK_IMPORTED_MODULE_2__["default"])();
    })();

    /**
     * 添加扩展字体图标库
     */
    (() => {
        if ( $.__config.fontIconExtend !== '') $.__tools.dynamicLoadingCss( $.__config.fontIconExtend, 1);
    })();

    /**
     * 关闭 loading
     */
    (() => {
        loadingObj.stop();
    })();
}


/***/ }),

/***/ "./src/components/loading/loading.js":
/*!*******************************************!*\
  !*** ./src/components/loading/loading.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ main; }
/* harmony export */ });
/* harmony import */ var exports_loader_exports_rebound_Spinner_vendor_loading_loading__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! exports-loader?exports=rebound,Spinner!../../vendor/loading/loading */ "./node_modules/exports-loader/dist/cjs.js?exports=rebound,Spinner!./src/vendor/loading/loading.js");
/* harmony import */ var _hooks_beforeLoading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hooks/beforeLoading */ "./src/hooks/beforeLoading.js");
/* harmony import */ var _hooks_afterLoading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/afterLoading */ "./src/hooks/afterLoading.js");
/**
 * UPDATES AND DOCS AT: https://github.com/wangyang0210
 * https://www.cnblogs.com/wangyang0210/
 * @author: WangYang, wangyang.0210@foxmail.com
 * @Date 2022-08-25 15:22
 * ----------------------------------------------
 * @describe: loading 处理
 */




function main() {

    let loading = function() {
        let that = this;

        this.config  = $.__config.loading;
        this.spring  = null;
        this.spinner = null;

        /**
         * Initialize Rebound.js with settings.
         * Rebound is used to generate a spring which
         * is then used to animate the spinner.
         * See more: http://facebook.github.io/rebound-js/docs/rebound.html
         */
        this.initRebound = () => {

            let settings = that.config.rebound;

            let springSystem = new exports_loader_exports_rebound_Spinner_vendor_loading_loading__WEBPACK_IMPORTED_MODULE_0__.rebound.SpringSystem();

            that.spring = springSystem.createSpring(settings.tension, settings.friction);
        }

        /**
         * Initialize Spinner with settings.
         */
        this.initSpinner = () => {

            let settings = that.config.spinner;

            that.spinner = new exports_loader_exports_rebound_Spinner_vendor_loading_loading__WEBPACK_IMPORTED_MODULE_0__.Spinner(settings);
        }

        /**
         * 开启 loading
         */
        this.start = () => {
            ;(0,_hooks_beforeLoading__WEBPACK_IMPORTED_MODULE_1__["default"])();
            $('#blog-news').prepend('<div id="loading"></div>');
            that.initRebound();
            that.initSpinner();
            that.spinner.init(that.spring, true);
        }

        /**
         * 结束 loading
         */
        this.stop = () => {
            $('body').css('overflow', 'auto');
            that.spinner.setComplete();
            $('div#loading').hide();
            $('a[name="top"]').hide();
            (0,_hooks_afterLoading__WEBPACK_IMPORTED_MODULE_2__["default"])();
        }
    }

    return (new loading());
}


/***/ }),

/***/ "./src/components/sidebar/lib/classie.js":
/*!***********************************************!*\
  !*** ./src/components/sidebar/lib/classie.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ main; }
/* harmony export */ });
/**
 * UPDATES AND DOCS AT: https://github.com/wangyang0210
 * https://www.cnblogs.com/wangyang0210/
 * @author: WangYang, wangyang.0210@foxmail.com
 * @Date 2022-08-25 15:24
 * ----------------------------------------------
 * @describe: 侧边栏处理
 */
function main() {
  function classReg( className ) {
    return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
  }

  // classList support for class management
  // altho to be fair, the api sucks because it won't accept multiple classes at once
  let hasClass, addClass, removeClass;

  if ( 'classList' in document.documentElement ) {
    hasClass = function( elem, c ) {
      return elem.classList.contains( c );
    };
    addClass = function( elem, c ) {
      elem.classList.add( c );
    };
    removeClass = function( elem, c ) {
      elem.classList.remove( c );
    };
  }
  else {
    hasClass = function( elem, c ) {
      return classReg( c ).test( elem.className );
    };
    addClass = function( elem, c ) {
      if ( !hasClass( elem, c ) ) {
        elem.className = elem.className + ' ' + c;
      }
    };
    removeClass = function( elem, c ) {
      elem.className = elem.className.replace( classReg( c ), ' ' );
    };
  }

  function toggleClass( elem, c ) {
    var fn = hasClass( elem, c ) ? removeClass : addClass;
    fn( elem, c );
  }

  return {
    // full names
    hasClass: hasClass,
    addClass: addClass,
    removeClass: removeClass,
    toggleClass: toggleClass,
    // short names
    has: hasClass,
    add: addClass,
    remove: removeClass,
    toggle: toggleClass
  };
}


/***/ }),

/***/ "./src/components/sidebar/lib/main4.js":
/*!*********************************************!*\
  !*** ./src/components/sidebar/lib/main4.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ main; }
/* harmony export */ });
/* harmony import */ var _classie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classie */ "./src/components/sidebar/lib/classie.js");
/* harmony import */ var snapsvg_cjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! snapsvg-cjs */ "./node_modules/snapsvg-cjs/dist/snap.svg-cjs.js");
/* harmony import */ var snapsvg_cjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(snapsvg_cjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var optiscroll_dist_optiscroll_min__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! optiscroll/dist/optiscroll.min */ "./node_modules/optiscroll/dist/optiscroll.min.js");
/* harmony import */ var optiscroll_dist_optiscroll_min__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(optiscroll_dist_optiscroll_min__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var optiscroll_dist_optiscroll_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! optiscroll/dist/optiscroll.css */ "./node_modules/optiscroll/dist/optiscroll.css");
/**
 * UPDATES AND DOCS AT: https://github.com/wangyang0210
 * https://www.cnblogs.com/wangyang0210/
 * @author: WangYang, wangyang.0210@foxmail.com
 * @Date 2022-08-25 15:24
 * ----------------------------------------------
 * @describe: 侧边栏处理
 */





function main() {

    let bodyEl = document.body,
        content = document.querySelector('.content-wrap'),
        openbtn = document.getElementById('open-button'),
        closebtn = document.getElementById('close-button'),
        isOpen = false,
        classie = (0,_classie__WEBPACK_IMPORTED_MODULE_0__["default"])(),

        morphEl = document.getElementById('morph-shape'),
        s = snapsvg_cjs__WEBPACK_IMPORTED_MODULE_1___default()(morphEl.querySelector('svg')),
        path = s.select('path'),
        initialPath = path.attr('d'),
        isAnimating = false;

    let myOptiscrollInstance;

    function init() {

        initEvents();

        // 初始化滚动条
        myOptiscrollInstance = new (optiscroll_dist_optiscroll_min__WEBPACK_IMPORTED_MODULE_2___default())(document.querySelector('#menuWrap'), {
            preventParentScroll: true,
            forceScrollbars: true
        });
    }

    function initEvents() {
        openbtn.addEventListener('click', toggleMenu);
        if (closebtn) {
            closebtn.addEventListener('click', toggleMenu);
        }

        // close the menu element if the target it麓s not the menu element or one of its descendants..
        content.addEventListener('click', function (ev) {
            let target = ev.target;
            if (isOpen && target !== openbtn) toggleMenu();
        });
    }

    function toggleMenu() {
        $('.menu-wrap').show();

        if (isOpen) {

            $(bodyEl).removeClass('show-menu');

            $('#content-wrap').fadeOut(300);
            $(bodyEl).css('overflow', 'auto');
            $("#mainContent").off("touchmove");

            path.attr('d', initialPath);
            isAnimating = false;
        } else {
            classie.add(bodyEl, 'show-menu');

            $('#content-wrap').show();
            $('body').css('overflow', 'hidden');

            // 初始化滚动条到顶部位置
            myOptiscrollInstance.scrollTo(false, 'top');
        }
        isOpen = !isOpen;
    }

    init();

    return {
        myOptiscrollInstance: myOptiscrollInstance
    }
}


/***/ }),

/***/ "./src/components/sidebar/sidebar.js":
/*!*******************************************!*\
  !*** ./src/components/sidebar/sidebar.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ main; }
/* harmony export */ });
/* harmony import */ var _template_sidebar_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../template/sidebar.html */ "./src/template/sidebar.html");
/* harmony import */ var _template_sidebarNav_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../template/sidebarNav.html */ "./src/template/sidebarNav.html");
/* harmony import */ var _style_menu_bubble_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../style/menu_bubble.css */ "./src/style/menu_bubble.css");
/* harmony import */ var _lib_main4__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/main4 */ "./src/components/sidebar/lib/main4.js");
/**
 * UPDATES AND DOCS AT: https://github.com/wangyang0210
 * https://www.cnblogs.com/wangyang0210/
 * @author: WangYang, wangyang.0210@foxmail.com
 * @Date 2022-08-25 15:24
 * ----------------------------------------------
 * @describe: 侧边栏处理
 */





function main() {

    let mainObj;

    /**
     * 设置侧边栏渲染
     */
    (() => {
        $('#sidebar_news').prepend(_template_sidebar_html__WEBPACK_IMPORTED_MODULE_0__["default"]);
        mainObj = (0,_lib_main4__WEBPACK_IMPORTED_MODULE_3__["default"])();
    })();

    /**
     * 设置菜单信息
     */
    (() => {
        // ------- 设置导航 -------
        let navHtml = $.__tools.tempReplacement(_template_sidebarNav_html__WEBPACK_IMPORTED_MODULE_1__["default"], 'user', $.__status.user);
        $('.sidebar-footer').html(navHtml);

        // ------- 设置头像 -------
        let blogAvatar = $.__config.info.avatar ? $.__config.info.avatar : $.__config.default.avatar;
        $('#menuBlogAvatar').append("<img class='img-responsive' alt='用户头像' src='"+blogAvatar+"'>");

        // ------- 设置侧边栏信息 -------
        $('.sidebar-title-msg').text( $.__config.sidebar.titleMsg);
    })();

    /**
     * 设置菜单个人信息背景图片
     */
    (() => {
        let mbg = $.__config.sidebar.infoBackground ? $.__config.sidebar.infoBackground : 'https://images.cnblogs.com/cnblogs_com/wangyang0210/1943283/o_221114135508_sidebar_bg_2.webp';
        $('.container .menu-wrap').css('background-image', 'url(\''+mbg+'\')');
    })();

    /**
     * 定时拉取数据
     */
    (() => {
        let timeout = 1000;
        // ------- 用户个人信息 -------
        $.__timeIds.introduceTId = window.setInterval(() => {
            let introduceHtml = $('#profile_block').html(),
                menuIntroduce = $('#introduce');
            if ((typeof introduceHtml == 'string') && menuIntroduce.html() === '') {
                menuIntroduce.html( $.__tools.htmlFiltrationScript(introduceHtml));
                $.__tools.clearIntervalTimeId( $.__timeIds.introduceTId);
            }
        }, timeout);

        // ------- 博客统计 -------
        if( $.__config.sidebar.blogStatus) {
            $.__timeIds.blogStatsTId = window.setInterval(() => {
                let blogStats   = $('.blogStats'), menuBlogStats  = $('.sidebar-stats');
                if (blogStats.length > 0) {
                    menuBlogStats.html( $.__tools.htmlFiltrationScript(blogStats.html())).show();
                    blogStats.html('')
                    $.__tools.clearIntervalTimeId( $.__timeIds.blogStatsTId);
                }
            }, timeout);
        }

        // ------- 日历 -------
        $.__timeIds.calendarTId = window.setInterval(() => {
            let calendarTable = $('#blogCalendar'),
                calendar      = $('#blog-calendar'),
                menuCalendar  = $('#calendar-box');

            if (calendarTable.length > 0 && menuCalendar.html() === ''){
                let calendarHtml = '<div id="blog-calendar">' + calendar.html() + '</div>';
                calendar.remove();
                menuCalendar.html(calendarHtml).show();
                $('#blog-calendar').css('visibility', 'visible');
                $.__tools.clearIntervalTimeId( $.__timeIds.calendarTId);
            }
        }, timeout);

        // ------- 找找看 -------
        $.__timeIds.searchTId = window.setInterval(() => {
            let sidebarSearch = $('#sidebar_search_box'),
                menuSearchBox = $('#sb-sidebarSearchBox');

            if (sidebarSearch.length > 0 && menuSearchBox.html() === ''){
                menuSearchBox.prepend('<div id="sb_widget_my_zzk" class="div_my_zzk"><input id="q" type="text"  autocomplete="off" placeholder="找找看..." onkeydown="return zzk_go_enter(event);" class="input_my_zzk form-control search-menu"></div>');
                $('.sidebar-search').show();
                $.__tools.clearIntervalTimeId( $.__timeIds.searchTId);
            }
        }, timeout);

        // ------- 积分与排名 -------
        $.__timeIds.scorerankTId = window.setInterval(() => {
            listHdl(
                $('#sidebar_scorerank ul li'),
                $('#sb-sidebarScorerank'),
                $.__timeIds.scorerankTId
            );
        }, timeout);

        // ------- 最新随笔 -------
        $.__timeIds.newEssayTId = window.setInterval(() => {
            listHdl(
                $('#sidebar_recentposts ul li'),
                $('#sb-sidebarRecentposts'),
                $.__timeIds.newEssayTId
            );
        }, timeout);

        // ------- 我的标签 -------
        $.__timeIds.topTagsTId = window.setInterval(() => {
            listHdl(
                $('#sidebar_toptags ul li'),
                $('#sb-toptags'),
                $.__timeIds.topTagsTId
            );
        }, timeout);

        // ------- 随笔分类 -------
        $.__timeIds.classifyTId = window.setInterval(() => {
            listHdl(
                $('#sidebar_postcategory ul li'),
                $('#sb-classify'),
                $.__timeIds.classifyTId
            );
        }, timeout);

        // ------- 文章分类 -------
        $.__timeIds.articleCategoryTId = window.setInterval(() => {
            listHdl(
                $('#sidebar_articlecategory ul li'),
                $('#sb-ArticleCategory'),
                $.__timeIds.articleCategoryTId
            );
        }, timeout);

        // ------- 随笔档案 -------
        $.__timeIds.recordTId = window.setInterval(() => {
            listHdl(
                $('#sidebar_postarchive ul li'),
                $('#sb-record'),
                $.__timeIds.recordTId
            );
        }, timeout);

        // ------- 文章档案 -------
        $.__timeIds.articleTId = window.setInterval(() => {
            listHdl(
                $('#sidebar_articlearchive ul li'),
                $('#sb-articlearchive'),
                $.__timeIds.articleTId
            );
        }, timeout);

        // ------- 阅读排行 -------
        $.__timeIds.topViewTId = window.setInterval(() => {
            listHdl(
                $('#TopViewPostsBlock ul li'),
                $('#sb-topview'),
                $.__timeIds.topViewTId
            );
        }, timeout);

        // ------- 推荐排行 -------
        $.__timeIds.topDiggPostsTId = window.setInterval(() => {
            listHdl(
                $('#TopDiggPostsBlock ul li'),
                $('#sb-topDiggPosts'),
                $.__timeIds.topDiggPostsTId
            );
        }, timeout);

        // ------- 最新评论 -------
        $.__timeIds.commentsTId = window.setInterval(() => {
            let recentComments     = $('#sidebar_recentcomments ul'),
                menuRecentComments = $('#sb-recentComments');

            let getMenuCommentsData = (obj) => {
                let html = '<ul>',
                    ret  = /^[1-9]+\d*$/,
                    title, body, author;

                if (obj.find('li').length > 2) {
                    title  = obj.find('li.recent_comment_title');
                    body   = obj.find('li.recent_comment_body');
                    author = obj.find('li.recent_comment_author');

                    if (title.length !== body.length || title.length !== author.length) return ;

                    title.each((i) => {
                        let p = $(title[i]),
                            o = p.text() === p.html() ? {} : $(p.html()),
                            textArr = p.text().trim().split('.');
                        if (ret.test(textArr[0])) textArr.splice(0,1);
                        let text = textArr.join('.').trim();
                        o.length > 0 && o.html(text);
                        html += '<li>' + (o.length > 0 ?  o.prop("outerHTML") : "<a href='javascript:void(0);'>" + text + "</a>")

                            + '<div class="sb-recent_comment_body">'
                            + $(body[i]).text()
                            + '</div>'

                            + '<div class="sb-recent_comment_author">'
                            + $(author[i]).text()
                            + '</div></li>';
                    });
                }
                html += '</ul>';
                return html;
            }

            if (recentComments.length > 0 && menuRecentComments.html() === '') {
                menuRecentComments.html(getMenuCommentsData(recentComments));
                menuRecentComments.parent('.sidebar-dropdown').show();
                $.__tools.clearIntervalTimeId( $.__timeIds.commentsTId);
            }
        }, timeout);

        // ------- 自定义导航 -------
        (() => {
            if ( $.__config.sidebar?.navList) {
                let navList = $.__config.sidebar.navList;
                let navHtml = '';
                if (navList.length > 0) {
                    navHtml = '<ul>';
                    $.each(navList, function (i) {
                        let iconClass = navList[i].length > 2 ? navList[i][2] : "icon-qianzishenhe";
                        navHtml += '<li><a href="'+(navList[i][1])+'" class="sidebar-dropdown-box" target="_blank"><i class="iconfont '+iconClass+'"></i>'+(navList[i][0])+'</a></li>';
                    });
                    navHtml += '</ul>';
                    $('.customize-nav').append(navHtml).show();
                }
            }
        })();

        // ------- 自定义列表 -------
        (() => {
            if ( $.__config.sidebar?.customList) {
                let customData = $.__config.sidebar.customList;
                if (Object.keys(customData).length > 0) {
                    let res = '';
                    $.each(customData, (title, list) => {
                        let html = '<li class="ng-star-inserted sidebar-dropdown">';
                        html += '<a href="javascript:void(0)" class="ng-star-inserted sidebar-dropdown-box">';
                        html += '   <i class="iconfont '+ list.icon +'"></i>';
                        html += '   <span class="sidebar-dropdown-title">'+ title +'</span>';
                        html += '</a>';
                        html += '<div class="sidebar-submenu"><ul>';
                        $.each(list.data, (key, val) => {
                            html += '<li><a href="' + val[1] + '" target="_blank">' + val[0] + '</a></li>';
                        });

                        html += '</ul></div>';
                        html += '</li>';
                        res += html;
                    });
                    $('#customize-sidebar-menu ul').append(res);
                    $('#customize-sidebar-menu').show();
                    $('#customize-sidebar-menu .sidebar-dropdown').show();
                }
            }
        })();

        // ------- 公共函数 -------
        function listHdl(old, nld, tid) {
            if (old.length > 0 && nld.html() === '') {
                nld.html(getMenuData(old));
                nld.parent('.sidebar-dropdown').show();
                $.__tools.clearIntervalTimeId(tid);
            }
        }

        function getMenuData(obj) {
            let html = '<ul>',
                ret  = /^[1-9]+\d*$/;
            obj.each((i) => {
                let p = $(obj[i]),
                    o = p.text() === p.html() ? {} : $(p.html()),
                    textArr =  p.text().trim().split('.');
                if (ret.test(textArr[0])) textArr.splice(0,1);
                let text = textArr.join('.').trim();
                o.length > 0 && o.html(text);
                if (text.length > 0) html += '<li>' + (o.length > 0 ?  o.prop("outerHTML") : '<a href="javascript:void(0);">' + text + '</a>' ) + '</li>';
            });
            html += '</ul>';
            return html;
        }
    })();

    /**
     * 头像旋转动效
     */
    (() => {
        if ( $.__config.animate.avatar.enable) {
            $('#menuBlogAvatar').addClass('img-rounded')
            $('.author_avatar').addClass('img-rounded')
        }
    })();



    /**
     * 设置是否默认展开菜单栏
     */
    (() => {

        if ( $.__config.sidebar.submenu.pointsRank) {
            $('#sb-sidebarScorerank').parent('li.sidebar-dropdown').addClass('active');
            $('#sb-sidebarScorerank').show();
        }

        if ( $.__config.sidebar.submenu.latestPosts) {
            $('#sb-sidebarRecentposts').parent('li.sidebar-dropdown').addClass('active');
            $('#sb-sidebarRecentposts').show();
        }

        if ( $.__config.sidebar.submenu.myTags) {
            $('#sb-toptags').parent('li.sidebar-dropdown').addClass('active');
            $('#sb-toptags').show();
        }

        if ( $.__config.sidebar.submenu.postsClassify) {
            $('#sb-classify').parent('li.sidebar-dropdown').addClass('active');
            $('#sb-classify').show();
        }

        if ( $.__config.sidebar.submenu.articleClassify) {
            $('#sb-ArticleCategory').parent('li.sidebar-dropdown').addClass('active');
            $('#sb-ArticleCategory').show();
        }

        if ( $.__config.sidebar.submenu.readRank) {
            $('#sb-topview').parent('li.sidebar-dropdown').addClass('active');
            $('#sb-topview').show();
        }

        if ( $.__config.sidebar.submenu.recommendRank) {
            $('#sb-topDiggPosts').parent('li.sidebar-dropdown').addClass('active');
            $('#sb-topDiggPosts').show();
        }

        if ( $.__config.sidebar.submenu.postsArchive) {
            $('#sb-record').parent('li.sidebar-dropdown').addClass('active');
            $('#sb-record').show();
        }

        if ( $.__config.sidebar.submenu.articleArchive) {
            $('#sb-articlearchive').parent('li.sidebar-dropdown').addClass('active');
            $('#sb-articlearchive').show();
        }

        if ( $.__config.sidebar.submenu.latestComment) {
            $('#sb-recentComments').parent('li.sidebar-dropdown').addClass('active');
            $('#sb-recentComments').show();
        }

        if ( $.__config.sidebar.submenu.customList) {
            $("#customize-sidebar-menu .sidebar-submenu").parent('li.sidebar-dropdown').addClass('active');
            $("#customize-sidebar-menu .sidebar-submenu").show();
        }


    })();



    /**
     * 设置菜单展开收缩
     */
    (() => {
        $('.sidebar-menu a.sidebar-dropdown-box').on('click', function () {
           let obj  = $(this);
           let pObj = obj.parent('li.sidebar-dropdown');
           let lObj = pObj.find('.sidebar-submenu');
           if (lObj.length > 0) {
               if (pObj.hasClass('active')) {
                   // 收起
                   pObj.removeClass('active');
                   lObj.slideUp(300);
               } else {
                   // 展开
                   pObj.addClass('active');
                   lObj.slideDown(300);
               }
               setTimeout(function () {
                   if (mainObj && typeof mainObj.myOptiscrollInstance !== 'undefined') {
                       mainObj.myOptiscrollInstance.update();
                   }
               }, 300);
           }
        });
    })();

    /**
     * 窗口大小变化处理
     */
    (() => {
        $.__event.resize.handle.push(() => {
            setTimeout(function () {
                if ($('body').hasClass('show-menu') && mainObj && typeof mainObj.myOptiscrollInstance !== 'undefined') {
                    mainObj.myOptiscrollInstance.update();
                }
            }, 300);
        });
    })();
}


/***/ }),

/***/ "./src/hooks/afterLoading.js":
/*!***********************************!*\
  !*** ./src/hooks/afterLoading.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ main; }
/* harmony export */ });
/**
 * UPDATES AND DOCS AT: https://github.com/wangyang0210
 * https://www.cnblogs.com/wangyang0210/
 * @author: WangYang, wangyang.0210@foxmail.com
 * @Date 2022-08-25 15:25
 * ----------------------------------------------
 * @describe: loading 结束后
 */

function main() {
    if (typeof $.__config.hooks.afterLoading === "function")
        $.__config.hooks.afterLoading();
}


/***/ }),

/***/ "./src/hooks/beforeLoading.js":
/*!************************************!*\
  !*** ./src/hooks/beforeLoading.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ main; }
/* harmony export */ });
/**
 * UPDATES AND DOCS AT: https://github.com/wangyang0210
 * https://www.cnblogs.com/wangyang0210/
 * @author: WangYang, wangyang.0210@foxmail.com
 * @Date 2022-08-25 15:25
 * ----------------------------------------------
 * @describe: loading 开始前
 */

function main() {
    if (typeof $.__config.hooks.beforeLoading === "function")
        $.__config.hooks.beforeLoading();
}


/***/ }),

/***/ "./src/vendor/rotate/jquery.rotate.min.js":
/*!************************************************!*\
  !*** ./src/vendor/rotate/jquery.rotate.min.js ***!
  \************************************************/
/***/ (function() {

// VERSION: 2.3 LAST UPDATE: 11.07.2013
/* 
 * Licensed under the MIT license: http://www.opensource.org/licenses/mit-license.php
 * 
 * Made by Wilq32, wilq32@gmail.com, Wroclaw, Poland, 01.2009
 * Website: http://code.google.com/p/jqueryrotate/ 
 */
(function(k){for(var d,f,l=document.getElementsByTagName("head")[0].style,h=["transformProperty","WebkitTransform","OTransform","msTransform","MozTransform"],g=0;g<h.length;g++)void 0!==l[h[g]]&&(d=h[g]);d&&(f=d.replace(/[tT]ransform/,"TransformOrigin"),"T"==f[0]&&(f[0]="t"));eval('IE = "v"=="\v"');jQuery.fn.extend({rotate:function(a){if(0!==this.length&&"undefined"!=typeof a){"number"==typeof a&&(a={angle:a});for(var b=[],c=0,d=this.length;c<d;c++){var e=this.get(c);if(e.Wilq32&&e.Wilq32.PhotoEffect)e.Wilq32.PhotoEffect._handleRotation(a);
else{var f=k.extend(!0,{},a),e=(new Wilq32.PhotoEffect(e,f))._rootObj;b.push(k(e))}}return b}},getRotateAngle:function(){for(var a=[],b=0,c=this.length;b<c;b++){var d=this.get(b);d.Wilq32&&d.Wilq32.PhotoEffect&&(a[b]=d.Wilq32.PhotoEffect._angle)}return a},stopRotate:function(){for(var a=0,b=this.length;a<b;a++){var c=this.get(a);c.Wilq32&&c.Wilq32.PhotoEffect&&clearTimeout(c.Wilq32.PhotoEffect._timer)}}});Wilq32=window.Wilq32||{};Wilq32.PhotoEffect=function(){return d?function(a,b){a.Wilq32={PhotoEffect:this};
this._img=this._rootObj=this._eventObj=a;this._handleRotation(b)}:function(a,b){this._img=a;this._onLoadDelegate=[b];this._rootObj=document.createElement("span");this._rootObj.style.display="inline-block";this._rootObj.Wilq32={PhotoEffect:this};a.parentNode.insertBefore(this._rootObj,a);if(a.complete)this._Loader();else{var c=this;jQuery(this._img).bind("load",function(){c._Loader()})}}}();Wilq32.PhotoEffect.prototype={_setupParameters:function(a){this._parameters=this._parameters||{};"number"!==
typeof this._angle&&(this._angle=0);"number"===typeof a.angle&&(this._angle=a.angle);this._parameters.animateTo="number"===typeof a.animateTo?a.animateTo:this._angle;this._parameters.step=a.step||this._parameters.step||null;this._parameters.easing=a.easing||this._parameters.easing||this._defaultEasing;this._parameters.duration=a.duration||this._parameters.duration||1E3;this._parameters.callback=a.callback||this._parameters.callback||this._emptyFunction;this._parameters.center=a.center||this._parameters.center||
["50%","50%"];this._rotationCenterX="string"==typeof this._parameters.center[0]?parseInt(this._parameters.center[0],10)/100*this._imgWidth*this._aspectW:this._parameters.center[0];this._rotationCenterY="string"==typeof this._parameters.center[1]?parseInt(this._parameters.center[1],10)/100*this._imgHeight*this._aspectH:this._parameters.center[1];a.bind&&a.bind!=this._parameters.bind&&this._BindEvents(a.bind)},_emptyFunction:function(){},_defaultEasing:function(a,b,c,d,e){return-d*((b=b/e-1)*b*b*b-
1)+c},_handleRotation:function(a,b){d||this._img.complete||b?(this._setupParameters(a),this._angle==this._parameters.animateTo?this._rotate(this._angle):this._animateStart()):this._onLoadDelegate.push(a)},_BindEvents:function(a){if(a&&this._eventObj){if(this._parameters.bind){var b=this._parameters.bind,c;for(c in b)b.hasOwnProperty(c)&&jQuery(this._eventObj).unbind(c,b[c])}this._parameters.bind=a;for(c in a)a.hasOwnProperty(c)&&jQuery(this._eventObj).bind(c,a[c])}},_Loader:function(){return IE?function(){var a=
this._img.width,b=this._img.height;this._imgWidth=a;this._imgHeight=b;this._img.parentNode.removeChild(this._img);this._vimage=this.createVMLNode("image");this._vimage.src=this._img.src;this._vimage.style.height=b+"px";this._vimage.style.width=a+"px";this._vimage.style.position="absolute";this._vimage.style.top="0px";this._vimage.style.left="0px";this._aspectW=this._aspectH=1;this._container=this.createVMLNode("group");this._container.style.width=a;this._container.style.height=b;this._container.style.position=
"absolute";this._container.style.top="0px";this._container.style.left="0px";this._container.setAttribute("coordsize",a-1+","+(b-1));this._container.appendChild(this._vimage);this._rootObj.appendChild(this._container);this._rootObj.style.position="relative";this._rootObj.style.width=a+"px";this._rootObj.style.height=b+"px";this._rootObj.setAttribute("id",this._img.getAttribute("id"));this._rootObj.className=this._img.className;for(this._eventObj=this._rootObj;a=this._onLoadDelegate.shift();)this._handleRotation(a,
!0)}:function(){this._rootObj.setAttribute("id",this._img.getAttribute("id"));this._rootObj.className=this._img.className;this._imgWidth=this._img.naturalWidth;this._imgHeight=this._img.naturalHeight;var a=Math.sqrt(this._imgHeight*this._imgHeight+this._imgWidth*this._imgWidth);this._width=3*a;this._height=3*a;this._aspectW=this._img.offsetWidth/this._img.naturalWidth;this._aspectH=this._img.offsetHeight/this._img.naturalHeight;this._img.parentNode.removeChild(this._img);this._canvas=document.createElement("canvas");
this._canvas.setAttribute("width",this._width);this._canvas.style.position="relative";this._canvas.style.left=-this._img.height*this._aspectW+"px";this._canvas.style.top=-this._img.width*this._aspectH+"px";this._canvas.Wilq32=this._rootObj.Wilq32;this._rootObj.appendChild(this._canvas);this._rootObj.style.width=this._img.width*this._aspectW+"px";this._rootObj.style.height=this._img.height*this._aspectH+"px";this._eventObj=this._canvas;for(this._cnv=this._canvas.getContext("2d");a=this._onLoadDelegate.shift();)this._handleRotation(a,
!0)}}(),_animateStart:function(){this._timer&&clearTimeout(this._timer);this._animateStartTime=+new Date;this._animateStartAngle=this._angle;this._animate()},_animate:function(){var a=+new Date,b=a-this._animateStartTime>this._parameters.duration;if(b&&!this._parameters.animatedGif)clearTimeout(this._timer);else{if(this._canvas||this._vimage||this._img)a=this._parameters.easing(0,a-this._animateStartTime,this._animateStartAngle,this._parameters.animateTo-this._animateStartAngle,this._parameters.duration),
this._rotate(~~(10*a)/10);this._parameters.step&&this._parameters.step(this._angle);var c=this;this._timer=setTimeout(function(){c._animate.call(c)},10)}this._parameters.callback&&b&&(this._angle=this._parameters.animateTo,this._rotate(this._angle),this._parameters.callback.call(this._rootObj))},_rotate:function(){var a=Math.PI/180;return IE?function(a){this._angle=a;this._container.style.rotation=a%360+"deg";this._vimage.style.top=-(this._rotationCenterY-this._imgHeight/2)+"px";this._vimage.style.left=
-(this._rotationCenterX-this._imgWidth/2)+"px";this._container.style.top=this._rotationCenterY-this._imgHeight/2+"px";this._container.style.left=this._rotationCenterX-this._imgWidth/2+"px"}:d?function(a){this._angle=a;this._img.style[d]="rotate("+a%360+"deg)";this._img.style[f]=this._parameters.center.join(" ")}:function(b){this._angle=b;b=b%360*a;this._canvas.width=this._width;this._canvas.height=this._height;this._cnv.translate(this._imgWidth*this._aspectW,this._imgHeight*this._aspectH);this._cnv.translate(this._rotationCenterX,
this._rotationCenterY);this._cnv.rotate(b);this._cnv.translate(-this._rotationCenterX,-this._rotationCenterY);this._cnv.scale(this._aspectW,this._aspectH);this._cnv.drawImage(this._img,0,0)}}()};IE&&(Wilq32.PhotoEffect.prototype.createVMLNode=function(){document.createStyleSheet().addRule(".rvml","behavior:url(#default#VML)");try{return!document.namespaces.rvml&&document.namespaces.add("rvml","urn:schemas-microsoft-com:vml"),function(a){return document.createElement("<rvml:"+a+' class="rvml">')}}catch(a){return function(a){return document.createElement("<"+
a+' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')}}}())})(jQuery);


/***/ })

}]);
//# sourceMappingURL=com-before.2c36d570.js.map