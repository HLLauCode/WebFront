import React from 'react';
import { Button, Image, Spin, Form, InputNumber } from 'antd';
import http from '../common/http-common.js';

function DeleteDog(props) {
  
  const onFinish = values => {
    
    const {confirm, ...data} = values;
    console.log(data.dogID)
    
		  http
			  .delete(`/dogs/${data.dogID}`, {
          headers: {
        'Authorization': 'Basic '+localStorage.getItem('token')
          },
        }).then(response => {
			  	console.log(response.data);
			  }).catch(err => {
			    console.log('Delete failed: ', err);
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
      <Form {...formItemLayout} name="deleteDog" onFinish = {onFinish}>
			<Form.Item name="dogID" label="Dog ID to be removed">
				<InputNumber />
			</Form.Item>
			<Form.Item {...tailFormItemLayout}>
				<Button type="primary" htmlType="submit">
					Remove
				</Button>
			</Form.Item>
      </Form>

		</>
	)
	
}

export default DeleteDog;
