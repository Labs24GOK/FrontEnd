
import {
  FETCH_STUDENTBYID_START,
  FETCH_STUDENTBYID_SUCCESS,
  FETCH_STUDENTBYID_FAILURE,
  EDIT_STUDENTBYID_START,
  EDIT_STUDENTBYID_SUCCESS,
  EDIT_STUDENTBYID_CANCELLED,
  EDIT_STUDENTBYID_FAILURE,
  EDIT_DROPDOWN_START,
  EDIT_DROPDOWN_SUCCESS,
  EDIT_DROPDOWN_FAILURE,
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
  locationsTable: [],
  contactTypesTable: [], 
  blocksTable: [],
  schoolGradeTable: [],
  locationID: {},
  contactMethodID: {},
  blockID: {},
  gradeID: {},
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
              //edit dropdown
            case EDIT_DROPDOWN_START:
                return {
                    ...state,
                    isLoading: true,
                    error: null
                }
            case EDIT_DROPDOWN_SUCCESS:
                //console.log("ACTION.PAYLOAD", action.payload)
            let grade = action.payload.school_grades.map(each => {
                let obj= {value: each.id, label: each.name}
                return obj;
            })
            let block = action.payload.blocks.map(each => {
                let obj = {value: each.block_code, label: each.block_code}
                return obj;
            })
            let contact = action.payload.contact_types.map(each => {
                let obj = {value : each.id, label: each.method}
                return obj;
            })
            let location = action.payload.locations.map(each => {
                let obj = {value: each.id, label: each.name}
                return obj;
            })
            return {
                ...state,
                isLoading: false,
                locationsTable: location,
                contactTypesTable: contact,
                blocksTable: block,
                schoolGradeTable: grade,
                error: null,
            }
        case EDIT_DROPDOWN_FAILURE:
            return {
                ...state,
                IsLoading: false,
                error: action.payload
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