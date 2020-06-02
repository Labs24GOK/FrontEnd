import React, { useState, useEffect } from "react";
import { useHistory, useRouteMatch, withRouter } from "react-router-dom";
import { connect } from "react-redux";

// import StaffMessageBox from '../StaffMessageBox';
import StaffCourseCard from './StaffCourseCard';
import Footer from "../../marketing/components/Footer";
import { getStaffCourses } from "../getStaffCourses";
import { getMessagesForStaff} from "../getMessagesForStaff";



function StaffDashboard(props) {

    const [staffData, setStaffData] = useState({
        staffID: '',
        name: '',
        courses: [],
        messages: [],
      });

    // const [displayAddStudentModal, setDisplayAddStudentModal] = useState(false);
    const history = useHistory();
    let { path, url } = useRouteMatch();

    // Get staffID from JWT
    let token = localStorage.getItem('token');
    let tokenData = JSON.parse(atob(token.split('.')[1]));

    let staffID = tokenData.subject;
    let name = tokenData.name;
    // console.log(staffID);

    // update staffData once courses have been updated
    useEffect(() => {
    // determine which messages to display to staff upon login
    let messages = getMessagesForStaff(staffData.staff);

    // store all info into state variable
    setStaffData({ ...staffData, messages });
    }, [staffData.courses]);
    console.log(staffData.courses);

    return (
        <div className="staffDashboard content">

            <h1>Welcome {name}. </h1>
            {/* <StaffMessageBox messages={staffData.messages} /> */}

            {staffData.courses.map((course, staffID) => (
                <StaffCourseCard course={course} />
        
            ))}
          
            <Footer />
        </div>
          
    );

}

const mapStateToProps = state => {
    return state;
};

export default withRouter(connect(mapStateToProps)(StaffDashboard));