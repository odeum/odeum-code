import React from 'react'
/* Redux Forms */
import {FieldArray} from 'redux-form'
import { AppendixButton } from 'app/styles/EplanStyles'
// import SaveModal from './Save'

const Appendix = ({handleSubmit,renderFields,appendix}) => {
    return (
        <div style={{clear: 'both' }}>
            <form onSubmit={handleSubmit}>
                <FieldArray name={'fields'} component={renderFields}/>
                <AppendixButton type="submit">Save</AppendixButton>  
            </form>
            <br /><br />
        </div>
    )
}

export default Appendix