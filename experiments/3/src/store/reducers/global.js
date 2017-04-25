import * as actions from '../actions/action_types'
// import {push} from 'react-router-redux'
import Dashboard from '../../scenes/Dashboard'
import Organisation from '../../scenes/Organisation'
const initialState={
    scenes:[
            {
                name:'Dashboard',
                location:'/scenes/dashboard',
                onPush:''
            },{
                name:'Dashboard 3rd Tab',
                location:'/scenes/dashboard/2',
                onPush:''
            },
            {
                name:'Organisation',
                location:'/scenes/organisation',
                onPush:''
            }], 
    comp:Dashboard,
    tab:0
        }


const global = (state=initialState, action)=>{
    switch(action.type)
    {   case actions.CHANGE_SCENE:
        {
          console.log('changeSceneReducer:'+action.payload)
         // push(action.payload)
          if(action.payload.includes('/scenes/dashboard'))
          return {...state,
          comp:Dashboard}
          else
          return{...state,
          comp:Organisation}
        }
        default:
        return state

    }

}
export default global