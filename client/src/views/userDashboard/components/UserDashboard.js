import React, { useEffect, useState } from 'react';

import MessageBox from "./MessageBox";
import AddStudentModal from "./AddStudentModal";
import StudentCourseCard from "./StudentCourseCard";


import { getStudentsInFamily } from "../getStudentsinFamily";
import { getMessagesForUser } from "../getMessagesForUser";

function UserDashboard() {

    const [userData, setUserData] = useState({userID: null, name: "", students: [], messages: []});
    const [displayAddStudentModal, setDisplayAddStudentModal] = useState(false);
    const [needToUpdateStudents, setNeedToUpdateStudents] = useState(false);

    // let userID, name;

    // Get userID from JWT
    let token = localStorage.getItem("token");
    let tokenData = JSON.parse(atob(token.split('.')[1]));;

    console.log("token data contains:", tokenData);

    let userID = tokenData.subject;
    let name = tokenData.name;

    // let students = [];

    // retrieve list of students associated with this account (serach by user ID)
    useEffect(() => {

        getStudentsInFamily(userID)
            .then(result => {
                setUserData({students: result})
            })
            .catch(error => { console.log("Error in retrieving students:", error)})

    }, [needToUpdateStudents]);
    // }, []);

    // update userData once students have been updated
    useEffect(() => {

        // determine which messages to display to user upon login
        let messages = getMessagesForUser(userData.students);
                
        // store all info into state variable
        setUserData({...userData, messages});

    }, [userData.students]);


    // if userData hasn't loaded yet, return a loading message/icon
    if (Object.keys(userData).length === 0 || !userData.students || !userData.messages)
        {
            console.log("userData has nothing inside:", userData)

            return <h2>Loading...</h2>;
        }
    else if (!userID)
        {
            return <h2>Invalid user ID</h2>;
        }

    return (
        <div className="userDashboard content">
            <h1>Welcome, {name}.</h1>
            
            {console.log("userData:", userData)}

            <MessageBox messages={userData.messages} />
            <button className="addStudent" onClick={() => setDisplayAddStudentModal(true)}>+ Add a Student</button>
            <AddStudentModal displayModal={displayAddStudentModal} setDisplayAddStudentModal={setDisplayAddStudentModal} setNeedToUpdateStudents={setNeedToUpdateStudents} userID={userID} />
            {console.log("what's in userData?", userData)}
            {userData.students.map((student, id) => <StudentCourseCard student={student} />)}

        </div>
    )
}

export default UserDashboard;