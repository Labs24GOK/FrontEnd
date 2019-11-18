import React, { useState } from 'react'
import { connect } from 'react-redux';
import { toggleEditProgressComponent, editStudentProgress, getStudentProgress } from '../../../../../actions';
import { Spin } from 'antd';
import { FormWrap, FormSet, Label, Div, SaveButton, ButtonDiv, CancelButton, Input } from '../../mainStyle/styledComponent';

const EditStudentProgressForm = props => {
    const { studentID } = props

    let reportDate = new Date(props.progressByStudentId.report_date).toISOString().split("T")[0];

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

    const [cancelEdit, setCancelEdit] = useState(false)


    const handleChange = e => {
        setState({ ...state, [e.target.name]: e.target.value })
    }
    const handleCancel = e => {
        e.preventDefault()
        setCancelEdit(true)
        props.toggleEditProgressComponent();
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
        <FormWrap >
            {props.isLoading ? (
                <Spin style={{ marginTop: '150px' }} size="large" />
            ) : (
                <>
                    <FormSet>
                        <Div>
                            <div>
                                <Label>Speaking Fluency</Label>
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
                                <Label>Speaking Accuracy</Label>
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
                                <Label>Vocabulary</Label>
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
                                <Label>Pronunciation</Label>
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
                                <Label>Grammar</Label>
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
                                <Label>Listening</Label>
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
                                <Label>Writing</Label>
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
                                <Label>Reading</Label>
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
                                <Label>Interest</Label>
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
                            <div>
                                <Label>Participation</Label>
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
                                <Label>Submitting Homework</Label>
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
                                <Label>Homework Effort</Label>
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
                                <Label>Notes</Label>
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
                                <Label>Overall</Label>
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
                                <Label>Course Id</Label>
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
                                <Label>Student Id</Label>
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
                                <Label>Teacher Id</Label>
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
                                <Label>Report Date</Label>
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
                        </Div>
                    </FormSet>
                    <ButtonDiv>
                        <CancelButton onClick={handleCancel}>
                            Cancel
                        </CancelButton>
                        <SaveButton onClick={formSubmit} >
                            Save Report
                        </SaveButton>
                    </ButtonDiv>
                    </>
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




