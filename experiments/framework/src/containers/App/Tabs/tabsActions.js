import {CLOSE_TAB} from './tabsActionTypes'

export function closeTab(tab){
    return (dispatch) =>{
        dispatch({type:CLOSE_TAB,payload:tab})
    }
}