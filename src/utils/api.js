import axios from "axios";
// import storage from '@/utils/localstorage'
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
// 创建axios实例
const service = axios.create({
  baseURL: "http://api.polyv.net", // api的base_url
  // baseURL: "/api", // api的base_url
  timeout: 15000, // 请求超时时间
  headers: { "Content-Type": "application/x-www-form-urlencoded" }
});

// 请求拦截器
service.interceptors.request.use(
  function(config) {
    // if (storage.get('token').length !== 0 && config.url !== '/') {
    //   config.headers['Authorization'] = 'token ' + storage.get('token') // 让每个请求携带自定义token 请根据实际情况自行修改
    // }
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);
// 响应拦截器
service.interceptors.response.use(
  function(response) {
    return response;
  },
  function(error) {
    return Promise.reject(error);
  }
);

// 封装axios的post请求
export function fetch(url, params) {
  return new Promise((resolve, reject) => {
    service
      .post(url, params)
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        reject(error);
      });
  });
}

// 封装axios的get请求
export function dispatch(url, params) {
  return new Promise((resolve, reject) => {
    service
      .get(url, { params: params })
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        reject(error);
      });
  });
}
export default {
  post(url, params) {
    return fetch(url, params);
  },
  get(url, params) {
    return dispatch(url, params);
  }
};
