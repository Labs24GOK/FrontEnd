import { connect } from 'react-redux';

const StudentFormInitialState = (props) => {
    let birthdate = new Date(props.studentById.birthdate)
        .toISOString()
        .split('T')[0];
    let grade_updated = new Date(props.studentById.grade_updated)
        .toISOString()
        .split('T')[0];

    return ({
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
}


const mapStateToProps = state => {
	return {
		studentById: state.studentByIdReducer.studentById,
	};
};

export default connect(mapStateToProps)(StudentFormInitialState);