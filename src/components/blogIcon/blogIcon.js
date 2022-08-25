/**
 * UPDATES AND DOCS AT: https://github.com/wangyang0210
 * https://www.cnblogs.com/wangyang0210/
 * @author: WangYang, wangyang.0210@foxmail.com
 * @Date 2022-08-25 15:19
 * ----------------------------------------------
 * @describe: 网站图标处理
 */
export default function main(_) {
    if (_.__config.info.blogIcon) {
        let shortcutIcon = $('link[rel="shortcut icon"]');
        if (shortcutIcon.length) {
            shortcutIcon.attr('href', _.__config.info.blogIcon);
        } else {
            let linkObject  = document.createElement('link');
            linkObject.rel  = "shortcut icon";
            linkObject.href = _.__config.info.blogIcon;
            document.getElementsByTagName("head")[0].appendChild(linkObject);
        }
    }
}
