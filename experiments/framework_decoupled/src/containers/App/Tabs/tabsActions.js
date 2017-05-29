import {CLOSE_TAB} from './tabsActionTypes'
import { push } from 'react-router-redux'
export function closeTab(tab){
    return (dispatch) =>{
        dispatch({type:CLOSE_TAB,payload:tab})
        dispatch(push('/'))
    }
}