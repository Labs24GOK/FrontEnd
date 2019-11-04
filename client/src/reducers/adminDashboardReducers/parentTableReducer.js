import {
    FETCH_PARENTS_START,
    FETCH_PARENTS_SUCCESS,
    FETCH_PARENTS_FAILURE
  } from '../../actions';
  
  const initialState = {
        isLoading: false,
        error: null,
        parentList: []
  }
  
  export const parentTableReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PARENTS_START:
            return {
                ...state,
                isLoading: true,
                error: null
            };
        case FETCH_PARENTS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: null,
                parentList: action.payload
            };
        case FETCH_PARENTS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default: return state;
  
    }
  }