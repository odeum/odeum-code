
import * as actions from './tabsActiontypes'

const initialState = {
    tab: 0
}
export const tabs = (state = initialState, action) => {
    switch (action.type) {
        case actions.CHANGE_TAB:
            {
                console.log('changeTabReducer:' + action.payload)
                return {
                    ...state,
                    tab: action.payload
                }
            }
        default:
            return state
    }
}

export default tabs