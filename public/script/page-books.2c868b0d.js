"use strict";
(self["webpackChunkcnblogs_theme"] = self["webpackChunkcnblogs_theme"] || []).push([["page-books"],{

/***/ "./src/template/books.html":
/*!*********************************!*\
  !*** ./src/template/books.html ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// Module
var code = "<div class=\"book-card\"> <div class=\"content-wrapper\"> <img src=\"##cover##\" alt=\"\" class=\"book-card-img\"> <div class=\"card-content\"> <div class=\"book-name\" title=\"##name##\">##name##</div> <div class=\"rate\"> <fieldset class=\"rating book-rate\"> ##scoreHtml## </fieldset> <span class=\"book-voters card-vote\"> ##infoHtml## </span> </div> </div> </div> <div class=\"book-by\"> <i class=\"iconfont icon-book\" title=\"阅读时间\" style=\"display:##readDateStyle##\"></i> ##readDate## <i class=\"iconfont icon-schedule\" title=\"阅读进度\" style=\"display:##readPercentageStyle##\"></i> ##readPercentage## </div> </div>";
// Exports
/* harmony default export */ __webpack_exports__["default"] = (code);

/***/ }),

/***/ "./src/style/books.css":
/*!*****************************!*\
  !*** ./src/style/books.css ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/page/books.js":
/*!***************************!*\
  !*** ./src/page/books.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ main; }
/* harmony export */ });
/* harmony import */ var _style_books_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style/books.css */ "./src/style/books.css");
/* harmony import */ var _template_books_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../template/books.html */ "./src/template/books.html");
/* harmony import */ var _components_articleDirectory_articleDirectory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/articleDirectory/articleDirectory */ "./src/components/articleDirectory/articleDirectory.js");
/* harmony import */ var _common_com_article__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/com-article */ "./src/page/common/com-article.js");
/**
 * UPDATES AND DOCS AT: https://github.com/wangyang0210
 * https://www.cnblogs.com/wangyang0210/
 * @author: WangYang, wangyang.0210@foxmail.com
 * @Date 2022-08-25 15:26
 * ----------------------------------------------
 * @describe: 书单页处理
 */





function main() {
    /**
     * 文章页公共处理
     */
    (() => {
        (0,_common_com_article__WEBPACK_IMPORTED_MODULE_3__["default"])();
    })();

    /**
     * 书单页处理
     */
    (() => {
        if ( $.__config.bookList.length) {
            __webpack_require__.e(/*! import() | gf-blink */ "gf-blink").then(__webpack_require__.bind(__webpack_require__, /*! ../style/gf-blink.css */ "./src/style/gf-blink.css"));

            let postBody = $('#cnblogs_post_body'),
                html = '';
            $.each( $.__config.bookList, (i) => {
                let list = $.__config.bookList[i];
                if (list.title) html += '<h1 class=`iconfont ${list.icon}`>' + list.title + '</h1>';

                html += '<div class="book-cards">';
                $.each(list.books, (j) => {
                    let cardHtml = _template_books_html__WEBPACK_IMPORTED_MODULE_1__["default"], books = list.books[j];

                    // 评星
                    let scoreHtml = '';
                    if (typeof books.score !== 'undefined' && books.score > 0) {
                        scoreHtml += '<i class="iconfont icon-star-full"></i>'.repeat(parseInt(books.score));
                        if (books.score > parseInt(books.score)) {
                            scoreHtml += '<i class="iconfont icon-star-half"></i>';
                        }
                        scoreHtml += '<i class="iconfont icon-icon-star"></i>'.repeat(parseInt(5 - books.score));
                    } else {
                        scoreHtml += '<i class="iconfont icon-icon-star"></i>'.repeat(5);
                    }

                    // 图书信息
                    let infoHtml = '';
                    if (typeof books.formerName !== 'undefined' && books.formerName)
                        infoHtml += '<span title="' + books.formerName + '">原　名：' + books.formerName + '</span><br>';

                    if (typeof books.author !== 'undefined' && books.author)
                        infoHtml += '<span title="' + books.author + '">作　者：' + books.author + '</span><br>';

                    if (typeof books.translator !== 'undefined' && books.translator)
                        infoHtml += '<span title="' + books.translator + '">译　者：' + books.translator + '</span><br>';

                    if (typeof books.press !== 'undefined' && books.press)
                        infoHtml += '<span title="' + books.press + '">出版社：' + books.press + '</span><br>';

                    if (typeof books.year !== 'undefined' && books.year)
                        infoHtml += '<span title="' + books.year + '">出版年：' + books.year + '</span>';

                    // 阅读时间 & 进度
                    let readDate = typeof books.readDate !== 'undefined' ? books.readDate : '';
                    let readDateStyle = readDate ? 'initial;' : 'none';

                    let readPercentage = typeof books.readPercentage !== 'undefined' ? books.readPercentage : '';
                    let readPercentageStyle = readPercentage ? 'initial;' : 'none';

                    // 处理模版
                    cardHtml = $.__tools.batchTempReplacement(cardHtml, [
                        ['cover', typeof books.cover !== 'undefined' ? books.cover : ''],
                        ['name', typeof books.name !== 'undefined' ? books.name : ''],
                        ['readDate', readDate],
                        ['readDateStyle', readDateStyle],
                        ['readPercentage', readPercentage],
                        ['readPercentageStyle', readPercentageStyle],
                        ['scoreHtml', scoreHtml],
                        ['infoHtml', infoHtml],
                    ]);
                    html += cardHtml;
                });
                html += '</div>';
            });

            // 插入模版
            let articleSuffixFlg = $('.articleSuffix-flg');
            articleSuffixFlg.length ? articleSuffixFlg.before(html) : postBody.append(html);
        }
    })();

    /**
     * 设置文章目录
     */
    (() => {
        (0,_components_articleDirectory_articleDirectory__WEBPACK_IMPORTED_MODULE_2__["default"])();
    })();

}


/***/ })

}]);
//# sourceMappingURL=page-books.2c868b0d.js.map