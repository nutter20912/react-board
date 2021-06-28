import { Button, Form, Input, message } from 'antd';
import { useHistory } from "react-router-dom";
import styled from 'styled-components';
import background from '../../images/background.jpeg';
import logo from '../../images/logo.png';
import * as Api from '../api';
import { memory, storage } from '../utils';

const LoginPage = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${background});
  background-size:cover;
`

const Header = styled.header`
  align-items: center;
  display:flex;
  font-size: 20px;
`

const LogoImage = styled.img`
  src: ${props => props.src};
  height: 50px;
  border-radius: 50%;
  margin: 0 15px 15px 50px;
`

const Content = styled.section`
  width: 400px;
  height: 300px;
  background-color: #fff;
  margin: 50px auto;
  padding: 20px 40px;
`

const ContentTitle = styled.h2`
  text-align: center;
  margin-bottom: 30px;
`

/**
 * 登入頁面
 */
export const Login = () => {
  const [form] = Form.useForm();
  const history = useHistory();


  const onFinish = () => {
    const { username, password } = form.getFieldsValue(true);

    Api.userLogin({ username, password })
      .then((response) => {
        if (response.length === 0) {
          message.error('登入失敗');

          return;
        }

        const user = response[0];
        memory.user = user;
        storage.set('user', user);

        history.replace('/');
        message.success('登入成功');
      });
  };

  return (
    <LoginPage>
      <Header>
        <LogoImage src={logo} />
        <h1>管理系統</h1>
      </Header>
      <Content>
        <ContentTitle>使用者登入</ContentTitle>
        <Form
          form={form}
          onFinish={onFinish}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              { required: true, message: 'Please input your username!' },
              { max: 8, message: 'max lengh 8 ' },
              { pattern: /^[a-zA-Z0-9]+$/, message: 'number or english' },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              { required: true, message: 'Please input your password!' },
              { max: 8, message: 'max lengh 8 ' },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item >
            <Button type="primary" htmlType="submit" block>
              login in
            </Button>
          </Form.Item>
        </Form>
      </Content>
    </LoginPage>
  );
}


