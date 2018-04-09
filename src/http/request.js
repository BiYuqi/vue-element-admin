/**
* @param {该文件暂未用到,请注意}
*/
import axios from 'axios'
// import store from '../store'
// import user from '../store/user'
// import router from '../router'

// 基本配置
axios.defaults.timeout = 5000 // 响应时间
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';           //配置请求头
// axios.defaults.baseURL = '你的baseUrl';   //配置接口地址

/*
// http request 拦截器
axios.interceptors.request.use(
    config => {
        if (store.state.user.token) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
            config.headers.Authorization = `token ${store.state.user.token}`;
        }
        return config;
    },
    err => {
        return Promise.reject(err);
    });

// http response 拦截器
axios.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    // 返回 401 清除token信息并跳转到登录页面
                    store.commit(user.USER_SIGNOUT);
                    router.replace({
                        path: '/login',
                        query: {
                            mode:"fade"
                        }
                    })
            }
        }
        return Promise.reject(error.response.data)   // 返回接口返回的错误信息
    });
*/
export default axios
