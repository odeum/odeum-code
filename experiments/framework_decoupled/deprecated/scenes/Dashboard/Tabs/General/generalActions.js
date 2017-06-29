export function updateTab(label)
{
  return (dispatch) => {
        dispatch({type:'LOAD_TABS_DASHBOARD',payload:label})
    }
}

export default updateTab