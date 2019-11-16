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


export const SET_FILTER_STUDENT = 'SET_FILTER_STUDENT';

export const filterStudentTable = (searchTerm) => dispatch => {
    dispatch({type: SET_FILTER_STUDENT, payload: searchTerm})
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
                if (student.mobile_telephone && student.mobile_telephone.toString().match(searchTerm)) {
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

export const CREATE_NEW_STUDENT_START = 'CREATE_NEW_STUDENT_START';
export const CREATE_NEW_STUDENT_SUCCESS = 'CREATE_NEW_STUDENT_SUCCESS';
export const CREATE_NEW_STUDENT_FAILURE = 'CREATE_NEW_STUDENT_FAILURE';

export const createNewStudent = (student) => dispatch => {

    let {block_code, preferred_contact_type_id, school_grade_id, location_id} = student
    let newStudent = {
        ...student, 
        block_code: block_code.label, 
        preferred_contact_type_id: preferred_contact_type_id.value,
        school_grade_id: school_grade_id.value,
        location_id: location_id.value,
        }
        console.log(newStudent)
    dispatch({ type: CREATE_NEW_STUDENT_START })
    axios.post(`https://speak-out-be-staging.herokuapp.com/api/?table=student`, newStudent)
    .then(res => {
        console.log('res from createNewStudent', res)
        dispatch({
            type: CREATE_NEW_STUDENT_SUCCESS, payload: res.data[0]
        })
    })
    .catch(err => {
        console.log('error from createNewStudent', err)
        dispatch({
        type: CREATE_NEW_STUDENT_FAILURE,
        payload: err.data
        }) 
    })
}

export const FETCH_DROPDOWN_START = 'FETCH_DROPDOWN_START';
export const FETCH_DROPDOWN_SUCCESSTABLE1 = 'FETCH_DROPDOWN_SUCCESSTABLE1';
export const FETCH_DROPDOWN_SUCCESSTABLE2 = ' FETCH_DROPDOWN_SUCCESSTABLE2';
export const FETCH_DROPDOWN_SUCCESSTABLE3 = 'FETCH_DROPDOWN_SUCCESSTABLE3';
export const FETCH_DROPDOWN_SUCCESSTABLE4 = 'FETCH_DROPDOWN_SUCCESSTABLE4';
export const FETCH_DROPDOWN_FAILURE = 'FETCH_DROPDOWN_FAILURE';

export const getDropDown = () => dispatch => {

    const locationTable = axios.get(`https://speak-out-be-staging.herokuapp.com/api/?table=location`)
    const contactTable = axios.get(`https://speak-out-be-staging.herokuapp.com/api/?table=preferred_contact_type`)
    const gradeTable = axios.get(`https://speak-out-be-staging.herokuapp.com/api/?table=school_grade`)
    const blockTable = axios.get(`https://speak-out-be-staging.herokuapp.com/api/?table=block`)
    
    dispatch({ type: FETCH_DROPDOWN_START})
    axios.all([locationTable, contactTable, gradeTable, blockTable])
    .then(axios.spread((...res) => {
        let tablesThree = res.map((each, i) => {
          if(i === 0) {
            dispatch({type: FETCH_DROPDOWN_SUCCESSTABLE1, payload:each.data.tableData})
          } 
          if(i === 1) {
            dispatch({type: FETCH_DROPDOWN_SUCCESSTABLE2, payload:each.data.tableData})
          }
          if(i === 2){
            dispatch({type: FETCH_DROPDOWN_SUCCESSTABLE3, payload:each.data.tableData})
          }
          if(i === 3){
            dispatch({type: FETCH_DROPDOWN_SUCCESSTABLE4, payload:each.data.tableData})
          }
        })
     })).catch(err=> {
         console.log('err',err)
         dispatch({type: FETCH_DROPDOWN_FAILURE, payload: err.payload})
     });
};



//helper
export const resetForm = () => {
    return { type: 'RESET_FORM' }
  };
  
