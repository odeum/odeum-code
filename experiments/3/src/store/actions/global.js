import {push} from 'react-router-redux'
import * as actions from './action_types'

export function onPush(location){
    return (dispatch)=>{console.log('push page to: '+location)
    dispatch(push(location))}
}

export function changeTab(index){
    return (dispatch)=>
    {
        console.log('changeTab:'+index)
        dispatch({type:actions.CHANGE_TAB, payload:index})
        dispatch(push('/scenes/dashboard/'+index))
    }
}
export function changeScene(location){
    return(dispatch) =>
    {
        console.log('changeScene:'+location)
        //Logging Purposes
        dispatch({type:actions.CHANGE_SCENE, payload:location})

        dispatch(push(location))
    }
}

