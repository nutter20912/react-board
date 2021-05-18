import { List, Avatar, Button, Skeleton, Space } from 'antd';
import { useState } from 'react';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';

export const Posts = ({ data }) => {
  const IconText = ({ IconComponent, text }) => (
    <Space>
      <IconComponent />
      {text}
    </Space>
  );

  const renderItem = (item) => (
    <List.Item
      actions={[
        <Button>編輯</Button>,
        <IconText
          IconComponent={LikeOutlined}
          text="156"
        // key="list-vertical-like-o"
        />,
        <IconText
          IconComponent={MessageOutlined}
          text="0"
        // key="list-vertical-message"
        />,
      ]}
    >
      <Skeleton
        avatar title={false} loading={false} active
      >
        <List.Item.Meta
          title={<p>{item.name}</p>}
        />
        <div>{item.context}</div>
      </Skeleton>
    </List.Item>
  );

  return (
    <List
      itemLayout="vertical"
      size="large"
      dataSource={data}
      renderItem={renderItem}
    />
  );
};