/**
 * UPDATES AND DOCS AT: https://github.com/wangyang0210
 * https://www.cnblogs.com/wangyang0210/
 * @author: WangYang, wangyang.0210@foxmail.com
 * @Date 2022-08-25 15:25
 * ----------------------------------------------
 * @describe: 页面title处理
 */

export default function main(_) {

    let RelTitle = document.title,
        hidden,
        visibilityChange,
        timer,
        onblur = _.__config.title.onblur,
        onblurTime = _.__config.title.onblurTime,
        focus = _.__config.title.focus,
        focusTime = _.__config.title.focusTime;

    if (typeof document.hidden !== "undefined") {
        hidden = "hidden";
        visibilityChange = "visibilitychange";
    }
    if (typeof document.mozHidden !== "undefined") { // Firefox up to v17
        hidden = "mozHidden";
        visibilityChange = "mozvisibilitychange";
    }

    if (typeof document.webkitHidden !== "undefined") { // Chrome up to v32, Android up to v4.4, Blackberry up to v10
        hidden = "webkitHidden";
        visibilityChange = "webkitvisibilitychange";
    }

    let handleVisibilityChange = () => {
        if (timer) clearTimeout(timer);

        if (document[hidden] && onblurTime >= 0) {
            timer = setTimeout(() => {
                document.title = onblur + ' - ' + RelTitle.split(' - ')[0];
            }, onblurTime);
        }

        if (!document[hidden] && focusTime >= 0) {
            document.title = focus;
            timer = setTimeout(() => {
                document.title = RelTitle;
            }, focusTime);
        }

        if (!document[hidden] && focusTime < 0) {
            document.title = RelTitle;
        }

    }
    if (typeof document.addEventListener !== "undefined" || typeof document[hidden] !== "undefined") {
        document.addEventListener(visibilityChange, handleVisibilityChange, false);
    }
}
