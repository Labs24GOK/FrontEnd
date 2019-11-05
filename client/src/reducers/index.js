import { combineReducers } from 'redux';
import { authenticationReducer } from './authenticationReducer';
import { studentTableReducer } from './adminDashboardReducers/studentTableReducer';
import { studentByIdReducer } from './adminDashboardReducers/studentByIdReducer';
import { staffByIdReducer } from './adminDashboardReducers/staffByIdReducer';
import { staffTableReducer } from './adminDashboardReducers/staffTableReducer';

export const reducer = combineReducers({
  authenticationReducer,
  studentTableReducer,
  studentByIdReducer,
  staffByIdReducer,
  staffTableReducer
});

