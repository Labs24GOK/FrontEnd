import React, { useEffect, useState } from 'react';

import MessageBox from "./MessageBox";
import AddStudentModal from "./AddStudentModal";
import StudentCourseCard from "./StudentCourseCard";


import { getStudentsInFamily } from "../getStudentsinFamily";

function UserDashboard() {

    // const [students, setStudents] = useState([]);
    const [userData, setUserData] = useState({});
    const [displayAddStudentModal, setDisplayAddStudentModal] = useState(false);
    
    // userID represents the family ID. Will retrieve from JWT once implemeneted
    let userID = 20;

    useEffect(async () => {

        // retrieve list of students associated with this account (serach by user ID)
        let students = await getStudentsInFamily(userID);
        // setStudents(studentArray);

        // determine which messages to display to user upon login
        let messages = [];

        if (students && students.length > 0)
            {
                let issues = 0;

                students.forEach(student => {

                    if (!student.courses)
                        {
                            issues += 1;
                            messages.push(student.first_name + " has not registered for any courses yet.");
                        }
                })

                if (issues === 0)
                    { messages.push("You're all up to date."); }
            }
        else
            {
                messages.push("You don't have any students registered with us yet.")
            }

        // get first name from JWT
        let name = localStorage.getItem("name") || "blah";

        console.log("data to be set:", {name, messages, students});

        // store all info into state variable
        await setUserData({name, messages, students});
        
    }, []);

    // if userData hasn't loaded yet, return a loading message/icon
    if (Object.keys(userData).length === 0)
        {
            return <></>;
        }

    return (
        <div className="userDashboard content">
            <h1>Welcome, {userData.name}.</h1>
            
            <MessageBox messages={userData.messages} />
            <button className="addStudent" onClick={() => setDisplayAddStudentModal(true)}>+ Add a Student</button>
            <AddStudentModal displayModal={displayAddStudentModal} setDisplayAddStudentModal={setDisplayAddStudentModal}/>
            {console.log("what's in userData?", userData)}
            {userData.students.map((student, id) => <StudentCourseCard student={student} />)}
        </div>
    )
}

export default UserDashboard;