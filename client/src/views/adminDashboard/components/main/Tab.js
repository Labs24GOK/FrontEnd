import React, { useEffect, useState } from 'react';
import { resetForm } from '../../../../actions/adminDashboardActions/studentTableActions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGraduate, faMap, faUserFriends, faNewspaper} from '@fortawesome/free-solid-svg-icons';
import { TabWrap } from '../mainStyle/styledComponent';


function Tab(props) {

  const tabIconMapping = {
    "Students": faUserGraduate,
    "Courses": faMap,
    "Staff": faUserFriends,
    "Reports": faNewspaper
  }

  const [icon, setIcon] = useState();
  
  useEffect(() => {setIcon(tabIconMapping[props.tab.key]); }, [])
  
  const handleClick = (tab) => {
    props.setSelected(tab.toLowerCase())
    props.setNavigation(tab.toLowerCase())
    props.resetForm();
  }

  return (
    <a  onClick={() => handleClick(props.tab.key)}>
    <TabWrap className={`sidebarLink ${props.tab.key.toLowerCase() === props.selected ? 'active-tab': ''}`}>
      <FontAwesomeIcon 
          icon={icon} 
          size='lg' 
          color='#ffffff' 
          style={{marginRight: '10px', width: '15px'}}
      />
      {props.tab.key}
    </TabWrap>
    </a>
  )
}
const mapStateToProps = state => {
  return {
      state: state
  };
};
export default withRouter(
  connect(
      mapStateToProps,
      { resetForm }
  )(Tab)
)