import React, { useState } from 'react';
import MessageBox from "./MessageBox";
import StudentCourseCard from "./StudentCourseCard";

function UserDashboard({messages}) {

    const [userData, setUserData] = useState({
        name: "Mohammed",
        messages: ["Make a payment so that Mariam can continue enrolling for Counting II (Abacus Maths).",
        "The latest progress report for Fatima’s Parle-t-on! course is now available. View report.",
        "Great news! Fatima has been moved off the waitlist and is now enrolled in Parle-t-on!."],
        students: [
            {
                "first_name": "Mariam",
                "additional_names": "Akram Rahmani",
                "courses": [
                    {
                        "program": "Speak Out",
                        "course": "Super Safari",
                        "start_end_times": "Tu Th 16:00 - 17:30",
                        "start_end_dates": "12 May, 2020 - 30 July, 2020",
                        "enrollment_status": "Waitlisted",
                        "payment_status": "Paid",
                        "progress_report_last_date": "2 June, 2020",
                        "progress_report_last_month_number": 1,
                    },
                    {
                        "program": "Abacus Maths",
                        "course": "Counting II",
                        "start_end_times": "W F 18:00 - 19:30",
                        "start_end_dates": "13 May, 2020 - 31 July, 2020",
                        "enrollment_status": "Not Enrolled",
                        "payment_status": "Not Paid",
                        "progress_report_last_date": "2 June, 2020",
                        "progress_report_last_month_number": 1,
                    }
                ]
            },
            {
                "first_name": "Fatima",
                "additional_names": "Sharif Ozer Tariq",
                "courses": [
                    {
                        "program": "French",
                        "course": "Parle-t-on!",
                        "start_end_times": "M Th 19:00 - 20:30",
                        "start_end_dates": "11 May, 2020 - 30 July, 2020",
                        "enrollment_status": "Enrolled",
                        "payment_status": "Paid",
                        "progress_report_last_date": "2 June, 2020",
                        "progress_report_last_month_number": 1,
                    }
                ]
            },
            {
                "first_name": "Hassan",
                "additional_names": "Mohammad Hussein Harroun",
                "courses": []
            }
        ]
    })

    return (
        <div className="userDashboard content">
            <h1>Welcome, {userData.name}.</h1>
            <MessageBox messages={userData.messages} />
            <button className="addStudent">+ Add a Student</button>
            {userData.students.map((student, id) => <StudentCourseCard student={student} />)}
        </div>
    )
}

export default UserDashboard;