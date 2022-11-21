/**
 * UPDATES AND DOCS AT: https://github.com/wangyang0210
 * https://www.cnblogs.com/wangyang0210/
 * @author: WangYang, wangyang.0210@foxmail.com
 * @Date 2022-09-11 22:28
 * ----------------------------------------------
 * @describe: 背景丝带效果
 */


class Point {
    constructor(x, y) {
        this.x = 0;
        this.y = 0;
        this.set(x, y);
    }


    set(x, y) {
        this.x = x || 0;
        this.y = y || 0;
    }

    copy(point) {
        this.x = point.x || 0;
        this.y = point.y || 0;
        return this;
    }

    add (x, y) {
        this.x += x || 0;
        this.y += y || 0;
        return this;
    }

    subtract(x, y) {
        this.x -= x || 0;
        this.y -= y || 0;
        return this;
    }

    flipY() {
        this.y *= -1;
        return this;
    }

}


class Ribbons {
    _w = window;
    _b = document.body;
    _d = document.documentElement;

    constructor(options) {
        this._canvas = null;
        this._context = null;
        this._width = 0;
        this._height = 0;
        this._scroll = 0;
        this._ribbons = [];
        this._options = {
            // ribbon color HSL saturation amount
            colorSaturation: options.colorSaturation || "80%",
            // ribbon color HSL brightness amount
            colorBrightness: options.colorBrightness || "60%",
            // ribbon color opacity amount
            colorAlpha: options.colorAlpha || 0.65,
            // how fast to cycle through colors in the HSL color space
            colorCycleSpeed: options.colorCycleSpeed || 6,
            // where to start from on the Y axis on each side (top|min, middle|center, bottom|max, random)
            verticalPosition: options.verticalPosition || "center",
            // how fast to get to the other side of the screen
            horizontalSpeed: options.horizontalSpeed || 150,
            // how many ribbons to keep on screen at any given time
            ribbonCount: options.ribbonCount || 3,
            // add stroke along with ribbon fill colors
            strokeSize: options.strokeSize || 0,
            // move ribbons vertically by a factor on page scroll
            parallaxAmount: options.parallaxAmount || -0.5,
            // add animation effect to each ribbon section over time
            animateSections: options.animateSections || true
        };

        this._onDraw = this._onDraw.bind(this);
        this._onResize = this._onResize.bind(this);
        this._onScroll = this._onScroll.bind(this);
        this.init();
    }

    random() {
        if (arguments.length === 1) {
            if (Array.isArray(arguments[0])) {
                let index = Math.round(this.random(0, arguments[0].length - 1));
                return arguments[0][index];
            }
            return this.random(0, arguments[0]); // assume numeric
        }
        if (arguments.length === 2) {
            return Math.random() * (arguments[1] - arguments[0]) + arguments[0];
        }

        return 0;
    }

    // screen helper
    screenInfo(e) {
        let width = Math.max(0, this._w.innerWidth || this._d.clientWidth || this._b.clientWidth || 0),
            height = Math.max(0, this._w.innerHeight || this._d.clientHeight || this._b.clientHeight || 0),
            scrollx = Math.max(0, this._w.pageXOffset || this._d.scrollLeft || this._b.scrollLeft || 0) - (this._d.clientLeft || 0),
            scrolly = Math.max(0, this._w.pageYOffset || this._d.scrollTop || this._b.scrollTop || 0) - (this._d.clientTop || 0);

        return {
            width: width,
            height: height,
            ratio: width / height,
            centerx: width / 2,
            centery: height / 2,
            scrollx: scrollx,
            scrolly: scrolly
        };

    }

    init () {
        try {
            this._canvas = document.createElement("canvas");
            this._canvas.style["display"] = "block";
            this._canvas.style["position"] = "fixed";
            this._canvas.style["margin"] = "0";
            this._canvas.style["padding"] = "0";
            this._canvas.style["border"] = "0";
            this._canvas.style["outline"] = "0";
            this._canvas.style["left"] = "0";
            this._canvas.style["top"] = "0";
            this._canvas.style["width"] = "100%";
            this._canvas.style["height"] = "100%";
            this._canvas.style["z-index"] = "-1";
            this._canvas.id = "bgCanvas";
            this._onResize();

            this._context = this._canvas.getContext("2d");
            this._context.clearRect(0, 0, this._width, this._height);
            this._context.globalAlpha = this._options.colorAlpha;

            window.addEventListener("resize", this._onResize);
            window.addEventListener("scroll", this._onScroll);
            document.body.appendChild(this._canvas);
        } catch (e) {
            return;
        }
        this._onDraw();
    }

    addRibbon() {

        let dir = Math.round(this.random(1, 9)) > 5 ? "right" : "left",
            stop = 1000,
            hide = 200,
            min = 0 - hide,
            max = this._width + hide,
            movex = 0,
            movey = 0,
            startx = dir === "right" ? min : max,
            starty = Math.round(this.random(0, this._height));

        if (/^(top|min)$/i.test(this._options.verticalPosition)) starty = 0 + hide;
        if (/^(middle|center)$/i.test(this._options.verticalPosition)) starty = this._height / 2;
        if (/^(bottom|max)$/i.test(this._options.verticalPosition)) starty = this._height - hide;

        let ribbon = [],
            point1 = new Point(startx, starty),
            point2 = new Point(startx, starty),
            point3 = null,
            color = Math.round(this.random(0, 360)),
            delay = 0;

        while (true) {

            if (stop <= 0) break;
            stop--;

            movex = Math.round((Math.random() * 1 - 0.2) * this._options.horizontalSpeed);
            movey = Math.round((Math.random() * 1 - 0.5) * (this._height * 0.25));

            point3 = new Point();
            point3.copy(point2);

            if (dir === "right") {
                point3.add(movex, movey);
                if (point2.x >= max) break;
            }

            if (dir === "left") {
                point3.subtract(movex, movey);
                if (point2.x <= min) break;
            }

            ribbon.push({
                point1: new Point(point1.x, point1.y),
                point2: new Point(point2.x, point2.y),
                point3: point3,
                color: color,
                delay: delay,
                dir: dir,
                alpha: 0,
                phase: 0
            });

            point1.copy(point2);
            point2.copy(point3);

            delay += 4;
            color += this._options.colorCycleSpeed;
        }

        this._ribbons.push(ribbon);
    }

    _drawRibbonSection(section) {
        if (section) {
            if (section.phase >= 1 && section.alpha <= 0) return true;

            if (section.delay <= 0) {
                section.phase += 0.02;
                section.alpha = Math.sin(section.phase) * 1;
                section.alpha = section.alpha <= 0 ? 0 : section.alpha;
                section.alpha = section.alpha >= 1 ? 1 : section.alpha;

                if (this._options.animateSections) {
                    let mod = Math.sin(1 + section.phase * Math.PI / 2) * 0.1;

                    if (section.dir === "right") {
                        section.point1.add(mod, 0);
                        section.point2.add(mod, 0);
                        section.point3.add(mod, 0);
                    } else {
                        section.point1.subtract(mod, 0);
                        section.point2.subtract(mod, 0);
                        section.point3.subtract(mod, 0);
                    }

                    section.point1.add(0, mod);
                    section.point2.add(0, mod);
                    section.point3.add(0, mod);
                }
            } else {
                section.delay -= 0.5;
            }

            let s = this._options.colorSaturation,
                l = this._options.colorBrightness,
                c = "hsla(" + section.color + ", " + s + ", " + l + ", " + section.alpha + " )";

            this._context.save();

            if (this._options.parallaxAmount !== 0) this._context.translate(0, this._scroll * this._options.parallaxAmount);
            this._context.beginPath();
            this._context.moveTo(section.point1.x, section.point1.y);
            this._context.lineTo(section.point2.x, section.point2.y);
            this._context.lineTo(section.point3.x, section.point3.y);
            this._context.fillStyle = c;
            this._context.fill();

            if (this._options.strokeSize > 0) {
                this._context.lineWidth = this._options.strokeSize;
                this._context.strokeStyle = c;
                this._context.lineCap = "round";
                this._context.stroke();
            }

            this._context.restore();
        }
        return false;
    }

    _onDraw() {

        for (let i = 0, t = this._ribbons.length; i < t; ++i) {
            if (!this._ribbons[i]) this._ribbons.splice(i, 1);
        }

        this._context.clearRect(0, 0, this._width, this._height);

        for (let a = 0; a < this._ribbons.length; ++a) {
            let ribbon = this._ribbons[a],
                numSections = ribbon.length,
                numDone = 0;
            for (let b = 0; b < numSections; ++b) {
                if (this._drawRibbonSection(ribbon[b])) numDone++; // section done
            }
            if (numDone >= numSections) this._ribbons[a] = null;
        }

        if (this._ribbons.length < this._options.ribbonCount) this.addRibbon();

        requestAnimationFrame(this._onDraw);
    }

    _onResize(e) {
        let screen = this.screenInfo(e);
        this._width = screen.width;
        this._height = screen.height;

        if (this._canvas) {
            this._canvas.width = this._width;
            this._canvas.height = this._height;
        }

        if (this._canvas && this._context) this._context.globalAlpha = this._options.colorAlpha;
    }

    _onScroll(e) {
        let screen = this.screenInfo(e);
        this._scroll = screen.scrolly;
    }
}

export default function main(options) {
    new Ribbons(options)
}
