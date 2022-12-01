/**
 * UPDATES AND DOCS AT: https://github.com/wangyang0210
 * https://www.cnblogs.com/wangyang0210/
 * @author: WangYang, wangyang.0210@foxmail.com
 * @Date 2022-08-25 15:23
 * ----------------------------------------------
 * @describe: 头部进度条处理
 */
import ToProgress from "../../vendor/ToProgress/ToProgress";

export default function main(_) {
    $('#blog-news').prepend('<div id="progressBar"></div>');
    let progressBar = ToProgress && new window.ToProgress( $.__config.progressBar, '#progressBar');

    // 添加事件监听
    $.__event.scroll.handle.push(() => {
        progressBar.setProgress( $.__tools.getScrollPercent());
    });
}
