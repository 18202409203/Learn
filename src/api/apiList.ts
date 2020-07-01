import { AxiosRequestConfig } from "axios";

export const example: { [propName: string]: AxiosRequestConfig } = {
  getExampleList: {
    url: "/getExampleList",
    method: "get"
  }
};

export default {
  ...example
};
