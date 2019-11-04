export {
  logIn,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  logOut,
  LOGOUT_START,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  loggedIn,
  LOGGEDIN_START,
  LOGGEDIN_SUCCESS,
  LOGGEDIN_FAILURE

} from './authenticationActions.js';

export {
  getStudentTable,
  FETCH_STUDENTS_START,
  FETCH_STUDENTS_SUCCESS,
  FETCH_STUDENTS_FAILURE
} from './adminDashboardActions/studentTableActions.js';

export {
  toggleEditComponent,
  getStudentById,
  FETCH_STUDENTBYID_START,
  FETCH_STUDENTBYID_SUCCESS,
  FETCH_STUDENTBYID_FAILURE,

  editStudentById,
  EDIT_STUDENTBYID_START,
  EDIT_STUDENTBYID_SUCCESS,
  EDIT_STUDENTBYID_FAILURE,
  
  deleteStudentById,
  DELETE_STUDENTBYID_START,
  DELETE_STUDENTBYID_SUCCESS,
  DELETE_STUDENTBYID_FAILURE,
} from './adminDashboardActions/studentByIdAction.js'

export {
  getStaffTable,
  FETCH_STAFF_START,
  FETCH_STAFF_SUCCESS,
  FETCH_STAFF_FAILURE,
  getStaffById,
  FETCH_STAFFBYID_START,
  FETCH_STAFFBYID_SUCCESS,
  FETCH_STAFFBYID_FAILURE
} from './adminDashboardActions/staff/staffAction';