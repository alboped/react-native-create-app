import './promise-extends';
import fetchClass from './fetchClass';

const BASE_URL = '';

const fetchInstance = new fetchClass();

fetchInstance.defaults.baseURL = BASE_URL;
fetchInstance.defaults.timeout = 1000 * 60;

/**
 * 请求拦截
 */
fetchInstance.instance.interceptors.request.use(cfg => {
  return cfg;
}, error => {
  return Promise.reject(error);
});

/**
 * 响应拦截
 */
fetchInstance.instance.interceptors.response.use(cfg => {
  return cfg;
}, error => {
  return Promise.reject(error);
});

export default fetchInstance;
