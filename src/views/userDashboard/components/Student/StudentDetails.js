import React, { useEffect, useState } from 'react';
import { Route, Link } from 'react-router-dom';
import { EditButton } from '../../../adminDashboard/components/mainStyle/styledComponent';
import { getDateStringENGBFormat } from '../../../../utils/helpers';

function StudentDetails(props) {

console.log("SD-course: ", props.course);

    return (
        <>    
            <div className="studentBox" >  
                <div className="studentInfoBox">
                    <h2>Details</h2>
                    <hr></hr>
                    <div className="studentSubBox">
                        <div>
                            <h3>Student General Info:</h3>
                            <p><strong>Birthdate:</strong> {getDateStringENGBFormat(props.student.birthdate)}</p>
                            <p><strong>Gender:</strong> {props.student.gender}</p>
                            <p><strong>School Name:</strong> {props.student.school_name}</p>
                        </div>
                        <div>
                            <h3>Student Contact Info:</h3>
                            <p><strong>Email:</strong> {props.student.email}</p>
                            <p><strong>Phone Number:</strong> {props.student.phone_number}</p>
                            <p><strong>Address:</strong> {props.student.address}</p>
                        </div>
                    </div>
                </div>
                <div className="studentInfoBox">
                    <h2>Contacts</h2>
                    <hr></hr>
                    <div className="studentSubBox">
                        <div>
                            <h3>Primary Contact:</h3>
                            <p><strong>Name:</strong> {props.student.primary_emergency_contact_name}</p>
                            <p><strong>Relationship:</strong> {props.student.primary_emergency_relationship}</p>
                            <p><strong>Phone Number:</strong> {props.student.primary_emergency_phone}</p>
                        </div>
                        <div>
                            <h3>Secondary Contact:</h3>
                            <p><strong>Name:</strong> {props.student.emergency_contact_name ? props.student.emergency_contact_name : "N/A"}</p>
                            <p><strong>Relationship:</strong> {props.student.emergency_relationship ? props.student.emergency_relationship : "N/A"}</p>
                            <p><strong>Phone Number:</strong> {props.student.emergency_phone ? props.student.emergency_phone : "N/A"}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="studentBox">
                <div className="studentInfoBox">
                    <h2>Notes</h2>
                    <hr></hr>
                    <div className="studentSubBox">
                        {props.student.notes === "" ? 
                            <div className="noInfo">
                                <p>No available notes for this student.</p>
                            </div>
                            :
                            <p><strong>Notes: </strong>{props.student.notes}</p>
                        }
                    </div>
                </div>
            </div>
            <div className="studentEditButton"> 
                <Link 
                    to={`/student/${props.student.student_id}/edit`}>
                    <EditButton>Edit Student Details</EditButton>    
                </Link>
            </div>
            <div className="studentBox" > 
                <div className="studentInfoBox">
                    <h2>Course(s)</h2>
                    <hr></hr>
                    {props.course.length > 0 && 
                    props.course.map((course) => (
                        <>
                            <div className="studentSubBox">
                                <div>
                                    <p>
                                        <strong>Term: </strong>
                                        {course.term}
                                        &emsp;
                                        &emsp;
                                        <strong>First Day: </strong>
                                        {getDateStringENGBFormat(course.first_day)} 
                                        &emsp; 
                                        &emsp;
                                        <strong>Last Day: </strong>
                                        {getDateStringENGBFormat(course.last_day)}
                                        &emsp;
                                        &emsp;
                                        <strong>Course Days: </strong>
                                        {course.course_days}
                                        &emsp;
                                        &emsp;
                                        <strong>Start Time: </strong>
                                        {course.start_time}
                                        &emsp;
                                        &emsp;
                                        <strong>End Time: </strong>
                                        {course.end_time}
                                    </p>
                                    <p>
                                        <strong>Course Type: </strong>
                                        {course.course_type}
                                        &emsp;
                                        &emsp;
                                        <strong>Group Type: </strong>
                                        {course.group_type}
                                        &emsp;
                                        &emsp;
                                        <strong>Level: </strong>
                                        {course.course_level}
                                        &emsp;
                                        &emsp;
                                        <strong>Section: </strong>
                                        {course.section}
                                        &emsp;
                                        &emsp;
                                        <strong>Course Status: </strong>
                                        {course.course_status}
                                        &emsp;
                                        &emsp;
                                        <strong>Student Status: </strong>
                                        {course.student_result_type}
                                    </p>
                                    <p>
                                        <strong>Notes: </strong>
                                        {course.notes}
                                    </p>
                                </div>
                            </div>
                            <hr></hr> 
                        </> 
                    ))}
                    {props.course.length === 0 && 
                        <div className="studentSubBox">
                            <div className="noInfo">
                                <p>This student is not currently enrolled in any courses.</p>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </>
    )
};

export default StudentDetails;                