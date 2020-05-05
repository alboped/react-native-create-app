import fetch from './fetch';

/**
 * axios 初始参数
 */
const fetchOptions = {
  baseURL: 'http://rap2.taobao.org:38080/app/mock/251359',
  timeout: 1000 * 60,
  headers: {
    'Content-type': 'application/json;charset=UTF-8',
  },
};

const fetchInstance = fetch.create(fetchOptions);

/**
 * 请求拦截
 */
fetchInstance.instance.interceptors.request.use(
  request => {
    return request;
  },
  error => {
    return Promise.reject(error);
  },
);

/**
 * 响应拦截
 */
fetchInstance.instance.interceptors.response.use(
  responst => {
    return responst.data;
  },
  error => {
    return Promise.reject(error);
  },
);

export default fetchInstance;
