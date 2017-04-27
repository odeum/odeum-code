// import * as actions from '../actions/action_types'
// import {push} from 'react-router-redux'
//@TODO Remove Global state and individualise everything else
// import Organisation from '../../scenes/Organisation'
let nextTabId = 0;
const initialState={
    scenes:[
            {
                id:nextTabId++,
                name:'Dashboard',
                location:'/dashboard',
                
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
    tab:0
        }


const global = (state=initialState, action)=>{
    switch(action.type)
    {  
        default:
        return state

    }

}
export default global