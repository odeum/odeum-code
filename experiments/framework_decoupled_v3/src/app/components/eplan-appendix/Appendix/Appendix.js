import React from 'react'
/* Redux Forms */
import { FieldArray } from 'redux-form'
import { Button, ButtonPanel } from 'odeum-ui'

import * as iconname from 'framework/assets/icons'
import { AppendixForm } from 'app/styles/EplanStyles'

const Appendix = ({ handleSubmit, handleSubmitAndCommit, renderFields, appendix }) => {
	return (
		<AppendixForm onSubmit={handleSubmit}>
			<FieldArray name={'fields'} component={renderFields}/>
			<ButtonPanel>
				<Button type="button" onClick={handleSubmit} icon={iconname.ICON_CHECK_CIRCLE} size={18}>Gem ændringer</Button>
				<Button type="button" onClick={handleSubmitAndCommit} icon={iconname.ICON_CHECK_CIRCLE} size={18}>Gem og godkend ændringer</Button>
			</ButtonPanel>
		</AppendixForm>
	)
}

export default Appendix