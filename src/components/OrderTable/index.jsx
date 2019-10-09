import React from 'react';

import { Table, Divider, Tag, Select } from 'antd';


const data = [
  {
    key: '1',
    firstName: 'John',
    lastName: 'Brown',
    tableNo: 32,
    order: 'Rice and jollof',
    state: 'Jotted down',
  },
  {
    key: '2',
    firstName: 'Jim',
    lastName: 'Green',
    tableNo: 42,
    order: 'Rice and jollof',
    state: 'Getting cooked',
  },
];

function OrderTable() {
  const { Column, ColumnGroup } = Table;
  const { Option } = Select;

  function handleChange() { };

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
        render={(text, record) => (
          <span>
            <Select defaultValue="Getting cooked" style={{ width: 160 }} onChange={handleChange}>
              <Option value="jack">Jotted down</Option>
              <Option value="lucy">Getting cooked</Option>
              <Option value="Yiminghe">Ready for table</Option>
              <Option value="Yiminghe">Taken to table</Option>
            </Select>

            <Divider type="vertical" />
            <a>Update</a>
          </span>
        )}
      />
    </Table>
  );
}

export default OrderTable;
