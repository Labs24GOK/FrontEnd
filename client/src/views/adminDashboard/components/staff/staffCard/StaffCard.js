import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getStaffById, toggleEditComponent } from '../../../../../actions';
import { withRouter, Link } from 'react-router-dom';
import StaffInformationTab from './StaffInformationTab';
import { Tab } from 'semantic-ui-react';
import 'antd/dist/antd.css';
// import './StudentCard.css';
// import './StudentInformationTab.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const StaffCard = props => {
    useEffect(() => {
      console.log('STAFF CARD props:', props.getStaffById)
        props.getStaffById(props.staffID)
    }, [])

  const panes = [
        {
            menuItem: 'STAFF INFORMATION',
            render: () => <Tab.Pane attached={false}><StaffInformationTab staffID={props.staffID} /></Tab.Pane>,
        },
        {
            menuItem: 'COURSES',
            render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane>,
        },
        {
            menuItem: 'WORKLOG',
            render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane>,
        },
    ]

    const goBack = () => {
        console.log("props", props)
        if(!props.isEditing){
            props.history.goBack();
        } else {
            props.toggleEditComponent()
        }
    }

    return (
        <div>
            <div className="student-card">
                <div className="back-button" onClick={goBack} style={{cursor:"pointer"}}
>
                    <FontAwesomeIcon icon='angle-left' size='lg' color='gray'/> {''}
                    Back
                    
                    </div>
                <div className='student-title'>
                    <h2>{props.staffById.name}</h2>
                    <p>CPR: {props.staffById.cpr}</p>
                    <p>Staff ID: {props.staffById.id}</p>
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