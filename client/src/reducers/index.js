import { combineReducers } from 'redux';
import { authenticationReducer } from './authenticationReducer';
import { studentTableReducer } from './adminDashboardReducers/studentTableReducer';
import { studentByIdReducer } from './adminDashboardReducers/studentByIdReducer';

export const reducer = combineReducers({
  authenticationReducer,
  studentTableReducer,
  studentByIdReducer,
});

