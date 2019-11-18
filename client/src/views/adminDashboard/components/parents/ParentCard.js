import React, {useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { getParentById } from '../../../../actions';
import ParentInfomation from './ParentInfomation'
import StudentInfo from './StudentInfo';
import { Tab, Header, Image, Icon } from 'semantic-ui-react';
import { Spin } from 'antd';
import '../mainStyle/mainCard.scss'
import 'antd/dist/antd.css';


const ParentCard = props => {
    useEffect(() => {
        props.getParentById(props.parentId);
    },[])

    const panes = [
      {
          menuItem: 'PARENT INFORMATION',
          render: () => <Tab.Pane attached={false}><ParentInfomation parentId={props.parentId}/></Tab.Pane>,
      },
    //   {
    //     menuItem: 'STUDENT INFORMATION',
    //     render: () => <Tab.Pane attached={false}><StudentInfo parentId={props.parentId}/></Tab.Pane>,
    // },
  ]

  const backToParentTable = () => {
    if (props.parentView === 'parentCard') {
        props.setParentView('parentsTable')
    }
    if (props.isEditing) {
        props.toggleEditParent()
        props.setParentView('parentCard')
    }
}
    return(
        <>
        
        <div>
                <div className="back-button" onClick={backToParentTable} style={{ cursor: "pointer", width: "10%" }}>
                    <Icon name='angle left' />
                    Back
                    </div>
                <div className='card-title'>

                    <Image src='https://react.semantic-ui.com/images/wireframe/square-image.png' circular size='small' />
                    <Header as='h2'>
                        {props.parentById.father_name}
                        <div className="headerDiv">
                            <div>
                                <div className="headerSeparateDiv">Telephone {props.parentById.primary_telephone} </div>
                                <div className="headerSeparateDiv">Telephone {props.parentById.secondary_telephone} </div>
                            </div>
                        </div>
                    </Header>
                </div>
                <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
        </div>
        </>
    )
}

const mapStateToProps = state => {
    return {
      isLoading: state.parentReducer.isLoading,
      parentById: state.parentReducer.parentById,
      error: state.parentReducer.error,
    };
  };
  
  export default withRouter(
    connect(
      mapStateToProps,
      { getParentById }
  )(ParentCard)
  ) 