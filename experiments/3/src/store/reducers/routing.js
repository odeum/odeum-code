//@ Not Used yet, Routing + Deeplinking is not DONE

import {LOCATION_CHANGE} from 'react-router-redux'

const initialState={ locationBeforeTransitions: null, test:true};

export const routing = (state=initialState,action) =>{
    if (action.type === LOCATION_CHANGE){
        return {...state,locationBeforeTransitions:action.payload}
    }
    if(action.type === 'CHANGE_TAB')
    {
        console.log('Fault')
        const {label} = action.payload.label;
        let location = state.locationBeforeTransitions;
        const pathname= state.routing.location + label;
        location = { ...location, pathname, action: 'PUSH'};
        return { ...state,locationBeforeTransitions: location}
    }
    return state;

}
export default routing;