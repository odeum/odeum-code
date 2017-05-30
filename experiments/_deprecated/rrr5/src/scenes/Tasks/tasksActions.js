
//TODO Import Constants for Actions => ActionTypes

export function loadTabs(){
    return(dispatch)=>{
        dispatch({type:'LOAD_TABS_TASKS'})
    }
}
export function addTab(tab){
    return(dispatch)=>{
        dispatch({type:'ADD_TAB', payload:tab})
    }
}
export default loadTabs