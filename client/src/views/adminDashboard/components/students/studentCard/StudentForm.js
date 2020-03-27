import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {
	editStudentById,
	editStudentDropDown,
	toggleEditComponent,
} from '../../../../../actions';
import { withRouter } from 'react-router-dom';
import 'react-dropdown/style.css';
import '../../mainStyle/mainTable.scss';
import {
	FormWrap,
	Input,
	Div,
	FormSet,
	ButtonDiv,
	CancelButton,
	SaveButton,
	Label
} from '../../mainStyle/styledComponent';

import {createDropdown} from '../../../../../utils/helpers';

import { useForm } from 'react-hook-form';

const StudentForm = props => {
	const { studentID } = props;

	let birthdate = new Date(props.studentById.birthdate)
		.toISOString()
		.split('T')[0];
	let grade_updated = new Date(props.studentById.grade_updated)
		.toISOString()
		.split('T')[0];

	const { errors, register, handleSubmit } = useForm({
		defaultValues: {
			cpr: props.studentById.cpr,
			first_name: props.studentById.first_name,
			additional_names: props.studentById.additional_names,
			gender: props.studentById.gender,
			home_telephone: props.studentById.home_telephone,
			mobile_telephone: props.studentById.mobile_telephone,
			email: props.studentById.email,
			preferred_contact_type_id: props.studentById.preferred_contact_type_id,
			birthdate: birthdate,
			school_name: props.studentById.school_name,
			school_grade_id: props.studentById.school_grade_id,
			location_id: props.studentById.location_id,
			block_code: props.studentById.block_code,
			road: props.studentById.road,
			building: props.studentById.building,
			flat: props.studentById.flat,
			primary_emergency_contact_name:
				props.studentById.primary_emergency_contact_name,
			primary_emergency_relationship:
				props.studentById.primary_emergency_relationship,
			primary_emergency_phone: props.studentById.primary_emergency_phone,
			emergency_contact_name: props.studentById.emergency_contact_name,
			emergency_relationship: props.studentById.emergency_relationship,
			emergency_phone: props.studentById.emergency_phone,
			notes: props.studentById.notes,
			no_call: props.studentById.no_call,
			delinquent: props.studentById.delinquent,
			expelled: props.studentById.expelled,
			grade_updated: grade_updated,
			family_id: props.studentById.family_id
		}
	});
	const dropDowns = ['block_code', 'preferred_contact_type_id', 'school_grade_id', 'location_id', "family_id"];

	const submitNow = (data) => {
		for (const property of dropDowns) {
			data[property] = parseInt(data[property])
		}
		props.editStudentById(studentID, data);
	}

	useEffect(() => {
		props.editStudentDropDown();
	}, []);

	const handleCancel = e => {
		props.toggleEditComponent('false', 'false');
	};

	const genderArr = ['F', 'M'];

	let delinquentNum = 0;
	if (props.studentById.delinquent === false) {
		delinquentNum = 1;
	}

	let expelledNum = 0;
	if (props.studentById.expelled === false) {
		expelledNum = 1;
	}

	let no_callNum = 0;
	if (props.studentById.expelled === false) {
		expelledNum = 1;
	}

	const delinquent = [
		{ label: 'Yes', value: true },
		{ label: 'No', value: false }
	];
	const expelled = [
		{ label: 'Yes', value: true },
		{ label: 'No', value: false }
	];
	const no_call = [
		{ label: 'Yes', value: true },
		{ label: 'No', value: false }
	];
	return (
		<FormWrap onSubmit={handleSubmit(submitNow)}>
			<FormSet>
				<Div>
					<div>
						<Label>CPR</Label>
						<div>
							<Input type="text" placeholder = "xxxxxxxxxx" className= {errors.cpr && "input-error"}  name="cpr" ref={register({required: true, minLength: 9})} />
							{errors.cpr && errors.cpr.type === "required" && 'CPR is Required'}
							{errors.cpr && errors.cpr.type === "minLength" && 'CPR needs to be 9 characters'}
						</div>
					</div>
					<div>
						<Label>First Name</Label>
						<div>
							 <Input type="text" className= {errors.first_name && "input-error"} name="first_name" ref={register({required: true, maxLength: 80})} />
							 {errors.first_name && errors.first_name.type === "required" && (<span>Please enter a name</span>)}
						</div>
					</div>
					<div>
						<Label>Additional Names</Label>
						<div>
							<Input type="text" className={errors.additional_names && "input-error"}name="additional_names" ref={register({required: true, maxLength: 100})} />
							{errors.additional_names && errors.additional_names.type === "required" && 'Additional Names is Required'}	
						</div>
					</div>
					<div>
						<Label>Gender</Label>
						<div>
							<select name="gender" ref={register({ required: true })}>
        						<option value="F">F</option>
        						<option value="M">M</option>
      						</select>
						</div>
					</div>
					<div>
						<Label>Home Telephone</Label>
						<div>
							<Input type="tel" className={errors.home_telephone && "input-error"}name="home_telephone" ref={register({required: true, maxLength: 100})} />
							{errors.home_telephone && errors.home_telephone.type === "required" && 'Home Telephone is Required'}	
						</div>
					</div>
					<div>
						<Label>Mobile Telephone</Label>
						<div>
							<Input type="tel" className={errors.mobile_telephone && "input-error"}name="mobile_telephone" ref={register({required: true, maxLength: 100})} />
							{errors.mobile_telephone && errors.mobile_telephone.type === "required" && 'Mobile Telephone is Required'}			
						</div>
					</div>
					<div>
					<Label>Email</Label>
						<div>
							<Input type="text" className={errors.email && "input-error"} name="email" ref={register({required: true, pattern: /^\S+@\S+$/i})} />
							{errors.email && 'Email is Required'}
						</div>
					</div>
					<div>
						<Label>Preferred Contact Method</Label>
						<div>	
							<select name="preferred_contact_type_id" ref={register({ required: true })}>
							{createDropdown(props.contactTypesTable)}
							</select>
						</div>
					</div>
					<div>
						<Label>Birth date</Label>
						<div>
							<Input type="date" className={errors.birthdate && "input-error"} name="birthdate" ref={register({required: true})} />
							{errors.birthdate && 'Birth Date is Required'}
						</div>
					</div>
					<div>
						<Label>School Name</Label>
						<div>
							<Input type="text" className={errors.school_name && "input-error"}  name="school_name" ref={register({required: true})} />
							{errors.school_name && 'School Name is Required'}
						</div>
					</div>
					<div>
						<Label>School Grade</Label>
						<div>
							<select name="school_grade_id" ref={register({ required: true })}>
        						{createDropdown(props.schoolGradeTable)}
      						</select>
						</div>
					</div>
					<div>
						<Label>Location</Label>
						<div>					
							<select name="location_id" ref={register({ required: true })}>
        						{createDropdown(props.locationsTable)}
      						</select>
						</div>
					</div>
					<div>
						<Label>Block</Label>
						<div>
							<select name="block_code" ref={register({ required: true })}>
        						{createDropdown(props.blocksTable)}
								{errors.block_code && 'Block code is Required'}
      						</select>
						</div>
					</div>
					<div>
						<Label>Road</Label>
						<div>
							<Input type="text" className={errors.road && "input-error"} name="road" ref={register({required: true})}/>
							{errors.road && 'Road is Required'}
						</div>
					</div>
					<div>
						<Label>Building</Label>
						<div>
							<Input type="text" className={errors.building && "input-error"} name="building" ref={register({required: true})} />
							{errors.building && 'Building is Required'}
						</div>
					</div>
					<div>
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
					<div>
						<Label>Relationship</Label>
						<div>
							<Input type="text" className={errors.primary_emergency_relationship && "input-error"} name="primary_emergency_relationship" ref={register({required: true})} />
							{errors.primary_emergency_relationship && 'Primary Emergency Relationship is Required'}
						</div>
					</div>
					<div>
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
					<div>
						<Label>Relationship</Label>
						<div>
							<Input type="text"  name="emergency_relationship" ref={register} />
						</div>
					</div>
					<div>
					<	Label>Phone Number</Label>
						<div>
							<Input type="tel" name="emergency_phone" ref={register} />
						</div>
					</div>
					<div>
						<Label>Grade Updated</Label>
						<div>
							<Input type="date" name="grade_updated" ref={register({required: true})} />
						</div>
					</div>
					<div>
						<Label>Registration Date</Label>
						<div>
							<Input type='date' name='registration_date' ref={register} />
						</div>
					</div>
						<div>
							<Label>No Call</Label>
							<div>
								<select name="no_call" ref={register({ required: true })}>
        							{createDropdown(no_call)}
      							</select>
							</div>
						</div>
						<div>
							<Label>Delinquent</Label>
							<div>
								<select name="delinquent" ref={register({ required: true })}>
        							{createDropdown(delinquent[delinquentNum])}
      							</select>
							</div>
						</div>
						<div>
							<Label>Expelled</Label>
							<div>
								<select name="delinquent" ref={register({ required: true })}>
        							{createDropdown(expelled)}
      							</select>
							</div>
						</div>
					<div style={{ gridColumn: 'span 4' }}>
						<Label>Notes</Label>
						<div>
							<textarea type="text" name="notes" ref={register}
								style={{width: '100%', height: '80px', outline: 'none', border: '1px solid transparent', borderRadius: '3px'}}/>
						</div>
						<div>
							<Input type="hidden" value="1" name="family_id" ref={register({required: true})} />
						</div>
					</div>
				</Div>
			</FormSet>
			<ButtonDiv>
				<CancelButton onClick={handleCancel}>Cancel</CancelButton>
				<SaveButton type="submit" onClick={handleSubmit(submitNow)}>
					Save
				</SaveButton>
			</ButtonDiv>
		</FormWrap>
	);
};

const mapStateToProps = state => {
	return {
		isLoading: state.studentByIdReducer.isLoading,
		studentById: state.studentByIdReducer.studentById,
		isEdited: state.studentByIdReducer.isEdited,
		isEditing: state.studentByIdReducer.isEditing,
		error: state.studentByIdReducer.error,
		schoolGradeTable: state.studentByIdReducer.schoolGradeTable,
		blocksTable: state.studentByIdReducer.blocksTable,
		contactTypesTable: state.studentByIdReducer.contactTypesTable,
		locationsTable: state.studentByIdReducer.locationsTable
	};
};

export default withRouter(
	connect(mapStateToProps, {
		editStudentById,
		toggleEditComponent,
		editStudentDropDown,
	})(StudentForm)
);
