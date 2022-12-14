(self["webpackChunkcnblogs_theme"] = self["webpackChunkcnblogs_theme"] || []).push([["circle-magic"],{

/***/ "./src/vendor/circleMagic/circleMagic.js":
/*!***********************************************!*\
  !*** ./src/vendor/circleMagic/circleMagic.js ***!
  \***********************************************/
/***/ (function() {

;(function ($) {
    $.fn.circleMagic = function (options) {

        let width, height, canvas, ctx, animateHeader = true;
        let circles = [];

        let settings = $.extend({
            color: 'rgba(255,255,255,.5)',
            radius: 10,
            density: 0.3,
            clearOffset: 0.2
        }, options);

        let container = this['0'];
        initContainer();
        addListeners();

        function initContainer() {
            width = container.offsetWidth;
            height = container.offsetHeight;

            initCanvas();
            canvas = document.getElementById('homeTopCanvas');
            canvas.width = width;
            canvas.height = height;
            canvas.style.position = 'absolute';
            canvas.style.left = '0';
            canvas.style.bottom = '0';
            canvas.style.zIndex = '1';
            ctx = canvas.getContext('2d');

            for (let x = 0; x < width * settings.density; x++) {
                let c = new Circle();
                circles.push(c);
            }
            animate();
        }

        function initCanvas() {
            let canvasElement = document.createElement('canvas');
            canvasElement.id = 'homeTopCanvas';
            container.appendChild(canvasElement);
            canvasElement.parentElement.style.overflow = 'hidden';

        }

        function addListeners() {
            window.addEventListener('scroll', scrollCheck, false);
            window.addEventListener('resize', resize, false);
        }

        function scrollCheck() {
            document.body.scrollTop > height ?  animateHeader = false :  animateHeader = true;
        }

        function resize() {
            width = container.clientWidth;
            height = container.clientHeight;
            container.height = height + 'px';
            canvas.width = width;
            canvas.height = height;
        }

        function animate() {
            if (animateHeader) {
                ctx.clearRect(0, 0, width, height);
                for (let i in circles) {
                    circles[i].draw();
                }
            }
            requestAnimationFrame(animate);
        }

        function randomColor() {
            let r = Math.floor(Math.random() * 255);
            let g = Math.floor(Math.random() * 255);
            let b = Math.floor(Math.random() * 255);
            let alpha = Math.random().toPrecision(2);
            return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + ')';
        }

        function Circle() {
            let that = this;
            (function () {
                that.pos = {};
                init();
            })();

            function init() {
                that.pos.x = Math.random() * width;
                that.pos.y = height + Math.random() * 100;
                that.alpha = 0.1 + Math.random() * settings.clearOffset;
                that.scale = 0.1 + Math.random() * 0.3;
                that.speed = Math.random();
                settings.color === 'random' ?  that.color = randomColor() :   that.color = settings.color;
            }

            this.draw = function () {
                if (that.alpha <= 0)  init();
                that.pos.y -= that.speed;
                that.alpha -= 0.0005;
                ctx.beginPath();
                ctx.arc(that.pos.x, that.pos.y, that.scale * settings.radius, 0, 2 * Math.PI, false);
                ctx.fillStyle = that.color;
                ctx.fill();
                ctx.closePath();
            };
        }
    }
})(jQuery);


/***/ })

}]);
//# sourceMappingURL=circle-magic.a29b550a.js.map