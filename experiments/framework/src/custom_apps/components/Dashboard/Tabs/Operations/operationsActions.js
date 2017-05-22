import {ADD_TAB} from '../tabsActionTypes'
export function updateTab(label)
{
  return (dispatch) => {
        dispatch({type:ADD_TAB,payload:label})
    }
}

export default updateTab