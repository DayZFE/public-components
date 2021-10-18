import React, { useState } from "react";
import {
  Switch,
  Route,
  Redirect,
  useHistory,
  useLocation,
} from "react-router-dom";
import { Layout, Menu } from "antd";
import useConfig from "./useConfig";
import Tool from "./Tool";

const { Header, Sider, Content } = Layout;

function App() {
  const config = useConfig();
  console.log(config);
  const { push } = useHistory();
  const { pathname } = useLocation();
  return (
    <>
      {config.length > 0 ? (
        <Layout style={{ minHeight: "100vh" }}>
          <Header>
            <h2 style={{ color: "white" }}>公共组件</h2>
          </Header>
          <Layout>
            <Sider width='200'>
              <Menu
                selectedKeys={[pathname]}
                onSelect={(e) => {
                  push(e.key);
                }}
              >
                {config.map((el) => (
                  <Menu.Item key={"/" + el.name}>{el.title}</Menu.Item>
                ))}
              </Menu>
            </Sider>
            <Content style={{ padding: "1em" }}>
              <div style={{ backgroundColor: "white", padding: "1em" }}>
                <Switch>
                  <Route path='/' exact>
                    <Redirect to={{ pathname: "/test" }} />
                  </Route>
                  {config.map((item) => (
                    <Route key={item.name} path={"/" + item.name}>
                      <Tool
                        content={item.content}
                        title={item.title}
                        example={item.example}
                        code={item.code}
                      />
                    </Route>
                  ))}
                </Switch>
              </div>
            </Content>
          </Layout>
        </Layout>
      ) : null}
    </>
  );
}

export default App;
