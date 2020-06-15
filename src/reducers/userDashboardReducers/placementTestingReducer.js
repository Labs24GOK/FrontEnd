import testObject from '../../views/userDashboard/components/placementTest/Child/TestObject'
const initialState = {
    timerActive: false,
    questions: testObject,
    currentPage: 0,
    userAwnsers: []
}



export default (state = initialState, { type, payload }) => {
    switch (type) {

    case SET_TESTING_TIMER:
        return { ...state, ...payload }

    default:
        return state
    }
}
