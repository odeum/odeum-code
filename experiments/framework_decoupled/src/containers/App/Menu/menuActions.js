import * as actions from "./menuActionTypes"

export function loadTabs(label){
    return (dispatch) => {
        dispatch({type:actions.LOAD_DEFAULT_TABS,payload:label})
    }
}
