import React from 'react';
import OrderTable from '../../components/OrderTable';
import { useSelector } from 'react-redux';

function TableView() {

  const records = useSelector((state: { records: {} }) => state.records)
  return (
    <OrderTable data={records} />
  );
}

export default TableView;
