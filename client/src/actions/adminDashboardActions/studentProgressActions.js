import axios from 'axios';

export const FETCH_STUDENTPROGESS_START = 'FETCH_STUDENTPROGESS_START';
export const FETCH_STUDENTPROGESS_SUCCESS = 'FETCH_STUDENTPROGESS_SUCCESS';
export const FETCH_STUDENTPROGESS_FAILURE = 'FETCH_STUDENTPROGESS_FAILURE';

export const getStudentProgress = student_id => dispatch => {
    dispatch({ type: FETCH_STUDENTPROGESS_START })
    axios.get(`https://speak-out-be-staging.herokuapp.com/api/?table=progress_report&where=student_id=${student_id}`)
    .then(res => { 
        dispatch({
            type: FETCH_STUDENTPROGESS_SUCCESS,
            payload: res.data.tableData[0] //taking off array lets me see payload in console and brings success message 
        })
    })
    .catch(err => {
       dispatch({
        type: FETCH_STUDENTPROGESS_FAILURE,
        payload: err.data
       }) 
    })
}


export const CREATE_STUDENTPROGRESS_START = 'CREATE_STUDENTPROGRESS_START';
export const CREATE_STUDENTPROGRESS_SUCCESS = 'CREATE_STUDENTPROGRESS_SUCCESS';
export const  CREATE_STUDENTPROGRESS_FAILURE = 'CREATE_STUDENTPROGRESS_FAILURE';

export const togglePostComponent = () => dispatch => {
    dispatch({ type: CREATE_STUDENTPROGRESS_START })
}


export const postStudentProgress = student => dispatch => {
    axios.post('https://speak-out-be-staging.herokuapp.com/api/?table=progress_report', student)
    .then(res => { 
        console.log('POST ACTION:', res.data)
        dispatch({
            type: CREATE_STUDENTPROGRESS_SUCCESS,
            payload: res.data.tableData
        })
    })
    .catch(err => {
       dispatch({
        type: CREATE_STUDENTPROGRESS_FAILURE,
        payload: err.data
       }) 
    })
}

export const CREATE_STUDENTPROGRESS_START = 'CREATE_STUDENTPROGRESS_START';
export const CREATE_STUDENTPROGRESS_SUCCESS = 'CREATE_STUDENTPROGRESS_SUCCESS';
export const  CREATE_STUDENTPROGRESS_FAILURE = 'CREATE_STUDENTPROGRESS_FAILURE';