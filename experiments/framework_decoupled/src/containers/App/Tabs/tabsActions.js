import { CLOSE_TAB, ADD_TAB } from './tabsActionTypes'
import { push } from 'react-router-redux'

export function closeTab(tab) {
    return (dispatch) => {
        dispatch({type:CLOSE_TAB, payload:tab})
        dispatch(push('/forms/list'))
    }
}

export function updateTab(tab){
    return (dispatch) => {
        dispatch({type:ADD_TAB, payload:tab})
    }
}

export function setActive(tab){
    return (dispatch) =>{
        dispatch({type:'SET_ACTIVE',payload:tab})
    }
}