import React, { useEffect, useState } from 'react';
import { resetForm } from '../../../../actions/adminDashboardActions/studentTableActions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGraduate, faMap, faUserFriends} from '@fortawesome/free-solid-svg-icons';
import { TabWrap } from '../mainStyle/styledComponent';


function Tab(props) {
  const [icon, setIcon] = useState();
  useEffect(() => {
    if (props.tab.key === 'Students') {
      setIcon(faUserGraduate);
    } else if (props.tab.key === 'Courses') {
      setIcon(faMap);
    } else if (props.tab.key === 'Staff') {
      setIcon(faUserFriends);
    } else if (props.tab.key === 'Family') {
      setIcon(faUserFriends);
    }
  }, [])
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