import React from "react";
import { useForm } from 'react-hook-form';

const RegistrationStudentInfoForm = ({step, setStep, studentInfo, setStudentInfo, familyInfo, familyRegister, history}) => {

	const { register, errors, handleSubmit, getValues } = useForm();
    const formSubmit = (data, direction) => { setStudentInfo(getValues()); setStep(step + direction)};

    return (
        <form onSubmit={handleSubmit(formSubmit)}>
            <fieldset>
                <legend>Student Information</legend>
                <input type="text" name="first_name" placeholder="First Name" defaultValue={studentInfo.first_name || ""} ref={register({required: true})} />
                <input type="text" name="additional_names" placeholder="Additional Names" defaultValue={studentInfo.additional_names || ""} ref={register({required: true})} />
                <input type="text" name="cpr" placeholder="Student CPR" defaultValue={studentInfo.cpr || ""} ref={register({required: true})} />
                <input type="email" name="email" placeholder="Email" defaultValue={studentInfo.email || ""} ref={register({required: true})} />

                <select name="location" className="dropdownRoot" defaultValue={studentInfo.location || "0"} ref={register}>
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
            {/* in the future, step 3 should be read-only (also solves the problem of forms being split, so a single onClick won't capture any changes to the data) */}
            { step === 3 &&
            <div className="registration-button-div single-button-right">
                <button onClick={() => familyRegister({user: separateUserAndFamilyInfo(familyInfo).userInfo, family: separateUserAndFamilyInfo(familyInfo).familyInfo, studentInfo}, history)}>Submit Registration</button>
            </div>}
         </form>
    )
}

const separateUserAndFamilyInfo = (familyInfo) => {
    return {
        userInfo:
            {   username: familyInfo.username,
                password: familyInfo.password,
                email: familyInfo.email,
                user_type: 'parent'
            },
        familyInfo:
            {   
                father_name: familyInfo.father_name,
                mother_name: familyInfo.mother_name,
                primary_telephone: familyInfo.primary_telephone,
                secondary_telephone: familyInfo.secondary_telephone
            }
    }
}

export default RegistrationStudentInfoForm;