import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editStatus } from '../../actions';
import { Table, Divider, Tag, Select, Button } from 'antd';

function OrderTable({ data }) {
  const dispatch = useDispatch();
  const [changeState, setChangeState] = useState({ key: '', status: '' })
  const { Column, ColumnGroup } = Table;
  const { Option } = Select;

  function handleChange(value, key) {
    setChangeState({ key, status: value })
  };

  async function handleSubmit(key, state) {

    if (state.key === key) {
      const response = await dispatch(editStatus({ ...state }))
      if (response.message === 'success') {
        await setChangeState({key: '', status: ''})
        alert('Order has been successfully updated');
      } else {
        alert('An error occured, please try later');
      }
    }
  }

  return (
    <Table dataSource={data}>
      <ColumnGroup title="Name">
        <Column title="First Name" dataIndex="firstName" key="firstName" />
        <Column title="Last Name" dataIndex="lastName" key="lastName" />
      </ColumnGroup>
      <Column title="Table No" dataIndex="tableNo" key="tableNo" />
      <Column title="Order" dataIndex="order" key="order" />
      <Column
        title="State"
        dataIndex="state"
        key="state"
        render={(state) =>
          <Tag color="blue">
            {state}
          </Tag>
        }
      />
      <Column
        title="Update state"
        key="action"
        render={(text, record) => {
          const toDisable = record.key === changeState.key ? false : true;
          return (
            <span>
              <Select defaultValue="Jotted down" style={{ width: 160 }} key={record.key} onChange={(value) => handleChange(value, record.key)}>
                <Option value="Jotted down">Jotted down</Option>
                <Option value="Getting cooked">Getting cooked</Option>
                <Option value="Ready for table">Ready for table</Option>
                <Option value="Taken to table">Taken to table</Option>
              </Select>

              <Divider type="vertical" />
              <Button disabled={toDisable} onClick={() => handleSubmit(record.key, changeState)}>Update</Button>
            </span>
          )
        }}
      />
    </Table>
  );
}

export default OrderTable;
