import { Layout } from 'antd';
import {menuRouter } from '../container/MenuRouter';
import { SideBar, Content, Header } from '../components/base';

/**
 * 後台頁面
 */
export const Admin = () => {
  const { Footer } = Layout;

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <SideBar menuRouter={menuRouter}/>
      <Layout className="site-layout">
        <Header/>
        <Content menuRouter={menuRouter} />

          <Footer style={{ textAlign: 'center' }}>Ant Design ©</Footer>
      </Layout>
    </Layout>
  );
}