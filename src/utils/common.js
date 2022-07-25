import moment from "moment";

/**
 * UPDATES AND DOCS AT: https://github.com/wangyang0210
 * https://www.cnblogs.com/wangyang0210/
 * @author: WangYang, wangyang.0210@foxmail.com
 * @Date 2022-07-24 02:03
 * ----------------------------------------------
 * @describe: common function
 */


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
    return moment().day(-1).startOf('day').format('x')
}

/**
 * 获取前一天23:59:59的13位时间戳
 * @return {string}
 */
export function getYesterdayEnd () {
    return moment().day(-1).endOf('day').format('x')
}

/**
 * 获取当天年月日时间
 */
export function getToday () {
    return moment().format('YYYY-MM-DD')
}
