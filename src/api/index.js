import axios from 'axios'
import { Message } from 'Utils'
import { requestBaseURL, requestTimeout, remapperErrorTips } from 'Constant'
import system from './system'


// 实例化 ajax请求对象
const ajaxinstance = axios.create({
    baseURL: requestBaseURL,
    timeout: requestTimeout
})


// 请求响应拦截器
ajaxinstance
.interceptors
.response
.use((response) => {
    // TODO

    let { data, config } = response

    if (data.code != 1) {
        if (!config.ignoreCommonErrorHandler || !config.ignoreCommonErrorHandler(data.code)) {
            if (remapperErrorTips[data.code]) {
                Message.alert(remapperErrorTips[data.code])
            } else if (data.msg) {
                Message.alert(data.msg)
            } else {
                Message.alert('网络数据异常，请稍后再试')
            }
        }
    }

    return data
}, (error) => {
    if (error instanceof Error) {
        Message.alert('请求超时，请刷新页面后重试')
        return Promise.reject(error)
    }
})




// 添加拦截器，处理 公用请求参数，和通用请求头部
ajaxinstance
.interceptors
.request
.use((config) => {
    // TODO

    return config
}, (error) => {
    Promise.reject(error)
})


/**
 * [API api接口封装]
 * @type {Object}
 */
const API = {
    ...system(ajaxinstance),
};

export default API
