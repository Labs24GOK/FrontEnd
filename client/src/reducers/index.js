import { combineReducers } from 'redux';
import { authenticationReducer } from './authenticationReducer';
import { studentTableReducer } from './adminDashboardReducers/studentTableReducer';
import { studentByIdReducer } from './adminDashboardReducers/studentByIdReducer';
import { parentReducer } from './adminDashboardReducers/parentReducer';
import { staffTableReducer } from './adminDashboardReducers/staffTableReducer';
import { staffByIdReducer } from './adminDashboardReducers/staffByIdReducer';
import { studentProgressReducer } from './adminDashboardReducers/studentProgressReducer';
import { coursesTableReducer } from './adminDashboardReducers/coursesReducer';
import { studentCourseReducer } from './adminDashboardReducers/studentCourseReducer'
import { staffCourseReducer } from './adminDashboardReducers/staffCourseReducer';
import { studentsByCourseIDReducer } from './adminDashboardReducers/studentByCourseId';
export const reducer = combineReducers({
  authenticationReducer,
  studentTableReducer,
  studentByIdReducer,
  parentReducer,
  staffTableReducer,
  staffByIdReducer,
  studentProgressReducer,
<<<<<<< HEAD
  coursesTableReducer
=======
  coursesTableReducer,
  studentCourseReducer,
  staffCourseReducer,
  studentsByCourseIDReducer
>>>>>>> 23027271c4929c4c875d448b56e40c53b2a99568
});

