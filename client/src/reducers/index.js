import { combineReducers } from 'redux';
import { authenticationReducer } from './authenticationReducer';
import { studentTableReducer } from './adminDashboardReducers/studentTableReducer';
import { studentByIdReducer } from './adminDashboardReducers/studentByIdReducer';
import { parentReducer } from './adminDashboardReducers/parentReducer'

export const reducer = combineReducers({
  authenticationReducer,
  studentTableReducer,
  studentByIdReducer,
  parentReducer,
});

