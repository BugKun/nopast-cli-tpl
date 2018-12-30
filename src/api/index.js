import axios from 'axios'
import Cookies from 'js-cookie'
import system from './system'
import { baseURL } from "Config"

// 实例化 ajax请求对象
const ajaxinstance = axios.create({
  baseURL,
  timeout: 10000
})

// 请求响应拦截器
ajaxinstance
    .interceptors
    .response
    .use((response) => {
        // TODO

        let { data } = response;

        if(!data.success){
            if(data.msg.text && data.msg.text !== "") {
                alert(data.msg.text)
            }
            if(data.msg.isLogin === false) {
                Cookies.remove('winduser');
                let curUrl = window.location.pathname + window.location.search;
                window.location.href = `/login?referer=${encodeURIComponent(curUrl)}`
            }
        }

        return data
    }, (error) => {
        return Promise.reject(error)
    })


// 添加拦截器，处理 公用请求参数，和通用请求头部
ajaxinstance
    .interceptors
    .request
    .use((config) => {
        // TODO
        let tp = Cookies.get('winduser')

        if (tp) {
            config['headers']['winduser'] = tp
        }
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
}
export default API
