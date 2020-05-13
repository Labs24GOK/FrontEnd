import React from 'react';
import { connect } from 'react-redux';
import { editPlacementTestById, toggleEditPlacement } from '../../../../../actions';
import { withRouter } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { CancelButton, AddButton, ButtonDiv, Div, FormSet, FormWrap, Input, Label, TextDiv} from '../../mainStyle/styledComponent.js';
import { getDateStringENGBFormat } from "../../../../../utils/helpers";

import '../../mainStyle/mainTable.scss';
import './placementTest.scss';


const PlacementForm = props => {

    const { register, errors, handleSubmit } = useForm();

    const submitNow = data => {
        props.editPlacementTestById(props.studentID, data)
    }
    
    const handleCancel = e => {
        e.preventDefault();
        props.toggleEditPlacement()
    }

    const testData = props.placementTestById;

    // temp; get from props in finished form
    const categoryNames = ["Student ID", "Test Date", "Test", "Overall Level", "Speaking Fluency", "Spoken Accuracy", "Oral Level", "Listening Comprehension", "MC Correct", "MC Level", "MC Marked", "Writing Level", "Notes"];
    const categories = ["student_id", "test_date", "test", "overall_level", "speaking_fluency", "spoken_accuracy", "oral_level", "listening_comprehension", "mc_correct", "mc_level", "mc_marked", "writing_level", "notes"];
   
    return(
        <FormWrap onSubmit={handleSubmit(submitNow)}>
            <FormSet>
                <Div>
                <div>
                    <Label>Student ID</Label>
                    <TextDiv>{testData.studentID}</TextDiv>
                </div>
                <div>
                    <Label>Test Date</Label>
                    <TextDiv>{getDateStringENGBFormat(testData.test_date)}</TextDiv>
                </div>
                <div>
                    <Label>Test</Label>
                    <Input type="text" name="test" className={errors.test && "input-error"} ref={register({required: true })} />
                        {errors.test && errors.test.type === "required" && 'Test is Required'}	
                </div> 
                <div>
                    <Label>Overall Level</Label>
                    <Input type="text" name="overall_level" className={errors.overall_level && "input-error"} ref={register({required: true })} />
                        {errors.overall_level && errors.overall_level.type === "required" && 'Overall Level is Required'}	
                </div> 
                <div>
                    <Label>Speaking Fluency</Label>
                    <Input type="text" name="speaking_fluency" className={errors.speaking_fluency && "input-error"} ref={register({required: true })} />
                        {errors.speaking_fluency && errors.speaking_fluency.type === "required" && 'Speaking Fluency is Required'}	
                </div> 
                <div>
                    <Label>Spoken Accuracy</Label>
                    <Input type="text" name="spoken_accuracy" className={errors.spoken_accuracy && "input-error"} ref={register({required: true })} />
                        {errors.spoken_accuracy && errors.spoken_accuracy.type === "required" && 'Spoken Accuracy is Required'}	
                </div> 
                <div>
                    <Label>Oral Level</Label>
                    <Input type="text" name="oral_level" className={errors.oral_level && "input-error"} ref={register({required: true })} />
                        {errors.oral_level && errors.oral_level.type === "required" && 'Oral Level is Required'}	
                </div> 
                <div>
                    <Label>Listening Comprehension</Label>
                    <Input type="text" name="listening_comprehension" className={errors.listening_comprehension && "input-error"} ref={register({required: true })} />
                        {errors.listening_comprehension && errors.listening_comprehension.type === "required" && 'Listening Comprehension is Required'}	
                </div> 
                <div>
                    <Label>MC Correct</Label>
                    <Input type="text" name="mc_correct" className={errors.mc_correct && "input-error"} ref={register({required: true })} />
                        {errors.mc_correct && errors.mc_correct.type === "required" && 'MC Correct is Required'}	
                </div> 
                <div>
                    <Label>MC Level</Label>
                    <Input type="text" name="ASDF" className={errors.ASDF && "input-error"} ref={register({required: true })} />
                        {errors.ASDF && errors.ASDF.type === "required" && 'MC Level is Required'}	
                </div> 
                <div>
                    <Label>MC Marked</Label>
                    <Input type="text" name="mc_marked" className={errors.mc_marked && "input-error"} ref={register({required: true })} />
                        {errors.mc_marked && errors.mc_marked.type === "required" && 'MC Marked is Required'}	
                </div> 
                <div>
                    <Label>Writing Level</Label>
                    <Input type="text" name="writing_level" className={errors.writing_level && "input-error"} ref={register({required: true })} />
                        {errors.writing_level && errors.writing_level.type === "required" && 'Writing Level is Required'}	
                </div> 
                <div style={{ gridColumn: 'span 4' }}>
                    <Label>Notes</Label>
                    <div>
                        <Input type="textarea" name="notes" ref={register} />
                    </div>
                </div>     
                </Div>
            </FormSet>
            <ButtonDiv>
                <CancelButton onClick={handleCancel}>
                    Cancel
                </CancelButton>
                <AddButton onClick={handleSubmit} type='submit'>Add Test Results</AddButton>
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
      { editPlacementTestById, toggleEditPlacement }
  )(PlacementForm)
  )
