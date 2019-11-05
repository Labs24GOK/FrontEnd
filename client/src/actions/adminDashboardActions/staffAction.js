import axios from 'axios';

export const FETCH_STAFF_START = 'FETCH_STAFF_START';
export const FETCH_STAFF_SUCCESS = 'FETCH_STAFF_SUCCESS';
export const FETCH_STAFF_FAILURE = 'FETCH_STAFF_FAILURE';

export const getStaffTable = () => dispatch => {
    dispatch({type: FETCH_STAFF_START})
    axios.get('https://speak-out-be-staging.herokuapp.com/api?table=staff')
        .then(res => {
            console.log('staff table', res)
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
        console.log('getSTAFFBYID', res.data.tableData[0])
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