import React, { Component } from 'react'
/* Redux */
import { connect } from 'react-redux'
import { removeOpenApdx } from 'app/store/modules/eplan'
// import { Field, reduxForm } from 'redux-form'
// import { getAppendixSel, getAppendix } from 'app/store/selectors/eplan'

/* Framework */
import { tabChange } from 'framework/store/modules/tabs'

/* Styling */
import { SecondaryContainer } from 'app/styles'

/* Components */

class EditReferenceTable extends Component {
	render() {
		return (
			<SecondaryContainer>
				Hej edit table!!!
			</SecondaryContainer>
		)
	}
}

const mapStateToProps = (state, ownProps) => ({
	param: ownProps.param,
	conf: state.eplan.conf
})

function mapDispatchToProps(dispatch) {
	return {
		onMount: (id, param) => {
			dispatch(tabChange(id, param))
		},
		unMount: (param) => {
			//TODO Remove Open Appendix when *CLOSED* not when unmounted
			dispatch(removeOpenApdx(param))
		},
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(EditReferenceTable)