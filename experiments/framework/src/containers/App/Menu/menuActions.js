import * as actions from './menuActionTypes'
import { push } from 'react-router-redux'


export function changeActive() {
    return (dispatch) => {
        console.log("changeActiveAction")
        dispatch({ type: actions.changeActiveDrItem, payload: 'This is active func' })
    }
}
export function changeScene(location) {
    return (dispatch) => {
        dispatch(push(location))
    }
}