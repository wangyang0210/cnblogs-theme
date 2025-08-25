/**
 * UPDATES AND DOCS AT: https://github.com/wangyang0210
 * https://www.cnblogs.com/wangyang0210/
 * @author: WangYang, i@oyo.cool
 * @Date 2022-08-25 15:24
 * ----------------------------------------------
 * @describe: 博客基础信息抓取处理
 */

let status = {
    url: window.location.href.split('#')[0],
    user: '',
    pageType: '',
    articleId: '',
};

// 提取url信息
let tmp = status.url.split('/');
status.user = tmp[3];
status.homeUrl = tmp.slice(0, 4).join('/');

// 页面类型识别
status.pageType = getPageType(status.url, tmp);

// 提取文章ID（如果是文章页）
if (status.pageType === 'article') {
    status.articleId = tmp[tmp.length - 1].split('.')[0];
}

/**
 * 根据URL和DOM元素识别页面类型
 * @param {string} url - 当前页面URL
 * @param {Array} urlParts - URL分割后的数组
 * @returns {string} 页面类型
 */
function getPageType(url, urlParts) {
    // 检查是否有topics元素（文章页、分类页、标签页、档案页都有）
    let topics = $('#topics').length;
    
    if (!topics) {
        // 没有topics元素，判断为首页
        return 'home';
    }
    
    // 有topics元素，进一步判断页面类型
    
    // 检查特殊页面标识
    if ($('#bookListFlg').length) {
        return 'books';
    }
    
    if ($('#linkListFlg').length) {
        return 'links';
    }
    
    // 根据URL路径判断页面类型
    // 标签页: /tag/标签名/
    if (url.includes('/tag/') && urlParts[4] === 'tag') {
        return 'tag';
    }
    
    // 随笔分类页: /category/分类ID.html
    if (url.includes('/category/') && urlParts[4] === 'category') {
        return 'category';
    }
    
    // 随笔档案页: /p/archive/年份/月份
    if (url.includes('/p/archive/') && urlParts[4] === 'p' && urlParts[5] === 'archive') {
        return 'archive';
    }
    
    // 相册页: /gallery/image/图片ID.html
    if (url.includes('/gallery/') && urlParts[4] === 'gallery') {
        return 'gallery';
    }
    
    // 文章页: /p/文章ID
    if (urlParts[4] === 'p' && urlParts[5] && !urlParts[5].includes('archive')) {
        return 'article';
    }
    
    // 默认返回文章页（兜底处理）
    return 'article';
}

export default status;
