import React from "react";
import { useForm } from 'react-hook-form';

const RegistrationStudentInfoForm = ({step, setStep, studentInfo, setStudentInfo}) => {

	const { register, errors, handleSubmit } = useForm();
    const formSubmit = (data, direction) => { setStudentInfo(data); setStep(step + direction)};

    return (
        <form onSubmit={handleSubmit(formSubmit)}>
            <fieldset>
                <legend>Student Information</legend>
                <input type="text" name="first_name" placeholder="First Name" defaultValue={studentInfo.first_name || ""} ref={register({required: true})} />
                <input type="text" name="additional_names" placeholder="Additional Names" defaultValue={studentInfo.additional_names || ""} ref={register({required: true})} />
                <input type="text" name="cpr" placeholder="Student CPR" defaultValue={studentInfo.cpr || ""} ref={register({required: true})} />
                <input type="email" name="email" placeholder="Email" defaultValue={studentInfo.email || ""} ref={register({required: true})} />

                <select name="location" ref={register}>
                    <option value="0">Select Location</option>
                    <option value="1">Bani Jamra</option>
                    <option value="2">Hamad Town</option>
                </select>
            </fieldset>

            { step === 2 &&
            <div className="registration-button-div">
                <button onClick={data => formSubmit(data, -1)}>Back: Your Information </button>
                <button onClick={data => formSubmit(data, 1)}>Next: Review Registration</button>
            </div>}

            { step === 3 &&
            <div className="registration-button-div single-button-right">
                <button onClick={data => formSubmit(data, 1)}>Next: Submit Registration</button>
            </div>}
                
         </form>
    )
}

export default RegistrationStudentInfoForm;