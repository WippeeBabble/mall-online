// 对axios进行二次封装 可以做请求拦截和响应拦截
import axios from 'axios'

// 引入进度条
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
const requests = axios.create({

    // 加入我们需要的配置
    baseURL:"/api",
    timeout:5000,
})

// 请求拦截器， 可以捕获到请求发出之前的状态，可以在发出去之前，做一些事情
    requests.interceptors.request.use((config) => {
        // config就是配置对象， 里面具有 Header请求头，很重要
                // 进度条开始
                nprogress.start();
        return config
    })

// 相应拦截器
    requests.interceptors.response.use((res) => {
        // 成功的回调函数：服务器响应数据回来之后，响应拦截器可以检测到，做一些事情
            // 进度条结束
            nprogress.done();

        return res.data
    },(err) =>{
        // 失败的回调，
        return Promise.reject(new Error('faile'))
    })

    export default requests;