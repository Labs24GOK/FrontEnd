import axios from 'axios';

export const FETCH_COURSES_START = 'FETCH_COURSES_START';
export const FETCH_COURSES_SUCCESS = 'FETCH_COURSES_SUCCESS';
export const FETCH_COURSES_FAILURE = 'FETCH_COURSES_FAILURE';

export const getCourseTable = () => dispatch => {
    dispatch({type: FETCH_COURSES_START})
    axios.get('https://speak-out-be-staging.herokuapp.com/api?table=course_view')
        .then(res => {
           dispatch({type: FETCH_COURSES_SUCCESS, payload:res.data.tableData})
        }).catch(err=> {
            dispatch({type: FETCH_COURSES_FAILURE, payload: err.payload})
        });
};

export const FETCH_COURSEBYID_START = 'FETCH_COURSEBYID_START';
export const FETCH_COURSEBYID_SUCCESS = 'FETCH_COURSEBYID_SUCCESS';
export const FETCH_COURSEBYID_FAILURE = 'FETCH_COURSEBYID_FAILURE';

export const getCourseById = id => dispatch => {
    dispatch({ type: FETCH_COURSEBYID_START })
    axios.get(`https://speak-out-be-staging.herokuapp.com/api?table=course_view&where=id=${id}`)
    .then(res => {
        console.log('getcouseById', res.data)
        dispatch({
            type: FETCH_COURSEBYID_SUCCESS,
            payload: res.data.tableData[0]
        })
    })
    .catch(err => {
       dispatch({
        type: FETCH_COURSEBYID_FAILURE,
        payload: err.data
       }) 
    })
}


export const EDIT_COURSEBYID_START = 'EDIT_COURSEBYID_START';
export const EDIT_COURSEBYID_SUCCESS = 'EDIT_COURSEBYID_SUCCESS';
export const EDIT_COURSEBYID_FAILURE = 'EDIT_COURSEBYID_FAILURE';

export const toggleEditCourse = () => dispatch => {
    dispatch({ type: EDIT_COURSEBYID_START })
}

export const editCouseById = (id, state) => dispatch => {
    let obj1 = {id:id, block_code:"431", delinquent:true} //will fix later 
    let state1 = {...state, ...obj1 }
    axios.put(`https://speak-out-be-staging.herokuapp.com/api?table=course_view&where=id=${id}`, state1)
    .then(res => {
        // console.log("res for editStudentById", res.data)
        dispatch({
            type: EDIT_COURSEBYID_SUCCESS,
            payload: res.data
        })
    })
    .catch(err => {
       dispatch({
        type: EDIT_COURSEBYID_FAILURE,
        payload: err.data
       }) 
    })
}