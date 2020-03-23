import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
// import { Icon} from 'semantic-ui-react'
import {
	editStudentById,
	editStudentDropDown,
	toggleEditComponent
} from '../../../../../actions';
import { withRouter } from 'react-router-dom';
import Dropdown from 'react-dropdown';
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


const StudentForm = props => {
	const { studentID } = props;

	let birthdate = new Date(props.studentById.birthdate)
		.toISOString()
		.split('T')[0];
	let grade_updated = new Date(props.studentById.grade_updated)
		.toISOString()
		.split('T')[0];

	const [state, setState] = useState({
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
	});

	useEffect(() => {
		props.editStudentDropDown();
	}, []);

	// handle required fields (mobileTelephone, emergencyContactName, emergencyRelationship, emergencyPhone, and notes were asked to not be required)
	const [errorBorderCpr, setErrorBorderCpr] = useState('transparent'); //error #C73642
	const [errorBorderFirstName, setErrorBorderFirstName] = useState(
		'transparent'
	); //error #C73642
	const [errorBorderAdditionalNames, setErrorBorderAdditionalNames] = useState(
		'transparent'
	); //error #C73642
	const [errorBorderGender, setErrorBorderGender] = useState('transparent'); //error #C73642
	const [errorBorderHomeTelephone, setErrorBorderHomeTelephone] = useState(
		'transparent'
	); //error #C73642
	const [errorBorderMobileTelephone, setErrorBorderMobileTelephone] = useState(
		'transparent'
	); //error #C73642
	const [errorBorderEmail, setErrorBorderEmail] = useState('transparent'); //error #C73642
	const [errorBorderContactType, setErrorBorderContactType] = useState(
		'transparent'
	); //error #C73642
	const [errorBorderBirthdate, setErrorBorderBirthdate] = useState(
		'transparent'
	); //error #C73642
	const [errorBorderSchoolName, setErrorBorderSchoolName] = useState(
		'transparent'
	); //error #C73642
	const [errorBorderSchoolGrade, setErrorBorderSchoolGrade] = useState(
		'transparent'
	); //error #C73642
	const [errorBorderLocation, setErrorBorderLocation] = useState('transparent'); //error #C73642
	const [errorBorderBlock, setErrorBorderBlock] = useState('transparent'); //error #C73642
	const [errorBorderRoad, setErrorBorderRoad] = useState('transparent'); //error #C73642
	const [errorBorderBuilding, setErrorBorderBuilding] = useState('transparent'); //error #C73642
	const [errorBorderFlat, setErrorBorderFlat] = useState('transparent'); //error #C73642
	const [
		errorBorderPrimaryEmergencyContactName,
		setErrorBorderPrimaryEmergencyContactName
	] = useState('transparent'); //error #C73642
	const [
		errorBorderPrimaryEmergencyRelationship,
		setErrorBorderPrimaryEmergencyRelationship
	] = useState('transparent'); //error #C73642
	const [
		errorBorderPrimaryEmergencyPhone,
		setErrorBorderPrimaryEmergencyPhone
	] = useState('transparent'); //error #C73642
	const [
		errorBorderEmergencyContactName,
		setErrorBorderEmergencyContactName
	] = useState('transparent'); //error #C73642
	const [
		errorBorderEmergencyRelationship,
		setErrorBorderEmergencyRelationship
	] = useState('transparent'); //error #C73642
	const [errorBorderEmergencyPhone, setErrorBorderEmergencyPhone] = useState(
		'transparent'
	); //error #C73642
	const [errorBorderNotes, setErrorBorderNotes] = useState('transparent'); //error #C73642
	const [errorBorderNoCall, setErrorBorderNoCall] = useState('transparent'); //error #C73642
	const [errorBorderDelinquent, setErrorBorderDelinquent] = useState(
		'transparent'
	); //error #C73642
	const [errorBorderExpelled, setErrorBorderExpelled] = useState('transparent'); //error #C73642
	const [errorBorderGradeUpdated, setErrorBorderGradeUpdated] = useState(
		'transparent'
	); //error #C73642

	function handleChange(event) {
		setState({
			...state,
			[event.target.name]: event.target.value
		});
	}

	const handleSubmit = e => {
		e.preventDefault();
		// check for required fields, commented out fields indicate those that are not required
		// those can be uncommented if stakeholder wants to require those fields in the future
		if (
			state.cpr === '' ||
			state.first_name === '' ||
			state.additional_names === '' ||
			state.gender === '' ||
			state.home_telephone === '' ||
			// state.mobile_telephone === '' ||
			state.email === '' ||
			state.preferred_contact_type_id === '' ||
			state.birthdate === '' ||
			state.school_name === '' ||
			state.school_grade_id === '' ||
			state.location_id === '' ||
			state.block_code === '' ||
			state.road === '' ||
			state.building === '' ||
			state.flat === '' ||
			state.primary_emergency_contact_name === '' ||
			state.primary_emergency_relationship === '' ||
			state.primary_emergency_phone === '' ||
			// state.emergency_contact_name === '' ||
			// state.emergency_relationship === '' ||
			// state.emergency_phone === '' ||
			state.no_call === '' ||
			state.delinquent === '' ||
			state.expelled === '' ||
			state.grade_updated === ''
			// state.notes === ''
		) {
			// highlight all that were missed
			if (state.cpr === '') {
				setErrorBorderCpr('#ef6570');
			}
			if (state.first_name === '') {
				setErrorBorderFirstName('#ef6570');
			}
			if (state.additional_names === '') {
				setErrorBorderAdditionalNames('#ef6570');
			}
			if (state.gender === '') {
				setErrorBorderGender('#ef6570');
			}
			if (state.home_telephone === '') {
				setErrorBorderHomeTelephone('#ef6570');
			}
			// if (state.mobile_telephone === '') {
			// 	setErrorBorderMobileTelephone('#ef6570');
			// }
			if (state.email === '') {
				setErrorBorderEmail('#ef6570');
			}
			if (state.preferred_contact_type_id === '') {
				setErrorBorderContactType('#ef6570');
			}
			if (state.birthdate === '') {
				setErrorBorderBirthdate('#ef6570');
			}
			if (state.school_name === '') {
				setErrorBorderSchoolName('#ef6570');
			}
			if (state.school_grade_id === '') {
				setErrorBorderSchoolGrade('#ef6570');
			}
			if (state.location_id === '') {
				setErrorBorderLocation('#ef6570');
			}
			if (state.block_code === '') {
				setErrorBorderBlock('#ef6570');
			}
			if (state.road === '') {
				setErrorBorderRoad('#ef6570');
			}
			if (state.building === '') {
				setErrorBorderBuilding('#ef6570');
			}
			if (state.flat === '') {
				setErrorBorderFlat('#ef6570');
			}
			if (state.primary_emergency_contact_name === '') {
				setErrorBorderPrimaryEmergencyContactName('#ef6570');
			}
			if (state.primary_emergency_relationship === '') {
				setErrorBorderPrimaryEmergencyRelationship('#ef6570');
			}
			if (state.primary_emergency_phone === '') {
				setErrorBorderPrimaryEmergencyPhone('#ef6570');
			}
			// if (state.emergency_contact_name === '') {
			// 	setErrorBorderEmergencyContactName('#ef6570');
			// }
			// if (state.emergency_relationship === '') {
			// 	setErrorBorderEmergencyRelationship('#ef6570');
			// }
			// if (state.emergency_phone === '') {
			// 	setErrorBorderEmergencyPhone('#ef6570');
			// }
			if (state.no_call === '') {
				setErrorBorderNoCall('#ef6570');
			}
			if (state.delinquent === '') {
				setErrorBorderDelinquent('#ef6570');
			}
			if (state.expelled === '') {
				setErrorBorderExpelled('#ef6570');
			}
			if (state.grade_updated === '') {
				setErrorBorderGradeUpdated('#ef6570');
			}
			// if (state.notes === '') {
			// 	setErrorBorderNotes('#ef6570');
			// }
		} else {
			// const birthdateDate = moment(student.birthdate).toDate();
			// const birthdateISO = birthdateDate.toISOString()
			props.editStudentById(studentID, state);
			// if(props.createNewStudentSuccessMessage === 'Student has been successfuly added')
			// setTimeout(()=>{
			//   props.getStudentTable()
			// },1000)
		}
	};

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
		<FormWrap onSubmit={handleSubmit}>
			<FormSet>
				<Div>
					<div>
						<Label>CPR</Label>
						<div
							style={{
								border: `1px solid ${errorBorderCpr}`,
								borderRadius: '3px'
							}}
						>
							<Input
								type="text"
								name="cpr"
								placeholder="CPR"
								onChange={handleChange}
								value={state.cpr}
							/>
						</div>
					</div>
					<div>
						<Label>First Name</Label>
						<div
							style={{
								border: `1px solid ${errorBorderFirstName}`,
								borderRadius: '3px'
							}}
						>
							<Input
								type="text"
								name="first_name"
								placeholder="First Name"
								onChange={handleChange}
								value={state.first_name}
							/>
						</div>
					</div>
					<div>
						<Label>Additional Names</Label>
						<div
							style={{
								border: `1px solid ${errorBorderAdditionalNames}`,
								borderRadius: '3px'
							}}
						>
							<Input
								type="text"
								name="additional_names"
								placeholder="Additional Names"
								onChange={handleChange}
								value={state.additional_names}
							/>
						</div>
					</div>
					<div>
						<Label>Gender</Label>
						<div
							style={{
								border: `1px solid ${errorBorderGender}`,
								borderRadius: '3px'
							}}
						>
							<Dropdown
								controlClassName="myControlClassName"
								className="dropdown"
								value={state.gender}
								onChange={e => setState({ ...state, gender: e.value })}
								options={genderArr}
							/>
						</div>
					</div>
					<div>
						<Label>Home Phone</Label>
						<div
							style={{
								border: `1px solid ${errorBorderHomeTelephone}`,
								borderRadius: '3px'
							}}
						>
							<Input
								type="text"
								name="home_telephone"
								placeholder="Home Telephone"
								onChange={handleChange}
								value={state.home_telephone}
							/>
						</div>
					</div>
					<div>
						<Label>Mobile</Label>
						<div
							style={{
								border: `1px solid ${errorBorderMobileTelephone}`,
								borderRadius: '3px'
							}}
						>
							<Input
								type="text"
								name="mobile_telephone"
								placeholder="Mobile Telephone"
								onChange={handleChange}
								value={state.mobile_telephone}
								error={{
									content: 'Please enter mobile telephone.',
									pointing: 'above'
								}}
							/>
						</div>
					</div>
					<div>
						<Label>Email</Label>
						<div
							style={{
								border: `1px solid ${errorBorderEmail}`,
								borderRadius: '3px'
							}}
						>
							<Input
								type="text"
								name="email"
								placeholder="email"
								onChange={handleChange}
								value={state.email}
							/>
						</div>
					</div>
					<div>
						<Label>Preferred Contact Method</Label>
						<div
							style={{
								border: `1px solid ${errorBorderContactType}`,
								borderRadius: '3px'
							}}
						>
							<Dropdown
								controlClassName="myControlClassName"
								className="dropdown"
								onChange={e => {
									setState({ ...state, preferred_contact_type_id: e.value });
								}}
								value={props.studentById.preferred_contact_type}
								options={props.contactTypesTable}
							/>
						</div>
					</div>
					<div>
						<Label>Birthdate</Label>
						<div
							style={{
								border: `1px solid ${errorBorderBirthdate}`,
								borderRadius: '3px'
							}}
						>
							<Input
								type="date"
								name="birthdate"
								placeholder="Birthdate"
								onChange={handleChange}
								value={state.birthdate}
							/>
						</div>
					</div>
					<div>
						<Label>School Name</Label>
						<div
							style={{
								border: `1px solid ${errorBorderSchoolName}`,
								borderRadius: '3px'
							}}
						>
							<Input
								type="text"
								name="school_name"
								placeholder="School Name"
								onChange={handleChange}
								value={state.school_name}
							/>
						</div>
					</div>
					<div>
						<Label>School Grade</Label>
						<div
							style={{
								border: `1px solid ${errorBorderSchoolGrade}`,
								borderRadius: '3px'
							}}
						>
							<Dropdown
								controlClassName="myControlClassName"
								className="dropdown"
								onChange={e => setState({ ...state, school_grade_id: e.value })}
								options={props.schoolGradeTable}
								value={props.studentById.school_grade}
							/>
						</div>
					</div>
					<div>
						<Label>Location</Label>
						<div
							style={{
								border: `1px solid ${errorBorderLocation}`,
								borderRadius: '3px'
							}}
						>
							<Dropdown
								controlClassName="myControlClassName"
								className="dropdown"
								onChange={e => setState({ ...state, location_id: e.value })}
								value={props.studentById.location}
								options={props.locationsTable}
							/>
						</div>
					</div>
					<div>
						<Label>Block Code</Label>
						<div
							style={{
								border: `1px solid ${errorBorderBlock}`,
								borderRadius: '3px'
							}}
						>
							<Dropdown
								controlClassName="myControlClassName"
								className="dropdown"
								options={props.blocksTable}
								onChange={e => setState({ ...state, block_code: e.value })}
								value={`${state.block_code}`}
							/>
						</div>
					</div>
					<div>
						<Label>Road</Label>
						<div
							style={{
								border: `1px solid ${errorBorderRoad}`,
								borderRadius: '3px'
							}}
						>
							<Input
								type="text"
								name="road"
								placeholder="road"
								onChange={handleChange}
								value={state.road}
							/>
						</div>
					</div>
					<div>
						<Label>Building</Label>
						<div
							style={{
								border: `1px solid ${errorBorderBuilding}`,
								borderRadius: '3px'
							}}
						>
							<Input
								type="text"
								name="building"
								placeholder="building"
								onChange={handleChange}
								value={state.building}
							/>
						</div>
					</div>
					<div>
						<Label>Flat</Label>
						<div
							style={{
								border: `1px solid ${errorBorderFlat}`,
								borderRadius: '3px'
							}}
						>
							<Input
								type="text"
								name="flat"
								placeholder="flat"
								onChange={handleChange}
								value={state.flat}
							/>
						</div>
					</div>
					<div style={{ gridColumn: 'span 2' }}>
						<Label>Primary Emergency Contact Name</Label>
						<div
							style={{
								border: `1px solid ${errorBorderPrimaryEmergencyContactName}`,
								borderRadius: '3px'
							}}
						>
							<Input
								type="text"
								name="primary_emergency_contact_name"
								placeholder="Primary Emergency Contact Name"
								onChange={handleChange}
								value={state.primary_emergency_contact_name}
								style={{ width: '100%' }}
							/>
						</div>
					</div>
					<div>
						<Label>Relationship</Label>
						<div
							style={{
								border: `1px solid ${errorBorderPrimaryEmergencyRelationship}`,
								borderRadius: '3px'
							}}
						>
							<Input
								type="text"
								name="primary_emergency_relationship"
								placeholder="Primary Emergency Relationship"
								onChange={handleChange}
								value={state.primary_emergency_relationship}
							/>
						</div>
					</div>
					<div>
						<Label>Phone Number</Label>
						<div
							style={{
								border: `1px solid ${errorBorderPrimaryEmergencyPhone}`,
								borderRadius: '3px'
							}}
						>
							<Input
								type="text"
								name="primary_emergency_phone"
								placeholder="Primary Emergency Number"
								onChange={handleChange}
								value={state.primary_emergency_phone}
							/>
						</div>
					</div>
					<div style={{ gridColumn: 'span 2' }}>
						<Label>Emergency Contact Name</Label>
						<div
							style={{
								border: `1px solid ${errorBorderEmergencyContactName}`,
								borderRadius: '3px'
							}}
						>
							<Input
								type="text"
								name="emergency_contact_name"
								placeholder="Emergency Contact Name"
								onChange={handleChange}
								value={state.emergency_contact_name}
								style={{ width: '100%' }}
							/>
						</div>
					</div>
					<div>
						<Label>Relationship</Label>
						<div
							style={{
								border: `1px solid ${errorBorderEmergencyRelationship}`,
								borderRadius: '3px'
							}}
						>
							<Input
								type="text"
								name="emergency_relationship"
								placeholder="Emergency Relationship"
								onChange={handleChange}
								value={state.emergency_relationship}
							/>
						</div>
					</div>
					<div>
						<Label>Phone Number</Label>
						<div
							style={{
								border: `1px solid ${errorBorderEmergencyPhone}`,
								borderRadius: '3px'
							}}
						>
							<Input
								type="text"
								name="emergency_phone"
								placeholder="Emergency Number"
								onChange={handleChange}
								value={state.emergency_phone}
							/>
						</div>
					</div>
					<div>
						<Label>Grade Updated</Label>
						<div
							style={{
								border: `1px solid ${errorBorderGradeUpdated}`,
								borderRadius: '3px'
							}}
						>
							<Input
								type="date"
								name="grade_updated"
								placeholder="Grade Updated"
								onChange={handleChange}
								value={state.grade_updated}
							/>
						</div>
						{/* <div>
                        <Label>Registration Date</Label>
                            <div>
                                <Input
                                    type='date'
                                    name='registration_date'
                                    placeholder='Registration Date'
                                    onChange={handleChange}
                                    value={state.registration_date}
                                />
                            </div>
                        </div> */}
						<div>
							<Label>No Call</Label>
							<div
								style={{
									border: `1px solid ${errorBorderNoCall}`,
									borderRadius: '3px'
								}}
							>
								<Dropdown
									controlClassName="myControlClassName"
									className="dropdown"
									name="no_call"
									onChange={e => setState({ ...state, no_call: e.value })}
									value={no_call[no_callNum].label}
									options={no_call}
								/>
							</div>
						</div>
						<div>
							<Label>Delinquent</Label>
							<div
								style={{
									border: `1px solid ${errorBorderDelinquent}`,
									borderRadius: '3px'
								}}
							>
								<Dropdown
									controlClassName="myControlClassName"
									className="dropdown"
									name="delinquent"
									onChange={e => setState({ ...state, delinquent: e.value })}
									value={delinquent[delinquentNum].label}
									options={delinquent}
								/>
							</div>
						</div>
						<div>
							<Label>Expelled</Label>
							<div
								style={{
									border: `1px solid ${errorBorderExpelled}`,
									borderRadius: '3px'
								}}
							>
								<Dropdown
									controlClassName="myControlClassName"
									className="dropdown"
									name="expelled"
									onChange={e => setState({ ...state, expelled: e.value })}
									value={expelled[expelledNum].label}
									options={expelled}
								/>
							</div>
						</div>
					</div>
					<div style={{ gridColumn: 'span 4' }}>
						<Label>Notes</Label>
						<div
							style={{
								border: `1px solid ${errorBorderNotes}`,
								borderRadius: '3px'
							}}
						>
							<textarea
								style={{
									width: '100%',
									height: '80px',
									outline: 'none',
									border: '1px solid transparent',
									borderRadius: '3px'
								}}
								type="text"
								name="notes"
								placeholder="Notes"
								onChange={handleChange}
								value={state.notes}
							/>
						</div>
					</div>
				</Div>
			</FormSet>
			<ButtonDiv>
				<CancelButton onClick={handleCancel}>Cancel</CancelButton>
				<SaveButton type="submit" onClick={handleSubmit}>
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
		editStudentDropDown
	})(StudentForm)
);
