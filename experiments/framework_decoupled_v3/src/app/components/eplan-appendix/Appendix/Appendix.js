import React from 'react'
/* Redux Forms */
import { FieldArray } from 'redux-form'
import Button from 'framework/components/Widgets/Button'
import * as iconname from 'framework/assets/icons'

// import SaveModal from './Save'

const Appendix = ({ handleSubmit, renderFields, appendix }) => {
	return (
		<div style={{ clear: 'both' }}>
			<form onSubmit={handleSubmit}>
				<FieldArray name={'fields'} component={renderFields}/>                
				<Button type="submit" icon={iconname.ICON_CHECK_CIRCLE} size={18}>Gem ændringer</Button>
			</form>
			<br /><br />
		</div>
	)
}

export default Appendix