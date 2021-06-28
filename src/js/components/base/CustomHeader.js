import { Layout, Modal,Button } from 'antd';
import styled from 'styled-components';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { memory, storage } from '../../utils';
import { useHistory } from "react-router-dom";

const { confirm } = Modal;
const { Header } = Layout;

const HeaderStyle = styled(Header)`
  text-align: right;
  border-bottom: 1px solid #1da57a;
  height: 34px;
  line-height: 34px;
  padding: 0;
`
const HeaderText = styled.span`
  margin-right: 10px;
`

export const CustomHeader = () => {
  const history = useHistory();

  const logout = () => {
    confirm({
      icon: <ExclamationCircleOutlined />,
      content: '確定退出嗎?',
      onOk() {
        memory.user = {};
        storage.reset('user');
        history.replace('/login');
      }
    });
  }

  return (
    <HeaderStyle className="site-layout-background">
      <HeaderText>welcome, admin</HeaderText>
      <Button type="link" size='small' onClick={logout}>Logout</Button>
    </HeaderStyle>
  );
}
