"use strict";
(self["webpackChunkcnblogs_theme"] = self["webpackChunkcnblogs_theme"] || []).push([["page-home"],{

/***/ "./src/components/postMeta/postMeta.js":
/*!*********************************************!*\
  !*** ./src/components/postMeta/postMeta.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ main; }
/* harmony export */ });
/**
 * UPDATES AND DOCS AT: https://github.com/wangyang0210
 * https://www.cnblogs.com/wangyang0210/
 * @author: WangYang, wangyang.0210@foxmail.com
 * @Date 2022-08-25 15:23
 * ----------------------------------------------
 * @describe: 文章信息
 */

function main(postDescText) {
    let getPostMetaInfo = (postDescInfo) => {
       let postDescRep = postDescInfo.replace(/[\r\n]/g, '');

        let postMetaRex  = /.*posted\s*@\s*([0-9\-:\s]{16}).*阅读\s*\((\d*)\).*评论\s*\((\d*)\).*推荐\s*\((\d*)\).*/,
            postMetaRex2 = /.*posted\s*@\s*([0-9\-:\s]{16}).*阅读\s*\((\d*)\).*评论\s*\((\d*)\).*/,
            postMetaRex3 = /.*posted\s*@\s*([0-9\-:\s]{16}).*/,
            diggCount = $('#digg_count'),
            info = postDescRep.match(postMetaRex)
                || postDescRep.match(postMetaRex2)
                || postDescRep.match(postMetaRex3),
            date = typeof info[1] === 'undefined' ? '1970-01-01 00:00' : info[1],
            vnum = typeof info[2] === 'undefined' ? '0' : info[2],
            cnum = typeof info[3] === 'undefined' ? '0' : info[3],
            tnum = typeof info[4] === 'undefined' ? (diggCount.length ? diggCount.text() : '0') : info[4];

        return {
            date: date,
            vnum: vnum,
            cnum: cnum,
            tnum: tnum,
        };
    };

    return getPostMetaInfo(postDescText);
}


/***/ }),

/***/ "./src/page/home.js":
/*!**************************!*\
  !*** ./src/page/home.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ main; }
/* harmony export */ });
/* harmony import */ var _components_postMeta_postMeta__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/postMeta/postMeta */ "./src/components/postMeta/postMeta.js");
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/request */ "./src/utils/request.js");
/**
 * UPDATES AND DOCS AT: https://github.com/wangyang0210
 * https://www.cnblogs.com/wangyang0210/
 * @author: WangYang, wangyang.0210@foxmail.com
 * @Date 2022-08-25 15:27
 * ----------------------------------------------
 * @describe: 主页处理
 */



function main() {

    /**
     * 设置主页标语
     */
    (() => {

        $('#homeTopTitle span').text( $.__config.info.name);

        /**
         * 博客名字动效
         */
        if ( $.__config.animate.infoName.enable) {
            $('#homeTopTitle span').hover(function () {
                    $('#homeTopTitle span').css("animation", "pageTitleText 2s infinite")
                    $('#homeTopTitle span').css("-webkit-animation", "pageTitleText 1s infinite")
                }, function () {
                    $('#homeTopTitle span').css("animation", "none")
                    $('#homeTopTitle span').css("-webkit-animation", "none")
                }
            );
        }

            // 判断用户是否自定义了设置
        let configTitle = $.__config.banner.home.title,
            hitokoto = $('#hitokoto');

        if ($.isArray(configTitle) && configTitle.length > 0) {
            let listIndex = $.__tools.randomNum(0, configTitle.length - 1);
            hitokoto.html(configTitle[listIndex]).css('display', '-webkit-box');
            $.__tools.setDomHomePosition();
            return true;
        }

        if (typeof configTitle === "string" && configTitle !== "") {
            hitokoto.html(configTitle).css('display', '-webkit-box');
            $.__tools.setDomHomePosition();
            return true;
        }

        let topTitleList = [ '当你凝视深渊时，深渊也在凝视着你。', '有的人25岁就死了，只是到75岁才埋葬'];

        function topTitleContent(r) {
            if (r?.status === "success") {
                let note = r?.note || r.data.content;
                let content = r?.content || `《${r.data.origin.title}》 - ${r.data.origin.dynasty} - ${r.data.origin.author}`;
                hitokoto.html(note).css('display', '-webkit-box');
                $('#hitokotoAuthor').text(content).show();
            } else {
                let listIndex = $.__tools.randomNum(0, topTitleList.length - 1);
                hitokoto.html(topTitleList[listIndex]).css('display', '-webkit-box');
            }
            $.__tools.setDomHomePosition();
        }

        if ( $.__config.banner.home.titleSource === 'one') (0,_utils_request__WEBPACK_IMPORTED_MODULE_1__.request)('https://api.wangyangyang.vip/').then(r =>  topTitleContent(r))
        if ( $.__config.banner.home.titleSource === 'jinrishici')  (0,_utils_request__WEBPACK_IMPORTED_MODULE_1__.request)('https://v2.jinrishici.com/one.json').then(r =>  topTitleContent(r))
    })();

    /**
     * 头图点击滚动到内容位置
     */
    (() => {
        $('.scroll-down').click(function () {
            let endScroll;
            endScroll = $('#home').offset().top + 10; $.__tools.actScroll(endScroll, 500);})
    })();

    /**
     * 设置主页文章信息样式
     */
    (() => {
        let read = $('#main .c_b_p_desc_readmore'), titleList = $('#main .postTitle');
        read.text('阅读全文 »');
        $.each(titleList, (i) => {
            let title = $(titleList[i]),
                titleText = title.text(),
                postDescText = title.nextAll('.postDesc:eq(0)').text();
            title.after(postMetaHtml(postDescText));
            if (/\[置顶\]/.test(titleText)) title.append('<span class="postSticky">置顶</span>');
            title.find('a').text(titleText.replace('[置顶]', ''));
        });

        titleList = $('#main .entrylistPosttitle');
        $.each(titleList, (i) => {
            let title = $(titleList[i]),
                postDescText = title.nextAll('.entrylistItemPostDesc:eq(0)').text();
            title.after(postMetaHtml(postDescText));
        });

        function postMetaHtml(postDescText) {
            let info = (0,_components_postMeta_postMeta__WEBPACK_IMPORTED_MODULE_0__["default"])(postDescText);
            return '<span class="postMeta"><i class="iconfont icon-schedule"></i>发表于 ' + info.date + '' +
                '<i class="iconfont icon-browse"></i>阅读：' + info.vnum + '' +
                '<i class="iconfont icon-interactive"></i>评论：' + info.cnum + '' +
                '<i class="iconfont icon-hot"></i>推荐：' + info.tnum + '' +
                '</span>';
        }
    })();

    /**
     * 设置摘要文章
     */
    (() => {
        let desc = $('.c_b_p_desc');
        $.each(desc, (i) => {
            let obj = $(desc[i]), img = obj.find('img.desc_img');
            if (img.length > 0) {
                let src = img.attr('src');
                img.hide();
                obj.css('width', '60%');
                obj.parent('div').css('min-height', '150px');
                let html = '<div class="c_b_p_desc_img"><div style="background: url(\''+ src +'\') center center / contain no-repeat;"></div></div>';
                obj.after(html);
            }
        });
    })();

    /**
     * 主页banner动效
     */
    (() => {
        if ( $.__config.animate.homeBanner.enable) {
            __webpack_require__.e(/*! import() | circle-magic */ "circle-magic").then(__webpack_require__.t.bind(__webpack_require__, /*! ../vendor/circleMagic/circleMagic */ "./src/vendor/circleMagic/circleMagic.js", 23)).then(module => {
                $('.main-header').circleMagic( $.__config.animate.homeBanner.options);
            });
        }
    })();
}


/***/ })

}]);
//# sourceMappingURL=page-home.fd42db2b.js.map