import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getStudentById } from '../../../../../actions';
import { withRouter } from 'react-router-dom';
import StudentRegForm from './StudentRegForm';
import {
	FormWrap,
	Div,
	TextDiv,
	FormSet,
	Label
} from '../../mainStyle/styledComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

const StudentFamilyTab = props => {
	const [studentAddForm, setStudentAddForm] = useState(false);
	useEffect(() => {
		props.getStudentById(props.studentID);
	}, []);

	const handleAddButton = () => {
		setStudentAddForm(!studentAddForm);
  };

	return (
		<div>
			{!props.isEditing ? (
				<>
					<FormWrap>
						<FormSet>
							<Div>
								<div style={{ gridColumn: 'span 2' }}>
									<Label>Primary Emergency Contact Name</Label>
									<TextDiv>
										{(props.studentById &&
											props.studentById.primary_emergency_contact_name) ||
											'-'}
									</TextDiv>
								</div>
								<div>
									<Label>Relationship</Label>
									<TextDiv>
										{(props.studentById &&
											props.studentById.primary_emergency_relationship) ||
											'-'}
									</TextDiv>
								</div>
								<div>
									<Label>Phone Number</Label>
									<TextDiv>
										{(props.studentById &&
											props.studentById.primary_emergency_phone) ||
											'-'}
									</TextDiv>
								</div>
								<div style={{ gridColumn: 'span 2' }}>
									<Label>Emergency Contact Name</Label>
									<TextDiv>
										{(props.studentById &&
											props.studentById.emergency_contact_name) ||
											'-'}
									</TextDiv>
								</div>
								<div>
									<Label>Relationship</Label>
									<TextDiv>
										{(props.studentById &&
											props.studentById.emergency_relationship) ||
											'-'}
									</TextDiv>
								</div>
								<div>
									<Label>Phone Number</Label>
									<TextDiv>
										{(props.studentById && props.studentById.emergency_phone) ||
											'-'}
									</TextDiv>
								</div>
							</Div>
						</FormSet>
					</FormWrap>
					<FormWrap>
						{/* List all students besides the one at the top for this user ID */}
						This is where the info goes.
						<TextDiv>
							Student1
						</TextDiv>
						<TextDiv>
							Student2
						</TextDiv>
					</FormWrap>
				</>
			) : (
				// <StudentForm {...props} />
				null
			)}
			{!studentAddForm ? (
				<div
          className='create-new-entry'
          onClick={handleAddButton}
          style={{ cursor: 'pointer', color: '#26ABBD' }}
        >
          <div style={{ marginRight: '10px' }}>Create New Student</div>
          <div>
            <FontAwesomeIcon
              style={{ width: '25px', height: '25px', cursor: 'pointer' }}
              icon={faPlusCircle}
              size='lg'
            />
          </div>
        </div>
			) : (
				<StudentRegForm setStudentAddForm={setStudentAddForm} {...props} />
			)}
		</div>
	);
};

const mapStateToProps = state => {
	return {
		isLoading: state.studentByIdReducer.isLoading,
		studentById: state.studentByIdReducer.studentById
	};
};

export default withRouter(
	connect(mapStateToProps, {
		getStudentById
	})(StudentFamilyTab)
);
