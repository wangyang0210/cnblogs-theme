/**
 * UPDATES AND DOCS AT: https://github.com/wangyang0210
 * https://www.cnblogs.com/wangyang0210/
 * @author: WangYang, wangyang.0210@foxmail.com
 * @Date 2022-08-25 15:24
 * ----------------------------------------------
 * @describe: 博客基础信息抓取处理
 */

export default function main() {
    let status = {
        url: '',
        user: '',
        pageType: '',
        articleId: ''
    };
    // 提取url信息
    status.url = window.location.href
    let tmp = status.url.split("/")
    status.user = tmp[3]
    status.homeUrl = [tmp[0], tmp[1], tmp[2], tmp[3]].join("/")
    let topics = $('#topics').length
    status.pageType = (!topics) ? 'home' : $('#bookListFlg').length ? 'books' :  $('#linkListFlg').length ? 'links' : 'article'
    if (topics) status.articleId = (tmp[tmp.length - 1]).split(".")[0]
    return status
}
