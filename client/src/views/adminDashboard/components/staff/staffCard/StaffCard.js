import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getStaffById, toggleEditComponent } from '../../../../../actions';
import { withRouter, Link } from 'react-router-dom';
import StaffInformationTab from './StaffInformationTab';
import StaffCoursesTab from './StaffCoursesTab';

import { Header, Image, Icon, Tab } from 'semantic-ui-react'
import 'antd/dist/antd.css';
import '../../mainStyle/mainCard.scss';


const StaffCard = props => {
    useEffect(() => {
        props.getStaffById(props.staffID)
    }, [])

  const panes = [
        {
            menuItem: 'STAFF INFORMATION',
            render: () => <Tab.Pane attached={false}><StaffInformationTab staffID={props.staffID} /></Tab.Pane>,
        },
        {
            menuItem: 'COURSES',
            render: () => <Tab.Pane attached={false}>{<StaffCoursesTab staffID={props.staffID}/>}</Tab.Pane>,
        },
        {
            menuItem: 'WORKLOG',
            render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane>,
        },
    ]

    const goBack = () => {
       if(props.staffView === 'staffCardView') {
           props.setStaffView('staffTableView')
       }
    }


    return (
        <div>
            <div className ="card">
                <div className="back-button" onClick={goBack} style={{cursor:"pointer", width:"10%"}}>
                    <Icon name="angle left" /> 
                    Back
                    </div>
                <div className="card-title">

                    <Image src='https://react.semantic-ui.com/images/wireframe/square-image.png' circular size='small' />

                    <Header as="h2">
                    {props.staffById.name}
                      <div className="headerDiv">
                          <div>
                    <div className="headerSeparateDiv">CPR # {props.staffById.cpr}</div>
                    <div className="headerSeparateDiv">Staff ID {props.staffById.id}</div>
                        </div>
                    </div>
                    </Header>
                </div>
             <Tab menu={{ secondary: true, pointing: true }} panes={panes}  />
        </div>
     </div>
 )
}


const mapStateToProps = state => {
    return {
        isLoading: state.staffByIdReducer.isLoading,
        staffById: state.staffByIdReducer.staffById,
        error: state.staffByIdReducer.error
    };
};

export default withRouter(
    connect(
        mapStateToProps,
        { getStaffById, toggleEditComponent}
    )(StaffCard)
)