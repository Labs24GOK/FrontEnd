import {
  FETCH_STUDENTPROGESS_START,
  FETCH_STUDENTPROGESS_SUCCESS,
  FETCH_STUDENTPROGESS_FAILURE,
  
  CREATE_STUDENTPROGRESS_START,
  CREATE_STUDENTPROGRESS_SUCCESS,
  CREATE_STUDENTPROGRESS_FAILURE,

} from '../../actions';



const initialState = {
    progressByStudentId: [],
    isLoading: false,
    error: null,
    isPosting: false,
    isPosted: false
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
                //add a progress report 
            case CREATE_STUDENTPROGRESS_START:
                return {
                    ...state,
                    isLoading: true,
                    isPosting: false,
                    error: null
                };
            case CREATE_STUDENTPROGRESS_SUCCESS:
                return {
                    ...state,
                    isLoading: false,
                    error: null,
                    isPosting: false,
                    isPosting: true,
                    progressByStudentId: action.payload
                };
            case CREATE_STUDENTPROGRESS_FAILURE:
                return {
                    ...state,
                    isLoading: false,
                    error: action.payload
                }
    






            default: return state;

        }
    }