import React from 'react';
import { Form, Input, Button } from 'antd';
import http from '../common/http-common';

function onFinish(values) {

  
	const { confirm, ...data } = values;

  //assume that the employee already know the sign up code 9487 to register as admin role
  if (values.code == 9487) {
    http
		.post('/users', `{ "email": "${data.email}", "password": "${data.password}", "username": "${data.username}", "role": "admin" }`)
		.then(response => {
			console.log(response.data);
		})
		.catch(err => {
			console.log(err);
		});
  } else {
    http
		.post('/users', `{ "email": "${data.email}", "password": "${data.password}", "username": "${data.username}" }`)
		.then(response => {
			console.log(response.data);
		})
		.catch(err => {
			console.log(err);
		});
  }
    
	
}

const emailRules = [
	{ type: 'email', message: 'The input is not valid E-mail!' },
	{ required: true, message: 'Please input your E-mail!' }
];

const passwordRules = [
	{ required: true, message: 'Please input your password!' }
];

const confirmRules = [
	{
		required: true,
		message: 'Please confirm your password!'
	},
	({ getFieldValue }) => ({
		validator(rule, value) {
			if (!value || getFieldValue('password') === value) {
				return Promise.resolve();
			}
			return Promise.reject('Please enter the same password');
		}
	})
];

const usernameRules = [
	{ required: true, message: 'Please input your username!', whitespace: true }
];

const formItemLayout = {
	labelCol: { xs: { span: 24 }, sm: { span: 6 } },
	wrapperCol: { xs: { span: 24 }, sm: { span: 12 } }
};

const tailFormItemLayout = {
	wrapperCol: { xs: { span: 24, offset: 0 }, sm: { span: 18, offset: 3 } }
};

function RegistrationForm() {
  
  
	return (
    <>
    <p/>
		<Form
			name="register"
			{...formItemLayout}
			scrollToFirstError
			onFinish={onFinish}
		>
			<Form.Item name="email" label="E-mail" rules={emailRules}>
				<Input />
			</Form.Item>

			<Form.Item
				name="password"
				label="Password"
				rules={passwordRules}
				hasFeedback
			>
				<Input.Password />
			</Form.Item>

			<Form.Item
				name="confirm"
				label="Confirm Password"
				rules={confirmRules}
				hasFeedback
			>
				<Input.Password />
			</Form.Item>

			<Form.Item name="username" label="Username" rules={usernameRules}>
				<Input />
			</Form.Item>

      <Form.Item name="code" label="Code">
        <Input />
      </Form.Item>
      
			<Form.Item {...tailFormItemLayout}>
				<Button type="primary" htmlType="submit">
					Register
				</Button>
			</Form.Item>
		</Form>
    </>
	);
}

export default RegistrationForm;
