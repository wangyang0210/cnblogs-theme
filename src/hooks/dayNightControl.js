/**
 * UPDATES AND DOCS AT: https://github.com/wangyang0210
 * https://www.cnblogs.com/wangyang0210/
 * @author: WangYang, wangyang.0210@foxmail.com
 * @Date 2022-08-25 15:26
 * ----------------------------------------------
 * @describe: 日夜间模式切换时
 */

export default function main(type) {
    if (typeof $.__config.hooks.dayNightControl === "function")
        $.__config.hooks.dayNightControl(type);
}
