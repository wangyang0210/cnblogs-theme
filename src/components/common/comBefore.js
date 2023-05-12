/**
 * UPDATES AND DOCS AT: https://github.com/wangyang0210
 * https://www.cnblogs.com/wangyang0210/
 * @author: WangYang, wangyang.0210@foxmail.com
 * @Date 2022-08-25 15:20
 * ----------------------------------------------
 * @describe: 前置公共处理
 */
import sidebar from "../sidebar/sidebar";
import banner from "../banner/banner";
import event from "../event/event";
await $.__tools.dynamicLoadingJs($.__config.default.jqueryrotate).catch(e => console.error('jqueryrotate.js', e))

export default function main() {

    // 默认字体图标库
    import(/* webpackChunkName: "iconfont" */ /* webpackPreload: true */ '../../style/iconfont.css');

    // 谷歌字体
    import(/* webpackChunkName: "google-fonts" */ /* webpackPreload: true */ '../../style/google-fonts.css');

    /**
     * 国家公祭日和自定义重要的缅怀的日子
     */
    (() => {
        if ($.__tools.getTodayDate() == '12-13' || $.__config.memorialDays.includes($.__tools.getTodayDate())) $('html').addClass('htmlGray')
    })();

    /**
     * 定时清除全部计时器
     */
    (() => {
        setTimeout(() => {
            $.each($.__timeIds, (e) => {
                null != $.__timeIds[e] && window.clearInterval($.__timeIds[e]);
            });
        }, 30000);
    })();

    /**
     * 事件绑定
     */
    (() => {
        event.init();
    })();

    /**
     * 侧边栏
     */
    (() => {
        sidebar();
    })();

    /**
     * 头图
     */
    (() => {
        banner();
    })();

    /**
     * 添加扩展字体图标库
     */
    (() => {
        if ($.__config.fontIconExtend !== '') $.__tools.dynamicLoadingCss($.__config.fontIconExtend, 1);
    })();

}
