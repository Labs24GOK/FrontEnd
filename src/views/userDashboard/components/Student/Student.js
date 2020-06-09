import React, { useEffect, useState } from 'react';
import { Route, Switch, useParams, useHistory } from 'react-router-dom';

import UserDashboardHeader from '../UserDashboardHeader';
import StudentEditDetails from './StudentForms/StudentEditDetails';
import StudentDetails from './StudentDetails';
import Footer from '../../../marketing/components/Footer';

import { getStudentCourses } from '../../getStudentCourses';
import axiosWithAuth from '../../../../utils/axiosWithAuth';

import { Icon } from 'semantic-ui-react';

function Student({ student }) {
    const {id} = useParams();
    let history = useHistory();

    const [studentData, setStudentData] = useState(["student"]);
    const [studentCourse, setStudentCourse] = useState([]);

    useEffect(() => {
        const getStudent = (id) => {
            axiosWithAuth()
                .get(`/student/${id}`)
		        .then(res => {
                    setStudentData(res.data);
		        })
        }
        return getStudent(id);
    }, [studentData])



    useEffect(() => {
        getStudentCourses(id)
            .then(res => {
                 setStudentCourse(res);
            })
    }, [id]);

    const goBack = () => {
        history.push('/dashboard')
    }

    return (
        <>
            <UserDashboardHeader />
            <div
                className='back-button'
                onClick={goBack}
                style={{ cursor: 'pointer', width: '10%', fontSize: '1.75rem', padding: "1%" }}
            >
                <Icon name="angle left" />
				Back
            </div>
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
             <Footer />
            </div>     
        </>
    )
}

export default Student;