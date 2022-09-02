/**
 * UPDATES AND DOCS AT: https://github.com/wangyang0210
 * https://www.cnblogs.com/wangyang0210/
 * @author: WangYang, wangyang.0210@foxmail.com
 * @Date 2022-09-03 01:18
 * ----------------------------------------------
 * @describe: 可以自定义下落物品的背景特效
 */

export default function main(_) {
    let stop, SakuraList;
    let img = new Image();
    img.src = _.__config.background.season.img;
    let size = _.__config.background.season.size;

    function Sakura(x, y, s, r, fn) {
        this.x = x;
        this.y = y;
        this.s = s;
        this.r = r;
        this.fn = fn;
    }

    Sakura.prototype.draw = function (cxt) {
        cxt.save();
        cxt.translate(this.x, this.y);
        cxt.rotate(this.r);
        cxt.drawImage(img, 0, 0,  size * this.s, size * this.s)
        cxt.restore();
    }
    Sakura.prototype.update = function () {
        this.x = this.fn.x(this.x, this.y);
        this.y = this.fn.y(this.y, this.y);
        this.r = this.fn.r(this.r);
        if (this.x > window.innerWidth || this.x < 0 || this.y > window.innerHeight || this.y < 0) {
            this.r = getRandom('fnr');
            if (Math.random() > 0.4) {
                this.x = getRandom('x');
                this.y = 0;
                this.s = getRandom('s');
                this.r = getRandom('r');
            } else {
                this.x = window.innerWidth;
                this.y = getRandom('y');
                this.s = getRandom('s');
                this.r = getRandom('r');
            }
        }
    }

    SakuraList = function () {
        this.list = [];
    }
    SakuraList.prototype.push = function (sakura) {
        this.list.push(sakura);
    }
    SakuraList.prototype.update = function () {
        for (let i = 0, len = this.list.length; i < len; i++) {
            this.list[i].update();
        }
    }
    SakuraList.prototype.draw = function (cxt) {
        for (let i = 0, len = this.list.length; i < len; i++) {
            this.list[i].draw(cxt);
        }
    }
    SakuraList.prototype.get = function (i) {
        return this.list[i];
    }
    SakuraList.prototype.size = function () {
        return this.list.length;
    }

    function getRandom(option) {
        let ret, random;
        switch (option) {
            case 'x':
                ret = Math.random() * window.innerWidth;
                break;
            case 'y':
                ret = Math.random() * window.innerHeight;
                break;
            case 's':
                ret = Math.random();
                break;
            case 'r':
                ret = Math.random() * 6;
                break;
            case 'fnx':
                random = -0.5 + Math.random();
                ret = function (x, y) {
                    return x + 0.5 * random - 1.7;
                };
                break;
            case 'fny':
                random = 1.5 + Math.random() * 0.7
                ret = function (x, y) {
                    return y + random;
                };
                break;
            case 'fnr':
                random = Math.random() * 0.03;
                ret = function (r) {
                    return r + random;
                };
                break;
        }
        return ret;
    }

    function startSakura() {
        requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame;
        let canvas = document.createElement('canvas'), cxt;
        canvas.height = window.innerHeight;
        canvas.width = window.innerWidth;
        canvas.setAttribute('style', 'position: fixed;left: 0;top: 0;pointer-events: none;');
        canvas.setAttribute('id', 'canvas_sakura');
        document.getElementsByTagName('body')[0].appendChild(canvas);
        cxt = canvas.getContext('2d');
        let sakuraList = new SakuraList();
        for (let i = 0; i < 50; i++) {
            let sakura, randomX, randomY, randomS, randomR, randomFnx, randomFny, randomFnR;
            randomX = getRandom('x');
            randomY = getRandom('y');
            randomR = getRandom('r');
            randomS = getRandom('s');
            randomFnx = getRandom('fnx');
            randomFny = getRandom('fny');
            randomFnR = getRandom('fnr');
            sakura = new Sakura(randomX, randomY, randomS, randomR, {
                x: randomFnx,
                y: randomFny,
                r: randomFnR
            });
            sakura.draw(cxt);
            sakuraList.push(sakura);
        }
        stop = requestAnimationFrame(function () {
            cxt.clearRect(0, 0, canvas.width, canvas.height);
            sakuraList.update();
            sakuraList.draw(cxt);
            stop = requestAnimationFrame(arguments.callee);
        })
    }

    img.onload = function () {
        startSakura();
    }
}
