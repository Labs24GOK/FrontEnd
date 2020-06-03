import React, { useEffect, useState } from 'react';
import { Route, Switch, Link, useParams } from 'react-router-dom';

import UserDashboardHeader from '../UserDashboardHeader';
import StudentEditDetails from './StudentForms/StudentEditDetails';
import StudentDetails from './StudentDetails';

import { getStudentCourses } from '../../getStudentCourses';
import axiosWithAuth from '../../../../utils/axiosWithAuth';

function Student({ student }) {
    const {id} = useParams();

    const [studentData, setStudentData] = useState(["student"]);
    const [studentCourse, setStudentCourse] = useState([]);
    const [noCourse, setNoCourse] = useState()

    useEffect(() => {
        const getStudent = (id) => {
            axiosWithAuth()
                .get(`/student/${id}`)
		        .then(res => {
                    setStudentData(res.data);
		        })
        }
        return getStudent(id);
    }, [id])

    useEffect(() => {
        getStudentCourses(id)
            .then(res => {
                 setStudentCourse(res);
            })
    }, [id]);

    return (
        <>
            <UserDashboardHeader />
            <h1 className='studentTitle'>{studentData.first_name} 
            {studentData.additional_names}</h1>
            <div>
                <Switch>
                    <Route 
                        exact path="/student/:id" 
                        render={() => <div> 
                            <StudentDetails 
                                student={studentData}
                                course={studentCourse} 
                            />
                        </div>} 
                    />
                    <Route 
                        exact path="/student/:id/edit" 
                        render={() => <div>
                            <StudentEditDetails 
                                student={studentData} 
                                course={studentCourse}
                            /> 
                        </div>} 
                    />
                </Switch>

            </div>     
        </>
    )
}

export default Student;