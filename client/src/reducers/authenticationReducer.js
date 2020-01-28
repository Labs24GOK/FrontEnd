import {
  LOGGEDIN_START,
  LOGGEDIN_SUCCESS,
  LOGGEDIN_FAILURE,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_START,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE
} from '../actions';

const initialState = {
  user: {
    authenticated: false,
    username: null
  },
  loggedIn: {
    isLoading: false,
    error: null
  },
  logIn: {
    isLoading: false,
    error: null
  },
  logOut: {
    isLoading: false,
    error: null
  }
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
          authenticated: true,
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
    case LOGOUT_START:
      return {
        ...state,
        logOut: {
          isLoading: true,
          error: null
        }
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        logOut: {
          isLoading: false,
          error: null
        },
        user: {
          authenticated: false,
          username: null
        }
      };
    case LOGOUT_FAILURE:
      return {
        ...state,
        logOut: {
          isLoading: false,
          error: 'Error' //display proper error
        }
      };
    case LOGGEDIN_START:
      return {
        ...state,
        loggedIn: {
          isLoading: true,
          error: null
        }
      };
    case LOGGEDIN_SUCCESS:
      return {
        ...state,
        loggedIn: {
          isLoading: false,
          error: null
        },
        user: {
          authenticated: action.payload.authenticated,
          username: action.payload.username || 'undefined'
        }
      };
    case LOGGEDIN_FAILURE:
      return {
        ...state,
        loggedIn: {
          isLoading: false,
          error: 'Error' //display proper error
        }
      };
    default:
      return state;
  }
};
