import {
    FETCH_STAFFBYID_START,
    FETCH_STAFFBYID_SUCCESS,
    FETCH_STAFFBYID_FAILURE
} from '../../actions'


const initialState = {
    staffById: [],
    isLoading: false,
    error: null,
}

export const staffByIdReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_STAFFBYID_START:
            return {
                ...state,
                isLoading: true,
                error: null
            };
        case FETCH_STAFFBYID_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: null,
                staffById: action.payload
            };
        case FETCH_STAFFBYID_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default: return state;
  
    }
  }