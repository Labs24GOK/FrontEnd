import axios from 'axios';

export const FETCH_PLACEMENTTESTS_START = 'FETCH_PLACEMENTTESTS_START';
export const FETCH_PLACEMENTTESTS_SUCCESS = 'FETCH_PLACEMENTTESTS_SUCCESS';
export const FETCH_PLACEMENTTESTS_FAILURE = 'FETCH_PLACEMENTTESTS_FAILURE';

export const getPlacementTests = () => dispatch => {
    dispatch({type: FETCH_PLACEMENTTESTS_START})
    axios.get('https://speak-out-be-staging.herokuapp.com/api?table=placementexam')
        .then(res => {
            // console.log('parent table', res)
           dispatch({type: FETCH_PLACEMENTTESTS_SUCCESS, payload:res.data.tableData})
        }).catch(err=> {
            console.log('err',err)
            dispatch({type: FETCH_PLACEMENTTESTS_FAILURE, payload: err.payload})
        });
};


export const FETCH_PLACEMENTTESTTBYID_START = 'FETCH_PLACEMENTTESTTBYID_START';
export const FETCH_PLACEMENTTESTTBYID_SUCCESS = 'FETCH_PLACEMENTTESTTBYID_SUCCESS';
export const FETCH_PLACEMENTTESTTBYID_FAILURE = 'FETCH_PLACEMENTTESTTBYID_FAILURE';

export const getPlacementTestById = id => dispatch => {
    dispatch({ type: FETCH_PLACEMENTTESTTBYID_START })
    axios.get(`https://speak-out-be-staging.herokuapp.com/api/?table=placementexam&where=id=${id}`)
    .then(res => {
        // console.log('getParentById', res.data.tableData[0])
        dispatch({
            type: FETCH_PLACEMENTTESTTBYID_SUCCESS,
            payload: res.data.tableData[0]
        })
    })
    .catch(err => {
       dispatch({
        type: FETCH_PLACEMENTTESTTBYID_FAILURE,
        payload: err.data
       }) 
    })
}
