import { Layout } from 'antd';
import { useState } from 'react';
import { BrowserRouter } from "react-router-dom";
import Content from './container/Content';
import { SideBar } from './container/SideBar';
import menuRouter from './container/MenuRouter';

const { Header, Footer } = Layout;


const App = () => {
  const [breadcrumbList, setBreadcrumbList] = useState('');

  const onLink = (path) => {
    setBreadcrumbList(path);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <BrowserRouter>
        <SideBar
          onLink={onLink}
          menuRouter={menuRouter}
        />

        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content
            breadcrumbList={breadcrumbList}
            menuRouter={menuRouter}
          />
          <Footer style={{ textAlign: 'center' }}>Ant Design ©</Footer>
        </Layout>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
