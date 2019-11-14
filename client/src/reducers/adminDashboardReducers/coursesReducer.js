import {
    FETCH_COURSES_START,
    FETCH_COURSES_SUCCESS,
    FETCH_COURSES_FAILURE,

    FETCH_COURSEBYID_START,
    FETCH_COURSEBYID_SUCCESS,
    FETCH_COURSEBYID_FAILURE,

    EDIT_COURSEBYID_START,
    EDIT_COURSEBYID_SUCCESS,
    EDIT_COURSEBYID_FAILURE,

    ADD_COURSE_START,
    ADD_COURSE_SUCCESS,
    ADD_COURSE_FAILURE,

    DISPLAY_STUDENTSBYCOURSEID_START,
    DISPLAY_STUDENTSBYCOURSEID_SUCCESS,
    DISPLAY_STUDENTSBYCOURSEID_FAILURE,

    SET_FILTER_COURSES,
  } from '../../actions';
  
  const initialState = {
        isLoading: false,
        error: null,
        courseList: [],
        courseById: [],
        studentsById: [],
        isEdited: false,
        isEditing: false,
        isPosting: false,
        isPosting: false,
        searchTerm: "",
  }
  
  export const coursesTableReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_COURSES_START:
            return {
                ...state,
                isLoading: true,
                error: null
            };
        case FETCH_COURSES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: null,
                courseList: action.payload
            };
        case FETCH_COURSES_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
            /// get by ID 
        case FETCH_COURSEBYID_START:
            return {
                ...state,
                isLoading: true,
                error: null
            };
        case FETCH_COURSEBYID_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: null,
                courseById: action.payload
            };
        case FETCH_COURSEBYID_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
            // edit by id
        case EDIT_COURSEBYID_START:
            return {
                ...state,
                isEditing: !state.isEditing,
                error: null,
            }
        case  EDIT_COURSEBYID_SUCCESS:
            return {
                ...state,
                isEditing: !state.isEditing,
                isEdited: true,
                courseById: action.payload
            }
        case EDIT_COURSEBYID_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            }
            //add course
            case ADD_COURSE_START:
                return {
                    ...state,
                    isLoading: true,
                    isPosting: false,
                    error: null
                };
            case ADD_COURSE_SUCCESS:
                return {
                    ...state,
                    isLoading: false,
                    error: null,
                    isPosting: false,
                    isPosting: true,
                    staffById: action.payload
                };
            case ADD_COURSE_FAILURE:
                return {
                    ...state,
                    isLoading: false,
                    error: action.payload
                }
            //get coursebyId
            case DISPLAY_STUDENTSBYCOURSEID_START:
                return {
                    ...state,
                    isLoading: true,
                    error: null,
                }
            case  DISPLAY_STUDENTSBYCOURSEID_SUCCESS:
                return {
                    ...state,
                    studentsById: action.payload,
                    isLoading: false,
                    error: null
                }
            case DISPLAY_STUDENTSBYCOURSEID_FAILURE:
                return {
                    ...state,
                    isLoading: false,
                    error: action.payload,
                }
            // search 
            case SET_FILTER_COURSES:
                    return {
                        ...state,
                        searchTerm: action.payload
                }
        default: return state;
  
    }
  }