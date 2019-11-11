import {
    FETCH_PLACEMENTTESTS_START,
    FETCH_PLACEMENTTESTS_SUCCESS,
    FETCH_PLACEMENTTESTS_FAILURE,
    FETCH_PLACEMENTTESTTBYID_START,
    FETCH_PLACEMENTTESTTBYID_SUCCESS,
    FETCH_PLACEMENTTESTTBYID_FAILURE,
    EDIT_PLACEMENTTESTTBYID_START,
    EDIT_PLACEMENTTESTTBYID_SUCCESS,
    EDIT_PLACEMENTTESTTBYID_FAILURE,
  } from '../../actions';
  
  const initialState = {
        isLoading: false,
        error: null,
        placementTest: [],
        placementTestById: [],
        isTestEditing: false,
        isTestEditted: false,
  }
  
  export const placementTestReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PLACEMENTTESTS_START:
            return {
                ...state,
                isLoading: true,
                error: null
            };
        case FETCH_PLACEMENTTESTS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: null,
                placementTest: action.payload
            };
        case FETCH_PLACEMENTTESTS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }

        /// get by ID 
        case FETCH_PLACEMENTTESTTBYID_START:
            return {
                ...state,
                isLoading: true,
                error: null
            };
        case FETCH_PLACEMENTTESTTBYID_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: null,
                placementTestById: action.payload
            };
        case FETCH_PLACEMENTTESTTBYID_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        // Edit by ID
        case EDIT_PLACEMENTTESTTBYID_START:
            return {
                ...state,
                isTestEditing: !state.isTestEditing,
                error: null,
            }
        case  EDIT_PLACEMENTTESTTBYID_SUCCESS:
            return {
                ...state,
                isTestEditing: false,
                isTestEditted: true,
                studentById: action.payload
            }
        case EDIT_PLACEMENTTESTTBYID_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            }
        default: return state;
    }
  }