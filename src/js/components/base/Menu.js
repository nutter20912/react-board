import { Menu } from 'antd';
import { Link } from "react-router-dom";

/**
 * 側欄導覽頁面
 */
const BoardMenu = ({ menuRouter, onLink }) => {
  const allSubMenu = menuRouter.map(
    ({ subMenuName, icon, items }, index) => {
      const menuItems = items.map(
        ({ title, path }, index) => (
          <Menu.Item key={index}>
            <Link to={path} onClick={()=> onLink(title)}>{title}</Link>
          </Menu.Item>
        )
      );

      return (
        <Menu.SubMenu key={`sub${index}`} icon={<icon />} title={subMenuName}>
          {menuItems}
        </Menu.SubMenu>
      );
    });

  return (
    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
      {allSubMenu}
    </Menu>
  );
};

export default BoardMenu;