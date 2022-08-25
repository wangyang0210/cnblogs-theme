/**
 * UPDATES AND DOCS AT: https://github.com/wangyang0210
 * https://www.cnblogs.com/wangyang0210/
 * @author: WangYang, wangyang.0210@foxmail.com
 * @Date 2022-08-25 15:20
 * ----------------------------------------------
 * @describe: 主题配置处理
 */
import defaultConfig from './config.json5';

export default function main() {

    // 获取用户默认配置
    const userConfig = typeof window.cnblogsConfig === 'undefined' ? {} : window.cnblogsConfig;

    // 合并配置
    return $.extend( true, defaultConfig, userConfig);
}
