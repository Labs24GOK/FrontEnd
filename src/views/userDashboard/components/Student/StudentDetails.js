import React, { useEffect, useState } from 'react';
import { Route, Link } from 'react-router-dom';

function StudentDetails(props) {
    console.log("ST-Details: ", props.student);

    return (
        <>
            <div>
                <h2>Student Details</h2>
                    <h4>Birthdate: {props.student.birthdate}</h4>
                    <h4>Gender: {props.student.gender}</h4>
                    <h4>Email: {props.student.email}</h4>
                    <h4>Phone Number: {props.student.phone_number}</h4>
                    <h4>School Name: {props.student.school_name}</h4>
            </div>
            <div>
                <h2>Student Address</h2>
                <h4>Address: {props.student.address}</h4>
            </div>
            <div>
                <h2>Student Contacts</h2>
                <div>
                    <h3>Primary Contact:</h3>
                    <h4>Name: {props.student.primary_emergency_contact_name}</h4>
                    <h4>Relationship: {props.student.primary_emergency_relationship}</h4>
                    <h4>Phone Number: {props.student.primary_emergency_phone}</h4>
                </div>
                <div>
                    <h3>Secondary Contact:</h3>
                    <h4>Name: {props.student.emergency_contact_name ? props.student.emergency_contact_name : "N/A"}</h4>
                    <h4>Relationship: {props.student.emergency_relationship ? props.student.emergency_relationship : "N/A"}</h4>
                    <h4>Phone Number: {props.student.emergency_phone ? props.student.emergency_phone : "N/A"}</h4>
                </div>
            </div>
            <div>
                
            </div>
        </>
    )
};

export default StudentDetails;                