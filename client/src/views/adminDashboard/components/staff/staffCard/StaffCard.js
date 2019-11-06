import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getStaffById, toggleEditComponent } from '../../../../../actions';
import { withRouter, Link } from 'react-router-dom';
import StaffInformationTab from './StaffInformationTab';
import { CardWrapper, BackButton, BigTitle, SmallTitle, HeaderWrapper } from '../../../../../styles/styledComponents'
import { Tab } from 'semantic-ui-react';
import 'antd/dist/antd.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const StaffCard = props => {
    useEffect(() => {
      console.log('STAFF CARD props:', props)
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
        console.log("go back button", props)
       if(props.staffView === 'staffCardView') {
           props.setStaffView('staffTableView')
       }
    }


    return (
        <div>
            <CardWrapper>
                <BackButton onClick={goBack} style={{cursor:"pointer"}}>
                    <FontAwesomeIcon icon='angle-left' size='lg' color='gray'/> {''}
                    Back
                    </BackButton>
                <HeaderWrapper>
                    <BigTitle>{props.staffById.name}</BigTitle>
                    <SmallTitle>CPR: {props.staffById.cpr}</SmallTitle>
                    <SmallTitle>Staff ID: {props.staffById.id}</SmallTitle>
                </HeaderWrapper>
             <Tab menu={{ secondary: true, pointing: true }} panes={panes}  />
        </CardWrapper>
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