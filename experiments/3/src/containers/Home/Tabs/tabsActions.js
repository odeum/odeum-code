import {push} from 'react-router-redux'

export function changeTab(location, label){
    return (dispatch) => {
        dispatch({type:'CHANGE_TAB',payload:label})
        dispatch(push(location))
    }
}