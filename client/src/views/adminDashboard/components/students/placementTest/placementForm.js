import React, {useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { editPlacementTestById, toggleEditPlacement } from '../../../../../actions';
import { withRouter, Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react'
import { Input, Row, Col} from 'antd';
import './placementTest.scss';

const { TextArea } = Input;
const PlacementTest = props => {
    const [state, setState] = useState({
        id: props.placementTestById.id,
        placement_id: props.placementTestById.placement_id,
        student_id: props.placementTestById.student_id,
        test_date: props.placementTestById.test_date,
        test: props.placementTestById.test,
        overall_level: props.placementTestById.overall_level,
        speaking_fluency:props.placementTestById.speaking_fluency,
        spoken_accuracy: props.placementTestById.spoken_accuracy,
        oral_level: props.placementTestById.oral_level,
        listening_comprehension: props.placementTestById.listening_comprehension,
        mc_correct: props.placementTestById.mc_correct,
        mc_level: props.placementTestById.mc_level,
        mc_marked: props.placementTestById.mc_marked,
        writing_level: props.placementTestById.writing_level,
    })

    const handleChange = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = e => {
        e.preventDefault();
        props.editPlacementTestById(props.studentID, state)
    }
    const cancal = e => {
        e.preventDefault();
        props.toggleEditPlacement()
    }
    let options = { year: 'numeric', month: 'numeric', day: 'numeric' }; //'long'
    let test_date = new Date(props.placementTestById.test_date).toLocaleDateString('en-GB', options) 
    return(
        <>
        <form onSubmit={handleSubmit}>
        <Row type="flex" justify="end">
           <Col>
                <Icon name="save"  onClick={handleSubmit} style={{ color: "#26ABBD", cursor: "pointer" }} /> 
           </Col>
           <Col>
                <Icon name="cancel"  onClick={cancal} style={{ color: "#C73642", cursor: "pointer" }} />
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
            <Col span={4}>
                <Input size="small"
                    type='text'
                    name='test'
                    placeholder='Test'
                    onChange={handleChange}
                    value={state.test}
                />
            </Col>
            <Col span={4}>
                <Input size="small" 
                    type='text'
                    name='overall_level'
                    placeholder='Overall Level'
                    onChange={handleChange}
                    value={state.overall_level}
                />
            </Col>
        </Row>
        {/* row2 */}
        <Row className="evenHeight" type="flex" justify="space-around" >
            <Col span={4}><h4>Speaking Fluency</h4></Col>
            <Col span={4}><h4>Spoken Accuracy</h4></Col>
            <Col span={4}><h4>Oral Level</h4></Col>
            <Col span={4}><h4>Listening</h4></Col>
        </Row>
        <Row className="evenHeight" type="flex" justify="space-around" >
            <Col span={4}>
                <Input size="small" 
                    type='text'
                    name='speaking_fluency'
                    placeholder='Speaking_Fluency'
                    onChange={handleChange}
                    value={state.speaking_fluency}
                />
            </Col>
            <Col span={4}>
                <Input size="small" 
                    type='text'
                    name='spoken_accuracy'
                    placeholder='Spoken Accuracy'
                    onChange={handleChange}
                    value={state.spoken_accuracy}
                />
            </Col>
            <Col span={4}>
            <Input size="small" 
                type='text'
                name='oral_level'
                placeholder='Oral Level'
                onChange={handleChange}
                value={state.oral_level}
            />
            </Col>
            <Col span={4}>
            <Input size="small" 
                type='text'
                name='listening_comprehension'
                placeholder='Listening Comprehension'
                onChange={handleChange}
                value={state.listening_comprehension}
            />
            </Col>
        </Row>
        {/* row3 */}
        <Row className="evenHeight" type="flex" justify="space-around" >
            <Col span={4}><h4>MC Correct</h4></Col>
            <Col span={4}><h4>MC Lavel</h4></Col>
            <Col span={4}><h4>MC Marked</h4></Col>
            <Col span={4}><h4>Writing Lavel</h4></Col>
        </Row>
        <Row className="evenHeight" type="flex" justify="space-around" >
            <Col span={4}>
                <Input size="small" 
                    type='text'
                    name='mc_correct'
                    placeholder='MC Correct'
                    onChange={handleChange}
                    value={state.mc_correct}
                />
            </Col>
            <Col span={4}>
                <Input size="small" 
                    type='text'
                    name='mc_level'
                    placeholder='MC Lavel'
                    onChange={handleChange}
                    value={state.mc_level}
                />
            </Col>
            <Col span={4}>
                <Input size="small" 
                    type='text'
                    name='mc_marked'
                    placeholder='MC Marked'
                    onChange={handleChange}
                    value={state.mc_marked}
                />  
            </Col>
            <Col span={4}>
                <Input size="small" 
                    type='text'
                    name='writing_level'
                    placeholder='Writing Lavel'
                    onChange={handleChange}
                    value={state.writing_level}
                />
            </Col>
        </Row>
        {/* row4 */}
        <Row className="evenHeight" type="flex" justify="space-around" >
            <Col span={4}><h4>Notes</h4></Col>
            <Col span={4}><div></div></Col>
            <Col span={4}><div></div></Col>
            <Col span={4}><div></div></Col>
        </Row>
        <Row >
            <Col span={22} offset={1}>
                <TextArea
                    type='text'
                    name='notes'
                    placeholder='Notes'
                    onChange={handleChange}
                    value={state.notes}
                /></Col>

        </Row>
        </form>
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
      { editPlacementTestById, toggleEditPlacement }
  )(PlacementTest)
  )
