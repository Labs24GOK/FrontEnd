import React, { useState } from 'react';
import StudentTable from './StudentTable';
import StudentCard from './studentCard/StudentCard';

const Student = () => {
  const [studentView, setStudentView] = useState('studentTableView');
  const [studentID, setStudentID] = useState('')

  return (
    <>
        {studentView === 'studentTableView' ? < StudentTable setStudentView={setStudentView} 
        setStudentID = {setStudentID}/> 
        :studentView === 'studentCardView' ? <StudentCard 
        studentID={studentID} 
        setStudentView={setStudentView}
        studentView={studentView}
        />
        : null}
    </>
  )
};

export default Student;