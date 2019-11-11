import axios from 'axios';

export const FETCH_STAFF_START = 'FETCH_STAFF_START';
export const FETCH_STAFF_SUCCESS = 'FETCH_STAFF_SUCCESS';
export const FETCH_STAFF_FAILURE = 'FETCH_STAFF_FAILURE';

export const getStaffTable = () => dispatch => {
    dispatch({type: FETCH_STAFF_START})
    axios.get('https://speak-out-be-staging.herokuapp.com/api?table=staff')
        .then(res => {
           dispatch({type: FETCH_STAFF_SUCCESS, payload:res.data.tableData})
        }).catch(err=> {
            console.log('err',err)
            dispatch({type: FETCH_STAFF_FAILURE, payload: err.payload})
        });
};


export const FETCH_STAFFBYID_START = 'FETCH_STAFFBYID_START';
export const FETCH_STAFFBYID_SUCCESS = 'FETCH_STAFFBYID_SUCCESS';
export const FETCH_STAFFBYID_FAILURE = 'FETCH_STAFFBYID_FAILURE';

export const getStaffById = id => dispatch => {
    dispatch({ type: FETCH_STAFFBYID_START })
    axios.get(`https://speak-out-be-staging.herokuapp.com/api/?table=staff&where=id=${id}`)
    .then(res => {
        dispatch({
            type: FETCH_STAFFBYID_SUCCESS,
            payload: res.data.tableData[0]
        })
    })
    .catch(err => {
        console.log(err)
       dispatch({
        type: FETCH_STAFFBYID_FAILURE,
        payload: err.data
       }) 
    })
}

export const EDIT_STAFFBYID_START = 'EDIT_STAFFBYID_START';
export const EDIT_STAFFBYID_SUCCESS = 'EDIT_STAFFBYID_SUCCESS';
export const EDIT_STAFFBYID_FAILURE = 'EDIT_STAFFBYID_FAILURE';

export const toggleStaffEditComponent = () => dispatch => {
    dispatch({ type: EDIT_STAFFBYID_START })
}

export const editStaffById = (id, state) => dispatch => {
    axios.put(`https://speak-out-be-staging.herokuapp.com/api/?table=staff&where=id=${id}`, state)
    .then(res => {
        dispatch({
            type: EDIT_STAFFBYID_SUCCESS,
            payload: res.data
        })
    })
    .catch(err => {
       dispatch({
        type: EDIT_STAFFBYID_FAILURE,
        payload: err.data
       }) 
    })
}


export const ADD_STAFF_START = 'ADD_STAFF_START';
export const ADD_STAFF_SUCCESS = 'ADD_STAFF_SUCCESS';
export const ADD_STAFF_FAILURE = 'ADD_STAFF_FAILURE';

export const toggleAddStaffComponent = () => dispatch => {
    // console.log('hey')
    dispatch({ type: ADD_STAFF_START })
}

export const addStaff = staff => dispatch => {
    axios.post('https://speak-out-be-staging.herokuapp.com/api?table=staff', staff)
        .then(res => {
<<<<<<< HEAD
            console.log('add staff action', res.data)
=======
>>>>>>> 23027271c4929c4c875d448b56e40c53b2a99568
           dispatch({type: ADD_STAFF_SUCCESS, payload:res.data})
        }).catch(err=> {
            console.log('err',err)
            dispatch({type: ADD_STAFF_FAILURE, payload: err.payload})
        });
};


