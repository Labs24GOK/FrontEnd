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
	console.log(props)
	const { register, errors, handleSubmit } = useForm();
	const dropDowns = ['block_code', 'preferred_contact_type_id', 'school_grade_id', 'location_id', "family_id"]
	const submitNow = data => {
		console.log(data)
		
		for (const property of dropDowns) {
			// if the string should/could be converted to a number
				data[property] = parseInt(data[property])
		}
		
		props.createNewStudent(data);
		props.setForm(false);
		console.log("props.createNewStuden", props.createNewStudent)
		console.log("CreateNewStudentData", props.createNewStudent(data))
		console.log("data", data)
	}

	const onSubmit = data => {
		console.log(data);
	  }

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
							 <Input type="text" name="cpr" ref={register({required: true})} />
							{errors.cpr && 'CPR is Required'}
							</div>				
					</div>
					<div>
						<Label>First Name</Label>
						<div>
							 <Input type="text" name="first_name" ref={register({required: true, maxLength: 80})} />
						</div>
					</div>
					<div>
						<Label>Additional names</Label>
						<div>
							<Input type="text" name="additional_names" ref={register({required: true, maxLength: 100})} />
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
							<Input type="text" name="home_telephone" ref={register({required: true, maxLength: 12})} />
						</div>
					</div>
					<div>
						<Label>Mobile Telephone</Label>
						<div>
							<Input type="tel" name="mobile_telephone" ref={register({required: true, maxLength: 12})} />
						</div>
					</div>
					<div>
						<Label>Email</Label>
						<div>
							<Input type="text"  name="email" ref={register({required: true, pattern: /^\S+@\S+$/i})} />
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
							<Input type="date" name="birthdate" ref={register({required: true})} />
						</div>
					</div>
					<div>
						<Label>School Name</Label>
						<div>
							<Input type="text"  name="school_name" ref={register({required: true})} />
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
      							</select>
						</div>
					</div>
					<div>
						<Label>Road</Label>
						<div>
							<Input type="text"  name="road" ref={register({required: true})} />
						</div>
					</div>
					<div>
						<Label>Building</Label>
						<div>
							<Input type="text"  name="building" ref={register({required: true})} />
						</div>
					</div>
					<div>
						<Label>Flat</Label>
						<div>
							<Input type="text"  name="flat" ref={register({required: true})} />
						</div>
					</div>
					<div style={{ gridColumn: 'span 2' }}>
						<Label>Primary Emergency Contact Name</Label>
						<div>
							<Input type="text" name="primary_emergency_contact_name" ref={register({required: true})} />
						</div>
					</div>
					<div>
						<Label>Relationship</Label>
						<div>
							<Input type="text" name="primary_emergency_relationship" ref={register({required: true})} />
						</div>
					</div>
					<div>
						<Label>Phone Number</Label>
						<div>
							<Input type="text"  name="primary_emergency_phone" ref={register({required: true})} />
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