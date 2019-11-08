import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { getStudentProgress } from '../../../../../actions';
import{ withRouter } from 'react-router-dom';
import { Progress } from 'antd';
import { Grid, Segment } from 'semantic-ui-react'




//pass in props
const StudentProgressTab = props => {
    console.log('Student Progress', props)
   

        useEffect(() => {
            props.getStudentProgress(props.studentID)
               
        }, [])
        // console.log('STUDENT PROGRESS TAB PROPS', props.progressByStudentId)



if (!props.progressByStudentId) {
    return <div>Please upload the students progress report.</div>
} 



    return(
        <div className="gridView">
            <Segment style={{display: "flex", justifyContent: "flex-start", paddingTop: "12px", border: "1px solid rgba(189, 225, 230, 0.2)", height: "54px",  backgroundColor: "rgba(189, 225, 230, 0.2)"}}>Course #:</Segment>
        <Grid  columns='equal'>
<Grid.Row>
        {/* row 1 start */}
    <Grid.Column>
        <Segment>Speaking Fluency</Segment>
            <Progress 
            type="circle" 
            percent={props.progressByStudentId.speaking_fluency * 10} 
            width={80}
            strokeColor={'green'}
             />
    </Grid.Column>

    <Grid.Column>
        <Segment>Speaking Accuracy</Segment>
            <Progress 
            type="circle" 
            percent={props.progressByStudentId.speaking_fluency * 10} 
            width={80} 
            strokeColor={'green'}
             />
    </Grid.Column>

    <Grid.Column>
        <Segment>Vocabulary</Segment>
            <Progress 
            type="circle" 
            percent={props.progressByStudentId.speaking_fluency * 10} 
            width={80} 
            // strokeColor={'green' }
            strokeColor={'green'}
             />
            />  
    </Grid.Column>

    <Grid.Column>
        <Segment>Pronunciation</Segment>    
            <Progress 
            type="circle" 
            percent={props.progressByStudentId.speaking_fluency * 10} 
            width={80} 
            strokeColor={'green' }
            />
    </Grid.Column>

    <Grid.Column>
        <Segment>Grammar</Segment>  
            <Progress 
            type="circle" 
            percent={props.progressByStudentId.speaking_fluency * 10} 
            width={80} 
            strokeColor='green' 
            />
    </Grid.Column>
        
</Grid.Row>
    {/* row 1 end */}

        {/* row 2 start */}
<Grid.Row>
    <Grid.Column>
        <Segment>Listening</Segment>  
            <Progress 
            type="circle" 
            percent={props.progressByStudentId.speaking_fluency * 10} 
            width={80} 
            strokeColor='green' 
            />
    </Grid.Column>

    <Grid.Column>
        <Segment>Writing</Segment>  
            <Progress 
            type="circle" 
            percent={props.progressByStudentId.speaking_fluency * 10} 
            width={80} 
            strokeColor='yellow' 
            />
    </Grid.Column>

    <Grid.Column>
        <Segment>Reading</Segment>  
            <Progress 
            type="circle" 
            percent={props.progressByStudentId.speaking_fluency * 10} 
            width={80} 
            strokeColor='red' 
            />  
    </Grid.Column>

    <Grid.Column>
        <Segment>Interest</Segment>  
            <Progress 
            type="circle" 
            percent={props.progressByStudentId.speaking_fluency * 10} 
            width={80} 
            strokeColor='green' 
            />
    </Grid.Column>
   
    <Grid.Column>
    </Grid.Column>

</Grid.Row>
        {/* row 2 end */}
        
 {/* row 3 start */}
<Grid.Row>
    <Grid.Column>
        <Segment>Participation</Segment>  
            <Progress 
            type="circle" 
            percent={props.progressByStudentId.speaking_fluency * 10} 
            width={80} 
            strokeColor='green' 
            />
    </Grid.Column>

    <Grid.Column>
        <Segment>Submitting Homework</Segment> 
            <Progress 
            type="circle" 
            percent={props.progressByStudentId.speaking_fluency * 10} 
            width={80} 
            strokeColor='green' 
            />
    </Grid.Column>

    <Grid.Column>
        <Segment>Homework Effort</Segment> 
            <Progress 
            type="circle" 
            percent={props.progressByStudentId.speaking_fluency * 10}  
            width={80} 
            strokeColor='yellow' 
            />   
    </Grid.Column>
  
    <Grid.Column>
    </Grid.Column>

    <Grid.Column>
    </Grid.Column>

</Grid.Row>
        {/* row 3 end */}
        
   {/* row 4 start */}
   <Grid.Row style={{border: '1px solid red'}}>
    <Grid.Column>
        <Segment>Notes</Segment>
        <Segment>{props.progressByStudentId.notes}</Segment>
    </Grid.Column>
</Grid.Row>
        {/* row 4 end */}
       
        {/* row 5 start */}
        <Grid.Row>

<Grid.Column>
</Grid.Column>
 

 <Grid.Column>
</Grid.Column> 


<Grid.Column>
    <label>
    <Segment>Overall</Segment></label>       
        <Progress 
        type="circle" 
        percent={props.progressByStudentId.speaking_fluency * 10} 
        strokeColor='#269FB0' 
        />
</Grid.Column>
</Grid.Row>
        {/* row 5 end */}

            </Grid>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isLoading: state.studentProgressReducer.isLoading,
        progressByStudentId: state.studentProgressReducer.progressByStudentId,
        error: state.studentProgressReducer.error,
    };
};

export default withRouter(
    connect(
        mapStateToProps,
        { getStudentProgress}
    )(StudentProgressTab)
)







