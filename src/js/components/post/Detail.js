import { Modal, Typography, Button} from 'antd';
// import { useState } from 'react';
import { UserOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

export const Detail = ({ visible, setVisible, data }) => {
  const handleOk = () => {
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <Modal
      title='new post'
      visible={visible}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <Typography>
        <Title level={2}>{data.title}</Title>

        <Button
          // type="link"
          shape='round'
          icon={<UserOutlined />}
        >
          {data.name}
        </Button>

        <Paragraph>
          {data.context}
        </Paragraph>
      </Typography>
    </Modal>
  );
}