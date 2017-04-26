import * as actions from './drawerActiontypes'
import Dashboard from '../../../scenes/Dashboard'
import Organisation from '../../../scenes/Organisation'
const initialState={
    activeScene:0,
    comp:Dashboard
}
export const drawer = (state=initialState,action)=>{
   // console.log(action)
    switch(action.type){
        case actions.changeActiveDrItem:
        {
            console.log(action.payload)
            return state;
        }
        //TODO Refactor Change_Scene to Experiment NestedRoutes
        case actions.CHANGE_SCENE:
        {
          console.log('changeSceneReducer:'+action.payload)
         // push(action.payload)
          if(action.payload.includes('/scenes/dashboard'))
          return {...state,
          comp:Dashboard}
          else
          return{...state,comp:Organisation}
          
        }
        default:
        return state;
    }
}

export default drawer