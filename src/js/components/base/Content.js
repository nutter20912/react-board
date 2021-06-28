import {
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
import { Breadcrumb, Layout } from 'antd';

export const Content = ({ menuRouter }) => {
  let location = useLocation();

  const getTitle = (menuList) => {
    for (var i = 0; i < menuList.length; i++) {
      if (menuList[i]?.path === location.pathname) {
        return menuList[i].title;
      }

      const subItem = menuList[i]?.children?.find(
        (subItem) => subItem.path === location.pathname
      );

      if (subItem) {
        return subItem.title;
      }
    }
  }

  const generateRouteNodes = (menuList) => (
    menuList.map(({path, component, children}) => {
      if (children) {
        return generateRouteNodes(children);
      }

      return (
        <Route
          key={path}
          path={path}
          component={component}
        />
      );
    })
  );

  return (
    <Layout.Content style={{ margin: '0 16px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>
          <span>{getTitle(menuRouter)}</span>
        </Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
        <Switch>
          {generateRouteNodes(menuRouter)}
        </Switch>
      </div>
  </Layout.Content>
  );
}
