import { Modal, Typography, Button} from 'antd';
// import { useState } from 'react';
import { UserOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

export const Detail = ({ visible, setVisible, data }) => {

  // const [isModalVisible, setIsModalVisible] = useState(false);

  const handleOk = () => {
    // setIsModalVisible(false);
    setVisible(false);
  };

  const handleCancel = () => {
    // setIsModalVisible(false);
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