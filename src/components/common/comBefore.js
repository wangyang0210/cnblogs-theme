/**
 * UPDATES AND DOCS AT: https://github.com/wangyang0210
 * https://www.cnblogs.com/wangyang0210/
 * @author: WangYang, wangyang.0210@foxmail.com
 * @Date 2022-08-25 15:20
 * ----------------------------------------------
 * @describe: 前置公共处理
 */
import loading from "../loading/loading";
import sidebar from "../sidebar/sidebar";
import banner from "../banner/banner";
import event from "../event/event";
import "../../vendor/rotate/jquery.rotate.min"

export default function main(_) {

    let loadingObj = loading(_);

    // 默认css
    import(/* webpackChunkName: "simple-memory" */  /* webpackPreload: true */ '../../style/simple-memory.css')

    // 默认字体图标库
    import(/* webpackChunkName: "iconfont" */ /* webpackPreload: true */ '../../style/iconfont.css');

    // 谷歌字体
    import(/* webpackChunkName: "google-fonts" */ /* webpackPreload: true */ '../../style/google-fonts.css');

    /**
     * 开启 loading
     */
    (() => {
        loadingObj.start();
    })();

    /**
     * 国家公祭日和自定义重要的缅怀的日子
     */
    (() => {
        if (_.__tools.getTodayDate() == '12-13' || _.__config.memorialDays.includes(_.__tools.getTodayDate()) ) $('html').addClass('htmlGray')
    })();

    /**
     * 定时清除全部计时器
     */
    (() => {
        setTimeout(() => {
            $.each(_.__timeIds, (e) => {
                null != _.__timeIds[e] && window.clearInterval(_.__timeIds[e]);
            });
        }, 30000);
    })();

    /**
     * 事件绑定
     */
    (() => {
        event(_).init();
    })();

    /**
     * 侧边栏
     */
    (() => {
        sidebar(_);
    })();

    /**
     * 头图
     */
    (() => {
        banner(_);
    })();

    /**
     * 添加扩展字体图标库
     */
    (() => {
        if (_.__config.fontIconExtend !== '') _.__tools.dynamicLoadingCss(_.__config.fontIconExtend, 1);
    })();

    /**
     * 关闭 loading
     */
    (() => {
        loadingObj.stop();
    })();
}
