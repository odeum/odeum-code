// import * as actions from '../actions/action_types'
// import {push} from 'react-router-redux'
//@TODO Remove Global state and individualise everything else
// import Organisation from '../../scenes/Organisation'
const initialState={
    scenes:[
            {
                id:0,
                name:'Dashboard',
                location:'/dashboard',
                icon: 'dashboard'
            },{
                id:1,
                name:'Opgaver',
                location:'/tasks',
                icon: 'tasks'
            },
            {
                id:2,
                name:'Registreringer',
                location:'/registreringer',
                icon: 'registrations'
            },
            {
                id:3,
                name:'Organisation',
                location:'/organisation',
                icon: 'organisation'
            },
            {
                id:4,
                name:'Indstillinger',
                location:'/settings',
                icon: 'settings'
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