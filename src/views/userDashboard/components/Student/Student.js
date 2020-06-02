import React, { useEffect, useState } from 'react';
import { Route, Switch, Link, useParams } from 'react-router-dom';

// import StudentEditForm from './StudentForms/StudentEditForm';
import StudentEditDetails from './StudentForms/StudentEditDetails';
import StudentDetails from './StudentDetails';

import { getStudentCourses } from '../../getStudentCourses';
import axiosWithAuth from '../../../../utils/axiosWithAuth';

function Student({ student }) {

    const {id} = useParams();

    const [studentData, setStudentData] = useState(["student"]);

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
    console.log("student-data: ", studentData);
    return (
        <>
            <h1>{studentData.first_name} {studentData.additional_names}</h1>
            <div className='studentInfoBox'>
                <Switch>
                    <Route 
                        path="/student/:id" 
                        render={() => <div>
                            <StudentDetails 
                                student={studentData} 
                            />
                            <Link 
                                to={`/student/${studentData.student_id}/edit`}>
                                <button>Edit</button>    
                            </Link> 
                        </div>} 
                    />
                    <Route 
                        path="/student/:id/edit" 
                        render={() => <div>
                            <StudentEditDetails 
                                student={studentData} 
                            /> 
                        </div>} 
                    />
                </Switch>

            </div>     
        </>
    )
}

export default Student;