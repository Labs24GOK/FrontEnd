import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from '../actions';

const initialState = {
  user: {
    username: null
  },
  logIn: {
    isLoading: false,
    error: null
  },
};

export const authenticationReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        logIn: {
          isLoading: true,
          error: null
        }
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        login: {
          isLoading: false,
          error: null
        },
        user: {
          username: action.payload.username //update the be login endpoint to return username
        }
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        logIn: {
          isLoading: false,
          error: action.payload //update the be endpoint to return an error
        }
      };
    default:
      return state;
  }
};
