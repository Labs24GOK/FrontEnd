import {
    FAMILY_REGISTER_START,
    FAMILY_REGISTER_SUCCESS,
    FAMILY_REGISTER_FAILURE
  } from "../actions";
  const initialState = {
    student: {
      first_name: ""
    },
    familyRegister: {
      isLoading: false,
      error: null,
      success: false
    }
  };
  export const registrationReducer = (state = initialState, action) => {
    switch (action.type) {
      case FAMILY_REGISTER_START:

        console.log("Registration started in reducer.");

        return {
          ...state,
          familyRegister: {
            isLoading: true,
            error: null
          }
        };
      case FAMILY_REGISTER_SUCCESS:

        console.log("Registration succeeded in reducer.");

        return {
          ...state,
          familyRegister: {
            isLoading: false,
            error: null,
            success: true
          },
          student: {
            first_name: action.payload.student_name
          }
        };
      case FAMILY_REGISTER_FAILURE:

        console.log("Registration failed in reducer.", action.payload.response.data.message);

        return {
          ...state,
          familyRegister: {
            isLoading: false,
            error: action.payload.response.data.message
          }
        };
      default:
        return state;
    }
  };
  