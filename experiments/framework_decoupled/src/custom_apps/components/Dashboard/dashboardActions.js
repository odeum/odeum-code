import * as actions from './dashboardActionTypes'
// import {push} from 'react-router-redux'

export function loadTabs(label){
    return (dispatch) => {
        dispatch({type:actions.LOAD_DEFAULT_TABS,payload:label})
    }
}

export function DEMO(){
    return (dispatch) =>{
        dispatch({type:actions.DEMO})
    }
}