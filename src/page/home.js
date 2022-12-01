/**
 * UPDATES AND DOCS AT: https://github.com/wangyang0210
 * https://www.cnblogs.com/wangyang0210/
 * @author: WangYang, wangyang.0210@foxmail.com
 * @Date 2022-08-25 15:27
 * ----------------------------------------------
 * @describe: 主页处理
 */
import postMeta from "../components/postMeta/postMeta";
import {request} from "../utils/request";

export default function main(_) {

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

        if ( $.__config.banner.home.titleSource === 'one') request('https://api.wangyangyang.vip/').then(r =>  topTitleContent(r))
        if ( $.__config.banner.home.titleSource === 'jinrishici')  request('https://v2.jinrishici.com/one.json').then(r =>  topTitleContent(r))
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
            let info = postMeta(postDescText);
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
            import(/* webpackChunkName: "circle-magic" */ /* webpackPrefetch: true */  '../vendor/circleMagic/circleMagic').then(module => {
                $('.main-header').circleMagic( $.__config.animate.homeBanner.options);
            });
        }
    })();
}
