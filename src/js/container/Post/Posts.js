import { List, Avatar, Button, Skeleton, Space } from 'antd';
import { useState } from 'react';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';

export const Posts = ({ data, setShowPostDetail }) => {
  const IconText = ({ IconComponent, text }) => (
    <Space onClick={()=> setShowPostDetail(true)}>
      <Button type="link" size='large' icon={<IconComponent />} >

      {text}
      </Button>
    </Space>
  );

  const renderItem = (item) => (
    <List.Item
      actions={[
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
      pagination={{
        onChange: (page) => {},
        pageSize: 3,
      }}
      dataSource={data}
      renderItem={renderItem}
    />
  );
};