/*@ Imports */
import * as actions from './drawerActiontypes'
import { push } from 'react-router-redux'

/*@ Actions */
export function changeActive() {
    return (dispatch) => {
        console.log("changeActiveAction")
        dispatch({ type: actions.changeActiveDrItem, payload: 'hehe' })
    }
}
export function changeScene(location) {
    return (dispatch) => {
        console.log('changeScene:' + location)
        //@ NOT USED Logging Purposes
        //dispatch({ type: actions.CHANGE_SCENE, payload: location })
        dispatch(push(location))
    }
}