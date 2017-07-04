import getFormsFromAPI from '../data/forms'

const GET_FORMS = '@@FORMS/GET_FORMS_FROM_SERVER'
var _ = require('lodash')
const initialState = {
    forms:[]
}
export function getForms() {
    return (dispatch) => {
        var serverData = getFormsFromAPI()
        dispatch({ type: GET_FORMS, payload: serverData })
    }
}
//Replace with a selector
export function getForm(id) {
    return (dispatch) => {
        var serverData = require('../fake_server.json')
        var formData = _.find(serverData.forms, function (form) {
            return form.id === id
        })
        return formData
    }
}
export default function forms(state=initialState, action){
    switch(action.type){
        case GET_FORMS:
        {
            return {
                ...state,
                forms:action.payload.forms
            }
        }
        default: return state
    }
}