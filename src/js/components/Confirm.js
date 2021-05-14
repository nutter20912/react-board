import { Modal } from 'antd';
import { useState } from 'react';

export const Confirm = ({
  visible,
  handleOk,
  confirmLoading,
  handleCancel,
  showMsg
}) => {
  const [modalText, setModalText] = useState('是否新增文章');

  return (
    <Modal
      title="new post"
      visible={visible}
      onOk={handleOk}
      confirmLoading={confirmLoading}
      onCancel={handleCancel}
    >
      <p>{modalText}</p>
    </Modal>
  );
};