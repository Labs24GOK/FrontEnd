import axios from 'axios';
axios.defaults.withCredentials = true

export const LOGGEDIN_START = 'LOGGEDIN_START';
export const LOGGEDIN_SUCCESS = 'LOGGEDIN_SUCCESS';
export const LOGGEDIN_FAILURE = 'LOGGEDIN_FAILURE';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const LOGOUT_START = 'LOGOUT_START';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';

export const loggedIn = (history) => {
  return dispatch => {
    dispatch({ type: LOGGEDIN_START });
    
    axios 
      .get('https://speak-out-be-staging.herokuapp.com/user')
      .then(res => {
        dispatch({ type: LOGGEDIN_SUCCESS, payload: res.data })
        if (!res.data.authenticated) {
          history.push('/login')
        }
      })
      .catch(err => {
        console.log('ERROR', err)
        let wrongCredentials = true;
        dispatch({ type: LOGGEDIN_FAILURE, payload: wrongCredentials })
      })  
  };
}

export const logIn = (user, history) => {
  return dispatch => {
    dispatch( {type: LOGIN_START} );

    axios
      .post('https://speak-out-be-staging.herokuapp.com/login', user)
      .then(res => {
        dispatch({ type: LOGIN_SUCCESS, payload: res.data })
        history.push('/');
      })
      .catch(err => {
        console.log('ERROR', err)
        dispatch({ type: LOGIN_FAILURE, payload: 'Error' })
      })  
  };
};

export const logOut = history => {
  return dispatch => {
    dispatch({ type: LOGOUT_START });

    axios
      .get('https://speak-out-be-staging.herokuapp.com/logout')
      .then(res => {
        dispatch({ type: LOGOUT_SUCCESS, payload: res.data })
        history.push('/login');
      })
      .catch(err => {
        console.log('ERROR API', err)
        dispatch({ type: LOGOUT_FAILURE, payload: 'Error' })
      })
  }
};