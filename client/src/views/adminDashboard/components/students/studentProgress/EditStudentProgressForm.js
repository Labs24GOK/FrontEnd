import React, { useState } from 'react'
import { connect } from 'react-redux';
import { Icon } from 'semantic-ui-react';
import { toggleEditProgressComponent, editStudentProgress, getStudentProgress } from '../../../../../actions';
import { Table, Spin } from 'antd';
import { FormWrap, Input, Button} from '../../mainStyle/styledComponent';



const EditStudentProgressForm = props => {
    const { studentID } = props

    let reportDate = new Date(props.progressByStudentId.report_date).toISOString().split("T")[0];

    console.log(' EDIT STUDENT FORM PROPS:', props)

    const [state, setState] = useState({
        id: props.progressByStudentId.id,
        speaking_fluency: props.progressByStudentId.speaking_fluency,
        speaking_accuracy: props.progressByStudentId.speaking_accuracy,
        vocabulary: props.progressByStudentId.vocabulary,
        pronunciation: props.progressByStudentId.pronunciation,
        grammar: props.progressByStudentId.grammar,
        listening: props.progressByStudentId.listening,
        writing: props.progressByStudentId.writing,
        reading: props.progressByStudentId.reading,
        interest: props.progressByStudentId.interest,
        participation: props.progressByStudentId.participation,
        submitting_homework: props.progressByStudentId.submitting_homework,
        homework_effort: props.progressByStudentId.homework_effort,
        notes: props.progressByStudentId.notes,
        course_id: props.progressByStudentId.course_id,
        student_id: props.progressByStudentId.student_id,
        teacher_id: props.progressByStudentId.teacher_id,
        report_date: reportDate
    })

    const handleChange = e => {
        setState({ ...state, [e.target.name]: e.target.value })
    }


    const formSubmit = e => {
        e.preventDefault()
        props.editStudentProgress(studentID, state)
        if (props.isEdited) {
            setTimeout(() => {
                props.setEdit(false)
            }, 1000);
        }
    }

    return (
        <FormWrap style={{ margin: '3%' }}>
            {props.isLoading ? (
                <Spin style={{ marginTop: '150px' }} size="large" />
            ) : (
                    <fieldset style={{ border: '1px solid transparent', margin: '10px 5px 0px 5px', background: '#E0EBF0'}}>
                         <div style={{
                            display: 'grid', textAlign: 'left', gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
                            gridGap: '15px', margin: '10px'
                            }}>
                            {/* row 1 */}
                            <div>
                                <label>Speaking Fluency</label>
                                <div>
                                <Input
                                    type='number'
                                    name='speaking_fluency'
                                    placeholder="Speaking Fluency"
                                    onChange={handleChange}
                                    value={state.speaking_fluency}
                                />
                            </div>
                            </div>

                            <div>
                                <label>Speaking Accuracy</label>
                                <div>
                                <Input
                                    type='number'
                                    name='speaking_accuracy'
                                    placeholder="Speaking Accuracy"
                                    onChange={handleChange}
                                    value={state.speaking_accuracy}
                                />
                            </div>
                            </div>

                            <div>
                                <label>Vocabulary</label>
                                <div>
                                <Input
                                    type='number'
                                    name='vocabulary'
                                    placeholder="Vocabulary"
                                    onChange={handleChange}
                                    value={state.vocabulary}
                                />
                            </div>
                            </div>

                            <div>
                                <label>Pronunciation</label>
                                <div>
                                <Input
                                    type='number'
                                    name='pronunciation'
                                    placeholder="Pronunciation"
                                    onChange={handleChange}
                                    value={state.pronunciation}
                                />
                            </div>
                            </div>

                            <div>
                                <div onClick={formSubmit} style={{ color: "#26ABBD", cursor: "pointer", width: "fit-content" }} >
                                    <Icon name="save" style={{ color: "#26ABBD", cursor: "pointer" }} /> Save Report
                </div>
                            </div>
                        

                        
                            {/* row 2  */}
                            <div>
                                <label>Grammar</label>
                                <div>
                                <Input
                                    type='number'
                                    name='grammar'
                                    placeholder="Grammar"
                                    onChange={handleChange}
                                    value={state.grammar}
                                />
                            </div>  
                            </div>


                            <div>
                                <label>Listening</label>
                                <div>
                                <Input
                                    type='number'
                                    name='listening'
                                    placeholder="Listening"
                                    onChange={handleChange}
                                    value={state.listening}
                                />
                                </div>
                            </div>

                            <div>
                                <label>Writing</label>
                                <div>
                                <Input
                                    type='number'
                                    name='writing'
                                    placeholder="Writing"
                                    onChange={handleChange}
                                    value={state.writing}
                                />
                            </div>
                            </div>

                            <div>
                                <label>Reading</label>
                                <div>
                                <Input
                                    type='number'
                                    name='reading'
                                    placeholder="Reading"
                                    onChange={handleChange}
                                    value={state.reading}
                                />
                            </div>
                            </div>

                            <div>
                                <label>Interest</label>
                                <div>
                                <Input
                                    type='number'
                                    name='interest'
                                    placeholder="Interest"
                                    onChange={handleChange}
                                    value={state.interest}
                                />
                            </div>
                            </div>
                        

                       
                            {/* row 3 */}
                            <div>
                                <label>Participation</label>
                                <div>
                                <Input
                                    type='number'
                                    name='participation'
                                    placeholder="Participation"
                                    onChange={handleChange}
                                    value={state.participation}
                                />
                            </div>
                            </div>

                            <div>
                                <label>Submitting Homework</label>
                                <div>
                                <Input
                                    type='number'
                                    name='submitting_homework'
                                    placeholder="Submitting Homework"
                                    onChange={handleChange}
                                    value={state.submitting_homework}
                                />
                            </div>
                            </div>

                            <div>
                                <label>Homework Effort</label>
                                <div>
                                <Input
                                    type='number'
                                    name='homework_effort'
                                    placeholder="Homework Effort"
                                    onChange={handleChange}
                                    value={state.homework_effort}
                                />
                            </div>
                            </div>

                            <div>
                                <label>Notes</label>
                                <div>
                                <Input
                                    type='text'
                                    name='notes'
                                    placeholder="Notes"
                                    onChange={handleChange}
                                    value={state.notes}
                                />
                            </div>
                            </div>

                            <div>
                                <label>Overall</label>
                                <div>
                                <Input
                                    type='number'
                                    name='overall'
                                    placeholder="Overall"
                                    onChange={handleChange}
                                    value={state.overall}
                                />
                            </div>
                            </div>

                        
                            <div>
                                <label>Course Id</label>
                                <div>
                                <Input
                                    type='number'
                                    name='course_id'
                                    placeholder="Course Id"
                                    onChange={handleChange}
                                    value={state.course_id}
                                />
                            </div>
                            </div>

                            <div>
                                <label>Student Id</label>
                                <div>
                                <Input
                                    type='number'
                                    name='student_id'
                                    placeholder="Student Id"
                                    onChange={handleChange}
                                    value={state.student_id}
                                />
                            </div>
                            </div>


                            <div>
                                <label>Teacher Id</label>
                                <div>
                                <Input
                                    type='number'
                                    name='teacher_id'
                                    placeholder="Teacher Id"
                                    onChange={handleChange}
                                    value={state.teacher_id}
                                />
                            </div>
                            </div>

                            <div>
                                <label>Report Date</label>
                                <div>
                                <Input
                                    type='text'
                                    name='report_date'
                                    placeholder="Report Date"
                                    onChange={handleChange}
                                    value={reportDate}
                                />
                            </div>
                            </div>

                          
                            </div>
                    </fieldset>
                )}
        </FormWrap>

    )
}

const mapStateToProps = state => {
    return {
        isLoading: state.studentProgressReducer.isLoading,
        progressByStudentId: state.studentProgressReducer.progressByStudentId,
        isEditing: state.studentProgressReducer.isEditing,
        isEdited: state.studentProgressReducer.isEdited,
        error: state.studentProgressReducer.error
    };
};


export default
    connect(
        mapStateToProps,
        { editStudentProgress, toggleEditProgressComponent, getStudentProgress }
    )(EditStudentProgressForm)




