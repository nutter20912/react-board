
import { Layout } from 'antd';
import React, { useState } from 'react';
import { BrowserRouter } from "react-router-dom";
import Menu from '../menu/Menu';
import Content from '../menu/Content';

const { Header, Footer, Sider } = Layout;

export const SideBar = (props) => {
  console.log(props);
  const [collapsed, setCollapsed] = useState(false);
  const [breadcrumbList, setBreadcrumbList] = useState('');

  const onCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };

  const onLink = (path) => {
    setBreadcrumbList(path);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <BrowserRouter>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <div className="logo" />
          <Menu
            onLink={onLink}
          />
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content
            breadcrumbList={breadcrumbList}
          />
          <Footer style={{ textAlign: 'center' }}>Ant Design ©</Footer>
          </Layout>
      </BrowserRouter>
    </Layout>
  );
};
