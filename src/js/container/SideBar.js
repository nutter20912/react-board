import { Layout } from 'antd';
import { useState } from 'react';
import Menu from '../components/Menu';

const { Sider } = Layout;

export const SideBar = ({ menuRouter, onLink }) => {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
      <div className="logo" />
      <Menu
        menuItems={menuRouter}
        onLink={onLink}
      />
    </Sider>
  );
};