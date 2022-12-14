"use strict";
(self["webpackChunkcnblogs_theme"] = self["webpackChunkcnblogs_theme"] || []).push([["page-links"],{

/***/ "./src/template/links.html":
/*!*********************************!*\
  !*** ./src/template/links.html ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// Module
var code = "<div class=\"links-item\"> <img src=\"##avatar##\"> <p class=\"links-info\"> <span class=\"links-info-name\">##name##</span> <span class=\"links-info-text\">##introduction##</span> </p> <div class=\"links-icon\"> <a href=\"##url##\" target=\"_blank\" title=\"访问链接\"><i class=\"iconfont ##icon##\"></i></a> </div> </div>";
// Exports
/* harmony default export */ __webpack_exports__["default"] = (code);

/***/ }),

/***/ "./src/style/links.css":
/*!*****************************!*\
  !*** ./src/style/links.css ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/page/links.js":
/*!***************************!*\
  !*** ./src/page/links.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ main; }
/* harmony export */ });
/* harmony import */ var _common_com_article__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common/com-article */ "./src/page/common/com-article.js");
/* harmony import */ var _style_links_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../style/links.css */ "./src/style/links.css");
/* harmony import */ var _template_links_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../template/links.html */ "./src/template/links.html");
/* harmony import */ var _components_articleDirectory_articleDirectory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/articleDirectory/articleDirectory */ "./src/components/articleDirectory/articleDirectory.js");
/**
 * UPDATES AND DOCS AT: https://github.com/wangyang0210
 * https://www.cnblogs.com/wangyang0210/
 * @author: WangYang, wangyang.0210@foxmail.com
 * @Date 2022-08-25 15:27
 * ----------------------------------------------
 * @describe: 友链页处理
 */





function main() {
    /**
     * 文章页公共处理
     */
    (() => {
        (0,_common_com_article__WEBPACK_IMPORTED_MODULE_0__["default"])();
    })();

    /**
     * 添加友链
     */
    (() => {
        if ( $.__config.links.page.length) {

            __webpack_require__.e(/*! import() | gf-blink */ "gf-blink").then(__webpack_require__.bind(__webpack_require__, /*! ../style/gf-blink.css */ "./src/style/gf-blink.css"));

            let postBody = $('#cnblogs_post_body'),
                html = '';

            $.each( $.__config.links.page, (i) => {
                let list = $.__config.links.page[i];
                if (list.title) html += '<h1 class="iconfont ' + list.icon + '" style="'+ list.style +'"> ' + list.title + '</h1>';

                html += '<div id="links-box">';

                $.each(list.links, (j) => {
                    let linksHtml = _template_links_html__WEBPACK_IMPORTED_MODULE_2__["default"],  data = list.links[j];

                    // 处理模版
                    linksHtml =  $.__tools.batchTempReplacement(linksHtml, [
                        ['avatar', typeof data.avatar !== 'undefined' ? data.avatar : ''],
                        ['name', typeof data.name !== 'undefined' ? data.name : ''],
                        ['introduction', typeof data.introduction !== 'undefined' ? data.introduction : ''],
                        ['url', typeof data.url !== 'undefined' ? data.url : ''],
                        ['icon', j % 3 === 0 ? 'icon-zhifeiji': (j % 3 === 1 ? 'icon-like-fill' : 'icon-flashlight-fill')]
                    ]);
                    html += linksHtml;
                });

                html += '</div>';
            })

            // 插入模版
            let articleSuffixFlg = $('.articleSuffix-flg');
            articleSuffixFlg.length ? articleSuffixFlg.before(html) : postBody.append(html);
        }
    })();

    /**
     * 设置文章目录
     */
    (() => {
        (0,_components_articleDirectory_articleDirectory__WEBPACK_IMPORTED_MODULE_3__["default"])();
    })();
}


/***/ })

}]);
//# sourceMappingURL=page-links.524458af.js.map