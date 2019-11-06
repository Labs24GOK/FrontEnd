import {
    ADD_STAFF_START,
    ADD_STAFF_SUCCESS,
    ADD_STAFF_FAILURE,
} from '../../actions'


const initialState = {
    isLoading: false,
    error: null,
    staff: [],
}

export const addStaffReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_STAFF_START:
            return {
                ...state,
                error: null,
                isPosting: !state.isPosting,
            };
        case ADD_STAFF_SUCCESS:
            return {
                ...state,
                staff: action.payload,
                isLoading: false,
            };
        case ADD_STAFF_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default: return state;
  
    }
  }