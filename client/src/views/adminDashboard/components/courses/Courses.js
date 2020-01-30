import React, { useState } from 'react';
import CourseTable from './CourseTable.js';
import CourseCard from './CourseCard.js';


const Course = () => {
  const [clickedTabs, setClickedTab] = useState([]);
  const [courseView, setCourseView] = useState('courseTableView');
  const [courseID, setCourseID] = useState('');

  return (
    <>
      {
          courseView === 'courseTableView' ? <CourseTable setCourseView = {setCourseView} 
                    setCourseID={setCourseID} setClickedTabs = {setClickedTab}/> 
        : courseView === 'courseCardView' ? <CourseCard courseId = {courseID} 
                    setCourseView={setCourseView} courseView={courseView}/> : null
      }
    </>
  )
};

export default Course;
