//import * as actions from './dashboardActionTypes'
// import {push} from 'react-router-redux'
import {ADD_TAB} from './tabs/tabsActionTypes'
export function changeTab(location, label){
    return (dispatch) => {
        dispatch({type:'CHANGE_TAB',payload:label})
        // dispatch(push(location))
    }
}
export function loadTabs(){
    return (dispatch) => {
        dispatch({type:'LOAD_TABS_DASHBOARD'})
    }
}
export function updateTab(label){
  return (dispatch) => {
        dispatch({type:ADD_TAB,payload:label})
    }
}
