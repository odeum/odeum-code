var _ = require('lodash')
export const Forms = (state)=> state.forms.forms
export const getForm = (id,state,props)=>{
    var form = _.find(state.forms.forms, function(form){
        return form.id ===id
    })
    console.log('Form found ',form)
    return form
}
