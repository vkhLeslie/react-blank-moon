/**
 * @description:http响应拦截器 全局处理loading加载效果
 * @author：912751280@qq.com
 * @update:2017-08-16
 * @version
 */

import axios from 'axios'
import Promise from 'promise';
// 超时时间
// axios.defaults.timeout = 10000;
// http请求拦截器
axios.interceptors.request.use(config => {//请求前的处理
    //  Loading方法 todo
    // $loading('loading...sgsgs');//loading效果
    console.log('请求前...',Base64.decode(config.data));
    //全局配置 让每个请求携带token--key 请根据实际项目、实际情况自行修改
    if (window.localStorage.getItem("SET_SSO_TOKEN") || store.state.user.token) {
        console.log(store.state.user.token)
        config.headers['tokenId'] = window.localStorage.getItem("SET_SSO_TOKEN") || store.state.user.token;//window.localStorage.getItem("SET_SSO_TOKEN");
       // config.headers['X-AUTH-Token'] = $common.getStore("SET_SSO_TOKEN");//$common.getStore("SET_SSO_TOKEN");
        //全局配置 请求填上防止跨域请求伪造的http头X-XSRF-TOKEN 
        // config.headers['X-XSRF-TOKEN'] = $common.getStore("SET_SSO_TOKEN")
        // xss 控制web,写入注入
    }
    return config;
}, error => {
    // loading.fail('加载超时');
    return Promise.reject(error)
})
// http响应拦截器
axios.interceptors.response.use(data => {//请求后的处理
    //  loading.hide();// 响应成功关闭loading
    // if(!(data.data.result === '1' || data.data.result === 1)){
    //    data.data.data = Base64.decode(data.data.data);//base64解码数据 (mas配置后)
    //     // data.data = Base64.decode(data.data);//base64解码数据
    // }
    // data.data = Base64.decode(data.data);//base64解码数据
    // console.log("请求成功后...", data.data);//没有配置mas接口数据
    return data; //没有配置mas接口数据
}, error => {
    // loading.fail('咦，您的网络好像不太顺畅');
    return Promise.reject(error)
})

export default axios