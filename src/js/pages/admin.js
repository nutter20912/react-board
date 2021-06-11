import { Layout } from 'antd';
import { useState } from 'react';
import {menuRouter, testRouter } from '../container/MenuRouter';
import { SideBar, Content } from '../components/base';

/**
 * 後台頁面
 */
export const Admin = () => {
  console.log(testRouter);
  const { Header, Footer } = Layout;
  const [breadcrumbList, setBreadcrumbList] = useState('');

  const onLink = (path) => {
    setBreadcrumbList(path);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
        <SideBar
          onLink={onLink}
          menuRouter={testRouter}
        />

        <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          asd
        </Header>
          <Content
            breadcrumbList={breadcrumbList}
            menuRouter={menuRouter}
          />
          <Footer style={{ textAlign: 'center' }}>Ant Design ©</Footer>
        </Layout>
    </Layout>
  );
}