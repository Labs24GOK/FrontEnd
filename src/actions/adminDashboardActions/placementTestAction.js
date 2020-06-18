import axiosWithAuth from '../../utils/axiosWithAuth';
import API_URL from '../../config/apiUrl';

export const FETCH_PLACEMENTTESTS_START = 'FETCH_PLACEMENTTESTS_START';
export const FETCH_PLACEMENTTESTS_SUCCESS = 'FETCH_PLACEMENTTESTS_SUCCESS';
export const FETCH_PLACEMENTTESTS_FAILURE = 'FETCH_PLACEMENTTESTS_FAILURE';

export const getPlacementTests = () => dispatch => {
	dispatch({ type: FETCH_PLACEMENTTESTS_START });
	axiosWithAuth()
		.get(`/placementExam`)
		.then(res => {
			dispatch({
				type: FETCH_PLACEMENTTESTS_SUCCESS,
				payload: res.data
			});
		})
		.catch(err => {
			dispatch({ type: FETCH_PLACEMENTTESTS_FAILURE, payload: err.payload });
		});
};

export const FETCH_PLACEMENTTESTTBYID_START = 'FETCH_PLACEMENTTESTTBYID_START';
export const FETCH_PLACEMENTTESTTBYID_SUCCESS =
	'FETCH_PLACEMENTTESTTBYID_SUCCESS';
export const FETCH_PLACEMENTTESTTBYID_FAILURE =
	'FETCH_PLACEMENTTESTTBYID_FAILURE';

export const getPlacementTestById = id => dispatch => {
	dispatch({ type: FETCH_PLACEMENTTESTTBYID_START });
	axiosWithAuth()
		.get(`/placementExam/student/${id}`)  
		.then(res => {
			console.log("action - res.data: ", res.data)
			dispatch({
				type: FETCH_PLACEMENTTESTTBYID_SUCCESS,
				payload: res.data
			});
		})
		.catch(err => {
			dispatch({
				type: FETCH_PLACEMENTTESTTBYID_FAILURE,
				payload: err.data
			});
		});
};

export const EDIT_PLACEMENTTESTTBYID_START = 'EDIT_PLACEMENTTESTTBYID_START';
export const EDIT_PLACEMENTTESTTBYID_SUCCESS =
	'EDIT_PLACEMENTTESTTBYID_SUCCESS';
export const EDIT_PLACEMENTTESTTBYID_FAILURE =
	'EDIT_PLACEMENTTESTTBYID_FAILURE';

export const toggleEditPlacement = () => dispatch => {
	dispatch({ type: EDIT_PLACEMENTTESTTBYID_START });
};

export const editPlacementTestById = (id, state) => dispatch => {
	axiosWithAuth()
		.put(`/placementExam/${id}`, state) 
		.then(res => {
			dispatch({
				type: EDIT_PLACEMENTTESTTBYID_SUCCESS,
				payload: res.data
			});
		})
		.catch(err => {
			dispatch({
				type: EDIT_PLACEMENTTESTTBYID_FAILURE,
				payload: err.data
			});
		});
};
