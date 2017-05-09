import {push} from 'react-router-redux'
//@Import actiontypes 
export function changeTab(location, label){
    return (dispatch) => {
       // dispatch({type:'CHANGE_TAB',payload:label})
        dispatch(push(location))
    }
}

export function closeTab(tab){
    return (dispatch) =>{
        dispatch({type:'CLOSE_TAB',payload:tab})
        //@TODO Add a push to the last location somehow?
        dispatch(push('/dashboard/general'))
    }
}