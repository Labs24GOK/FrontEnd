import React, { useState } from 'react';
import CourseTable from './CourseTable.js';
import CourseCard from './CourseCard.js';

const Course = () => {
  const [setClickedTabs] = useState([]);
  const [courseView, setCourseView] = useState('courseTableView');
  const [courseID, setCourseID] = useState('');

  return (
    <>
      {courseView === 'courseTableView' ? (
        <CourseTable
          setCourseView={setCourseView}
          setCourseID={setCourseID}
          setClickedTabs={setClickedTabs}
        />
      ) : courseView === 'courseCardView' ? (
        <CourseCard
          courseID={courseID}
          setCourseView={setCourseView}
          courseView={courseView}
        />
      ) : null}
    </>
  );
};

export default Course;
