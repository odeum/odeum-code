 import * as actions from './dashboardActionTypes'
const initialState = {
    test:'test'
}

const dashboard = (state = initialState, action) => {
    switch (action.type) {
        case actions.DEMO:
        return {
            ...state,
            test:'DEMO REDUCED'
        }
        default:
            return state
    }
}

export default dashboard