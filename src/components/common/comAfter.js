/**
 * UPDATES AND DOCS AT: https://github.com/wangyang0210
 * https://www.cnblogs.com/wangyang0210/
 * @author: WangYang, wangyang.0210@foxmail.com
 * @Date 2022-08-25 15:20
 * ----------------------------------------------
 * @describe: 后置公共处理
 */
import progress from "../progress/progress";
import title from "../title/title";
import footer from "../footer/footer";
import rtMenu from "../rtMenu/rtMenu";
import blogIcon from "../blogIcon/blogIcon";
import dayNight from "../dayNight/dayNight";
import console from "../console/console";

export default function main(_) {

    /**
     * 页脚
     */
    (() => {
        footer(_);
    })();

    /**
     * 右下角菜单
     */
    (() => {
        rtMenu(_);
    })();

    /**
     * 日/夜模式
     */
    (() => {
        dayNight(_);
    })();

    /**
     * 进度条
     */
    (() => {
        progress(_);
    })();

    /**
     * 背景动效
     */
    (() =>  {
        let obj = $.__config.animate.background;
        for (let key in obj) {
            if (obj[key].enable) {
                import(/* webpackChunkName: "background-[request]" */ /* webpackPrefetch: true */ `../background/${key}`).then(module => {
                    let background = module.default;
                    background(obj[key]?.options);
                });
            }
        }
    })();

    /**
     * 鼠标动效
     */
    (() => {
        let obj = $.__config.animate.mouse;
        for (let key in obj) {
            if (obj[key].enable) {
                import(/* webpackChunkName: "mouse-[request]" */ /* webpackPrefetch: true */ `../mouse/${key}`).then(module => {
                    let mouse = module.default;
                    mouse(obj[key]?.options);
                });
            }
        }
    })();

    /**
     * 网站图标
     */
    (() => {
        blogIcon(_);
    })();

    /**
     * 页面title
     */
    (() => {
        title(_);
    })();

    /**
     * 控制台输出
     */
    (() => {
        console(_);
    })();
}
