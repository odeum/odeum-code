const ADD_TAB = "ADD_TAB"
export function updateTab(label)
{
  return (dispatch) => {
        dispatch({type:ADD_TAB,payload:label})
    }
}
