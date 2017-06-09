import * as actions from './formsActionTypes'

const initialState = {
    forms:[]
}

var _ = require('lodash')

export default function forms(state=initialState,action){
    switch(action.type){
        case actions.GET_FORMS:
        { //console.log(action.payload.forms)
            return {...state,
            forms:action.payload.forms}}
        default: return state
    }
}