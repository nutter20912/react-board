import { List, Button, Skeleton, Space } from 'antd';
import { useState } from 'react';
import { MessageOutlined, LikeOutlined } from '@ant-design/icons';
import { Detail } from './Detail';

export const Posts = ({ data }) => {
  const [showPostDetail, setShowPostDetail] = useState(false);
  const [detailData, setdDtailData] = useState([]);

  const IconText = ({
    IconComponent,
    text,
    postId
  }) => (
    <Space>
      <Button
        onClick={() => showDetail(postId)}
        type="link"
        size='large'
        icon={<IconComponent />}
      >
      {text}
      </Button>
    </Space>
  );

  const showDetail = (postId) => {
    setdDtailData(data[postId]);
    setShowPostDetail(true);
  }

  const getActions = (item) => [
    <IconText
      IconComponent={LikeOutlined}
      text="156"
    />,
    <IconText
      IconComponent={MessageOutlined}
      text="0"
      postId={item.post_id}
    />
  ];

  const renderItem = (item) => (
    <List.Item actions={getActions(item)}>
      <Skeleton avatar title={false} loading={false} active>
        <List.Item.Meta title={<p>{item.name}</p>}/>
        <div>{item.context}</div>
      </Skeleton>
    </List.Item>
  );

  return (
    <>
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

      <Detail
        data={detailData}
        visible={showPostDetail}
        setVisible={setShowPostDetail}
      />
    </>
  );
};