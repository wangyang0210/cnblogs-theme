import request from '../utils/request';
import moment from 'moment';


const umamiApi = {
    getInfo: '',
}

/**
 * 获取站点信息和Token
 * @return {AxiosPromise}
 */
export function getConfigInfo() {
    return request({
        url: umamiApi.getInfo,
        method: 'GET',
        requestBaseUrl: ''
    })
}



