import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
	createNewStudent,
	getDropDown,
	getStudentTable
} from '../../../../actions';
import { Spin } from 'antd';
import moment from 'moment';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import '../mainStyle/mainTable.scss';

import { useForm } from 'react-hook-form';
import { createDropdown } from '../../../../utils/helpers.js';

import {
	FormWrap,
	Input,
	Button,
	Div,
	FormSet,
	ButtonDiv,
	CancelButton,
	AddButton,
	Label
} from '../mainStyle/styledComponent';

const StudentRegistrationForm = props => {

	const { register, errors, handleSubmit } = useForm();
	const dropDowns = ['block_code', 'preferred_contact_type_id', 'school_grade_id', 'location_id', "family_id"]
	const submitNow = data => {
		
		for (const property of dropDowns) {
			// if the string should/could be converted to a number
				data[property] = parseInt(data[property])
		}
		props.createNewStudent(data);
		props.setForm(false);
	}

	useEffect(() => {
		props.getDropDown();
	}, []);

	  const handleCancel = e => {
		e.preventDefault();
		props.setForm(false);
	};
	
	return (
		<FormWrap onSubmit={handleSubmit(submitNow)}>
			<FormSet>
				<Div>
					<div>
						<Label>CPR</Label>
						<div>
							 <Input type="text" placeholder = "xxxxxxxxxx"style={errors.cpr && {border:"solid red 2px"}} name="cpr" ref={register({required: true, minLength: 9})} />
							
							{errors.cpr && errors.cpr.type === "required" && 'CPR is Required'}
							{errors.cpr && errors.cpr.type === "minLength" && 'CPR needs to be 9 characters'}
							</div>				
					</div>
					<div>
						<Label>First Name</Label>
						<div>
							 <Input type="text" style={errors.first_name && {border:"solid red 2px"}} name="first_name" ref={register({required: true, maxLength: 80})} />
							 {errors.first_name && errors.first_name.type === "required" && (<span>Please enter a name</span>)}
						
						</div>
					</div>
					<div>
						<Label>Additional names</Label>
						<div>
							<Input type="text" style={errors.additional_names && {border:"solid red 2px"}}name="additional_names" ref={register({required: true, maxLength: 100})} />
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
							<Input type="text"  name="home_telephone" ref={register} />
						
						
						</div>
					</div>
					<div>
						<Label>Mobile Telephone</Label>
						<div>
							<Input type="tel" name="mobile_telephone" ref={register} />
							
							
						</div>
					</div>
					<div>
						<Label>Email</Label>
						<div>
							<Input type="text" style={errors.email && {border:"solid red 2px"}} name="email" ref={register({required: true, pattern: /^\S+@\S+$/i})} />
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
							<Input type="date" style={errors.birthdate && {border:"solid red 2px"}} name="birthdate" ref={register({required: true})} />
							{errors.birthdate && 'Birth Date is Required'}
						</div>
					</div>
					<div>
						<Label>School Name</Label>
						<div>
							<Input type="text" style={errors.school_name && {border:"solid red 2px"}}  name="school_name" ref={register({required: true})} />
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
							<Input type="text" style={errors.road && {border:"solid red 2px"}} name="road" ref={register({required: true})}/>
							{errors.road && 'Road is Required'}
						</div>
					</div>
					<div>
						<Label>Building</Label>
						<div>
							<Input type="text" style={errors.building && {border:"solid red 2px"}} name="building" ref={register({required: true})} />
							{errors.building && 'Building is Required'}
						</div>
					</div>
					<div>
						<Label>Flat</Label>
						<div>
							<Input type="text" style={errors.flat && {border:"solid red 2px"}} name="flat" ref={register({required: true})}/>
							{errors.flat && 'Flat is Required'}
						</div>
					</div>
					<div style={{ gridColumn: 'span 2' }}>
						<Label>Primary Emergency Contact Name</Label>
						<div>
							<Input type="text" style={errors.primary_emergency_contact_name && {border:"solid red 2px"}} name="primary_emergency_contact_name" ref={register({required: true})} />
							{errors.primary_emergency_contact_name && 'Primary Emergency Contact Name is Required'}
						</div>
					</div>
					<div>
						<Label>Relationship</Label>
						<div>
							<Input type="text" style={errors.primary_emergency_relationship && {border:"solid red 2px"}} name="primary_emergency_relationship" ref={register({required: true})} />
							{errors.primary_emergency_relationship && 'Primary Emergency Relationship is Required'}
						</div>
					</div>
					<div>
						<Label>Phone Number</Label>
						<div>
							<Input type="text" style={errors.primary_emergency_phone && {border:"solid red 2px"}} name="primary_emergency_phone" ref={register({required: true})} />
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
						<Label>Phone Number</Label>
						<div>
							<Input type="text" name="emergency_phone" ref={register} />
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
				<AddButton onClick={handleSubmit} type="submit">Add student</AddButton>
			</ButtonDiv>
		</FormWrap>
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
	connect(mapStateToProps, { createNewStudent, getDropDown, getStudentTable })(
		StudentRegistrationForm
	)
);