import { ADD_TAB } from './Tabs/tabsActionTypes'
import * as actions from './formsActionTypes.js'
var _ = require('lodash')
export function loadTabs(label) {
    return (dispatch) => {
        dispatch({ type: actions.LOAD_DEFAULT_TABS, payload: label })
    }
}


export function getForms() {
    return (dispatch) => {
        var serverData = require('../../fake_server.json')
        dispatch({ type: actions.GET_FORMS, payload: serverData })
    }
}

export function getForm(id) {
    return (dispatch) => {
        var serverData = require('../../fake_server.json')
        var formData = _.find(serverData.forms, function (form) {
            return form.id === id
        })
        return formData
    }
}
// export function addTab(){
//     return(dispatch)=>{
//         dispatch({type:'ADD_TAB', payload:{label:'Dynamic',location:'/dashboard/dynamic',icon:'generelt', fixed:false}})
//     }
// }
export function updateTab(label) {
    return (dispatch) => {
        dispatch({ type: ADD_TAB, payload: label })
    }
}

export default loadTabs