import React from 'react';
import { Form, Input, Button, InputNumber } from 'antd';
import { useParams } from 'react-router-dom';
import http from '../common/http-common';


function UpdateDog() {

  const onFinish = values => {
    const{confirm, ...data} = values;
    console.log(values)
    
  http.defaults.headers.common['Authorization'] = `Basic `+localStorage.getItem('token')
  http.put(`/dogs/${values.id}`, `{ "name": "${values.name}", "age": ${values.age}, "breed": "${values.breed}", "gender": "${values.gender}", "height": ${values.height}, "weight": ${values.weight}, "imageurl": "${values.imageurl}", "summary": "${values.summary}" }`)
    .then(response => {
			console.log(response.data);
		})
		.catch(err => {
			console.log('Update failed: ', err);
		});
  }
  
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
		<Form {...formItemLayout} name="updateDog" onFinish = {onFinish}>
      <Form.Item name="id" label="Dog ID to be updated">
				<InputNumber />
			</Form.Item>
      <Form.Item name="name" label="Dog name">
				<Input />
			</Form.Item>
      <Form.Item name="gender" label="Gender">
				<Input />
			</Form.Item>
      <Form.Item name="age" label="Age">
				<InputNumber />
			</Form.Item>
      <Form.Item name="breed" label="Breed">
				<Input />
			</Form.Item>
      <Form.Item name="height" label="Height">
				<InputNumber />
			</Form.Item>
      <Form.Item name="weight" label="Weight">
				<InputNumber />
			</Form.Item>
      <Form.Item name="imageurl" label="Imageurl">
				<Input />
			</Form.Item>
      <Form.Item name="summary" label="Summary">
				<Input />
			</Form.Item>
			<Form.Item {...tailFormItemLayout}>
				<Button type="primary" htmlType="submit">
					Update
				</Button>
			</Form.Item>
		</Form>
    </>
  )
}

export default UpdateDog;