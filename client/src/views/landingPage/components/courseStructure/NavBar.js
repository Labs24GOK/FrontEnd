import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./courseStructure.scss";
import { resetNav } from '../../../../actions/landingPageActions/landingPageActions';
import { connect } from 'react-redux';
import { withRouter } from "react-router";

function NavBar(props) {
  const [selected, setSelected] = useState(false);
  const [header, setHeader] = useState('Course Structure');

  useEffect(() => {
    if (props.location.pathname === "/course-structure") {
      setSelected(false);
    }
    if (props.location.pathname === "/course-structure/kindergarten") {
      setSelected('kindergarten');
    }
    if (props.location.pathname === "/course-structure/primary") {
      setSelected('primary')
    }
    if (props.location.pathname === "/course-structure/middle-and-secondary") {
      setSelected('middle-and-secondary')
    }

  }, [selected, props.toggle, props.location.pathname])

  const handleKindergarten = () => {
    setSelected('kindergarten');
    setHeader('Kindergarten');
    // use resetNav (true/false) to handle resetting of inner tabs when the outer 'course' tab is clicked/unclicked
    props.resetNav(false);
  }

  const handlePrimary = () => {
    setSelected('primary');
    setHeader('Primary');
    // use resetNav (true/false) to handle resetting of inner tabs when the outer 'course' tab is clicked/unclicked
    props.resetNav(false);
    
  }

  const handleMiddleAndSecondary = () => {
    setSelected('middle-and-secondary');
    setHeader('Middle & Secondary');
    // use resetNav (true/false) to handle resetting of inner tabs when the outer 'course' tab is clicked/unclicked
    props.resetNav(false);
  }

  return (
    <div className="course-structure">
      <header>
        <h1>{props.reset ? 'Course Structure' : header}</h1>
        <div className="link-container">
          <Link exact to='/course-structure/kindergarten' onClick={handleKindergarten} className="link" style={{color: `${selected === 'kindergarten' && props.reset !== true ? '#e71829' : '#2b2b2b'}`}}>Kindergarten</Link>
          <Link exact to='/course-structure/primary' onClick={handlePrimary} className="link" style={{color: `${selected === 'primary' && props.reset !== true  ? '#e71829' : '#2b2b2b'}`}}>Primary</Link>
          <Link exact to='/course-structure/middle-and-secondary' onClick={handleMiddleAndSecondary} className="link" style={{color: `${selected === 'middle-and-secondary' && props.reset !== true ? '#e71829' : '#2b2b2b'}`}}>Middle and Secondary</Link>
        </div>
      </header>
    </div>
  )
}


const mapStateToProps = state => {
  return {
    reset: state.landingPageReducer.reset,
    toggle: state.landingPageReducer.toggle
  };
};

export default withRouter(
  connect(
      mapStateToProps,
      { resetNav }
  )(NavBar)
)