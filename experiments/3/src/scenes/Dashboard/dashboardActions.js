import * as actions from './dashboardActionTypes'
import {push} from 'react-router-redux'
export function openTab(label, icon) {
    return (dispatch) => {
        //@ Payload needs to be pushed to the tabs list
        dispatch({ type: actions.OPEN_TAB, payload: { label, icon } })
    }
}

export function closeTab(id) {
    return (dispatch) => {
        //@ Payload ID to purge the tab and remove from the array of tabs
        dispatch({ type: actions.CLOSE_TAB, payload: { id } })
    }
}
export function changeTab(index){
    return (dispatch)=>
    {
        console.log('changeNewActionTab:'+index)
        dispatch({type:actions.CHANGE_TAB, payload:index})
        if(index===0)
        {dispatch(push('/dashboard/test'/*+index*/))}
        else
        {dispatch(push('/dashboard/'+index))}
    }
}
