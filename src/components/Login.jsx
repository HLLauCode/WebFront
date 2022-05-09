import React from 'react'
import { Form, Input, Button } from 'antd';
import {Buffer} from 'buffer';
import http from '../common/http-common';


function Login() {

  const onFinish = values => {
    const{confirm, ...data} = values;
    console.log(values)
    const access_token = Buffer.from(values.username + ':' +values.password, 'utf8').toString('base64');

  http
		.get('/private', {
      headers: {
        'Authorization': `Basic ${access_token}`
      },
    }).then(response => {
			console.log(response.data);
      localStorage.setItem('token', access_token)
		})
		.catch(err => {
			console.log('Login failed: ', err);
		});
}
  

  const formItemLayout = {
		labelCol: { xs: { span: 24 }, sm: { span: 6 } },
		wrapperCol: { xs: { span: 24 }, sm: { span: 12 } }
	};

  const tailFormItemLayout = {
		wrapperCol: { xs: { span: 24, offset: 0 }, sm: { span: 18, offset: 3 } }
	};
  
  return (
    <>
    <p/>
		<Form {...formItemLayout} name="login" onFinish = {onFinish}>
      <Form.Item name="username" label="Username">
				<Input />
			</Form.Item>
			<Form.Item name="password" label="Password">
				<Input.Password />
			</Form.Item>
			<Form.Item {...tailFormItemLayout}>
				<Button type="primary" htmlType="submit">
					Login
				</Button>
			</Form.Item>
		</Form>
    </>
  )
}

export default Login;