import PostForm from '../../components/post/PostForm';
import { useState } from 'react';
import { Modal, Button, message, Space } from 'antd';
import { fakeApi } from '../../utils';

export const NewPost = ({ visible, setVisible, pushPosts }) => {
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [cancelDisabled, setCancelDisabled] = useState(false);

  const success = (msg) => {
    message.success(msg);
  };

  const onFinish = () => {
    setConfirmLoading(true);
    setCancelDisabled(true);

    createPost().then((res) => {
      pushPosts(res);

      setVisible(false);
      setConfirmLoading(false);
      success('新增成功');
    });
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const createPost = async () => {
    try {
      return fakeApi(1000, {
        post_id: 2,
        name: 'alex',
        title: 'xxxx',
        context: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
        comments: []
      });
    } catch (error) {
      return 'createPost error';
    }
  };

  return (
    <Modal
      title='new post'
      visible={visible}
      confirmLoading={confirmLoading}
      footer={[
        <Button onClick={handleCancel} disabled={cancelDisabled}>
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
      <PostForm
        createPost={createPost}
        onFinish={onFinish}
      />
    </Modal>
  );
}
