import axios, { AxiosRequestConfig, AxiosInstance, AxiosResponse } from "axios";
import { apiUrl } from "../config";
import Vue from "vue";
import codeMessage from "./codeMessage";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: apiUrl,
  withCredentials: true,
  timeout: 1000
});

// 响应拦截器
axiosInstance.interceptors.response.use(
  // success
  function(response: AxiosResponse) {
    const responseData = response.data;
    if (responseData.code === 0) {
      // 无需提示，返回数据
      return responseData.data;
    } else {
      // 无需数据，只需提示
      return Promise.reject({
        code: responseData.code
      });
    }
  },
  // error
  function() {
    // 连接失败
    return Promise.reject({
      code: 1000
    });
  }
);

// 响应处理
const cAxios = async function(
  requestConfig: AxiosRequestConfig
): Promise<boolean | AxiosResponse> {
  try {
    return await axiosInstance(requestConfig);
  } catch (e) {
    if (e.code) {
      try {
        const msg = codeMessage[e.code];
        if (e.code > codeMessage.gate) {
          Vue.prototype.$message.success(msg);
          return true;
        } else {
          Vue.prototype.$message.warning(msg);
          return false;
        }
      } catch {
        Vue.prototype.$message.error(codeMessage[9000] + ": " + e.code);
        return false;
      }
    } else {
      Vue.prototype.$message.error(codeMessage[9001]);
      return false;
    }
  }
};

export default cAxios;
