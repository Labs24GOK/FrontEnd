import React, { useEffect, useState } from 'react';
import { getStudentCourses } from '../../getStudentCourses';
import { getDateStringENGBFormat, timeConverter } from '../../../../utils/helpers';
import './StudentCourseCard.scss';

// Sets Course state for students
function StudentCourseCard({ student }) {
  const [studentCourse, setStudentCourse] = useState([]);
  const [courseBool, setCourseBool] = useState(false);

  useEffect(() => {
    if (!courseBool) {
      getStudentCourses(student.id)
        .then(res => {
          setStudentCourse(res);
          setCourseBool(true);
        })
        .catch(err => console.log(err));
    }
  }, [studentCourse]);

  return (
    <div className="container">
      <div className="student-card">
        <h2>
          {student.first_name}
          {student.additional_names}
        </h2>
      </div>
      <div className="course-card">
        <p>{studentCourse.length} course(s)</p>
        {!studentCourse || studentCourse.length === 0 ? (
          <p>{student.first_name} has not registered for any courses yet.</p>
        ) : (
          <div className="coursesList">
            {studentCourse.map(course => (
              <div key={course.course_id}>
                <p>{course.group_type}</p>
                <p>
                  {course.course_days}
                  {timeConverter(course.start_time)} to {timeConverter(course.end_time)}
                </p>
                <p>
                  Starts{getDateStringENGBFormat(course.first_day)}
                  Ends{getDateStringENGBFormat(course.last_day)}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default StudentCourseCard;
