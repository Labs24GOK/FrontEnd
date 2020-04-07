import React, {useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { getPlacementTestById, toggleEditPlacement } from '../../../../../actions';
import { withRouter, Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react'
import { FormWrap, Div, SaveButton, FormSet, ButtonDiv, TextDiv, Label } from '../../mainStyle/styledComponent';
import { getDateStringENGBFormat } from "../../../../../utils/helpers";
import './placementTest.scss'

const PlacementTest = props => {
    
    useEffect(() => {
        props.getPlacementTestById(props.studentID)
    }, [])

    const editModal = e => {
        e.preventDefault();
        props.toggleEditPlacement()
    }

    const testData = props.placementTestById;

    // temp; get from props in finished form
    const categoryNames = ["Student ID", "Test Date", "Test", "Overall Level", "Speaking Fluency", "Spoken Accuracy", "Oral Level", "Listening Comprehension", "MC Correct", "MC Level", "MC Marked", "Writing Level", "Notes"];
    const categories = ["student_id", "test_date", "test", "overall_level", "speaking_fluency", "spoken_accuracy", "oral_level", "listening_comprehension", "mc_correct", "mc_level", "mc_marked", "writing_level", "notes"];
    
    return(
        <FormWrap>
            <FormSet>
                <Div>    
                    {categories.map((category, id) => {

                        let data = testData[category] || "N/A";

                        if (category === "test_date")
                            { data = getDateStringENGBFormat(data); }

                        return (
                            <div>
                                <Label>{categoryNames[id]}</Label>
                                <TextDiv>{data}</TextDiv>
                            </div>
                        )
                    })}
                </Div>
            </FormSet>
            <ButtonDiv>
                <SaveButton type="submit" onClick={editModal}>
                    Edit
                </SaveButton>
            </ButtonDiv>
        </FormWrap>
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
