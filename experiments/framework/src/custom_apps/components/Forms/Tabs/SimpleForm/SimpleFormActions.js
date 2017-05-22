const ADD_TAB='ADD_TAB'

export function updateTab(tab)
{

  return (dispatch) => {
        dispatch({type:ADD_TAB,payload:tab})
    }
}