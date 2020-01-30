import React, {useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { getPlacementTestById, toggleEditPlacement } from '../../../../../actions';
import { withRouter, Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react'
import { Row, Col } from 'antd';
import PlacementForm from './placementForm'
import './placementTest.scss'

const PlacementTest = props => {
    
    useEffect(() => {
        props.getPlacementTestById(props.studentID)
    }, [])

const editModal = e => {
      e.preventDefault();
      props.toggleEditPlacement()
  }

    let options = { year: 'numeric', month: 'numeric', day: 'numeric' }; //'long'
    let test_date = new Date(props.placementTestById.test_date).toLocaleDateString('en-GB', options) 
    return(
        <>
         <div>       
        <Row type="flex" justify="end">
            <Col>
            <Icon name="edit"  onClick={editModal} style = {{color:"#26ABBD",cursor:"pointer"}}/>
            </Col>
            
        </Row>
        {/* row1 */}
        <Row className="evenHeight" type="flex" justify="space-around" >
            <Col span={4}><h4>Student ID</h4></Col>
            <Col span={4}><h4>Test Date</h4></Col>
            <Col span={4}><h4>Test</h4></Col>
            <Col span={4}><h4>Overall Lavel</h4></Col>
        </Row>
        <Row className="evenHeight" type="flex" justify="space-around" >
            <Col span={4}>{props.placementTestById.student_id || "-"}</Col>
            <Col span={4}>{test_date || "-" }</Col>
            <Col span={4}>{props.placementTestById.test || "-" }</Col>
            <Col span={4}>{props.placementTestById.overall_level || "-" }</Col>
        </Row>
        {/* row2 */}
        <Row className="evenHeight" type="flex" justify="space-around" >
            <Col span={4}><h4>Speaking Fluency</h4></Col>
            <Col span={4}><h4>Spoken Accuracy</h4></Col>
            <Col span={4}><h4>Oral Level</h4></Col>
            <Col span={4}><h4>Listening </h4></Col>
        </Row>
        <Row className="evenHeight" type="flex" justify="space-around" >
            <Col span={4}>{props.placementTestById.speaking_fluency || "-" }</Col>
            <Col span={4}>{props.placementTestById.spoken_accuracy || "-" }</Col>
            <Col span={4}>{props.placementTestById.oral_level || "-" }</Col>
            <Col span={4}>{props.placementTestById.listening_comprehension || "-" }</Col>
        </Row>
        {/* row3 */}
        <Row className="evenHeight" type="flex" justify="space-around" >
            <Col span={4}><h4>MC Correct</h4></Col>
            <Col span={4}><h4>MC Lavel</h4></Col>
            <Col span={4}><h4>MC Marked</h4></Col>
            <Col span={4}><h4>Writing Lavel</h4></Col>
        </Row>
        <Row className="evenHeight" type="flex" justify="space-around" >
            <Col span={4}>{props.placementTestById.mc_correct || "-" }</Col>
            <Col span={4}>{props.placementTestById.mc_level || "-" }</Col>
            <Col span={4}>{props.placementTestById.mc_marked || "-" }</Col>
            <Col span={4}>{props.placementTestById.writing_level || "-" }</Col>
        </Row>
        {/* row4 */}
        <Row className="evenHeight" type="flex" justify="space-around" >
            <Col span={4}><h4>Notes</h4></Col>
            <Col span={4}><div></div></Col>
            <Col span={4}><div></div></Col>
            <Col span={4}><div></div></Col>
        </Row>
        <Row type="flex" justify="space-around" style={{height:'55px'}} >
            <Col span={22} offset={1}>{props.placementTestById.notes || "-" }</Col>
        </Row>
        </div>
        </>
    )
}

const mapStateToProps = state => {
    return {
        isLoading: state.placementTestReducer.isLoading,
        placementTestById: state.placementTestReducer.placementTestById,
        isTestEditing: state.placementTestReducer.isTestEditing,
    };
  };
  
  export default withRouter(
    connect(
      mapStateToProps,
      { getPlacementTestById, toggleEditPlacement }
  )(PlacementTest)
  )
