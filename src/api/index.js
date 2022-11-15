/**
 * UPDATES AND DOCS AT: https://github.com/wangyang0210
 * https://www.cnblogs.com/wangyang0210/
 * @author: WangYang, wangyang.0210@foxmail.com
 * @Date 2022-08-25 15:17
 * ----------------------------------------------
 * @describe: API统一请求接口封装
 */
import request from '../utils/request';

/**
 * 获取token和站点信息
 * @param {string} baseUrl 请求域名
 * @param {string} url 请求地址
 * @return {*}
 */
export function getConfigInfo (url) {
    return request({
        url: url,
        method: 'GET',
    })
}

/**
 * 获取网站统计
 * @param {string} baseUrl 请求域名
 * @param {string} url 请求地址
 * @param {object} params 请求参数
 * @return {*}
 */
export function getWebSiteState (url, params) {
    return request({
        url: url,
        method: 'GET',
        params: params,
    })
}

/**
 * 获取当前在线人数
 * @param {string} baseUrl 请求域名
 * @param {string} url 请求地址
 * @return {*}
 */
export function getOnline (url) {
    return request({
        url: url,
        method: 'GET',
    })
}

/**
 * 获取今日诗词的TOKEN
 * @return {*}
 */
export function getJinrishiciToken () {
    return request({
        url: 'https://v2.jinrishici.com/one.json?client=npm-sdk/1.0',
        method: 'GET',
    })
}

/**
 * 获取今日诗词
 * @param {string} token 今日诗词token
 */
export function getJinrishici (token) {
    return request({
        url: `https://v2.jinrishici.com/one.json?client=npm-sdk/1.0&X-User-Token=${token}`,
        method: 'GET',
    })
}





