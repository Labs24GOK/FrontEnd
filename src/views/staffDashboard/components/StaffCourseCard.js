import React, { useState, useEffect } from 'react';

import { getStaffCourses } from '../getStaffCourses';

// sets course state for staff
function StaffCourseCard({ staff }) {
    const [staffCourse, setStaffCourse] = useState([]);  
    const [courseBool, setCourseBool] = useState(false);


    useEffect(() => {
        if(!courseBool) {
            getStaffCourses(staffCourse)
       
            .then(response => {
                setStaffCourse(response)
                setCourseBool(true)
            })
            .catch(error => console.log(error));
        }
    },[staffCourse]);

    return (
        <div className="staffCourseCard">
         
            <div className="names">
              <h2 className="firstName">{staff.name}</h2>
            </div>

          {!staffCourse || staffCourse.length === 0 ? (
            <p className="noCourses">
              {staff.name} does not have any courses to teach yet.
            </p>
          ) : (
            <>
              {staffCourse.map(course => (
                <div key={course.course_id}>
                  <h3>{course.group_type}</h3>
                  <h5>{course.course_days}</h5>
                </div>
              ))}
            </>
          )}
        </div>
      );
    }

export default StaffCourseCard;