import { Modal } from 'antd';
import { useState } from 'react';

export const Detail = ({ visible, setShowPostDetail }) => {

  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleOk = () => {
    setIsModalVisible(false);
    setShowPostDetail(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setShowPostDetail(false);
  };

  return (
    <Modal
      title='new post'
      visible={visible}
      onOk={handleOk}
      onCancel={handleCancel}
    />
  );
}