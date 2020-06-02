import React, { useState, useEffect } from "react";
import axiosWithAuth from '../../../utils/axiosWithAuth';

function StaffDashboard() {
    // const [staffData, setStaffData] = useState({});
    const [staffId, setStaffId] = useState();

    // GetuserId from JWT
    let token = localStorage.getItem('token');
    let tokenData = JSON.parse(atob(token.split('.')[1]));

    let user = tokenData.subject;
    let name = tokenData.name;
    
    //Get staffId from userId
    useEffect(() => {
            axiosWithAuth()
            .get(`/staffdashboard/${user}`)
            .then(res => {
                setStaffId(res.data.staff_id);
            })
            .catch(err => {
                console.log(err);
            })   
    }, [user]);

    //Get staff courses with staffId
    useEffect(() => {
        if(staffId){
            axiosWithAuth()
            .get(`/staff/${staffId}/courses`)
            .then(res => {
                console.log(res);
            })
            .catch(err => console.log(err))
        }
    }, [staffId]);

    return (
        <div className="staffDashboard content">
            <h1>Welcome {name}. </h1>      
        </div>         
    );
}

export default StaffDashboard;