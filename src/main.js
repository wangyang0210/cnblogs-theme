/**
 * UPDATES AND DOCS AT: https://github.com/wangyang0210
 * https://www.cnblogs.com/wangyang0210/
 * @author: WangYang, wangyang.0210@foxmail.com
 * @Date 2022-08-25 15:26
 * ----------------------------------------------
 * @describe: 主程序文件
 */
import defaultConfig from './components/config/config.json5';
import status from './components/status/status';
import tools from './utils/tools';
import event from "./components/event/event";

$(document).ready(async function () {

    // 初始化
    $.__config = $.extend( true, defaultConfig,  window?.cnblogsConfig || {}); // 配置信息
    $.__status = status; // 页面状态信息
    $.__tools = tools;  // 公共处理工具
    $.__timeIds = {};  // 定时器
    $.__event = {};   // 事件
    $.__config.info.name ||= $.__status.user;
   await $.__tools.dynamicLoadingJs($.__config.default.moment).catch(e => console.error('moment.js', e));

    // 开启渲染
    import(/* webpackChunkName: "page-[request]" */ /* webpackPrefetch: true */ `./page/${ $.__status.pageType}`).then(module => {
        const page = module.default;

        // 前置公共处理
        import(/* webpackChunkName: "com-before" */ /* webpackPrefetch: true */ './components/common/comBefore').then(beforeModule => {
            const comBefore = beforeModule.default;
            comBefore();

            // 页面逻辑处理
            page();

            // 后置公共处理
            import(/* webpackChunkName: "com-after" */ /* webpackPrefetch: true */ './components/common/comAfter').then(afterModule => {
                const comAfter = afterModule.default;
                comAfter();
                (() => {
                    $.__tools.setDomHomePosition(); // 文章主体位置修正
                    event.handle.scroll(); // 触发滚动处理
                    event.handle.resize(); // 触发窗口大小变化处理
                })();
            });
        });
    });
})
