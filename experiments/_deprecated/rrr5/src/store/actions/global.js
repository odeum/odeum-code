import {push} from 'react-router-redux'

export function onPush(location){
    return (dispatch)=>{
    dispatch(push(location))}
}


