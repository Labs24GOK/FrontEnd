import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axiosWithAuth from '../../../utils/axiosWithAuth';

import './staffDashboard.scss';

const StaffCourseCard = () => {
	let {courseId} = useParams();
	const [courseData, setCourseData] = useState({})

	useEffect(() => {
		axiosWithAuth()
			.get(`/course/${courseId}`)
			.then(res => {
                console.log(res.data);
                setCourseData(res.data)
			})
			.catch(err => console.log(err));
	}, []);

	return (
		<div className='staff-courses'>
            <h2>{courseData.teacher}</h2>
			<h4>Course ID: {courseData.course_id}</h4>
            <h4>{courseData.group_type}  --  {courseData.level}</h4>
            <h4>{courseData.term} -- {courseData.course_schedule} </h4>
    <h5>{courseData.start_time} - {courseData.end_time}</h5>
            <h4> Course Type: {courseData.course_type}</h4>
            <h4> Hourly Rate: {courseData.hourly_rate}</h4>
            <h4> Room: {courseData.room_id} -- Chairs: {courseData.room}</h4>
            <h4> Notes: {courseData.notes}</h4>
            
		</div>
	);
};

export default StaffCourseCard;
