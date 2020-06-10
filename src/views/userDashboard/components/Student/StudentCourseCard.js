import React, { useEffect, useState } from 'react';

import { getStudentCourses } from '../../getStudentCourses';
import { getDateStringENGBFormat, timeConverter } from '../../../../utils/helpers';

// Sets Course state for students
function StudentCourseCard({ student }) {
  const [studentCourse, setStudentCourse] = useState([]);  
  const [courseBool, setCourseBool] = useState(false);  

  useEffect(() => {
    if(!courseBool) {
      getStudentCourses(student.id)
        .then(res => {
          setStudentCourse(res)
          setCourseBool(true)
        })
        .catch(err => console.log(err));
    }
  }, [studentCourse]);

  return (
    <div className="studentCourseCard">
      <div className="nameAndHamburgerMenu">
        <div className="names">
     
          <h2 className="firstName">{student.first_name}</h2>
          <h3 className="additionalNames">{student.additional_names}</h3>
 

          <h4 className="courseAmount">{studentCourse.length} course(s)</h4>

        </div>
      </div>
      {!studentCourse || studentCourse.length === 0 ? (
        <p className="coursesList">{student.first_name} has not registered for any courses yet.</p>
      ) : (
        <div className="coursesList">
          {studentCourse.map(course => (
            <div key={course.course_id} className="studentSubBox">
              <h3>{course.group_type}</h3>
              <h3>{course.course_days}<br />{timeConverter(course.start_time)} to {timeConverter(course.end_time)}</h3>
              <h3>Starts <strong>{getDateStringENGBFormat(course.first_day)}</strong>
              <br />Ends <strong>{getDateStringENGBFormat(course.last_day)}</strong></h3>
            </div>
          ))}
        </div>
      )}
    </div>
  )
};

export default StudentCourseCard;
