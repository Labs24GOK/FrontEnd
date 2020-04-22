import React, { useState } from 'react';
import StudentRegistrationForm from "../../adminDashboard/components/students/StudentRegistrationForm";

function AddStudentModal({displayModal, setDisplayAddStudentModal}) {


    
    const [form, setForm] = useState(false);

    const handleCancelButtonOnForm = () => {
      setForm(false);
    };
  
    const handleAddButton = () => {
      setForm(!form);
    };


  return (
    <div className={"addStudentModal " + (displayModal ? "modal-displayed" : "modal-hidden")}>
        <div className="addStudentModalContents">
            <h2>Add a Student</h2>
            <StudentRegistrationForm handleCancelButtonOnForm={handleCancelButtonOnForm} setForm={setForm}/>
            <div className="modalButtons">
                <button className="addStudent" onClick={() => setDisplayAddStudentModal(false)}>Return to Dashboard</button>
            </div>
        </div>
    </div>
  )
}

export default AddStudentModal;