import { UserOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { Link } from "react-router-dom";

const BoardMenu = ({ menuItems, onLink }) => {

  const items = menuItems.map(
    ({ title, path }, index) => (
      <Menu.Item key={index}>
        <Link to={path} onClick={()=> onLink(title)}>{title}</Link>
      </Menu.Item>
    )
  );

  return (
    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
      <Menu.SubMenu key="sub1" icon={<UserOutlined />} title="Board">
        {items}
      </Menu.SubMenu>
    </Menu>
  );
};

export default BoardMenu;