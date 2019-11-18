import {
    SET_FILTER_STUDENT,
    FETCH_STUDENTS_START,
    FETCH_STUDENTS_SUCCESS,
    FETCH_STUDENTS_FAILURE,

    CREATE_NEW_STUDENT_START,
    CREATE_NEW_STUDENT_SUCCESS,
    CREATE_NEW_STUDENT_FAILURE,

    FETCH_DROPDOWN_START,
    FETCH_DROPDOWN_SUCCESSTABLE1,
    FETCH_DROPDOWN_SUCCESSTABLE2,
    FETCH_DROPDOWN_SUCCESSTABLE3,
    FETCH_DROPDOWN_SUCCESSTABLE4,
    FETCH_DROPDOWN_FAILURE,

} from '../../actions';

const initialState = {
    isLoading: false,
    error: null,
    studentList: [],
    searchTerm: "",
    studentById: [],
    cardIsLoading: false,
    cardFetching: false,
    cardError: null,
    cardIsEditting: false,
    cardIsEditted: false,
    dropDownList1: [],
    dropDownList2: [],
    dropDownList3: [],
    dropDownList4: [],
    locationID: {},
    contactMethodID: {},
    blockID: {},
    gradeID: {},
    createNewStudentIsLoading: false,
    createNewStudentError: null,
    createNewStudentSuccessMessage: '',

}

export const studentTableReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_STUDENTS_START:
            return {
                ...state,
                listIsLoading: true,
                listError: null
            };
        case FETCH_STUDENTS_SUCCESS:
            return {
                ...state,
                listIsLoading: false,
                listError: null,
                studentList: action.payload
            };
        case FETCH_STUDENTS_FAILURE:
            return {
                ...state,
                listIsLoading: false,
                listError: action.payload
            }
            case SET_FILTER_STUDENT:
                return {
                    ...state,
                    searchTerm: action.payload
                }
        //add student
        case CREATE_NEW_STUDENT_START:
            return {
                ...state,
                createNewStudentIsLoading: true
            }
        case CREATE_NEW_STUDENT_SUCCESS:
            return {
                ...state,
                createNewStudentIsLoading: false,
                createNewStudentSuccessMessage: 'Student has been successfuly added',
                studentList: [action.payload, ...state.studentList]
            }
        case CREATE_NEW_STUDENT_FAILURE:
            return {
                ...state,
                createNewStudentError: 'Something went wrong'
            }
            case 'RESET_FORM':
                return {
                  ...state,
                  studentById: []
                }
        //dropdown
        case FETCH_DROPDOWN_START:
            return {
                ...state,
                isLoading: true,
                error: null
            }
        case FETCH_DROPDOWN_SUCCESSTABLE1:
            let location = action.payload.map(each => {
                let obj = {value: each.id, label: each.name}
                return obj;
            })
            return {
                ...state,
                isLoading: false,
                error: null,
                dropDownList1: location
            }
        case FETCH_DROPDOWN_SUCCESSTABLE2:
            let contact = action.payload.map(each => {
                let obj = {value : each.id, label: each.method}
                return obj;
            })
            return {
                ...state,
                isLoading: false,
                error: null,
                dropDownList2: contact
            }
        case FETCH_DROPDOWN_SUCCESSTABLE3:
            let grade = action.payload.map(each => {
                let obj= {value: each.id, label:each.name}
                return obj;
            })
            return {
                ...state,
                isLoading: false,
                error: null,
                dropDownList3: grade
            }
        case FETCH_DROPDOWN_SUCCESSTABLE4:
            let block = action.payload.map(each => {
                let obj = {value: each.id, label: each.block_code}
                return obj;
            })
            return {
                ...state,
                isLoading: false,
                error: null,
                dropDownList4: block
            }
        case FETCH_DROPDOWN_FAILURE:
            return {
                ...state,
                IsLoading: false,
                error: action.payload
            }
        default: return state;

    }
}