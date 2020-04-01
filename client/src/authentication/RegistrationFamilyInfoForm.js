import React from "react";
import { useForm } from 'react-hook-form';

const RegistrationFamilyInfoForm = ({step, setStep, familyInfo, setFamilyInfo}) => {
    const { register, errors, handleSubmit, getValues } = useForm();
    const formSubmit = data => { setFamilyInfo(getValues()); setStep(step + 1); };
    
    return (
        <form onSubmit={handleSubmit(formSubmit)}>
            <fieldset>
                <legend>Your Information</legend>
                <input type="text" name="username" placeholder="Username" defaultValue={familyInfo.username || ""} ref={register({required: true})} />
                <input type="text" name="father_name" placeholder="Father's Name" defaultValue={familyInfo.father_name || ""} ref={register({required: true})} />
                <input type="text" name="mother_name" placeholder="Mother's Name" defaultValue={familyInfo.mother_name || ""} ref={register({required: true})} />
                <input type="email" name="email" placeholder="Email" defaultValue={familyInfo.email || ""} ref={register({required: true})} />

                <input type="text" name="primary_telephone" placeholder="Primary Telephone" defaultValue={familyInfo.primary_telephone || ""} ref={register({required: true})} />
                <input type="text" name="secondary_telephone" placeholder="Secondary Telephone" defaultValue={familyInfo.secondary_telephone || ""} ref={register({required: true})} />
                <input type="password" name="password" placeholder="Password" defaultValue={familyInfo.password || ""} ref={register({required: true})} />
                <input type="password" name="confirmPassword" placeholder="Confirm Password" defaultValue={familyInfo.confirmPassword || ""} ref={register({required: true})} />
            </fieldset>
            { step === 1 &&
            <div className="registration-button-div single-button-right">
                <button onClick={formSubmit}>Next: Student Information</button>
            </div>}           
         </form>
    )
}

export default RegistrationFamilyInfoForm;