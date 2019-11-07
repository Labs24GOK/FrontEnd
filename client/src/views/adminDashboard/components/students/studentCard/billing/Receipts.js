import React from 'react';
import { Row, Col } from 'antd';

const Receipts = props => {
    
    
    return (
        <>
            <div>
                <Row type="flex" justify="start" style={{ marginBottom: '15px', background: '#dff2f4', padding: '3px' }}>
                    <Col span={3}><h3>Course ID #12</h3></Col>
                </Row>
                <Row type="flex" justify="space-between" style={{ marginBottom: '5px' }}>
                    <Col span={3}><h4>Items</h4></Col>
                    <Col span={3}><h4>Quanitity</h4></Col>
                    <Col span={3}><h4>Price</h4></Col>
                </Row>
                <Row type="flex" justify="space-between" style={{ marginBottom: '5px' }}>
                    <Col span={3}><p>Registration</p></Col>
                    <Col span={3}><p>x1</p></Col>
                    <Col span={3}><p>20.00</p></Col>
                </Row>
                <Row type="flex" justify="space-between" style={{ marginBottom: '5px' }}>
                    <Col span={3}><p>Book</p></Col>
                    <Col span={3}><p>x0.65</p></Col>
                    <Col span={3}><p>4.00</p></Col>
                </Row>
                <Row type="flex" justify="space-between" style={{ marginBottom: '5px' }}>
                    <Col span={3}><p>Stationary Kit</p></Col>
                    <Col span={3}><p>0.80</p></Col>
                    <Col span={3}><p>8.00</p></Col>
                </Row>
                <Row type="flex" justify="space-between" style={{ marginBottom: '5px' }}>
                    <Col span={3}><p>Course</p></Col>
                    <Col span={3}><p>x0.80</p></Col>
                    <Col span={3}><p>50.00</p></Col>
                </Row>
            </div>
            <Row type="flex" justify="start" style={{ marginTop: '15px' }}>
                <Col span={3}><h4>Note</h4></Col>
            </Row>
            <Row type="flex" justify="start">
                <Col ><p>Amir has requested a hard cover book</p></Col>
            </Row>
            <Row type="flex" justify="end">
                <Col span={3}>TOTAL<h3>$164.00</h3></Col>
            </Row>
        </>
    )
}

export default Receipts;