import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getStudentByFamilyId } from '../../../../actions';
import { Card, Header, Image } from 'semantic-ui-react';




const StudentInfo = props => {


    useEffect(() => {
        props.getStudentByFamilyId();
    },[])

 //create a fn or statement for full name

//   if(!props.studentByFamilyId) {
//       return null
//   }
    return (
        <>
        <Card style={{width: "50%", margin: "10px auto"}}>
            <div className='card-title'>
                <Image src='https://react.semantic-ui.com/images/wireframe/square-image.png' circular size='small' />
                <Header as='h2'>
                    {props.studentByFamilyId.first_name}  
                    <div className="headerDiv">
                        <div>
                            <div><h3>CPR #:{ props.studentByFamilyId.cpr}</h3> </div>
                            <div><h3>STUDENT ID:{props.studentByFamilyId.student_id}</h3> </div>
                        </div>
                    </div>
                </Header>
            </div>
            </Card>
            <Card style={{width: "50%", margin: "10px auto"}}>
            <div className='card-title'>
                <Image src='https://react.semantic-ui.com/images/wireframe/square-image.png' circular size='small' />
                <Header as='h2'>
                    Amy
                    <div className="headerDiv">
                        <div>
                            <div><h3>CPR #: {props.studentByFamilyId.cpr}</h3> </div>
                            <div><h3>STUDENT ID: {props.studentByFamilyId.student_id}</h3> </div>
                        </div>
                    </div>
                </Header>
            </div>
            </Card>
        </>
    )
}



const mapStateToProps = state => {
    return {
      isLoading: state.parentReducer.isLoading,
      studentByFamilyId: state.parentReducer.studentByFamilyId,
      error: state.parentReducer.error,
    };
  };
  
  export default withRouter(
    connect(
      mapStateToProps,
      { getStudentByFamilyId}
    )(StudentInfo))
