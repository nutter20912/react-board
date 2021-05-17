import { Button, PageHeader, Descriptions } from 'antd';
import { NewPost } from './NewPost';
import { useState } from 'react';

const AddButton = ({ onClick }) => {

  return (
    <Button
      type="primary"
      onClick={onClick}
    >
      新增 post
    </Button>
  );
};

export const PostList = () => {
  const [visible, setVisible] = useState(false);

  const onClick = () => {
    setVisible(true);
  }

  return (
    <PageHeader
      ghost={false}
      title='post list'
      extra={
        <AddButton onClick={onClick} />
      }
    >
      <Descriptions size="small" column={3}>
        <Descriptions.Item label="Created">list</Descriptions.Item>
      </Descriptions>
      <NewPost
        visible={visible}
        setVisible={setVisible}
      />
    </PageHeader>
  );
}
