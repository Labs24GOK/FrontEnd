import React from 'react';
import { Progress } from 'antd';
import { Grid, Segment } from 'semantic-ui-react'





const StudentProgressTab = () => {

    return(
        <div>
            <h3 style={{display: "flex", justifyContent: "flex-start", paddingTop: "12px", border: "1px solid rgba(189, 225, 230, 0.2)", height: "54px",  backgroundColor: "rgba(189, 225, 230, 0.2)"}}>Course #814 Results </h3>
        <Grid  columns='equal'>
            <Grid.Row>
        {/* row 1 start */}
    <Grid.Column>
    <Segment>Speaking Fluency</Segment>
    <Progress type="circle" percent={9} width={80} strokeColor='green' format={percent => `${percent} `} />
    </Grid.Column>

    <Grid.Column>
    <Segment>Speaking Accuracy</Segment>
    <Progress type="circle" percent={9} width={80} strokeColor='green' format={percent => `${percent} `} />
    </Grid.Column>

    <Grid.Column>
    <Segment>Vocabulary</Segment>
    <Progress type="circle" percent={5} width={80} strokeColor='yellow' format={percent => `${percent} `} />  
    </Grid.Column>

    <Grid.Column>
    <Segment>Pronunciation</Segment>    
    <Progress type="circle" percent={2} width={80} strokeColor='red' format={percent => `${percent} `} />
    </Grid.Column>

    <Grid.Column>
    <Segment>Grammar</Segment>  
    <Progress type="circle" percent={8} width={80} strokeColor='green' format={percent => `${percent} `} />
    </Grid.Column>
        {/* row 1 end */}
            </Grid.Row>


        {/* row 2 start */}
    <Grid.Row>
    <Grid.Column>
    <Segment>Listening</Segment>  
    <Progress type="circle" percent={10} width={80} strokeColor='green' format={percent => `${percent} `} />
    </Grid.Column>

    <Grid.Column>
    <Segment>Writing</Segment>  
    <Progress type="circle" percent={4} width={80} strokeColor='yellow' format={percent => `${percent} `} />
    </Grid.Column>

    <Grid.Column>
    <Segment>Reading</Segment>  
    <Progress type="circle" percent={1} width={80} strokeColor='red' format={percent => `${percent} `} />  
    </Grid.Column>

    <Grid.Column>
    <Segment>Interest</Segment>  
    <Progress type="circle" percent={7} width={80} strokeColor='green' format={percent => `${percent} `} />
    </Grid.Column>
   
    <Grid.Column>
    </Grid.Column>

    </Grid.Row>
        {/* row 2 end */}
        

        <Grid.Row>
        {/* row 3 start */}
        <Grid.Column>
    <Segment>Participation</Segment>  
    <Progress type="circle" percent={10} width={80} strokeColor='green' format={percent => `${percent} `} />
    </Grid.Column>

    <Grid.Column>
    <Segment>Submitting Homework</Segment> 
    <Progress type="circle" percent={10} width={80} strokeColor='green' format={percent => `${percent} `} />
    </Grid.Column>

    <Grid.Column>
    <Segment>Homework Effort</Segment> 
    <Progress type="circle" percent={6} width={80} strokeColor='yellow' format={percent => `${percent} `} />   
    </Grid.Column>
  
    <Grid.Column>
    </Grid.Column>

    <Grid.Column>
    </Grid.Column>

    </Grid.Row>
        {/* row 3 end */}
        
   {/* row 4 start */}


        <Grid.Row>

    <Grid.Column>
    </Grid.Column>


    <Grid.Column>
    </Grid.Column>


        <Grid.Column>
        <Segment>Overall</Segment>        
    <Progress type="circle" percent={7} strokeColor='blue' format={percent => `${percent} `} width="215px" height="200px"/>
    </Grid.Column>
    </Grid.Row>
        {/* row 4 end */}
       
        {/* row 5 start */}
        <Grid.Row>
            <Grid.Column marginTop='5%'>
        <Segment>Notes</Segment>
        <Segment>Amir is showing great progress!</Segment>
        </Grid.Column>
        </Grid.Row>
        {/* row 5 end */}

            </Grid>
        </div>
    )
}





export default StudentProgressTab;