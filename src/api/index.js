import request from '../utils/request';
import * as url from "url";

/**
 * 获取token和站点信息
 * @param {string} baseUrl 请求域名
 * @param {string} url 请求地址
 * @return {*}
 */
export function getConfigInfo (baseUrl, url) {
    return request({
        url: url,
        method: 'GET',
        requestBaseUrl: baseUrl
    })
}


/**
 * 获取网站统计
 * @param {string} baseUrl 请求域名
 * @param {string} url 请求地址
 * @param {object} params 请求参数
 * @return {*}
 */
export function getWebSiteState (baseUrl, url, params) {
    return request({
        url: url,
        method: 'GET',
        params: params,
        requestBaseUrl: baseUrl
    })
}

/**
 * 获取当前在线人数
 * @param {string} baseUrl 请求域名
 * @param {string} url 请求地址
 * @return {*}
 */
export function getOnline (baseUrl, url) {
    return request({
        url: url,
        requestBaseUrl: baseUrl
    })
}

/**
 * 获取每日一句
 * @return {*}
 */
export function getOneSaying () {
    return request({
        url: `index.php?callback=onecallback&c=dailysentence&m=getdetail&title=${getToday()}&TransCode=030111&OpenId=123456789`,
        method: 'GET',
        requestBaseUrl: 'https://sentence.iciba.com/',
    })
}

/**
 * 获取今日诗词
 * @return {*}
 */
export function getToadyPoetry () {
    return request({
        url: `one.json`,
        method: 'GET',
        requestBaseUrl: 'https://v2.jinrishici.com/'
    })
}



