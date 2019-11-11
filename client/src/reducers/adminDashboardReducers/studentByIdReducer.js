
import {
  FETCH_STUDENTBYID_START,
  FETCH_STUDENTBYID_SUCCESS,
  FETCH_STUDENTBYID_FAILURE,
  EDIT_STUDENTBYID_START,
  EDIT_STUDENTBYID_SUCCESS,
  EDIT_STUDENTBYID_CANCELLED,
  EDIT_STUDENTBYID_FAILURE,
  DELETE_STUDENTBYID_START,
  DELETE_STUDENTBYID_SUCCESS,
  DELETE_STUDENTBYID_FAILURE,
} from '../../actions';

const initialState = {
  studentById: [],
  isLoading: false,
  error: null,
  isEditing: false,
  isEdited: true,
};

export const studentByIdReducer = (state = initialState, action) => {
  switch (action.type) {
      case FETCH_STUDENTBYID_START:
          return {
              ...state,
              isLoading: true,
              error: null,
          }
      case  FETCH_STUDENTBYID_SUCCESS:
          return {
              ...state,
              isLoading: false,
              fetching: true,
              studentById: action.payload
          }
      case FETCH_STUDENTBYID_FAILURE:
          return {
              ...state,
              isLoading: false,
              error: action.payload,
          }
      
      // Edit by ID
      case EDIT_STUDENTBYID_START:
              return {
                  ...state,
                  isEditing: true,
                  error: null,
              }
              case EDIT_STUDENTBYID_CANCELLED: 
              return {
                  ...state,
                  isEditing:false,
                  isEdited:false
              }
          case  EDIT_STUDENTBYID_SUCCESS:
              return {
                  ...state,
                  isEditing: false,
                  isEdited: true,
                  studentById: action.payload
              }
          case EDIT_STUDENTBYID_FAILURE:
              return {
                  ...state,
                  isLoading: false,
                  isEditing: true,
                  isEdited: false,
                  error: action.payload,
              }
          
          // Delete by ID

           case DELETE_STUDENTBYID_START:
              return {
                  ...state,
                  isLoading: true,
                  error: null,
              }
          case  DELETE_STUDENTBYID_SUCCESS:
              return {
                  ...state,
                  isLoading: false,
                  studentById: action.payload
              }
          case DELETE_STUDENTBYID_FAILURE:
              return {
                  ...state,
                  isLoading: false,
                  error: action.payload,
              }
          default:
              return state
      }
}