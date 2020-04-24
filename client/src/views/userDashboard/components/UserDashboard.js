import React, { useEffect, useState } from 'react';
import axios from "axios";
import API_URL from "../../../config/apiUrl";

import MessageBox from "./MessageBox";
import AddStudentModal from "./AddStudentModal";
import StudentCourseCard from "./StudentCourseCard";


import { getStudentsInFamily } from "../getStudentsinFamily";

function UserDashboard({messages}) {

    const [students, setStudents] = useState([]);
    // const [students, setStudents] = useState(
    //     [
    //         {
    //             "first_name": "Zira",
    //             "additional_names": "Baliram Jani",
    //             "cpr": "111111111"
    //         },
    //         {
    //             "first_name": "Mayma",
    //             "additional_names": "Zinian Maran",
    //             "cpr": "222222222"
    //         },
    //         {
    //             "first_name": "Esha",
    //             "additional_names": "Saraz Rarika",
    //             "cpr": "333333333"
    //         }
    //     ]);

    // userID represents the family ID
    let userID = 1;

    useEffect(async () => {
        let test = await getStudentsInFamily(userID);
        setStudents(test);

        console.log(test);
    }, []);

    const [userData, setUserData] = useState({
        name: "Mohammed",
        messages: ["Make a payment so that Mariam can continue enrolling for Counting II (Abacus Maths).",
        "The latest progress report for Fatima’s 1er Niveau course is now available. View report.",
        "Great news! Fatima has been moved off the waitlist and is now enrolled in 1er Niveau."],
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
                        "course": "1er Niveau",
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

    const [displayAddStudentModal, setDisplayAddStudentModal] = useState(false);

    return (
        <div className="userDashboard content">
            <h1>Welcome, {userData.name}.</h1>
            <h2>These are the students in your family:</h2>

            {students.length === 0 ? <h3>No students found</h3> : <h3>You have {students.length} students.</h3>}
            
            {students.map((student, id) => {
                return (
                <div style={{border: "1px solid gray !important;"}}>
                    <h3>{student.first_name} {student.additional_names} (CPR: #{student.cpr})</h3>
                </div>
                )})
            }
            <MessageBox messages={userData.messages} />
            <button className="addStudent" onClick={() => setDisplayAddStudentModal(true)}>+ Add a Student</button>
            <AddStudentModal displayModal={displayAddStudentModal} setDisplayAddStudentModal={setDisplayAddStudentModal}/>
            {students.map((student, id) => <StudentCourseCard student={student} />)}
        </div>
    )
}

export default UserDashboard;