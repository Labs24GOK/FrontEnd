import { combineReducers } from 'redux';
import { authenticationReducer } from './authenticationReducer';
import { studentTableReducer } from './studentTableReducer';
import { studentByIdReducer } from './studentByIdReducer';

export const reducer = combineReducers({
  authenticationReducer,
  studentTableReducer,
  studentByIdReducer,
});

