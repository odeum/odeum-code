export function updateTab(comp){
  return (dispatch) => {
        dispatch({type:'LOAD_LABEL',payload:comp})
    }
}