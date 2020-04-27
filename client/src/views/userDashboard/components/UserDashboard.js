import React, { useEffect, useState } from 'react';

import MessageBox from "./MessageBox";
import AddStudentModal from "./AddStudentModal";
import StudentCourseCard from "./StudentCourseCard";


import { getStudentsInFamily } from "../getStudentsinFamily";

function UserDashboard() {

    const [userData, setUserData] = useState({});
    const [displayAddStudentModal, setDisplayAddStudentModal] = useState(false);
    
    useEffect(async () => {

        // Get userID from JWT
        let token = localStorage.getItem("token");
        let tokenData = JSON.parse(atob(token.split('.')[1]));;

        let userID = tokenData.subject;
        let name = tokenData.name;

        // retrieve list of students associated with this account (serach by user ID)
        let students = await getStudentsInFamily(userID);
        // let students = [];
        // setStudents(studentArray);

        // determine which messages to display to user upon login
        let messages = [];

        // if (students && students.length > 0)
        //     {
        //         let issues = 0;

        //         students.forEach(student => {

        //             if (!student.courses)
        //                 {
        //                     issues += 1;
        //                     messages.push(student.first_name + " has not registered for any courses yet.");
        //                 }
        //         })

        //         if (issues === 0)
        //             { messages.push("You're all up to date."); }
        //     }
        // else
        //     {
        //         messages.push("You don't have any students registered with us yet.")
        //     }

        // store all info into state variable
        setUserData({name, userID, messages, students});
        
    }, []);

    // if userData hasn't loaded yet, return a loading message/icon
    if (Object.keys(userData).length === 0)
        {
            return <h2>Loading...</h2>;
        }
    else if (!userData.userID)
        {
            return <h2>Invalid user ID</h2>;
        }

    return (
        <div className="userDashboard content">
            <h1>Welcome, {userData.name}.</h1>
            
            {/* <MessageBox messages={userData.messages} />
            <button className="addStudent" onClick={() => setDisplayAddStudentModal(true)}>+ Add a Student</button>
            <AddStudentModal displayModal={displayAddStudentModal} setDisplayAddStudentModal={setDisplayAddStudentModal} userID={userData.userID} />
            {console.log("what's in userData?", userData)}
            {userData.students.map((student, id) => <StudentCourseCard student={student} />)} */}

        </div>
    )
}

export default UserDashboard;