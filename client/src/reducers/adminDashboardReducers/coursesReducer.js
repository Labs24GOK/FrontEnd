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

    FETCH_DROPDOWNCOURSES_START,
    FETCH_DROPDOWN_TABLETERM,
    FETCH_DROPDOWN_TABLECOURSETYPE,
    FETCH_DROPDOWN_TABLEGROUPTYPE,
    FETCH_DROPDOWN_TABLESCHOOLGRADE,
    FETCH_DROPDOWN_TABLELEVEL,
    FETCH_DROPDOWN_TABLECOURSESCHEDULE,
    FETCH_DROPDOWN_TABLEROOM,
    FETCH_DROPDOWN_TABLETEACHER,
    FETCH_DROPDOWNCOURSES_FAILURE
  } from '../../actions';
  
  const initialState = {
        isLoading: false,
        error: null,
        courseList: [],
        courseById: [],
        studentsById: [],
        termTable: [],
        courseTypeTable: [],
        groupTypeTable: [],
        schoolGradeTable: [],
        levelTable: [],
        courseScheduleTable: [],
        roomTable: [],
        teacherTable: [],
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
                    isPosting: true,
                    courseList: action.payload
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
            // get dropdowns from back-end for add course
            case FETCH_DROPDOWNCOURSES_START:
                return {
                    ...state,
                    isLoading: true,
                    error: null
                }
            case FETCH_DROPDOWN_TABLETERM:
                let term = action.payload.map(each => {
                    let obj = {value: each.id, label: each.name}
                    return obj;
                })
                return {
                    ...state,
                    isLoading: false,
                    termTable: term,
                    error: null
                }
            case FETCH_DROPDOWN_TABLECOURSETYPE:
                    let courseType = action.payload.map(each => {
                        let obj = {value: each.id, label: each.description}
                        return obj;
                    })
                return {
                    ...state,
                    isLoading: false,
                    courseTypeTable: courseType,
                    error: null
                }
            case FETCH_DROPDOWN_TABLEGROUPTYPE:
                    let groupType = action.payload.map(each => {
                        let obj = {value: each.id, label: each.long_description}
                        return obj;
                    })
                return {
                    ...state,
                    isLoading: false,
                    groupTypeTable: groupType,
                    error: null
                }
            case FETCH_DROPDOWN_TABLESCHOOLGRADE:
                    let schoolGrade = action.payload.map(each => {
                        let obj = {value: each.id, label: each.name}
                        return obj;
                    })
                return {
                    ...state,
                    isLoading: false,
                    schoolGradeTable: schoolGrade,
                    error: null
                }
            case FETCH_DROPDOWN_TABLELEVEL:
                    let level = action.payload.map(each => {
                        let obj = {value: each.id, label: each.description}
                        return obj;
                    })
                return {
                    ...state,
                    isLoading: false,
                    levelTable: level,
                    error: null
                }
            case FETCH_DROPDOWN_TABLECOURSESCHEDULE:
                    let courseSchedule = action.payload.map(each => {
                        let obj = {value: each.id, label: each.short_description}
                        return obj;
                    })
                return {
                    ...state,
                    isLoading: false,
                    courseScheduleTable: courseSchedule,
                    error: null
                }
            case FETCH_DROPDOWN_TABLEROOM:
                    let room = action.payload.map(each => {
                        let obj = {value: each.id, label: each.id}
                        return obj;
                    })
                return {
                    ...state,
                    isLoading: false,
                    roomTable: room,    
                    error: null
                }
            case FETCH_DROPDOWN_TABLETEACHER:
                    let teacher = action.payload.map(each => {
                        let obj = {value: each.id, label: each.name}
                        return obj;
                    })
                return {
                    ...state,
                    isLoading: false,
                    teacherTable: teacher,    
                    error: null
                }
            case FETCH_DROPDOWNCOURSES_FAILURE:
                return {
                    ...state,
                    isLoading:false,
                    error: action.payload
                }
        default: return state;
  
    }
  }