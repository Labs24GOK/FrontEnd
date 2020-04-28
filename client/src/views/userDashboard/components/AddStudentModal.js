import React, { useState } from 'react';
import UserAddStudentForm from "./UserAddStudentForm";

function AddStudentModal({displayModal, setDisplayAddStudentModal, userID, setNeedToUpdateStudents}) {

  return (
    <div className={"addStudentModal " + (displayModal ? "modal-displayed" : "modal-hidden")}>
        <div className="addStudentModalContents">
            <h2>Add a Student</h2>
            <UserAddStudentForm userID={userID} setDisplayAddStudentModal={setDisplayAddStudentModal}/>
            <div className="modalButtons">
                <button className="addStudent" onClick={() => setDisplayAddStudentModal(false)}>Return to Dashboard</button>
            </div>
        </div>
    </div>
  )
}

export default AddStudentModal;