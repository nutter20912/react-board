import PostForm from '../../components/post/PostForm';
import { useState } from 'react';
import { Modal, Button } from 'antd';

const fakeApi = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const NewPost = ({ visible, setVisible }) => {
  // const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  // const [modalText, setModalText] = useState('是否新增文章');

  const onFinish = () => {
    setConfirmLoading(true);

    createPost().then(() => {
      setVisible(false);
      setConfirmLoading(false);
    });
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const createPost = async () => {
    await fakeApi(3000);

    return 'ok';
  };

  return (
    <Modal
      title='new post'
      visible={visible}
      confirmLoading={confirmLoading}
      footer={[
        <Button onClick={handleCancel}>
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
