/**
 * UPDATES AND DOCS AT: https://github.com/wangyang0210
 * https://www.cnblogs.com/wangyang0210/
 * @author: WangYang, wangyang.0210@foxmail.com
 * @Date 2022-08-25 15:28
 * ----------------------------------------------
 * @describe: axios封装
 */
import axios from "axios";

const request = axios.create({
    timeout: 15000,
})

// 异常拦截处理器
const errorHandler = error => {
    error.response && console.error(`errorHandler: ${error.response}`)
    return Promise.reject(error)
}

// 请求拦截器
request.interceptors.request.use(config => {
    if (!config.headers['Content-Type'])  config.headers['Content-Type'] = 'application/json'
    if (config.requestBaseUrl) {
        config.baseURL = config.requestBaseUrl || ''
    }
    return config
}, errorHandler)

// 响应拦截器
request.interceptors.response.use(response => {
    // 涉及到多个不同平台接口,响应信息无法统一
    return response.data
}, errorHandler)


export default request
