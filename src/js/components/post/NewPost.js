import { Button, message, Modal } from 'antd';
import { useState } from 'react';
import { useHistory } from "react-router-dom";
import * as Api from '../../api';
import PostForm from './PostForm';

/**
 * 新增文章頁面
 */
export const NewPost = ({ selfVisible, setSelfVisible, pushPosts }) => {
  const [confirmLoading, setConfirmLoading] = useState(false);

  const history = useHistory();

  const handleCancel = () => {
    setSelfVisible(false);
  };

  const onFinish = () => {
    setConfirmLoading(true);

    const data = {
      post_id: 2,
      name: 'alex',
      title: 'xxxx',
      context: 'We supply a series of design principles.',
      comments: []
    };

    createPost(data).then((res) => {
      pushPosts(res);
      setSelfVisible(false);
      setConfirmLoading(false);
      message.success('新增成功');
      history.replace('/');
    });
  };

  const createPost = async (data) => {
    try {
      return Api.addPost(data);
    } catch (error) {
      return 'createPost error';
    }
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
      <PostForm
        createPost={createPost}
        onFinish={onFinish}
      />
    </Modal>
  );
}
