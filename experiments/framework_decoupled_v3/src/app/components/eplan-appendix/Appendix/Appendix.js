import React from 'react'
/* Redux Forms */
import { FieldArray } from 'redux-form'
import { Button, ButtonPanel } from 'odeum-ui'

import { AppendixForm } from 'app/styles/EplanStyles'

const Appendix = ({ handleSubmit, handleSubmitAndCommit, renderFields, appendix }) => {
	return (
		<AppendixForm onSubmit={handleSubmit}>
			<FieldArray name={'fields'} component={renderFields}/>
			<ButtonPanel justify='left'>
				<Button type="button" onClick={handleSubmit} icon="check_circle" label="Gem ændringer" />
				<Button type="button" onClick={handleSubmitAndCommit} icon="check_circle" label="Gem og godkend ændringer" />
			</ButtonPanel>
		</AppendixForm>
	)
}

export default Appendix