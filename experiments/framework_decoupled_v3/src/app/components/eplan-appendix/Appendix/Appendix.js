import React from 'react'
/* Redux Forms */
import {FieldArray} from 'redux-form'
import { AppendixSaveButton } from 'app/styles/EplanStyles'


const Appendix = ({handleSubmit,renderFields,appendix}) => {
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>{appendix.name}</h1>
                <FieldArray name={'fields'} component={renderFields}/>
                <AppendixSaveButton type="submit">Save</AppendixSaveButton>  
            </form>
            <br /><br />
        </div>
    )
}

export default Appendix