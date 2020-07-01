import Mock from "mockjs";
import apis from "./apiList";
import mocks from "./mock";

// 模拟延迟
Mock.setup({
  timeout: 1000
});

Object.getOwnPropertyNames(apis).forEach(name => {
  const url = apis[name].url as string;
  const regUrl = new RegExp(url.replace(/\//g, "\\/"));
  Mock.mock(regUrl, apis[name].method, mocks[name]);
});
