/**
 * UPDATES AND DOCS AT: https://github.com/wangyang0210
 * https://www.cnblogs.com/wangyang0210/
 * @author: WangYang, wangyang.0210@foxmail.com
 * @Date 2022-08-25 15:19
 * ----------------------------------------------
 * @describe: banner背景图片处理
 */
import bannerTemp from '../../template/banner.html';

export default function main(_) {

    $('#sidebar_news').prepend(bannerTemp);

    /**
     * 设置banner背景图片，初始化高度
     * （该处理需在loading结束之前处理）
     */
    (() => {
        let mainHeader = $('#main-header');
        let topImg, bgImg, height;

        // 设置图片
        if (_.__status.pageType === 'home') {
            topImg = _.__config.banner.home.background.length > 0 ? _.__config.banner.home.background : ['https://images.cnblogs.com/cnblogs_com/wangyang0210/1943283/o_220917053600_wallhaven-6k3oox.webp'];
        }  else {
            topImg = _.__config.banner.article.background.length > 0 ? _.__config.banner.article.background : [	'https://images.cnblogs.com/cnblogs_com/wangyang0210/1943283/o_220917053937_wallhaven-j5mz95.webp'];
            height = '40vh';
            $('#homeTopTitle').hide();
            $('.scroll-down').hide();
            $('#home').css('margin-top', '40vh');
            $('#cb_post_title_url').addClass('post-del-title');
        }

        // 设置高度
        if (height) mainHeader.css('height', height);

        // banner动效
        if (_.__config.animate.bannerImages?.enable) {
            // 开启图片自动切换
            import(/* webpackChunkName: "banner-images" */ /* webpackPrefetch: true */ '../bannerImages/bannerImages').then(module => {
                let bannerImages = module.default;
                bannerImages(
                    'main-header',
                    topImg,
                    _.__config.animate.bannerImages.options.itemNum,
                    _.__config.animate.bannerImages.options.time,
                    _.__config.animate.bannerImages.options.sort,
                    _.__config.animate.bannerImages.options.current < 0
                        ? _.__tools.randomNum(0, topImg.length - 1)
                        : _.__config.animate.bannerImages.options.current
                );
            });
        } else {
            // 随机指定一个图片

            if (topImg.length > 1) bgImg = topImg[_.__tools.randomNum(0, topImg.length - 1)]
            else bgImg = topImg[0] || ""

            mainHeader.css({
                'background': '#222 url(\'' + encodeURI(bgImg) + '\')  center center no-repeat',
                'background-size': 'cover'
            });
        }

        // Banner文字是否可选
        if(!_.__config.banner.text) $('.main-header-content.inner').addClass('textUnselect')

    })();

    // 添加事件监听
    _.__event.scroll.handle.push(() => {
        let openButton = $('#open-button');

        if (_.__event.scroll.temScroll < _.__event.scroll.docScroll && _.__event.scroll.homeScroll <= _.__event.scroll.docScroll && !openButton.hasClass('menu-button-scroll')) { // 向下滚动
            openButton.addClass('menu-button-scroll');
            openButton.text('');
        }

        if (_.__event.scroll.temScroll > _.__event.scroll.docScroll && _.__event.scroll.homeScroll >= _.__event.scroll.docScroll && openButton.hasClass('menu-button-scroll')) { // 滚入头图
            openButton.removeClass('menu-button-scroll');
            openButton.text('MENU');
        }
    });
}
