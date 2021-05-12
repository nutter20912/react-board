import { Form, Input, Button, Modal } from 'antd';
import { useState } from 'react';

const fakeApi = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const PostForm = () => {
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState('是否新增文章');

  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };

  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };

  const onFinish = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setConfirmLoading(true);

    createPost().then(() => {
      setVisible(false);
      setConfirmLoading(false);
    });

  };

  const createPost = async () => {
    await fakeApi(3000);

    return 'ok';
  };

  const handleCancel = () => {
    setVisible(false);
  };

  // const onFinishFailed = () => { console.log('fail')};

  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      // onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="title"
        name="title"
        rules={[
          {
            required: true,
            message: 'Please input your title!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="content"
        name="content"
        rules={[
          {
            required: true,
            message: 'Please input your content!',
          },
        ]}
      >
        <Input.TextArea rows={4} />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
      <Modal
        title="new post"
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <p>{modalText}</p>
      </Modal>
    </Form>
  );
}

export default PostForm;
