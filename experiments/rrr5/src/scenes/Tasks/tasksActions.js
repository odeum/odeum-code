
//TODO Import Constants for Actions => ActionTypes

export function loadTabs(){
    return(dispatch)=>{
        dispatch({type:'LOAD_TABS_DASHBOARD',payload:{label:'Tasks',location:'/dashboard/tasks',icon:'tasks'}})
    }
}
export function addTab(){
    return(dispatch)=>{
        dispatch({type:'ADD_TAB', payload:{label:'Dynamic',location:'/dashboard/dynamic',icon:'generelt'}})
    }
}
export default loadTabs