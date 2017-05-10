import * as actions from './menuActionTypes'

const initialState = {
    activeScene: 0
}

export const menu = (state = initialState, action) => {
    switch (action.type) {
        case actions.changeActiveDrItem:
            {
                console.log(action.payload)
                return state;
            }

        default:
            return state;
    }
}

export default menu