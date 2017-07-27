import React from 'react'
/* Redux Forms */
import {FieldArray} from 'redux-form'

const Appendix = ({handleSubmit,renderFields,appendix}) => {
    console.log(appendix)
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>{appendix.name}</h1>
                <FieldArray name={'fields'} component={renderFields}/>
                <button type="submit">Save</button>  
            </form>
            </div>
    )
}

export default Appendix