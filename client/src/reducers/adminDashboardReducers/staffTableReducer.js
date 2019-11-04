import {
    FETCH_STAFF_START,
    FETCH_STAFF_SUCCESS,
    FETCH_STAFF_FAILURE,
} from '../../actions'


const initialState = {
    isLoading: false,
    error: null,
    staffList: []
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
        default: return state;
  
    }
  }