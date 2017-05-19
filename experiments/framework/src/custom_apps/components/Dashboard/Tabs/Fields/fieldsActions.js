export function updateTab(label)
{
  return (dispatch) => {
        dispatch({type:'LOAD_LABEL',payload:label})
    }
}

export default updateTab