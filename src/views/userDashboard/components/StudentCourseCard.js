import React, { useEffect } from 'react';
import hamburgerMenuIcon from "../../../assets/hamburger_menu_icon.png";

import { getStudentCourses } from "../getStudentCourses";

import abacusLogo from "../../../assets/demo_logo_abacus.png";
import frenchLogo from "../../../assets/demo_logo_french.png";
import speakOutLogo from "../../../assets/speakOut_logo_only.png";

function getLogo(program) {
    if (program === "Abacus Maths")
        { return abacusLogo; }
    else if (program === "French")
        { return frenchLogo; }
    else
        { return speakOutLogo; }
}

// This component lists out the student's courses according to the version-3-mobile Figma layout (check Notion document)
// All info rendered correctly with dummy data passed through props (the dummy data has since been removed)

function StudentCourseCard({student}) {

    useEffect(() => {
        getStudentCourses(student.id)
            .then(res => console.log(res))
    }, [])

  return (
    <div className="studentCourseCard">
        <div className="nameAndHamburgerMenu">
            <div className="names">
                <h2 className="firstName">{student.first_name}</h2>
                <h3 className="additionalNames">{student.additional_names}</h3>
            </div>
            <img src={hamburgerMenuIcon} />
        </div>
      {!student.courses || (student.courses.length === 0) ?
        <p className="noCourses">{student.first_name} has not registered for any courses yet.</p>
        :
        <>
            {student.courses.map(course => 
            
                <div className="courseData">

                    <div className="logoAndProgram">
                        <img src={getLogo(course.program)} />
                        <h3>{course.program}: {course.course}</h3>
                    </div>
                    <table className="dateAndPayment">
                        <thead>
                            <tr>
                                <th>Date/Time</th>
                                <th>Status</th>
                                <th>Paid?</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="startEndDatesTimes">{course.start_end_times}<br />{course.start_end_dates}</td>
                                <td>{course.enrollment_status}</td>
                                <td>{course.payment_status === "Paid" ? course.payment_status : <button>Pay Now</button>}</td>
                            </tr>
                        </tbody>
                    </table>
                    <table className="progressReports">
                        <thead>
                            <tr>
                                <th>Progress Report Date</th>
                                <th>Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{course.progress_report_last_date} (Month {course.progress_report_last_month_number})</td>
                                <td><button>View</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )}
        </>
    }
    </div>
  )
}

export default StudentCourseCard;