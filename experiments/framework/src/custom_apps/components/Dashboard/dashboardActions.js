import * as actions from './dashboardActionTypes'
// import {push} from 'react-router-redux'

export function loadTabs(){
    return (dispatch) => {
        dispatch({type:actions.LOAD_DASHBOARD})
    }
}

export function DEMO(){
    return (dispatch) =>{
        dispatch({type:actions.DEMO})
    }
}