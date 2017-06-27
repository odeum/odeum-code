import * as actions from './formsActionTypes'

const initialState = {
    forms:[]
}


const forms=(state=initialState,action)=>{
    switch(action.type){
        case actions.GET_FORMS:
        { //console.log(action.payload.forms)
            return {...state,
            forms:action.payload.forms}}
        default: return state
    }
}

export default forms