import Axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Button, Form, Input, notification} from 'antd';
type FieldType = {
  username?: string;
  password?: string;
};
const SingUp = () => {
  // const [filedErrors, setFieldErrors] = useState({});
  const onFinish = values => {
    const fn = async () => {
      const {username, password} = values;
      const data = {username, password};
      try {
        await Axios.post('http://127.0.0.1:8000/account/singup/', data);
        notification.open({
          message: '회원가입 성공',
          description: '로그인 페이지로 이동합니다',
        });
      } catch (error) {
        if (error.response) {
          notification.open({
            message: '회원가입 실패',
            description: '아이디/비밀번호를 확인해주세요',
          });
          // const {data: fieldsErrorMessage} = error.response;
          // setFieldErrors(
          //   Object.entries(fieldsErrorMessage).reduce((acc, [fieldName, errors]) => {
          //     acc[fieldName] = {
          //       validateStatus: 'errors',
          //       [fieldName]: errors,
          //     };
          //     return acc;
          //   }, {}),
          // );
        }
      }
    };
    fn();
  };

  return (
    <Form
      labelCol={{span: 8}}
      wrapperCol={{span: 16}}
      style={{maxWidth: 600}}
      // initialValues={{remember: true}}
      onFinish={onFinish}
      // onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item<FieldType>
        label="Username"
        name="username"
        rules={[{required: true, message: '5글자 이상'}]}
        hasFeedback
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label="Password"
        name="password"
        rules={[{required: true, message: 'Please input your password!'}]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item wrapperCol={{offset: 8, span: 16}}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
export default SingUp;
