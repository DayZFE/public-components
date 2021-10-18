import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import zhCN from "antd/lib/locale/zh_CN";
import "moment/locale/zh-cn";
import "antd/dist/antd.css";
import { ConfigProvider } from "antd";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <ConfigProvider locale={zhCN}>
      <App />
    </ConfigProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
