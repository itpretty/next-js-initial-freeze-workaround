/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
/* eslint-disable consistent-return */
/**
 * request 网络请求工具
 * 更详细的api文档: https://bigfish.alipay.com/doc/api#request
 */
 import { extend } from 'umi-request';
 
 const request = extend({
   // credentials: 'include'
   timeout: 5000,
 });

 request.interceptors.request.use((url, options) => {
    // console.log(options)
    const host = 'https://api.github.com'
    return {
      url: `${host}${options.url}`,
      options
    //   options: { ...options, interceptors: true },
    };
  });
 
export default request;

// export default function rq (url, options={}) { 
//     return request(`https://api.github.com${url}`, options);
// }

//  export default async (url, options = {}) => {
//    const { headers = {} } = options;
//    options.headers = {
//      ...headers,
//     //  Authorization: await LoginSdk.getToken(),
//    };//    return request(url, options);
//  };
 