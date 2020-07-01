const httpStatusMessage = {
  400: "请求参数错误",
  401: "未授权",
  403: "服务器拒绝请求",
  404: "未找到",
  405: "请求方法不支持",
  429: "请求频率超限",
  500: "服务器内部错误",
  504: "网关超时"
};

// 错误状态码
const errorMessage = {
  1000: "网络故障，连接失败",
  1001: "暂不支持",
  1002: "未知错误"
};

// 成功状态码
const successMessage = {
  20000: "操作成功"
};

// 前端状态码
const customMessage = {
  9000: "未知的状态码",
  9001: "不可能出现的错误"
};

const codeMessage = {
  // 成功(>gate)与失败(<gate)的分界值
  gate: 9999,
  ...httpStatusMessage,
  ...successMessage,
  ...errorMessage,
  ...customMessage
};

export default codeMessage;
