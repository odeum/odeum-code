// import * as actions from '../actions/action_types'
// import {push} from 'react-router-redux'
import Dashboard from '../../scenes/Dashboard'
// import Organisation from '../../scenes/Organisation'
const initialState={
    scenes:[
            {
                id:0,
                name:'Dashboard',
                location:'/dashboard',
                
            },{
                id:1,
                name:'Opgaver',
                location:'/tasks',
                
            },
            {
                id:2,
                name:'Registreringer',
                location:'/registreringer',
                
            },
            {
                id:3,
                name:'Organisation',
                location:'/organisation',
                
            },
            {
                id:4,
                name:'Indstillinger',
                location:'/settings',
                
            }], 
    comp:Dashboard,
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