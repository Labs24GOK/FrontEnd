import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getStudentProgress, togglePostComponent } from '../../../../../actions';
import { withRouter } from 'react-router-dom';
import { Progress } from 'antd';
import AddStudentProgressForm from './AddStudentProgressForm';
import EditStudentProgressForm from './EditStudentProgressForm'
import { FormWrap, FormSet, Label, Div, SaveButton, ButtonDiv } from '../../mainStyle/styledComponent';





const StudentProgressTab = props => {
    useEffect(() => {
        props.getStudentProgress(props.studentID)
    }, [])
    
    let options = { year: 'numeric', month: 'numeric', day: 'numeric' }; //'long'
    let report_date = new Date(props.progressByStudentId.report_date).toLocaleDateString('en-GB', options)




    const [edit, setEdit] = useState(false)
    if (edit) {
        return (
            < EditStudentProgressForm {...props} setEdit={setEdit} edit={edit} />
        )
    } else if (props.progressByStudentId) {
        return (
            <FormWrap>
                <FormSet>
                    <Div>
                        <div>
                            <Label>Speaking Fluency</Label>
                            <Progress
                                type="circle"
                                percent={props.progressByStudentId.speaking_fluency * 10}
                                width={80}
                            />
                        </div>
                        <div>
                            <Label>Speaking Accuracy</Label>
                            <Progress
                                type="circle"
                                percent={props.progressByStudentId.speaking_accuracy * 10}
                                width={80}
                            />
                        </div>
                        <div>
                            <Label>Vocabulary</Label>
                            <Progress
                                type="circle"
                                percent={props.progressByStudentId.vocabulary * 10}
                                width={80}
                            />
                        </div>
                        <div>
                            <Label>Pronunciation</Label>
                            <Progress
                                type="circle"
                                percent={props.progressByStudentId.pronunciation * 10}
                                width={80}
                            />
                        </div>
                        <div>
                            <Label>Grammar</Label>
                            <Progress
                                type="circle"
                                percent={props.progressByStudentId.grammar * 10}
                                width={80}
                            />
                        </div>
                        <div>
                            <Label>Listening</Label>
                            <Progress
                                type="circle"
                                percent={props.progressByStudentId.listening * 10}
                                width={80}
                            />
                        </div>
                        <div>
                            <Label>Writing</Label>
                            <Progress
                                type="circle"
                                percent={props.progressByStudentId.writing * 10}
                                width={80}
                            />
                        </div>
                        <div>
                            <Label>Reading</Label>
                            <Progress
                                type="circle"
                                percent={props.progressByStudentId.reading * 10}
                                width={80}
                            />
                        </div>
                        <div>
                            <Label>Interest</Label>
                            <Progress
                                type="circle"
                                percent={props.progressByStudentId.interest * 10}
                                width={80}
                            />
                        </div>
                       
                        <div>
                            <Label>Participation</Label>
                            <Progress
                                type="circle"
                                percent={props.progressByStudentId.participation * 10}
                                width={80}
                            />
                        </div>
                        <div>
                            <Label>Submitting Homework</Label>
                            <Progress
                                type="circle"
                                percent={props.progressByStudentId.submitting_homework * 10}
                                width={80}
                            />
                        </div>
                        <div>
                            <Label>Homework Effort</Label>
                            <Progress
                                type="circle"
                                percent={props.progressByStudentId.homework_effort * 10}
                                width={80}
                            />
                        </div>
                        <div>
                            <Label>Notes</Label>
                            <Label>{props.progressByStudentId.notes}</Label>
                        </div>
                        <div>
                            <Label>Report Date</Label>
                            <Label>{report_date}</Label>
                        </div>
                        <div></div>
                        <div>
                            <Label>Overall</Label>
                            <Progress
                                type="circle"
                                percent={props.progressByStudentId.speaking_fluency * 10}
                                strokeColor='green'
                                width={200}
                                />
                        </div>
                    </Div>
                </FormSet>
                    <ButtonDiv>
                        <SaveButton onClick={() => { setEdit(true) }} >
                                Edit Report
                        </SaveButton>
                    </ButtonDiv>
            </FormWrap>
        )
    } else {
        return (
            < AddStudentProgressForm {...props} />
        )
    }
}
const mapStateToProps = state => {
    return {
        isLoading: state.studentProgressReducer.isLoading,
        progressByStudentId: state.studentProgressReducer.progressByStudentId,
        error: state.studentProgressReducer.error,
        isPosted: state.studentProgressReducer.isPosted,
        isPosting: state.studentProgressReducer.isPosting,
    };
};
export default withRouter(
    connect(
        mapStateToProps,
        { getStudentProgress, togglePostComponent }
    )(StudentProgressTab)
)








