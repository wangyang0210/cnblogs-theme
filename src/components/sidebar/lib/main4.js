/**
 * UPDATES AND DOCS AT: https://github.com/wangyang0210
 * https://www.cnblogs.com/wangyang0210/
 * @author: WangYang, wangyang.0210@foxmail.com
 * @Date 2022-08-25 15:24
 * ----------------------------------------------
 * @describe: 侧边栏处理
 */
import cla from './classie';

export default async function main() {
    await $.__tools.dynamicLoadingJs($.__config.default.snapsvg).catch(e => console.error('snapsvg-cjs.js', e))
    await $.__tools.dynamicLoadingJs($.__config.default.optiscroll).catch(e => console.log('optiscroll.js', e))
    await $.__tools.dynamicLoadingCss($.__config.default.optiscrollcss)
    let bodyEl = document.body,
        content = document.querySelector('.content-wrap'),
        openbtn = document.getElementById('open-button'),
        closebtn = document.getElementById('close-button'),
        isOpen = false,
        classie = cla(),

        morphEl = document.getElementById('morph-shape'),
        s = Snap(morphEl.querySelector('svg')),
        path = s.select('path'),
        initialPath = path.attr('d'),
        isAnimating = false;

    let myOptiscrollInstance;

    function init() {

        initEvents();

        // 初始化滚动条
        myOptiscrollInstance = new Optiscroll(document.querySelector('#menuWrap'), {
            preventParentScroll: true,
            forceScrollbars: true
        });
    }

    function initEvents() {
        openbtn.addEventListener('click', toggleMenu);
        if (closebtn)  closebtn.addEventListener('click', toggleMenu);

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
