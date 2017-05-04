//@ REMOVE

import {LOCATION_CHANGE} from 'react-router-redux'

const initialState={ locationBeforeTransitions: null, test:true};

export const routing = (state=initialState,action) =>{
    if (action.type === LOCATION_CHANGE){
        console.log('Location_Change Override 1')
        return {...state,locationBeforeTransitions:action.payload}
    }
    return state;

}
export default routing;