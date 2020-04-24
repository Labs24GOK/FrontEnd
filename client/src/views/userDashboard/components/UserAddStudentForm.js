import React, { useEffect} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createNewStudent, getDropDown } from '../../../actions/adminDashboardActions/studentTableActions';
import { useForm } from 'react-hook-form';
import { createDropdown } from '../../../utils/helpers';


// import 'react-dropdown/style.css';
// import '../../../styles/';
// import '../../../../styles/table.scss'

import {FormWrap, Input, Div, FormSet, ButtonDiv, CancelButton, AddButton, Label} from '../../adminDashboard/components/mainStyle/styledComponent';

const UserAddStudentForm = props => {

	const { register, errors, handleSubmit } = useForm();
	const dropDowns = ['block_code', 'preferred_contact_type_id', 'school_grade_id', 'location_id', "user_id"]
	const submitNow = data => {
		for (const property of dropDowns) {
			// if the string should/could be converted to a number
				data[property] = parseInt(data[property])
		}
		props.createNewStudent(data);
		props.setDisplayAddStudentModal(false);
	}

	useEffect(() => {
		props.getDropDown();
	}, []);

	return (
		<form onSubmit={handleSubmit(submitNow)}>
					<div className="form-input-div">
						<Label>CPR</Label>
						<div>
							 <Input type="text" placeholder = "xxxxxxxxxx" className= {errors.cpr && "input-error"}  name="cpr" ref={register({required: true, minLength: 9})} />
							{errors.cpr && errors.cpr.type === "required" && 'CPR is Required'}
							{errors.cpr && errors.cpr.type === "minLength" && 'CPR needs to be 9 characters'}
						</div>				
					</div>
					<div className="form-input-div">
						<Label>First Name</Label>
						<div>
							<Input type="text" className= {errors.first_name && "input-error"} name="first_name" ref={register({required: true, maxLength: 80})} />
							{errors.first_name && errors.first_name.type === "required" && (<span>Please enter a name</span>)}
						</div>
					</div>
					<div className="form-input-div">
						<Label>Additional names</Label>
						<div>
							<Input type="text" className={errors.additional_names && "input-error"}name="additional_names" ref={register({required: true, maxLength: 100})} />
							{errors.additional_names && errors.additional_names.type === "required" && 'Additional Names is Required'}			
						</div>
					</div>
					<div className="form-input-div">
						<Label>Gender</Label>
						<div>
							<select className="dropDown" name="gender" ref={register({ required: true })}>
        						<option value="F">F</option>
        						<option value="M">M</option>
      						</select>
						</div>
					</div>
					<div className="form-input-div">
						<Label>Home Telephone</Label>
						<div>
							<Input type="tel" className={errors.home_telephone && "input-error"}name="home_telephone" ref={register({required: true, maxLength: 100})} />
							{errors.home_telephone && errors.home_telephone.type === "required" && 'Home Telephone is Required'}			
						</div>
					</div>
					<div className="form-input-div">
						<Label>Mobile Telephone</Label>
						<div>
							<Input type="tel" className={errors.mobile_telephone && "input-error"}name="mobile_telephone" ref={register({required: true, maxLength: 100})} />
							{errors.mobile_telephone && errors.mobile_telephone.type === "required" && 'Mobile Telephone is Required'}			
						</div>
					</div>
					<div className="form-input-div">
						<Label>Email</Label>
						<div>
							<Input type="text" className={errors.email && "input-error"} name="email" ref={register({required: true, pattern: /^\S+@\S+$/i})} />
							{errors.email && 'Email is Required'}
						</div>
					</div>
					<div className="form-input-div">
						<Label>Preferred Contact Method</Label>
						<div>	
							<select className="dropDown" name="preferred_contact_type_id" ref={register({ required: true })}>
							{createDropdown(props.contactTypesTable)}
							</select>
						</div>
					</div>
					<div className="form-input-div">
						<Label>Birth date</Label>
						<div>
							<Input type="date" className={errors.birthdate && "input-error"} name="birthdate" ref={register({required: true})} />
							{errors.birthdate && 'Birth Date is Required'}
						</div>
					</div>
					<div className="form-input-div">
						<Label>School Name</Label>
						<div>
							<Input type="text" className={errors.school_name && "input-error"}  name="school_name" ref={register({required: true})} />
							{errors.school_name && 'School Name is Required'}
						</div>
					</div>
					<div className="form-input-div">
						<Label>School Grade</Label>
						<div>
							<select className="dropDown" name="school_grade_id" ref={register({ required: true })}>
        						{createDropdown(props.schoolGradeTable)}
      						</select>
						</div>
					</div>
					<div className="form-input-div">
						<Label>Location</Label>
						<div>					
							<select className="dropDown" name="location_id" ref={register({ required: true })}>
        						{createDropdown(props.locationsTable)}
      						</select>
						</div>
					</div>
					<div className="form-input-div">
						<Label>Block</Label>
						<div>
							<select className="dropDown" name="block_code" ref={register({ required: true })}>
        						{createDropdown(props.blocksTable)}
								{errors.block_code && 'Block code is Required'}
      						</select>
						</div>
					</div>
					<div className="form-input-div">
						<Label>Road</Label>
						<div>
							<Input type="text" className={errors.road && "input-error"} name="road" ref={register({required: true})}/>
							{errors.road && 'Road is Required'}
						</div>
					</div>
					<div className="form-input-div">
						<Label>Building</Label>
						<div>
							<Input type="text" className={errors.building && "input-error"} name="building" ref={register({required: true})} />
							{errors.building && 'Building is Required'}
						</div>
					</div>
					<div className="form-input-div">
						<Label>Flat</Label>
						<div>
							<Input type="text" className={errors.flat && "input-error"} name="flat" ref={register({required: true})}/>
							{errors.flat && 'Flat is Required'}
						</div>
					</div>
					<div style={{ gridColumn: 'span 2' }}>
						<Label>Primary Emergency Contact Name</Label>
						<div>
							<Input type="text" className={errors.primary_emergency_contact_name && "input-error"} name="primary_emergency_contact_name" ref={register({required: true})} />
							{errors.primary_emergency_contact_name && 'Primary Emergency Contact Name is Required'}
						</div>
					</div>
					<div className="form-input-div">
						<Label>Relationship</Label>
						<div>
							<Input type="text" className={errors.primary_emergency_relationship && "input-error"} name="primary_emergency_relationship" ref={register({required: true})} />
							{errors.primary_emergency_relationship && 'Primary Emergency Relationship is Required'}
						</div>
					</div>
					<div className="form-input-div">
						<Label>Phone Number</Label>
						<div>
							<Input type="tel" className={errors.primary_emergency_phone && "input-error"} name="primary_emergency_phone" ref={register({required: true})} />
							{errors.primary_emergency_phone && errors.primary_emergency_phone.type === "required" && 'Primary Emergency Phone is Required'}					
						</div>
					</div>
					<div style={{ gridColumn: 'span 2' }}>
						<Label>Emergency Contact Name</Label>
						<div>
							<Input style={{ width: '100%' }} type="text" name="emergency_contact_name" ref={register} />
						</div>
					</div>
					<div className="form-input-div">
						<Label>Relationship</Label>
						<div>
							<Input type="text"  name="emergency_relationship" ref={register} />
						</div>
					</div>
					<div className="form-input-div">
						<Label>Phone Number</Label>
						<div>
							<Input type="tel" name="emergency_phone" ref={register} />
						</div>
					</div>
					<div className="form-notes-div" style={{ gridColumn: 'span 4' }}>
						<Label>Notes</Label>
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
				<CancelButton onClick={() => props.setDisplayAddStudentModal(false)}>Cancel</CancelButton>
				<AddButton onClick={handleSubmit} type="submit">Add student</AddButton>
			</div>

			{(props.createNewStudentSuccessMessage.length > 0) ? <h3>Student successfully created.</h3> : <></> }
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