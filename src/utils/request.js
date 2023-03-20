/**
 * UPDATES AND DOCS AT: https://github.com/wangyang0210
 * https://www.cnblogs.com/wangyang0210/
 * @author: WangYang, wangyang.0210@foxmail.com
 * @Date 2022-08-25 15:28
 * ----------------------------------------------
 * @describe: fetch封装
 */

export async function request(url = '', method = 'GET', data = {}, headers = {}) {
    let options = {
        method: method,
        mode: 'cors',
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
    }
    if (Object.keys(headers).length) {
        options.headers = headers
    }
    if (Object.keys(data).length) {
        options.body = JSON.stringify(data)
    }
    const response = await fetch(url, options)
    return response.json()
}
