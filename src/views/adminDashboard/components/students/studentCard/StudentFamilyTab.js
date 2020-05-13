import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getStudentById } from '../../../../../actions';
import { withRouter } from 'react-router-dom';
import StudentForm from './StudentForm';
import {
	FormWrap,
	Div,
	TextDiv,
	FormSet,
	Label
} from '../../mainStyle/styledComponent';

const StudentFamilyTab = props => {
	useEffect(() => {
		props.getStudentById(props.studentID);
	}, []);

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
				</>
			) : (
				<StudentForm {...props} />
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
