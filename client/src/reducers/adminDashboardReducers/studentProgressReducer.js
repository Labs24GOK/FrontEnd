import {
FETCH_STUDENTPROGESS_START,
  FETCH_STUDENTPROGESS_SUCCESS,
  FETCH_STUDENTPROGESS_FAILURE
} from '../../actions';



const initialState = {
    progressByStudentId: [],
    isLoading: false,
    error: null
}



export const studentProgressReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_STUDENTPROGESS_START:
            return {
                ...state,
                isLoading: true,
                error: null
            };
        case FETCH_STUDENTPROGESS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: null,
                progressByStudentId: action.payload
            };
        case FETCH_STUDENTPROGESS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }

            default: return state;

        }
    }