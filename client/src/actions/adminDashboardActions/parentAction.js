import axios from 'axios';

export const FETCH_PARENTS_START = 'FETCH_PARENTS_START';
export const FETCH_PARENTS_SUCCESS = 'FETCH_PARENTS_SUCCESS';
export const FETCH_PARENTS_FAILURE = 'FETCH_PARENTS_FAILURE';

export const getParentTable = () => dispatch => {
    dispatch({type: FETCH_PARENTS_START})
    axios.get('https://speak-out-be-staging.herokuapp.com/api?table=family')
        .then(res => {
            console.log('parent table', res)
           dispatch({type: FETCH_PARENTS_SUCCESS, payload:res.data.tableData})
        }).catch(err=> {
            console.log('err',err)
            dispatch({type: FETCH_PARENTS_FAILURE, payload: err.payload})
        });
};


export const FETCH_PARENTBYID_START = 'FETCH_PARENTBYID_START';
export const FETCH_PARENTBYID_SUCCESS = 'FETCH_PARENTBYID_SUCCESS';
export const FETCH_PARENTBYID_FAILURE = 'FETCH_PARENTBYID_FAILURE';

export const getParentById = id => dispatch => {
    dispatch({ type: FETCH_PARENTBYID_START })
    axios.get(`https://speak-out-be-staging.herokuapp.com/api/?table=family&where=id=${id}`)
    .then(res => {
        console.log('getParentById', res.data.tableData[0])
        dispatch({
            type: FETCH_PARENTBYID_SUCCESS,
            payload: res.data.tableData[0]
        })
    })
    .catch(err => {
       dispatch({
        type: FETCH_PARENTBYID_FAILURE,
        payload: err.data
       }) 
    })
}
