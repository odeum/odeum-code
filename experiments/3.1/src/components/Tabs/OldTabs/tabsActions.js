import {push} from 'react-router-redux'
import * as actions from './tabsActiontypes'

export function changeTab(index){
    return (dispatch)=>
    {
        console.log('changeNewActionTab:'+index)
        dispatch({type:actions.CHANGE_TAB, payload:index})
        if(index===0)
        {dispatch(push('/dashboard/test'/*+index*/))}
        else
        {dispatch(push('/dashboard/'+index))}
    }
}

export default changeTab