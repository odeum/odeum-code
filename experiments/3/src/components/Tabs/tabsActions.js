import {push} from 'react-router-redux'
import * as actions from './tabsActiontypes'

export function changeTab(index){
    return (dispatch)=>
    {
        console.log('changeNewActionTab:'+index)
        dispatch({type:actions.CHANGE_TAB, payload:index})
        dispatch(push('/dashboard/'+index))
    }
}

export default changeTab