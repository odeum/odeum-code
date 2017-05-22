
//TODO Import Constants for Actions => ActionTypes
import * as actions from './formsActionTypes.js'
export function loadTabs(){
    return(dispatch)=>{
        dispatch({type:actions.LOAD_DEFAULT_TABS,payload:"Forms"})
    }
}
export function addTab(){
    return(dispatch)=>{
        dispatch({type:'ADD_TAB', payload:{label:'Dynamic',location:'/dashboard/dynamic',icon:'generelt', fixed:false}})
    }
}
export function updateTab(label)
{
  return (dispatch) => {
        dispatch({type:'LOAD_LABEL',payload:label})
    }
}

export default loadTabs