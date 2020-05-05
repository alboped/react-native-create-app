import './promise-extends';
import fetchClass from './fetchClass';

const BASE_URL = 'http://rap2.taobao.org:38080/app/mock/251359';

const fetchInstance = new fetchClass();

fetchInstance.defaults.baseURL = BASE_URL;
fetchInstance.defaults.timeout = 1000 * 60;
fetchInstance.defaults.headers['Content-type'] = 'application/json;charset=UTF-8';

/**
 * 请求拦截
 */
fetchInstance.instance.interceptors.request.use(
  cfg => {
    console.log(cfg);
    return cfg;
  },
  error => {
    return Promise.reject(error);
  },
);

/**
 * 响应拦截
 */
fetchInstance.instance.interceptors.response.use(
  cfg => {
    return cfg;
  },
  error => {
    return Promise.reject(error);
  },
);

export default fetchInstance;
