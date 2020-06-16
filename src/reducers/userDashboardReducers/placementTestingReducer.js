import { GET_CHILD_QUESTIONS, NEXT_PAGE, PREV_PAGE, TEST_TIME_OUT } from "../../actions/userDashboardActions/placementActions";
const initialState = {
  timerActive: false,
  questions: [],
  currentQuestion: {},
  page: 0,
  userAwnsers: [],
};

export const placementTestingReducer = (state = initialState, { type, payload }) => {
  const currentQuestion = () => {
    return state.questions.filter(question => question.key === state.page + 1 ) // page starts at 2 for test
  }
  switch (type) {
    case GET_CHILD_QUESTIONS:
      return {
        ...state,
        questions: payload
			};

		case NEXT_PAGE:
			return {
				...state,
        page: state.page + 1,
        currentQuestion: currentQuestion()
			};

			case PREV_PAGE:
				return {
					...state,
          page: state.page - 1,
          currentQuestion: currentQuestion()
        };

      case START_TEST_TIMER:
        return {
          ...state,
          timerActive: true
        }
        
      case TEST_TIME_OUT:
        return {
          ...state,
          timerActive: false
        }

    default:
      return state;
  }
};
