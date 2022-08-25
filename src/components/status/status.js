/**
 * UPDATES AND DOCS AT: https://github.com/wangyang0210
 * https://www.cnblogs.com/wangyang0210/
 * @author: WangYang, wangyang.0210@foxmail.com
 * @Date 2022-08-25 15:24
 * ----------------------------------------------
 * @describe: 博客基础信息抓取处理
 */

export default function main() {
    let status = {};

    // 提取url信息
    status.url = window.location.href;
    let tmp = status.url.split("/");
    status.user = tmp[3];
    status.articleId = '';

    // 主页链接
    status.homeUrl = [tmp[0], tmp[1], tmp[2], tmp[3]].join("/");

    // 判断当前页面类型
    if (!$('#topics').length) {
        status.pageType = 'home'; // 当前页面为主页
    } else {
        if ($('#bookListFlg').length) {
            status.pageType = 'books'; // 当前页面为书单页
        } else if ($('#linkListFlg').length) {
            status.pageType = 'links'; // 当前页面为友链页
        } else {
            status.pageType = 'article'; // 当前页面为文章页
        }

        // 提取文章id
        let endVal = (tmp[tmp.length - 1]).split(".");
        status.articleId = endVal[0];
    }

    return status;
}
