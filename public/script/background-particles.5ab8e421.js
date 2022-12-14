"use strict";
(self["webpackChunkcnblogs_theme"] = self["webpackChunkcnblogs_theme"] || []).push([["background-particles"],{

/***/ "./src/template/particles.html":
/*!*************************************!*\
  !*** ./src/template/particles.html ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// Module
var code = "<div id=\"particles\"> <div class=\"particles-layer particles-layer--1\"></div> <div class=\"particles-layer particles-layer--2\"></div> <div class=\"particles-layer particles-layer--3\"></div> </div>";
// Exports
/* harmony default export */ __webpack_exports__["default"] = (code);

/***/ }),

/***/ "./src/style/particles.css":
/*!*********************************!*\
  !*** ./src/style/particles.css ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/background/particles.js":
/*!************************************************!*\
  !*** ./src/components/background/particles.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ main; }
/* harmony export */ });
/* harmony import */ var _template_particles_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../template/particles.html */ "./src/template/particles.html");
/* harmony import */ var gsap_dist_gsap_min__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap/dist/gsap.min */ "./node_modules/gsap/dist/gsap.min.js");
/* harmony import */ var gsap_dist_gsap_min__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gsap_dist_gsap_min__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_particles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../style/particles.css */ "./src/style/particles.css");
/**
 * UPDATES AND DOCS AT: https://github.com/wangyang0210
 * https://www.cnblogs.com/wangyang0210/
 * @author: WangYang, wangyang.0210@foxmail.com
 * @Date 2022-08-25 15:23
 * ----------------------------------------------
 * @describe: 背景鼠标滚动动画
 */




function main(options) {
    $('#footer').after(_template_particles_html__WEBPACK_IMPORTED_MODULE_0__["default"])
    let wrapper = document.getElementById("particles"),
        ela  = wrapper.querySelector(".particles-layer--1"),
        elb  = wrapper.querySelector(".particles-layer--2"),
        elc  = wrapper.querySelector(".particles-layer--3"),
        particlesList = [
            { el: ela, opacity: 0.07, speed: 0.06 },
            { el: elb, opacity: 0.07, speed: 0.04 },
            { el: elc, opacity: 0.07, speed: 0.05 },
        ];
    particlesList.forEach(l => { gsap_dist_gsap_min__WEBPACK_IMPORTED_MODULE_2__.gsap.to(l.el , .6, {delay: Math.random(), opacity: l.opacity}) })
    document.addEventListener("mousemove", particlesMousemove)
    function particlesMousemove(t) {
        let e = { x: window.innerWidth / 2, y: window.innerHeight / 2 },
            n = { x: t.clientX || t.pageX, y: t.clientY || t.pageY },
            r = { x: e.x - n.x, y: e.y - n.y }
        particlesList.forEach(l => { gsap_dist_gsap_min__WEBPACK_IMPORTED_MODULE_2__.gsap.to(l.el, 1, {x: r.x * l.speed, y: r.y * l.speed}) })
    }
}


/***/ })

}]);
//# sourceMappingURL=background-particles.5ab8e421.js.map