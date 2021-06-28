import { Layout } from 'antd';
import { useState } from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import logo from '../../../images/logo.png';
import Menu from './Menu';

const { Sider } = Layout;

const LogoImage = styled.img`
  src: ${props => props.src};
  height: 50px;
  border-radius: 50%;
  margin: 10px 5px;
`

const LogoTitle = styled.h2`
  color: white;
  margin: 10px 5px;
`

const HeaderLink = styled(Link)`
  align-items: center;
  display:flex;
  background-color: #2F4F4F
`

export const SideBar = ({ menuRouter }) => {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
      <HeaderLink to='/'>
        <LogoImage src={logo} />
        <LogoTitle>管理系統</LogoTitle>
      </HeaderLink>
      <Menu
        menuRouter={menuRouter}
      />
    </Sider>
  );
};