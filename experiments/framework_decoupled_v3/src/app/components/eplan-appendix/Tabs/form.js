import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'

let AppendixForm = (props) => {
    const {appendix} = props
    return (
      <form>
            <div>
            <h1>{appendix.name}</h1>
            {appendix.fields.map((field,index)=>(
                <div key={index} style={{display:'flex'}}>
                    <div style={{width:'150px'}}>
                        <label style={{"padding-right":"5px;"}}>{field.name}</label>
                        </div>
                        <Field name={field.name} component='input' type='text'/>
                        <br/>
                    </div>))}
            </div>
      </form>
    )
}
AppendixForm = reduxForm({form:'openAppendix',enableReinitialize:true})(AppendixForm)
AppendixForm = connect(
    (state,props)=>({
        appendix: props.appendix
    })
)(AppendixForm)
export default AppendixForm