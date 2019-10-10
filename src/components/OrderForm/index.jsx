import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { addRecord } from '../../actions';

import {
  Form,
  Input,
  InputNumber,
  Button,
} from 'antd';

const { TextArea } = Input;

function OrderForm() {
  const dispatch = useDispatch();
  const [formInput, setFormInput] = useState(
    {
      firstName: '',
      lastName: '',
      tableNo: '',
      order: '',
      state: 'Jotted down',
    }
  );

  function updateLocalState(event) {
    setFormInput({ ...formInput, [event.target.name]: event.target.value });
  }

  function updateLocalStateTable(number) {
    setFormInput({ ...formInput, tableNo: number });
  }

  async function handleSubmit(data) {

    if (data.tableNo === "" || data.order === "") {
      return alert('Table number and order are compulsory');
    }

    const response = await dispatch(addRecord(data))

    if (response.message === 'success') {
      alert('Order has been successfully saved');
    } else {
      alert('An error occured, please try later');
    }
  }

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
      <Form.Item label="First name" name="firstName" onChange={updateLocalState}>
        <Input name="firstName" onChange={updateLocalState} />
      </Form.Item>
      <Form.Item label="Last name">
        <Input name="lastName" onChange={updateLocalState} />
      </Form.Item>
      <Form.Item label="Table number" >
        <InputNumber name="tableNo" onChange={updateLocalStateTable} />
      </Form.Item>
      <Form.Item label="Order" >
        <TextArea
          name="order"
          onChange={updateLocalState}
          placeholder="Enter customer order here"
          autosize={{ minRows: 3 }} />
      </Form.Item>
      <Form.Item {...tailFormItemLayout} >
        <Button type="primary" htmlType="submit" onClick={() => handleSubmit(formInput)}>
          Save
        </Button>
      </Form.Item>
    </Form >
  );
}

export default OrderForm;
