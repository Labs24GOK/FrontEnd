import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { getPlacementTestById } from '../../../../../actions/';
import { withRouter, Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react'
import { FormWrap2, Div, Div5, Div4, SaveButton, FormSet, FormSet2, ButtonDiv, TextDiv, FlexDiv, Label, HR } from '../../mainStyle/styledComponent';
import { getDateStringENGBFormat } from "../../../../../utils/helpers";
import PlacementForm from './placementForm';
import PlacementEdit from './placementEdit';
import './placementTest.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

const PlacementTest = props => {
    const [addTest, setAddTest] = useState(false);
    const [editTest, setEditTest] = useState(false);
    const [onlineResults, setOnlineResults] = useState([]);
    
    useEffect(() => {
        props.getPlacementTestById(props.studentID);
    }, [addTest, editTest]);

    const editModal = (id) => {
        setEditTest(!editTest);
    };

    const handleAddButton = () => {
        setAddTest(!addTest);
    };

    const testData = props.placementTestById;

    const userAnswersTesting = [
        'b', 'a', 'c', 'c', 'a',
        'b', 'c', 'a', 'b', 'c',
        'b', 'b', 'a', 'b', 'a',
        'c', 'a'
    ]

    const sortedData = testData.sort((a,b) => (a.test_date < b.test_date) ? 1 : -1);
    
    const background = ["#c3d8e3"]

    return(
        <>
            <FormWrap2>
                <FormSet2 style={{ alignSelf: "start" }}>
                    <div>
                        <h3 style={{ textAlign: 'center' }}>Online Placement Records</h3> 
                    {onlineResults.length === 5 ? 
                        <>
                            <Div4>
                                <div style={{ gridColumnStart: "1", gridColumnEnd: "4" }}>
                                    <h3>This student currently has 0 Online Placement Records!</h3>
                                </div>
                            </Div4>
                            <HR></HR>
                        </>
                    :
                        <>
                            <Div5>
                                <Div4>
                                    <div>
                                        <Label>Test Date: </Label>
                                        <TextDiv>
                                            2020-06-19
                                        </TextDiv>
                                    </div>
                                    <div>
                                        <Label>Test: </Label>
                                        <TextDiv>
                                            Primary
                                        </TextDiv>
                                    </div>
                                    <div>
                                        {/* {mc_correct}/{mc_marked} */}
                                        <Label>Score: </Label>
                                        <TextDiv>
                                            17/25
                                        </TextDiv>
                                    </div>
                                    <div style={{ gridColumnStart: "1", gridColumnEnd: "4" }}>
                                        <Label>Suggested Placement Level: </Label>
                                        <TextDiv>
                                        Level 5 &nbsp; | &nbsp; JP 2 - Jolly Phonics Level 2
                                            
                                            

                                        </TextDiv>
                                    </div>
                                </Div4>
                                
                                <br></br>
                                <div style={{ backgroundColor: '#e0ebf0', padding: '5px' }}>
                                    <Label>Answers: </Label>
                                    <FlexDiv style={{ gridColumnStart: "2", gridColumnEnd: "4", paddingTop: "12px" }}>
                                        
                                        {userAnswersTesting.map((item, id) => {
                                            return (
                                                <p key={`answer${id}`} style={{ fontSize: "14px", padding: '0 12px'}}>
                                                {id +1}) &nbsp; {item} 
                                                </p>
                                            )
                                        })}
                                    </FlexDiv>
                                </div>
                                
                            </Div5>
                            <HR></HR>
                        </>
                    }
                    </div>
                        
                </FormSet2>
                <FormSet2 style={{ alignSelf: "start" }}>
                    <div> 
                        <h3 style={{ textAlign: 'center' }}>Oral Placement Records</h3> 
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
                                
                                return (
                                    (id === 0 ? 
                                        <>
                                        <Div4 key={`record-${id+1}`} style={{ backgroundColor: background }} >
                                            <div style={{ gridColumnStart: "1", gridColumnEnd: "3" }}>
                                                <Label>Test Date: </Label>
                                                <TextDiv>
                                                    {getDateStringENGBFormat(item.test_date)}
                                                </TextDiv>
                                            </div> 
                                            <div>
                                                <Label>Oral Placement Level: </Label>
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
                                                    {item.fluency || "N/A"}
                                                </TextDiv>
                                            </div>   
                                            <div>
                                                <Label>Accuracy: </Label>
                                                <TextDiv>
                                                    {item.accuracy || "N/A"}
                                                </TextDiv>
                                            </div>
                                            <div>
                                                <Label>Comprehension: </Label>
                                                <TextDiv>
                                                    {item.comprehension || "N/A"}
                                                </TextDiv>
                                            </div>

                                            <div>
                                                <Label>Writing Level: </Label>
                                                <TextDiv>
                                                    {item.writing_level || "N/A"} 
                                                </TextDiv>
                                            </div>
                                            <div style={{ gridColumn: "1 / -1" }}>
                                                <Label>Notes: </Label>
                                                <TextDiv>
                                                    {item.notes || "N/A"}
                                                </TextDiv>
                                            </div>
                                        </Div4>
                                        {!editTest ? (
                                            <ButtonDiv style={{ right: 0 }}>
                                                <SaveButton type="submit" onClick={editModal}>
                                                    Edit
                                                </SaveButton>
                                            </ButtonDiv>
                                        ) : (
                                            <PlacementEdit setEditTest={setEditTest} editTest={editTest} {...props} />
                                        )}
                                        <HR></HR>
                                        </>
                                        :
                                        <>
                                        <Div4 key={`record-${id+1}`}>
                                        <div style={{ gridColumnStart: "1", gridColumnEnd: "3" }}>
                                            <Label>Test Date: </Label>
                                            <TextDiv>
                                                {getDateStringENGBFormat(item.test_date)}
                                            </TextDiv>
                                        </div> 
                                        <div style={{ gridColumn: "1fr" }}>
                                            <Label>Oral Placement Level: </Label>
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
                                                {item.fluency || "N/A"}
                                            </TextDiv>
                                        </div>   
                                        <div>
                                            <Label>Accuracy: </Label>
                                            <TextDiv>
                                                {item.accuracy || "N/A"}
                                            </TextDiv>
                                        </div>
                                        <div>
                                            <Label>Comprehension: </Label>
                                            <TextDiv>
                                                {item.comprehension || "N/A"}
                                            </TextDiv>
                                        </div>
                                        <div>
                                            <Label>Writing Level: </Label>
                                            <TextDiv>
                                                {item.writing_level || "N/A"}
                                            </TextDiv>
                                        </div>
                                        <div style={{ gridColumn: "1 / -1" }}>
                                            <Label>Notes: </Label>
                                            <TextDiv>
                                                {item.notes || "N/A"}
                                            </TextDiv>
                                        </div>
                                    </Div4>
                                    <HR></HR>
                                    </>
                                    )
                                    
                                )
                            })
                        } 
                    </div>

                </FormSet2>           
            </FormWrap2>  
    {!addTest ? (
        <div
          className='create-new-entry'
          onClick={handleAddButton}
          style={{ cursor: 'pointer', color: '#26ABBD' }}
        >
            <div style={{ marginRight: '10px' }}>Add New Test</div>
            <div>
            <FontAwesomeIcon
              style={{ width: '25px', height: '25px', cursor: 'pointer' }}
              icon={faPlusCircle}
              size='lg'
            />
          </div>
        </div>
    ) : (
        <PlacementForm setAddTest={setAddTest} addTest={addTest} {...props} />
    )}
    </>
    );
}

const mapStateToProps = state => {
    // 🟢 ADD REDUCER TO GET THE ONLINE TEST INFORMATION
    return {
        isLoading: state.placementTestReducer.isLoading,
        placementTestById: state.placementTestReducer.placementTestById,
        isTestEditing: state.placementTestReducer.isTestEditing,
    };
  };
  
  export default withRouter(
    connect(
      mapStateToProps,
      { getPlacementTestById }
  )(PlacementTest)
  )
