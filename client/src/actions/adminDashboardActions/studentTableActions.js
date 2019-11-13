import axios from 'axios';

export const FETCH_STUDENTS_START = 'FETCH_STUDENTS_START';
export const FETCH_STUDENTS_SUCCESS = 'FETCH_STUDENTS_SUCCESS';
export const FETCH_STUDENTS_FAILURE = 'FETCH_STUDENTS_FAILURE';

export const getStudentTable = () => dispatch => {
    dispatch({type: FETCH_STUDENTS_START})
    axios.get('https://speak-out-be-staging.herokuapp.com/api?table=student')
        .then(res => {
           dispatch({type: FETCH_STUDENTS_SUCCESS, payload:res.data.tableData})
        }).catch(err=> {
            console.log('err',err)
            dispatch({type: FETCH_STUDENTS_FAILURE, payload: err.payload})
        });
};


export const SET_FILTER = 'SET_FILTER';
export const filterStudentTable = (searchTerm) => dispatch => {
    dispatch({type: SET_FILTER, payload: searchTerm})
    dispatch({type: FETCH_STUDENTS_START});
    axios.get(`https://speak-out-be-staging.herokuapp.com/api?table=student`)
        .then(res => {

            searchTerm = searchTerm.toLowerCase();
            let studentList = res.data.tableData;
            studentList = studentList.filter(student => {
                if (student.first_name && student.first_name.toLowerCase().match(searchTerm)) {
                    return true;
                }
                if (student.id && student.id.toString().match(searchTerm)) {
                    return true;
                }
                if (student.cpr && student.cpr.toString().match(searchTerm)) {
                    return true;
                }
                if (student.additional_names && student.additional_names.toLowerCase().match(searchTerm)) {
                    return true;
                }
                if (student.mobile_telephone && student.mobile_telephone.toLowerCase().match(searchTerm)) {
                    return true;
                }
                return false
            });
           dispatch({type: FETCH_STUDENTS_SUCCESS, payload: studentList})
        }).catch(err=> {
            console.log('err',err)
            dispatch({type: FETCH_STUDENTS_FAILURE, payload: err.payload})
        });
}