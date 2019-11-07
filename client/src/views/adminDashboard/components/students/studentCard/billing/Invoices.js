import React from 'react';
import { Row, Col } from 'antd';
import './billing.scss'

const Invoices = props => {
    
      const data = [
        {invoice: [{
            course_id: 231,
            item_id: 441,
            quantity: "x2",
            invoice_number: 993,
            payment_due: "11/11/19",
            amount: 200,
            notes: "Thank you"
            }]
        },
        {invoice: [{
            course_id: 231,
            item_id: 441,
            quantity: "x2",
            invoice_number: 993,
            payment_due: "11/11/19",
            amount: 200,
            notes: "Thank you"
            }]
        },
        {invoice: [{
            course_id: 231,
            item_id: 441,
            quantity: "x2",
            invoice_number: 993,
            payment_due: "11/11/19",
            amount: 200,
            notes: "Thank you"
            }]
        },
        {invoice: [{
            course_id: 231,
            item_id: 441,
            quantity: "x2",
            invoice_number: 993,
            payment_due: "11/11/19",
            amount: 200,
            notes: "Thank you"
            }]
        },
        
      ]
    //   const 

    return (
        <>
            {data.map(item => (
                <div>
            <Row  className="invoice-top-row" type="flex" justify="start">
                    <Col span={3}><h4>Course ID</h4></Col>
                    <Col span={3}><h4>Item ID</h4></Col>
                    <Col span={3}><h4>Quantity</h4></Col>
                    <Col span={3}><h4>Invoice number</h4></Col>
                </Row>
                <Row type="flex" justify="start">
                    <Col span={3}>{item.invoice[0].course_id}</Col>
                    <Col span={3}>{item.invoice[0].item_id}</Col>
                    <Col span={3}>{item.invoice[0].quantity}</Col>
                    <Col span={3}>{item.invoice[0].invoice_number}</Col>
                </Row>
                <Row type="flex" justify="end">
                    <Col span={3}><h4>Payment Due</h4></Col>
                </Row>
                <Row type="flex" justify="end">
                    <Col span={3}>{item.invoice[0].payment_due}</Col>
                </Row>
                <Row className="invoice-amount-row"type="flex" justify="space-between">
                    <Col span={3}><h4>Note</h4></Col>
                    <Col span={3}></Col>
                    <Col span={3}></Col>
                    <Col span={3}><h4>Amount</h4></Col>
                </Row>
                <Row className="invoice-bottom-row" type="flex" justify="space-between">
                    <Col span={3}>{item.invoice[0].notes}</Col>
                    <Col span={3}></Col>
                    <Col span={3}></Col>
                    <Col span={3}>{item.invoice[0].amount}</Col>
                </Row>
            </div>
            ))}
           
        </>
    )
}

export default Invoices;