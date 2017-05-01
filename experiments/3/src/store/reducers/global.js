// import * as actions from '../actions/action_types'
// import {push} from 'react-router-redux'
//@TODO Remove Global state and individualise everything else
// import Organisation from '../../scenes/Organisation'
import * as tabs from './tabConstants'
let nextTabId = 0;
const initialState={
    scenes:[
            {
                id:nextTabId++,
                name:'Dashboard',
                location:'/dashboard/general',
                
            },{
                id:nextTabId++,
                name:'Opgaver',
                location:'/tasks',
                
            },
            {
                id:nextTabId++,
                name:'Registreringer',
                location:'/registreringer',
                
            },
            {
                id:nextTabId++,
                name:'Organisation',
                location:'/organisation',
                
            },
            {
                id:nextTabId++,
                name:'Indstillinger',
                location:'/settings',
                
            }],
            tabChildren:[
                {
                 label:'General',
                 location:'/dashboard/general',
                 icon:'generelt'
                },
                {
                    label:'text',
                    location:'/dashboard/text',
                    icon:'felter'
                }],
    activeLabel:''
        }

const global = (state=initialState, action)=>{
    switch(action.type)
    {  
        case 'LOAD_TABS_DASHBOARD':
       
        return {...state,
            activeLabel:tabs.defaultTabs[0].label,
            tabChildren:tabs.defaultTabs}
         
        case 'LOAD_TABS_TASKS':
        return {...state,
        activeLabel:tabs.tasksTabs[0].label,
        tabChildren: tabs.tasksTabs}
        case 'CHANGE_TAB':
        { console.log(action.payload)
            // //@Move tabs reducer inside global as we do not need a separate reducer for tabs

        return {...state,
        activeLabel:action.payload}}
        default:
        return state

    }

}
export default global