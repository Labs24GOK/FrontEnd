import React from 'react';
import { Table, Badge, Menu, Dropdown, Icon } from 'antd';

const Invoices = props => {
    const columns = [
        {
          title: 'Course ID',
          dataIndex: 'course_id',
          key: 1,
        },
        {
          title: 'Item ID',
          dataIndex: 'item_id',
          key: 2,
        },
        {
        title: 'Quantity',
        dataIndex: 'quantity',
        key: 3,
        },
        {
          title: 'Invoice number',
          dataIndex: 'invoice_number',
          key: 4,
        }
      ];
    
      const data = [
        {
            course_id: 231,
            item_id: 441,
            quantity: "x2",
            invoice_number: 993
        }
      ]

    return (
        <>
        <Table columns={columns} dataSource={data} pagination={false} />
        </>
    )
}

export default Invoices;