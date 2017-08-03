import React from 'react'
/* Redux Forms */
import {FieldArray} from 'redux-form'
import { AppendixButton } from 'app/styles/EplanStyles'
import SaveModal from './Save'

const Appendix = ({handleSubmit,renderFields,appendix}) => {
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>{appendix.name}</h1>
                <FieldArray name={'fields'} component={renderFields}/>
                <AppendixButton type="submit">Save</AppendixButton>  
            </form>
            <br /><br />
        </div>
    )
}

export default Appendix