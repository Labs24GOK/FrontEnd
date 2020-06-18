import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { getPlacementTestById, toggleEditPlacement } from '../../../../../actions';
import { withRouter, Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react'
import { FormWrap2, Div, Div4, SaveButton, FormSet, FormSet2, ButtonDiv, TextDiv, Label, HR } from '../../mainStyle/styledComponent';
import { getDateStringENGBFormat } from "../../../../../utils/helpers";
import './placementTest.scss'

const PlacementTest = props => {
    
    useEffect(() => {
        props.getPlacementTestById(props.studentID);
    }, [props.studentID])

    const editModal = e => {
        e.preventDefault();
        props.toggleEditPlacement()
    }

    const testData = props.placementTestById;

    const sortedData = testData.sort((a,b) => (a.test_date < b.test_date) ? 1 : -1);
    
    const background = ["#c3d8e3"]

    return(
        <FormWrap2>
            <FormSet2>
                <div>
                    <h3>This is where the Online results go!!!!</h3>
                    <Div4>
                        <div>
                            <h4>Some Results Here</h4>
                            <h4>Some more results</h4>
                        </div>
                        <div>
                            <h4>Some Results Here</h4>
                            <h4>Some more results</h4>
                        </div>
                        <div>
                            <h4>Some Results Here</h4>
                            <h4>Some more results</h4>
                        </div>
                    </Div4>
                </div>
            </FormSet2>
            <FormSet2>
                <div> 
                    {sortedData.length === 0 ? 
                        <>
                        <Div4>
                            <div style={{ gridColumnStart: "1", gridColumnEnd: "4" }}>
                                <h3>This student currently has 0 Oral Placement Records!</h3>
                            </div>
                        </Div4>
                        <HR></HR>
                        </>
                    :
                        testData.map((item, id) => {
                            console.log("item id: ", id);
                            
                            return (
                                (id === 0 ? 
                                    <>
                                    <Div4 style={{ backgroundColor: background }}>
                                        <div style={{ gridColumnStart: "1", gridColumnEnd: "3" }}>
                                            <Label>Test Date: </Label>
                                            <TextDiv>
                                                {getDateStringENGBFormat(item.test_date)}
                                            </TextDiv>
                                        </div> 
                                        <div>
                                            <Label>Suggested Level: </Label>
                                            <TextDiv>
                                                {item.description} - {item.certificate_text}
                                            </TextDiv>
                                        </div>
                                        
                                        <div>
                                            <Label>Test: </Label>
                                            <TextDiv>
                                                {item.test}
                                            </TextDiv>
                                        </div>
                                        <div>
                                            <Label>Level: </Label>
                                            <TextDiv>
                                                {item.level_id}
                                            </TextDiv>    
                                        </div> 
                                        <div>
                                            <Label>Fluency: </Label>
                                            <TextDiv>
                                                {item.fluency}
                                            </TextDiv>
                                        </div>   
                                        <div>
                                            <Label>Accuracy: </Label>
                                            <TextDiv>
                                                {item.accuracy}
                                            </TextDiv>
                                        </div>
                                        <div>
                                            <Label>Comprehension: </Label>
                                            <TextDiv>
                                                {item.comprehension}
                                            </TextDiv>
                                        </div>
                                        {/* <div>
                                            <Label>Multiple-Choice Correct: </Label>
                                            <TextDiv>
                                                {item.mc_correct}
                                            </TextDiv>
                                        </div>
                                        <div>
                                            <Label>Multiple-Choice Marked: </Label>
                                            <TextDiv>
                                                {item.mc_marked}
                                            </TextDiv>
                                        </div> */}
                                        <div>
                                            <Label>Writing Level: </Label>
                                            <TextDiv>
                                                {item.writing_level}
                                            </TextDiv>
                                        </div>
                                        <div style={{ gridColumn: "1 / -1" }}>
                                            <Label>Notes: </Label>
                                            <TextDiv>
                                                {item.notes}
                                            </TextDiv>
                                        </div>
                                    </Div4>
                                    <ButtonDiv style={{ right: 0 }}>
                                        <SaveButton type="submit" onClick={editModal}>
                                            Edit
                                        </SaveButton>
                                    </ButtonDiv>
    
                                    <HR></HR>
                                    </>
                                    :
                                    <>
                                    <Div4>
                                    <div style={{ gridColumnStart: "1", gridColumnEnd: "3" }}>
                                        <Label>Test Date: </Label>
                                        <TextDiv>
                                            {getDateStringENGBFormat(item.test_date)}
                                        </TextDiv>
                                    </div> 
                                    <div style={{ gridColumn: "1fr" }}>
                                        <Label>Suggested Level: </Label>
                                        <TextDiv>
                                            {item.description} - {item.certificate_text}
                                        </TextDiv>
                                    </div>
                                    
                                    <div>
                                        <Label>Test: </Label>
                                        <TextDiv>
                                            {item.test}
                                        </TextDiv>
                                    </div>
                                    <div>
                                        <Label>Level: </Label>
                                        <TextDiv>
                                            {item.level_id}
                                        </TextDiv>    
                                    </div> 
                                    <div>
                                        <Label>Fluency: </Label>
                                        <TextDiv>
                                            {item.fluency}
                                        </TextDiv>
                                    </div>   
                                    <div>
                                        <Label>Accuracy: </Label>
                                        <TextDiv>
                                            {item.accuracy}
                                        </TextDiv>
                                    </div>
                                    <div>
                                        <Label>Comprehension: </Label>
                                        <TextDiv>
                                            {item.comprehension}
                                        </TextDiv>
                                    </div>
                                    <div>
                                        <Label>Multiple-Choice Correct: </Label>
                                        <TextDiv>
                                            {item.mc_correct}
                                        </TextDiv>
                                    </div>
                                    <div>
                                        <Label>Multiple-Choice Marked: </Label>
                                        <TextDiv>
                                            {item.mc_marked}
                                        </TextDiv>
                                    </div>
                                    <div>
                                        <Label>Writing Level: </Label>
                                        <TextDiv>
                                            {item.writing_level}
                                        </TextDiv>
                                    </div>
                                    <div style={{ gridColumn: "1 / -1" }}>
                                        <Label>Notes: </Label>
                                        <TextDiv>
                                            {item.notes}
                                        </TextDiv>
                                    </div>
                                </Div4>
                                <ButtonDiv style={{ right: 0 }}>
                                    <SaveButton type="submit" onClick={editModal}>
                                        Edit
                                    </SaveButton>
                                </ButtonDiv>

                                <HR></HR>
                                </>
                                    )
                                
                            )
                        })
                    } 
                </div>

            </FormSet2>           
        </FormWrap2>
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
