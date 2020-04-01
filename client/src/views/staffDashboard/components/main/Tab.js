import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { resetForm } from '../../../../actions/adminDashboardActions/studentTableActions';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGraduate, faMap, faUserFriends, faUserAlt} from '@fortawesome/free-solid-svg-icons';

/* Check how tabs are styled in the admin dashboard! Cleaner JSX, SASS code there. */

const TabWrap = styled.div`
  width: 100%;
  height: 60px;
  // border: 1px solid black;
  // border-bottom: 1px solid transparent;
  line-height: 60px;
  /* //vertical-alignment: center;  */
  color: white;
  margin: 0 0 20px 0;
  font-size: 18px;
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
`

const iconStyle = {marginRight: '10px', height: '15px', width: '15px'}

function Tab(props) {
  const [icon, setIcon] = useState(faUserGraduate);

  const tabIconMapping = {
    "Students": faUserGraduate, "Courses": faMap,
    "Staff": faUserFriends, "Family": faUserAlt
  }

  useEffect(() => {setIcon(tabIconMapping[props.tab.key]); }, [])

  const handleClick = (tab) => {
    props.setSelected(tab.toLowerCase())
    props.setNavigation(tab.toLowerCase())
    props.resetForm();
  }

  return (
    <div onClick={() => handleClick(props.tab.key)}>
      <TabWrap className={`sidebarLink ${props.tab.key.toLowerCase() === props.selected ? 'active-tab': ''}`}>
        <FontAwesomeIcon icon={icon} size='lg' style={iconStyle}/> {props.tab.key}
      </TabWrap>
    </div>
  )
}

const mapStateToProps = state => {
  return { state };
};

export default withRouter(connect( mapStateToProps, { resetForm } )(Tab) )