import { List, Avatar, Button, Skeleton } from 'antd';
import { useState } from 'react';

export const Posts = ({ data }) => {
  const [initLoading, setInitLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);

  const renderItem = (item) => (
    <List.Item
      actions={
        <Button>編輯</Button>
      }
    >
      <Skeleton avatar title={false} loading={false} active>
        <List.Item.Meta
           title={<p>{item.name}</p>}
          // description="Ant Design, a design language for background applications, is refined by Ant UED Team"
        />
        <div>content</div>
      </Skeleton>
    </List.Item>
  );

  return (
    <List
      className="demo-loadmore-list"
      // loading={initLoading}
      // itemLayout="horizontal"
      // loadMore={loadMore}
      dataSource={data}
      renderItem={renderItem}
    />
  );
};