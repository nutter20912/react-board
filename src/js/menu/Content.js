import {
  Switch,
  Route,
} from "react-router-dom";
import { Breadcrumb, Layout } from 'antd';
import { MenuRouter } from '../default';

const Content = (props) => {
  console.log(props);
  const ContentItems = () => MenuRouter.map(
    ({ path, component }, index) => (
      <Route
        key={index}
        path={path}
        component={component}
      />
    )
  );

  return (
    <Layout.Content style={{ margin: '0 16px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>
            <span>{props.breadcrumbList}</span>
        </Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
        <Switch>
          <ContentItems/>
        </Switch>
      </div>
  </Layout.Content>
  );
}

export default Content;