import React from "react";
import { useForm } from 'react-hook-form';
import RegistrationPrevNextButtons from './RegistrationPrevNextButtons';

const RegistrationStudentInfoForm = ({step, studentInfo, setStudentInfo}) => {

	const { register, errors, handleSubmit } = useForm();
    const formSubmit = data => { setStudentInfo(data); };

    return (
        <form onSubmit={handleSubmit(formSubmit)}>
            <fieldset>
                <legend>Student Information</legend>
                <input type="text" name="first_name" placeholder="First Name" ref={register({required: true})} />
                <input type="text" name="additional_names" placeholder="Additional Names" ref={register({required: true})} />
                <input type="text" name="cpr" placeholder="Student CPR" ref={register({required: true})} />
                <input type="email" name="email" placeholder="Email" ref={register({required: true})} />

                <select name="location" ref={register}>
                    <option value="0">Select Location</option>
                    <option value="1">Bani Jamra</option>
                    <option value="2">Hamad Town</option>
                </select>
            </fieldset>
            <RegistrationPrevNextButtons step={step} />
         </form>
    )
}

export default RegistrationStudentInfoForm;