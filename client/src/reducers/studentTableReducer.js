import {
    getStudentTable,
    FETCH_STUDENT_DATA_START,
    FETCH_STUDENT_DATA_SUCCESS,
    FETCH_STUDENT_DATA_FAILURE
} from "../actions";

const initialState = {
    students: {
        isLoading: false,
        error: null,
        studentList: []
    }
}

export const studentTableReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_STUDENT_DATA_START:
            return {
                ...state,
                students: {
                    isLoading: true,
                    error: null
                }
            };
        case FETCH_STUDENT_DATA_SUCCESS:
            return {
                ...state,
                students: {
                    isLoading: false,
                    error: null,
                    studentList: action.payload
                }
            };
        case FETCH_STUDENT_DATA_FAILURE:
            return {
                ...state,
                students: {
                    isLoading: false,
                    error: action.payload
                }
            }
        default: return state;

    }
}