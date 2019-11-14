import {
    FETCH_STAFF_START,
    FETCH_STAFF_SUCCESS,
    FETCH_STAFF_FAILURE,
    SET_FILTER_STAFF,
} from '../../actions'


const initialState = {
    isLoading: false,
    error: null,
    staffList: [],
    searchTerm: ""
}

export const staffTableReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_STAFF_START:
            return {
                ...state,
                isLoading: true,
                error: null
            };
        case FETCH_STAFF_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: null,
                staffList: action.payload
            };
        case FETCH_STAFF_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        // search 
        case SET_FILTER_STAFF:
        return {
            ...state,
            searchTerm: action.payload
        }
        default: return state;
  
    }
  }