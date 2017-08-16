import React from 'react'
/* Redux Forms */
import { FieldArray } from 'redux-form'
import Button from 'framework/components/Widgets/Button'
import * as iconname from 'framework/assets/icons'

// import SaveModal from './Save'

const Appendix = ({ handleSubmit, handleSubmitAndCommit, renderFields, appendix }) => {
	return (
		<div style={{ clear: 'both' }}>
			<form onSubmit={handleSubmit}>
				<FieldArray name={'fields'} component={renderFields}/>                
				<Button type="button" onClick={handleSubmit} icon={iconname.ICON_CHECK_CIRCLE} size={18}>Gem ændringer</Button>
				<Button type="button" onClick={handleSubmitAndCommit} icon={iconname.ICON_CHECK_CIRCLE} size={18}>Gem og godkend ændringer</Button>
			</form>
			<br /><br />
		</div>
	)
}

export default Appendix