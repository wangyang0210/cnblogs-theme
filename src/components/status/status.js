/**
 * UPDATES AND DOCS AT: https://github.com/wangyang0210
 * https://www.cnblogs.com/wangyang0210/
 * @author: WangYang, wangyang.0210@foxmail.com
 * @Date 2022-08-25 15:24
 * ----------------------------------------------
 * @describe: 博客基础信息抓取处理
 */

export default function main() {
    let status = {}
    // 提取url信息
    status.url = window.location.href
    let tmp = status.url.split("/")
    status.user = tmp[3]
    status.articleId = ''
    status.pageType = ''
    status.homeUrl = [tmp[0], tmp[1], tmp[2], tmp[3]].join("/")
    !$('#topics').length && status.pageType = 'home'
    $('#topics').length && status.articleId = (tmp[tmp.length - 1]).split(".")[0] && status.pageType = 'article'
    $('#bookListFlg').length && status.pageType = 'books'
    $('#linkListFlg').length && status.pageType = 'links'
    return status
}
