import { Button, message, Modal } from 'antd';
import { useState } from 'react';
import * as Api from '../../api';
import PostForm from './PostForm';

/**
 * 新增文章頁面
 */
export const NewPost = ({ selfVisible, setSelfVisible, unshiftPosts }) => {
  const [confirmLoading, setConfirmLoading] = useState(false);

  const handleCancel = () => {
    setSelfVisible(false);
  };

  const onFinish = () => {
    setConfirmLoading(true);

    const data = {
      "id": 99,
      name: 'alex',
      title: 'xxxx',
      context: 'We supply a series of design principles.',
      comments: []
    };

    Api.addPost(data)
      .then((res) => {
        unshiftPosts(res);
        message.success('新增成功');

        setSelfVisible(false);
        setConfirmLoading(false);
      })
      .catch(() => {
        setSelfVisible(false);
        setConfirmLoading(false);
      });

  };
  return (
    <Modal
      title='new post'
      visible={selfVisible}
      confirmLoading={confirmLoading}
      footer={[
        <Button onClick={handleCancel} disabled={confirmLoading}>
          取消
        </Button>,
        <Button
          form='addPost'
          htmlType='submit'
          loading={confirmLoading}
        >
          送出
        </Button>
      ]}
    >
      <PostForm onFinish={onFinish}/>
    </Modal>
  );
}
