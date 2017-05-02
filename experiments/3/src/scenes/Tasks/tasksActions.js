
//TODO Import Constants for Actions => ActionTypes

export function loadTabs(){
    return(dispatch)=>{
        dispatch({type:'LOAD_TABS_TASKS'})
    }
}
export function addTab(){
    return(dispatch)=>{
        dispatch({type:'ADD_TAB', payload:{label:'Users',location:'/tasks/users',icon:'generelt'}})
    }
}
export default loadTabs