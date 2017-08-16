import React, { Component } from 'react'
/* Redux */
import { connect } from 'react-redux'

/* Framework */
import { tabChange } from 'framework/store/modules/tabs'


class EditFrame extends Component {
	render() {
		return (
			<div>EditFrame: {this.props.frameId}</div>
		)
	}
}

const mapStateToProps = (state, ownProps) => ({
	param: ownProps.param,
	// appendix: getAppendix(state, ownProps.param, ownProps) || null,
	// initialValues: {
	// fields: getAppendixSel(state, ownProps.param, ownProps)
	// } || null,
	conf: state.eplan.conf
})

function mapDispatchToProps(dispatch) {
	return {
		onMount: (id, param) => {
			dispatch(tabChange(id, param))
		},
		// getAppendix: (param) => {
		// 	dispatch(getAppendixAsync(param))
		// },
		// updateApd: (appendix, id) => {
		// 	dispatch(updateAppendix(appendix, id))
		// },
		unMount: (param) => {
			//TODO Remove Open Appendix when *CLOSED* not when unmounted
			console.log(param)
			// dispatch(removeOpenApdx(param))
		},
		// publishToPlanSystem: async (id) => {
		// 	return dispatch(await exportAppendixToPlansystemAsync(id))
		// }
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(EditFrame)