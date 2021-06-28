import { Menu } from 'antd';
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from 'react';

/**
 * 側欄導覽頁面
 */
const BoardMenu = ({ menuRouter }) => {
  let location = useLocation();
  const [menuNodes, setMenuNodes] = useState([]);

  const [openKey, setOpenKey] = useState([]);


  const generateMenuNodes = (menuList) => (
    menuList.map(({ title, path, Icon, children }) => {
      if (children) {
        if (children.find(item => item.path === location.pathname)) {
          setOpenKey([title]);
        }

        return (
          <Menu.SubMenu key={title} icon={<Icon />} title={title}>
            {generateMenuNodes(children)}
          </Menu.SubMenu>
        );
      }

      return (
        <Menu.Item key={path}>
          <Link to={path}>
            <Icon />
            {title}
          </Link>
        </Menu.Item>
      );
    })
  );

  useEffect(() => {
    setMenuNodes(generateMenuNodes(menuRouter));
  }, []);

  return (
    <Menu
      openKeys={openKey}
      selectedKeys={[location.pathname]}
      mode="inline"
      theme="dark"
      onOpenChange={(e) => setOpenKey(e)}
    >
      {menuNodes}
    </Menu>
  );
};

export default BoardMenu;