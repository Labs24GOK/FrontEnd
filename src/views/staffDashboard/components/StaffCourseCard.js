import React from 'react'
import { useParams } from 'react-router-dom';

import './staffDashboard.scss';

const StaffCourseCard = () => {
    let params = useParams();
    console.log(params);
    return (
        <div className="staff-courses">

                <h1>Pickles</h1>

        </div>
    )
};

export default StaffCourseCard;

