import axios from "axios";


const request = axios.create({
    timeout: 15000,
})

// 异常拦截处理器
const errorHandler = error => {
    error.response && console.error(`errorHandler: ${error.response.status}, ${error.response.data.message}`)
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

    if (response.data.streams && response.data.format) {
        return response.data
    }

    if (response.config.responseType === 'stream') {
        return response.data
    }

    if (response.status !== 200 || !response.data.success) {
        return Promise.reject(response.data)
    }
    return response.data
}, errorHandler)


export default request
