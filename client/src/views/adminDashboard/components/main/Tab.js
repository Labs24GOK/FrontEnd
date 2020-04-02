import React, { useEffect, useState } from 'react';
import { resetForm } from '../../../../actions/adminDashboardActions/studentTableActions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGraduate, faMap, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { TabWrap } from '../mainStyle/styledComponent';

function Tab(props) {

  const tabIconMapping = {
    "Students": faUserGraduate,
    "Courses": faMap,
    "Staff": faUserFriends,
    "Family": faUserFriends
  }

  const [icon, setIcon] = useState(faUserGraduate);
  useEffect(() => {setIcon(tabIconMapping[props.tab.key]); }, [])
  
  const handleClick = (tab) => {
    props.setSelected(tab.toLowerCase())
    props.setNavigation(tab.toLowerCase())
    props.resetForm();
  }

  return (
    <div onClick={() => handleClick(props.tab.key)}>
      <TabWrap className={`sidebarLink ${props.tab.key.toLowerCase() === props.selected ? 'active-tab': ''}`}>
        <FontAwesomeIcon icon={icon} size='lg' className="tab-icon" /> {props.tab.key}
      </TabWrap>
    </div>
  )
}

const mapStateToProps = state => {
  return { state };
};

export default withRouter(connect( mapStateToProps, { resetForm } )(Tab) )