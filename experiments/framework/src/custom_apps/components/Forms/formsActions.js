import {ADD_TAB} from './Tabs/tabsActionTypes'
import * as actions from './formsActionTypes.js'

export function loadTabs(label){
    return(dispatch)=>{
        dispatch({type:actions.LOAD_DEFAULT_TABS,payload:label})
    }
}

// export function addTab(){
//     return(dispatch)=>{
//         dispatch({type:'ADD_TAB', payload:{label:'Dynamic',location:'/dashboard/dynamic',icon:'generelt', fixed:false}})
//     }
// }
export function updateTab(label)
{
  return (dispatch) => {
        dispatch({type:ADD_TAB,payload:label})
    }
}

export default loadTabs