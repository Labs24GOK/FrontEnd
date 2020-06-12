import React, { useEffect, useState } from 'react';
import { Route, Switch, useParams, useHistory } from 'react-router-dom';

import UserDashboardHeader from '../UserDashboardHeader';
import StudentEditDetails from './StudentForms/StudentEditDetails';
import StudentDetails from './StudentDetails';
import Footer from '../../../marketing/components/Footer';

import { getStudentCourses } from '../../getStudentCourses';
import axiosWithAuth from '../../../../utils/axiosWithAuth';

import { Icon } from 'semantic-ui-react';
import ChildPlacementTest from '../placementTest/Child/ChildPlacementTest';
import AdultPlacementTest from '../placementTest/Adult/AdultPlacementTest';

function Student({ student }) {
  const { id } = useParams();
  const { goBack } = useHistory();

  const [studentData, setStudentData] = useState(['student']);
  const [studentCourse, setStudentCourse] = useState([]);

  useEffect(() => {
    const getStudent = id => {
      axiosWithAuth()
        .get(`/student/${id}`)
        .then(res => {
          setStudentData(res.data);
        });
    };
    getStudent(id);
  }, [id]);

  useEffect(() => {
    getStudentCourses(id).then(res => {
      setStudentCourse(res);
    });
  }, [id]);

  return (
    <>
      <UserDashboardHeader />
      <div
        className='back-button'
        onClick={goBack}
        style={{
          cursor: 'pointer',
          width: '10%',
          fontSize: '1.75rem',
          padding: '1%',
        }}
      >
        <Icon name='angle left' />
        back
      </div>
      <div>
        <Switch>
          <Route exact path='/student/:id'>
            <StudentDetails student={studentData} course={studentCourse} />
          </Route>
          <Route exact path='/student/:id/edit'>
            <StudentEditDetails student={studentData} course={studentCourse} />
          </Route>
          <Route path={`/student/:id/child-placement`}>
            <ChildPlacementTest />
          </Route>
          <Route path={`/student/:id/adult-placement`}>
            <AdultPlacementTest />
          </Route>
        </Switch>
        <Footer />
      </div>
    </>
  );
}

export default Student;
