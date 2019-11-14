import axios from 'axios';

export const FETCH_PARENTS_START = 'FETCH_PARENTS_START';
export const FETCH_PARENTS_SUCCESS = 'FETCH_PARENTS_SUCCESS';
export const FETCH_PARENTS_FAILURE = 'FETCH_PARENTS_FAILURE';

export const getParentTable = () => dispatch => {
    dispatch({type: FETCH_PARENTS_START})
    axios.get('https://speak-out-be-staging.herokuapp.com/api?table=family')
        .then(res => {
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


export const EDIT_PARENTBYID_START = 'EDIT_PARENTBYID_START';
export const EDIT_PARENTBYID_SUCCESS = 'EDIT_PARENTBYID_SUCCESS';
export const EDIT_PARENTBYID_FAILURE = 'EDIT_PARENTBYID_FAILURE';

export const toggleEditParent = () => dispatch => {
    dispatch({ type: EDIT_PARENTBYID_START })
}


export const editParentById = (id, state) => dispatch => {
    axios.put(`https://speak-out-be-staging.herokuapp.com/api/?table=family&where=id=${id}`, state)
    .then(res => {
        dispatch({
            type: EDIT_PARENTBYID_SUCCESS,
            payload: res.data
        })
    })
    .catch(err => {
       dispatch({
        type: EDIT_PARENTBYID_FAILURE,
        payload: err.data
       }) 
    })
}


export const FETCH_STUDENTBYFAMILYID_START = 'FETCH_STUDENTBYFAMILYID_START';
export const FETCH_STUDENTBYFAMILYID_SUCCESS = 'FETCH_STUDENTBYFAMILYID_SUCCESS';
export const FETCH_STUDENTBYFAMILYID_FAILURE = 'FETCH_STUDENTBYFAMILYID_FAILURE';


export const getStudentByFamilyId = family_id => dispatch => {
    console.log('FAMILY ID ACTION', family_id)
    dispatch({ type: FETCH_STUDENTBYFAMILYID_START })
    axios.get(`https://speak-out-be-staging.herokuapp.com/api/?table=student&where=family_id=${family_id}`)
    .then(res => {
        console.log('FAMILY ID RES', res.data)
        dispatch({
            type: FETCH_STUDENTBYFAMILYID_SUCCESS,
            payload: res.data.tableData
        })
    })
    .catch(err => {
       dispatch({
        type: FETCH_STUDENTBYFAMILYID_FAILURE,
        payload: err.data
       }) 
    })
}

export const ADD_PARENT_START = 'ADD_PARENT_START';
export const ADD_PARENT_SUCCESS = 'ADD_PARENT_SUCCESS';
export const ADD_PARENT_FAILURE = 'ADD_PARENT_SUCCESS';

export const toggleAddParentComponent = () => dispatch => {
    // console.log('hey')
    dispatch({ type: ADD_PARENT_START })
}

export const addParent = parent => dispatch => {
    axios.post('https://speak-out-be-staging.herokuapp.com/api?table=family', parent)
        .then(res => {
            console.log('ADD PARENT ACTION', res.data)
           dispatch({type: ADD_PARENT_SUCCESS, payload:res.data})
        }).catch(err=> {
            console.log('err',err)
            dispatch({type: ADD_PARENT_FAILURE, payload: err.payload})
        });
};


