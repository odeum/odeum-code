//TODO import actionTypes
// export function changeTab (label){
//     return (dispatch) => {
//         dispatch({type:'CHANGE_TAB',payload:label})
//         // dispatch(push(location))
//     }
// }

export function closeTab(tab){
    return (dispatch) =>{
        dispatch({type:'CLOSE_TAB',payload:tab})
        // dispatch(push('/dashboard/general'))
    }
}