import React, { useEffect, useState } from 'react';

import MessageBox from "./MessageBox";
import AddStudentModal from "./AddStudentModal";
import StudentCourseCard from "./StudentCourseCard";


import { getStudentsInFamily } from "../getStudentsinFamily";
import { getMessagesForUser } from "../getMessagesForUser";

function UserDashboard() {

    const [userData, setUserData] = useState({});
    const [displayAddStudentModal, setDisplayAddStudentModal] = useState(false);
    
    // let userID, name;

    // Get userID from JWT
    let token = localStorage.getItem("token");
    let tokenData = JSON.parse(atob(token.split('.')[1]));;

    console.log("token data contains:", tokenData);

    let userID = tokenData.subject;
    let name = tokenData.name;

    // useEffect(async () => {

        // retrieve list of students associated with this account (serach by user ID)
        // let students = await getStudentsInFamily(userID);
        let students = [];
        
        // determine which messages to display to user upon login
        let messages = getMessagesForUser(students);
        // let messages = [];

        // store all info into state variable
        // setUserData({messages, students});
        
    // }, []);

    // if userData hasn't loaded yet, return a loading message/icon
    if (Object.keys(userData).length === 0)
        {
            return <h2>Loading...</h2>;
        }
    else if (!userID)
        {
            return <h2>Invalid user ID</h2>;
        }

    return (
        <div className="userDashboard content">
            <h1>Welcome, {name}.</h1>
            
            {/* <MessageBox messages={userData.messages} />
            <button className="addStudent" onClick={() => setDisplayAddStudentModal(true)}>+ Add a Student</button>
            <AddStudentModal displayModal={displayAddStudentModal} setDisplayAddStudentModal={setDisplayAddStudentModal} userID={userID} />
            {console.log("what's in userData?", userData)}
            {userData.students.map((student, id) => <StudentCourseCard student={student} />)} */}

        </div>
    )
}

export default UserDashboard;