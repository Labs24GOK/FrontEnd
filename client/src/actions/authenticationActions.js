import axios from 'axios';
import API_URL from '../config/apiUrl';

axios.defaults.withCredentials = true;

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

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
