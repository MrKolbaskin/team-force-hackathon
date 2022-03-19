import { Layout, Menu } from "antd";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "antd/dist/antd.css";

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Header className="header">
            <div className="logo" />
            <Menu theme="dark" mode="horizontal">
              <Menu.Item key="1">
                <Link to="requests">Предложения</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="offers">Запросы</Link>
              </Menu.Item>
            </Menu>
          </Header>
          <Content style={{ padding: "0 50px" }}>
            <Layout
              className="site-layout-background"
              style={{ padding: "24px 0" }}
            >
              <Content
                style={{ padding: "0 24px", minHeight: "50vh", height: "" }}
              >
                <Routes>
                  <Route path="/" element={<>mainPage</>} />
                  <Route path="requests" element={<>requests</>} />
                  <Route path="offers" element={<>offers</>} />
                </Routes>
              </Content>
            </Layout>
          </Content>
          <Footer style={{ textAlign: "center" }}>DecadenceIT ©2022</Footer>
        </Layout>
      </Router>
    </>
  );
}

export default App;
