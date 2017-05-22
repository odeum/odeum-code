//TODO import actionTypes

export function closeTab(tab){
    return (dispatch) =>{
        dispatch({type:'CLOSE_TAB',payload:tab})
        // dispatch(push('/dashboard/general'))
    }
}