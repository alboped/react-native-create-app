import axios from 'axios';
import { stringify } from 'qs';

/**
 * 序列化参数
 * @param {String} url 请求url
 * @param {Object} params 请求参数
 */
const params2urlSearch = (url, params) => {
  const searchStr = stringify(params || {});
  const urlSearch = searchStr && `?${searchStr}`;

  return `${url}${urlSearch}`;
};

/**
 * get方法
 * @param {Object} instance axios实例
 */
const fetch_get = instance => {
  return (url, params, options) => {
    return instance.get(params2urlSearch(url, params), options);
  };
};

/**
 * post方法
 * @param {Object} instance axios实例
 */
const fetch_post = instance => {
  return (url, params, options) => {
    return instance.post(url, params, options);
  };
};

/**
 * del方法
 * @param {Object} instance axios实例
 */
const fetch_delete = instance => {
  return (url, params, options) => {
    return instance.delete(params2urlSearch(url, params), options);
  };
};

/**
 * put方法
 * @param {Object} instance axios实例
 */
const fetch_put = instance => {
  return (url, params, options) => {
    return instance.put(url, params, options);
  };
};

/**
 * patch方法
 * @param {Object} instance axios实例
 */
const fetch_patch = instance => {
  return (url, params, options) => {
    return instance.patch(url, params, options);
  };
};

const create = opts => {
  const instance = axios.create(opts);
  return {
    instance,
    get: fetch_get(instance),
    post: fetch_post(instance),
    delete: fetch_delete(instance),
    put: fetch_put(instance),
    patch: fetch_patch(instance),
  };
};

export default { create };
