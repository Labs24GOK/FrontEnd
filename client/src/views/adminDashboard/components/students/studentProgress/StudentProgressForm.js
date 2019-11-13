import React, { useState } from 'react'
import { connect } from 'react-redux';
import { Grid, Segment, Input, Icon} from 'semantic-ui-react';
import { postStudentProgress, togglePostComponent } from '../../../../../actions';
import { Table, Spin } from 'antd';




const StudentProgressForm = props => {

    console.log('STUDENT FORM PROPS:', props)
    const [ state, setState ] = useState({
        speaking_fluency: '',
        speaking_accuracy: '',
        vocabulary: '',
        pronunciation: '',
        grammar: '',
        listening: '',
        writing: '',
        reading: '',
        interest:'',
        participation: '',
        submitting_homework: '',
        homework_effort: '',
        notes: '',
        course_id: '',
        student_id: '',
        teacher_id: '',
        report_date: ''
    })




const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value})
}


const formSubmit = e => {
    // e.preventDefault()
    props.postStudentProgress(state)
}

// const overallAverage = arr => {
//     arr = [state.speaking_fluency, state.speaking_accuracy, state.vocabulary, state.pronunciation, state.grammar, state.listening, state.writing, state.reading, state.interest, state.participation]
//    arr.reduce(( a, b) => a + b, 0) / arr.length
 
// }

    return(
        <div className="gridView">
             {props.isLoading ? (
            <Spin style={{marginTop: '150px'}}size="large" />
          ) : (
            <Grid  columns='equal'>
     <Grid.Row>
         {/* row 1 */}
         <Grid.Column>
        <Segment>Speaking Fluency</Segment>
            <Input
            type='number'
            name='speaking_fluency'
            placeholder="Speaking Fluency"
            onChange={handleChange}
            value={state.speaking_fluency}
            />
        </Grid.Column>

        <Grid.Column>
        <Segment>Speaking Accuracy</Segment>
            <Input
            type='number'
            name='speaking_accuracy'
            placeholder="Speaking Accuracy"
            onChange={handleChange}
            value={state.speaking_accuracy}
            />
        </Grid.Column>

        <Grid.Column>
        <Segment>Vocabulary</Segment>
            <Input
            type='number'
            name='vocabulary'
            placeholder="Vocabulary"
            onChange={handleChange}
            value={state.vocabulary}
            />
        </Grid.Column>

        <Grid.Column>
        <Segment>Pronunciation</Segment>
            <Input
            type='number'
            name='pronunciation'
            placeholder="Pronunciation"
            onChange={handleChange}
            value={state.pronunciation}
            />
        </Grid.Column>


        <Grid.Column>
        <Segment style={{color: "#26ABBD", cursor:"pointer", width:"fit-content"}} onClick={formSubmit}>
        <Icon name="save" style = {{color:"#26ABBD",cursor:"pointer"}}/> Add Report
        </Segment>
        </Grid.Column>
    </Grid.Row>

    <Grid.Row>
        {/* row 2  */}
        <Grid.Column>
        <Segment>Grammar</Segment>
            <Input
            type='number'
            name='grammar'
            placeholder="Grammar"
            onChange={handleChange}
            value={state.grammar}
            />
        </Grid.Column>

        <Grid.Column>
        <Segment>Listening</Segment>
            <Input
            type='number'
            name='listening'
            placeholder="Listening"
            onChange={handleChange}
            value={state.listening}
            />
        </Grid.Column>
        
        <Grid.Column>
        <Segment>Writing</Segment>
            <Input
            type='number'
            name='writing'
            placeholder="Writing"
            onChange={handleChange}
            value={state.writing}
            />
        </Grid.Column>
    
        <Grid.Column>
        <Segment>Reading</Segment>
            <Input
            type='number'
            name='reading'
            placeholder="Reading"
            onChange={handleChange}
            value={state.reading}
            />
        </Grid.Column>
    
        <Grid.Column>
        <Segment>Interest</Segment>
            <Input
            type='number'
            name='interest'
            placeholder="Interest"
            onChange={handleChange}
            value={state.interest}
            />
        </Grid.Column>
    </Grid.Row>   

    <Grid.Row>
        {/* row 3 */}
        <Grid.Column>
        <Segment>Participation</Segment>
            <Input
            type='number'
            name='participation'
            placeholder="Participation"
            onChange={handleChange}
            value={state.participation}
            />
        </Grid.Column>

        <Grid.Column>
        <Segment>Submitting Homework</Segment>
            <Input
            type='number'
            name='submitting_homework'
            placeholder="Submitting Homework"
            onChange={handleChange}
            value={state.submitting_homework}
            />
        </Grid.Column>

        <Grid.Column>
        <Segment>Homework Effort</Segment>
            <Input
            type='number'
            name='homework_effort'
            placeholder="Homework Effort"
            onChange={handleChange}
            value={state.homework_effort}
            />
        </Grid.Column>

        <Grid.Column>
        <Segment>Notes</Segment>
            <Input
            type='text'
            name='notes'
            placeholder="Notes"
            onChange={handleChange}
            value={state.notes}
            />
        </Grid.Column>
        
        <Grid.Column>
        <Segment>Overall</Segment>
            <Input
            type='number'
            name='overall'
            placeholder="Overall"
            onChange={handleChange}
            value={state.overall}
            />
        </Grid.Column>
    </Grid.Row>

    <Grid.Row>
       <Grid.Column>
        <Segment>Course Id</Segment>
            <Input
            type='number'
            name='course_id'
            placeholder="Course Id"
            onChange={handleChange}
            value={state.course_id}
            />
        </Grid.Column>

        <Grid.Column>
        <Segment>Student Id</Segment>
            <Input
            type='number'
            name='student_id'
            placeholder="Student Id"
            onChange={handleChange}
            value={state.student_id}
            />
        </Grid.Column>


        <Grid.Column>
        <Segment>Teacher Id</Segment>
            <Input
            type='number'
            name='teacher_id'
            placeholder="Teacher Id"
            onChange={handleChange}
            value={state.teacher_id}
            />
        </Grid.Column>

        <Grid.Column>
        <Segment>Report Date</Segment>
            <Input
            type='text'
            name='report_date'
            placeholder="Report Date"
            onChange={handleChange}
            value={state.report_date}
            />
        </Grid.Column>

        <Grid.Column>
        </Grid.Column>
    </Grid.Row>
            </Grid>
          )}
        </div>
        
    )
}

const mapStateToProps = state => {
    return {
        isLoading: state.studentProgressReducer.isLoading,
        progressByStudentId: state.studentProgressReducer.progressByStudentId,
        isPosted: state.studentProgressReducer.isPosted,
        isPosting: state.studentProgressReducer.isPosting,
        error: state.studentProgressReducer.error
    };
};


export default 
    connect(
        mapStateToProps,
        { postStudentProgress, togglePostComponent}
    )(StudentProgressForm)




