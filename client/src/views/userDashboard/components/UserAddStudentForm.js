import React, { useEffect} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createNewStudent, getDropDown } from '../../../actions/adminDashboardActions/studentTableActions';
import { useForm } from 'react-hook-form';
import { createDropdown } from '../../../utils/helpers';

import {Input} from '../../adminDashboard/components/mainStyle/styledComponent';

const UserAddStudentForm = props => {

	const { register, errors, handleSubmit } = useForm();
	const dropDowns = ['block_code', 'preferred_contact_type_id', 'school_grade_id', 'location_id', "user_id"]
	const submitNow = data => {
		for (const property of dropDowns) {
			// if the string should/could be converted to a number
				data[property] = parseInt(data[property])
		}

		console.log("props are:", props);

		props.createNewStudent(data);
		// setTimeout(props.setNeedToUpdateStudents(true), 5000);
		props.setDisplayAddStudentModal(false);
	}

	useEffect(() => {
		props.getDropDown();
	}, []);

	return (
		<form onSubmit={handleSubmit(submitNow)} className="userAddStudentForm">
					<div className="form-input-div">
						<label>CPR</label>
						<div>
							 <Input type="text" placeholder = "xxxxxxxxxx" className= {errors.cpr && "input-error"}  name="cpr" ref={register({required: true, minLength: 9})} />
							{errors.cpr && errors.cpr.type === "required" && 'CPR is Required'}
							{errors.cpr && errors.cpr.type === "minLength" && 'CPR needs to be 9 characters'}
						</div>				
					</div>
					<div className="form-input-div">
						<label>First Name</label>
						<div>
							<Input type="text" className= {errors.first_name && "input-error"} name="first_name" ref={register({required: true, maxLength: 80})} />
							{errors.first_name && errors.first_name.type === "required" && (<span>Please enter a name</span>)}
						</div>
					</div>
					<div className="form-input-div">
						<label>Additional names</label>
						<div>
							<Input type="text" className={errors.additional_names && "input-error"}name="additional_names" ref={register({required: true, maxLength: 100})} />
							{errors.additional_names && errors.additional_names.type === "required" && 'Additional Names is Required'}			
						</div>
					</div>
					<div className="form-input-div">
						<label>Gender</label>
						<div>
							<select className="dropDown" name="gender" ref={register({ required: true })}>
        						<option value="F">F</option>
        						<option value="M">M</option>
      						</select>
						</div>
					</div>
					<div className="form-input-div">
						<label>Home Telephone</label>
						<div>
							<Input type="tel" className={errors.home_telephone && "input-error"}name="home_telephone" ref={register({required: true, maxLength: 100})} />
							{errors.home_telephone && errors.home_telephone.type === "required" && 'Home Telephone is Required'}			
						</div>
					</div>
					<div className="form-input-div">
						<label>Mobile Telephone</label>
						<div>
							<Input type="tel" className={errors.mobile_telephone && "input-error"}name="mobile_telephone" ref={register({required: true, maxLength: 100})} />
							{errors.mobile_telephone && errors.mobile_telephone.type === "required" && 'Mobile Telephone is Required'}			
						</div>
					</div>
					<div className="form-input-div">
						<label>Email</label>
						<div>
							<Input type="text" className={errors.email && "input-error"} name="email" ref={register({required: true, pattern: /^\S+@\S+$/i})} />
							{errors.email && 'Email is Required'}
						</div>
					</div>
					<div className="form-input-div">
						<label>Preferred Contact Method</label>
						<div>	
							<select className="dropDown" name="preferred_contact_type_id" ref={register({ required: true })}>
							{createDropdown(props.contactTypesTable)}
							</select>
						</div>
					</div>
					<div className="form-input-div">
						<label>Birth date</label>
						<div>
							<Input type="date" className={errors.birthdate && "input-error"} name="birthdate" ref={register({required: true})} />
							{errors.birthdate && 'Birth Date is Required'}
						</div>
					</div>
					<div className="form-input-div">
						<label>School Name</label>
						<div>
							<Input type="text" className={errors.school_name && "input-error"}  name="school_name" ref={register({required: true})} />
							{errors.school_name && 'School Name is Required'}
						</div>
					</div>
					<div className="form-input-div">
						<label>School Grade</label>
						<div>
							<select className="dropDown" name="school_grade_id" ref={register({ required: true })}>
        						{createDropdown(props.schoolGradeTable)}
      						</select>
						</div>
					</div>
					<div className="form-input-div">
						<label>Location</label>
						<div>					
							<select className="dropDown" name="location_id" ref={register({ required: true })}>
        						{createDropdown(props.locationsTable)}
      						</select>
						</div>
					</div>
					<div className="form-input-div">
						<label>Block</label>
						<div>
							<select className="dropDown" name="block_code" ref={register({ required: true })}>
        						{createDropdown(props.blocksTable)}
								{errors.block_code && 'Block code is Required'}
      						</select>
						</div>
					</div>
					<div className="form-input-div">
						<label>Road</label>
						<div>
							<Input type="text" className={errors.road && "input-error"} name="road" ref={register({required: true})}/>
							{errors.road && 'Road is Required'}
						</div>
					</div>
					<div className="form-input-div">
						<label>Building</label>
						<div>
							<Input type="text" className={errors.building && "input-error"} name="building" ref={register({required: true})} />
							{errors.building && 'Building is Required'}
						</div>
					</div>
					<div className="form-input-div">
						<label>Flat</label>
						<div>
							<Input type="text" className={errors.flat && "input-error"} name="flat" ref={register({required: true})}/>
							{errors.flat && 'Flat is Required'}
						</div>
					</div>
					<div style={{ gridColumn: 'span 2' }}>
						<label>Primary Emergency Contact Name</label>
						<div>
							<Input type="text" className={errors.primary_emergency_contact_name && "input-error"} name="primary_emergency_contact_name" ref={register({required: true})} />
							{errors.primary_emergency_contact_name && 'Primary Emergency Contact Name is Required'}
						</div>
					</div>
					<div className="form-input-div">
						<label>Relationship</label>
						<div>
							<Input type="text" className={errors.primary_emergency_relationship && "input-error"} name="primary_emergency_relationship" ref={register({required: true})} />
							{errors.primary_emergency_relationship && 'Primary Emergency Relationship is Required'}
						</div>
					</div>
					<div className="form-input-div">
						<label>Phone Number</label>
						<div>
							<Input type="tel" className={errors.primary_emergency_phone && "input-error"} name="primary_emergency_phone" ref={register({required: true})} />
							{errors.primary_emergency_phone && errors.primary_emergency_phone.type === "required" && 'Primary Emergency Phone is Required'}					
						</div>
					</div>
					<div style={{ gridColumn: 'span 2' }}>
						<label>Emergency Contact Name</label>
						<div>
							<Input style={{ width: '100%' }} type="text" name="emergency_contact_name" ref={register} />
						</div>
					</div>
					<div className="form-input-div">
						<label>Relationship</label>
						<div>
							<Input type="text"  name="emergency_relationship" ref={register} />
						</div>
					</div>
					<div className="form-input-div">
						<label>Phone Number</label>
						<div>
							<Input type="tel" name="emergency_phone" ref={register} />
						</div>
					</div>
					<div className="form-notes-div" style={{ gridColumn: 'span 4' }}>
						<label>Notes</label>
						<div>
							<textarea type="text" name="notes" ref={register}
								style={{width: '100%', height: '80px', outline: 'none', border: '1px solid transparent', borderRadius: '3px'}}/>
						</div>
						<div>
							{/* user_id is a hidden input on user dashboard, but not on admin dashboard */}
							<Input type="hidden" value={props.userID} name="user_id" ref={register({required: true})} />
						</div>
					</div>
			<div className="form-button-div">
				<button className="cancel" onClick={() => props.setDisplayAddStudentModal(false)}>Cancel</button>
				<button className="add" onClick={handleSubmit} type="submit">Add student</button>
			</div>

			{/* {(props.createNewStudentSuccessMessage.length > 0) ? <h3>Student successfully created.</h3> : <></> } */}
		</form>
	);
};

const mapStateToProps = state => {
	return {
		createNewStudentIsLoading:
			state.studentTableReducer.createNewStudentIsLoading,
		schoolGradeTable: state.studentTableReducer.schoolGradeTable,
		blocksTable: state.studentTableReducer.blocksTable,
		contactTypesTable: state.studentTableReducer.contactTypesTable,
		locationsTable: state.studentTableReducer.locationsTable,
		createNewStudentSuccessMessage:
			state.studentTableReducer.createNewStudentSuccessMessage
	};
};

export default withRouter(
	connect(mapStateToProps, { createNewStudent, getDropDown })(
		UserAddStudentForm
	)
);