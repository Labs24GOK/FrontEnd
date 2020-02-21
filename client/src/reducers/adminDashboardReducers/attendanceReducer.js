import {
  CREATE_ATTENDANCE_FAILURE,
  CREATE_ATTENDANCE_START,
  CREATE_ATTENDANCE_SUCCESS,
} from '../../actions';

const initialState = {
  studentByCourseId: [],
  isLoading: false,
  error: null,
};

export const attendanceReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ATTENDANCE_START:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case CREATE_ATTENDANCE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        studentByCourseId: action.payload,
      };
    case CREATE_ATTENDANCE_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
