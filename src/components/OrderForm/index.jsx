import React from 'react';

import {
  Form,
  Input,
  InputNumber,
  Button,
} from 'antd';

const { TextArea } = Input;

function OrderForm() {

  const formItemLayout = {
    labelCol: {
      xs: { span: 8 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 8 },
      sm: { span: 8 },
    },
  };
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };

  return (
    <Form {...formItemLayout} >
      <Form.Item label="First name">
        <Input />
      </Form.Item>
      <Form.Item label="Last name">
        <Input />
      </Form.Item>
      <Form.Item label="Table number">
        <InputNumber />
      </Form.Item>
      <Form.Item label="Order" >
        <TextArea
          placeholder="Enter customer order here"
          autosize={{ minRows: 3 }} />
      </Form.Item>
      <Form.Item {...tailFormItemLayout} >
        <Button type="primary" htmlType="submit">
          Save
        </Button>
      </Form.Item>
    </Form >
  );
}

export default OrderForm;
