import axios from 'axios';
import API_URL from '../config/apiUrl';

axios.defaults.withCredentials = true;

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

<<<<<<< HEAD
export const LOGOUT_START = 'LOGOUT_START';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';

export const loggedIn = (history, location) => {
	return dispatch => {
		dispatch({ type: LOGGEDIN_START });

		axios
			.get(`${API_URL}/user`)
			.then(res => {
				dispatch({ type: LOGGEDIN_SUCCESS, payload: res.data });
				if (!res.data.authenticated && location.pathname === '/dashboard') {
					history.push('/login');
				} else if (res.data.authenticated) {
					history.push('/dashboard');
				}
			})
			.catch(err => {
				let wrongCredentials = true;
				dispatch({ type: LOGGEDIN_FAILURE, payload: wrongCredentials });
			});
	};
};

=======
>>>>>>> 44675c75dfad1dc3e2edbd392132fd658f534d9e
export const logIn = (user, history) => {
	return dispatch => {
		dispatch({ type: LOGIN_START });

		axios
			.post(`${API_URL}/api/auth/login`, user)
			.then(res => {
				let userType = "parent";

				if (user.username === "admin")
					{ userType = "admin"; }

				localStorage.setItem('userType', userType);
				
				dispatch({ type: LOGIN_SUCCESS, payload: res.data });
				console.log("action creator is pushing to dashboard (logIn)", res.data);
				localStorage.setItem('token', res.data.token);
				history.push('/dashboard');
			})
			.catch(err => {
				dispatch({ type: LOGIN_FAILURE, payload: 'Error' });
			});
	};
};
