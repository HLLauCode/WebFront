import React, { useState } from 'react';
import { Form, Input, Button, InputNumber } from 'antd';
import http from '../common/http-common';

function CreateDog() {
  
  const onFinish = values => {
    const{confirm, ...data} = values;
    
    console.log(values)
    
    http.defaults.headers.common['Authorization'] = `Basic `+localStorage.getItem('token')
	  http.post('/dogs', data)
      .then(response => {
		  	console.log(response.data);
		  }).catch(err => {
		  	console.log('Create failed: ', err);
		  });
  }
                  

  const inputRules = [
	{ required: true, message: 'This information is required!' }
];
  
    const formItemLayout = {
		labelCol: { xs: { span: 24 }, sm: { span: 6 } },
		wrapperCol: { xs: { span: 24 }, sm: { span: 12 } }
	};

  const tailFormItemLayout = {
		wrapperCol: { xs: { span: 24, offset: 0 }, sm: { span: 18, offset: 3 } }
	};
  
  return(
    <>
    <p/>
		<Form {...formItemLayout} name="createDog" onFinish = {onFinish}>
      <Form.Item name="name" label="Dog name" rules={inputRules}>
				<Input />
			</Form.Item>
      <Form.Item name="gender" label="Gender" rules={inputRules}>
				<Input />
			</Form.Item>
      <Form.Item name="age" label="Age" rules={inputRules}>
				<InputNumber />
			</Form.Item>
      <Form.Item name="breed" label="Breed" rules={inputRules}>
				<Input />
			</Form.Item>
      <Form.Item name="height" label="Height" rules={inputRules}>
				<InputNumber />
			</Form.Item>
      <Form.Item name="weight" label="Weight" rules={inputRules}>
				<InputNumber />
			</Form.Item>
      <Form.Item name="imageurl" label="Imageurl" rules={inputRules}>
				<Input />
			</Form.Item>
      <Form.Item name="summary" label="Summary">
				<Input />
			</Form.Item>
			<Form.Item {...tailFormItemLayout}>
				<Button type="primary" htmlType="submit">
					Create
				</Button>
			</Form.Item>
		</Form>
    </>
  )
}

export default CreateDog;