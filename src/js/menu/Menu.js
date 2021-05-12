import { Menu } from 'antd';
import { Link } from "react-router-dom";
import {
  UserOutlined
} from '@ant-design/icons';
import { MenuRouter } from '../default';

const BoardMenu = (props) => {
  const menuItems = MenuRouter.map(
    ({ title, path }, index) => (
      <Menu.Item key={index}>
        <Link to={path} onClick={()=> props.onLink(title)}>{title}</Link>
      </Menu.Item>
    )
  );

  return (
    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
      <Menu.SubMenu key="sub1" icon={<UserOutlined />} title="Board">
        {menuItems}
      </Menu.SubMenu>
    </Menu>
  );
};

export default BoardMenu;