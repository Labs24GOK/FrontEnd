import React from 'react';
import { Card, Header, Image } from 'semantic-ui-react';
const StudentInfo = () => {

    return (
        <>
        <Card style={{width: "50%", margin: "10px auto"}}>
            <div className='card-title'>
                <Image src='https://react.semantic-ui.com/images/wireframe/square-image.png' circular size='small' />
                <Header as='h2'>
                    Amire
                    <div className="headerDiv">
                        <div>
                            <div><h3>CPR # 12345</h3> </div>
                            <div><h3>STUDENT ID 1</h3> </div>
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
                            <div><h3>CPR # 123457</h3> </div>
                            <div><h3>STUDENT ID 5</h3> </div>
                        </div>
                    </div>
                </Header>
            </div>
            </Card>
        </>
    )
}


export default StudentInfo;