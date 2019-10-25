import { combineReducers } from 'redux';
import { authenticationReducer } from './authenticationReducer';
import { studentTableReducer } from './studentTableReducer';

export const reducer = combineReducers({
  authenticationReducer,
  studentTableReducer
});

