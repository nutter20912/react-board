import PostForm from '../../components/post/PostForm';
import { Confirm } from '../../components/Confirm';
import { useState } from 'react';

const fakeApi = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const NewPost = () => {
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const onFinish = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const handleOk = () => {
    setConfirmLoading(true);

    createPost().then(() => {
      setVisible(false);
      setConfirmLoading(false);
    });
  };

  const renderConfirm = (
    <Confirm
      visible={visible}
      handleOk={handleOk}
      confirmLoading={confirmLoading}
      handleCancel={handleCancel}
    />
  );

  const createPost = async () => {
    await fakeApi(3000);

    return 'ok';
  };

  return (
    <PostForm
      createPost={createPost}
      onFinish={onFinish}
      renderConfirm={renderConfirm}
    />
  );
}
