import {push} from 'react-router-redux'

export function onPush(location){
    return (dispatch)=>{console.log('push page to: '+location)
    dispatch(push(location))}
}


