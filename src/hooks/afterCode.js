/**
 * UPDATES AND DOCS AT: https://github.com/wangyang0210
 * https://www.cnblogs.com/wangyang0210/
 * @author: WangYang, wangyang.0210@foxmail.com
 * @Date 2022-08-25 15:25
 * ----------------------------------------------
 * @describe: code 渲染结束后
 */

export default function main() {
    if (typeof $.__config.hooks.afterCode === "function") $.__config.hooks.afterCode();
}
