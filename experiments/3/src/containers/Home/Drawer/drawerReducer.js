import * as actions from './drawerActiontypes'
import Dashboard from '../../../scenes/Dashboard'
import Organisation from '../../../scenes/Organisation'


const initialState = {
    activeScene: 0
}

export const drawer = (state = initialState, action) => {
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

export default drawer