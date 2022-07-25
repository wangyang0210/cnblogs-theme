/**
 * UPDATES AND DOCS AT: https://github.com/wangyang0210
 * https://www.cnblogs.com/wangyang0210/
 * @author: WangYang, wangyang.0210@foxmail.com
 * @Date 2022-07-24 02:03
 * ----------------------------------------------
 * @describe: common function
 */

import moment from "moment";


/**
 * 获取当天00:00:00的13位时间戳
 * @return {string}
 */
export function getTodayStart () {
    return  moment().startOf('day').format('x')
}

/**
 * 获取当天23:59:59的13位时间戳
 * @return {string}
 */
export  function  getToadyEnd () {
    return moment().endOf('day').format('x')
}

/**
 * 获取前一天00:00:00的13位时间戳
 * @return {string}
 */
export function getYesterdayState () {
    return moment().subtract(1, 'days').startOf('day').format('x')
}

/**
 * 获取前一天23:59:59的13位时间戳
 * @return {string}
 */
export function getYesterdayEnd () {
    return moment().subtract(1, 'days').endOf('day').format('x')
}

/**
 * 获取当天年月日时间
 */
export function getToday () {
    return moment().format('YYYY-MM-DD')
}

/**
 * jsonp跨域请求
 * @param {string} url 请求地址
 * @return {Promise<unknown>}
 */
export function getJsonp (url= `https://sentence.iciba.com/index.php?callback=onecallback&c=dailysentence&m=getdetail&title=2022-07-25lback&c=dailysentence&m=getdetail&title=${getToday()}`) {
        return new Promise(resolve => {
            window.jsonCallBack = (result) => {
                resolve(result)
            }
            let JSONP = document.createElement("script");
            JSONP.type = "text/javascript";
            JSONP.src = `${url}&callback=jsonCallBack`;
            document.getElementsByTagName("head")[0].appendChild(JSONP);
            setTimeout(() => {
                document.getElementsByTagName("head")[0].removeChild(JSONP)
            }, 500)
        })
}
