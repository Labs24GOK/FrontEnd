import {
    FETCH_PARENTS_START,
    FETCH_PARENTS_SUCCESS,
    FETCH_PARENTS_FAILURE,
    FETCH_PARENTBYID_START,
    FETCH_PARENTBYID_SUCCESS,
    FETCH_PARENTBYID_FAILURE,
  } from '../../actions';
  
  const initialState = {
        isLoading: false,
        error: null,
        parentList: [],
        parentById: []
  }
  
  export const parentReducer = (state = initialState, action) => {
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

        /// get by ID 
        case FETCH_PARENTBYID_START:
            return {
                ...state,
                isLoading: true,
                error: null
            };
        case FETCH_PARENTBYID_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: null,
                parentById: action.payload
            };
        case FETCH_PARENTBYID_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default: return state;
  
    }
  }