import {ADD_TAB} from '../tabsActionTypes'
export function updateTab(comp){
  return (dispatch) => {
        dispatch({type:ADD_TAB,payload:comp})
    }
}