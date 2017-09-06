/* React */
import React, { Component } from 'react'
/* Redux */
import { connect } from 'react-redux'
// import { getAppendixSel, getAppendix } from 'app/store/selectors/eplan'

/* Framework */
import { addTab, tabChange } from 'framework/store/modules/tabs'
/* Styling */

/* Components */

/* -------- END IMPORT ---------- */
class FrameContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}
	componentWillMount() {
		 this.props.onMount(
			this.props.appendixId,
			{
				id: this.props.frameId,
				label: this.props.frameId,
				icon: 'mode_edit',
				location: '/eplan/list/' + this.props.appendixId + '/frames/' + this.props.frameId + '/edit',
				fixed: false,
				closeLink: '/eplan/list/' + this.props.appendixId + '/frames'
			},
			this.props.frameId
		)
	}

	render() {
		let key = this.props.location.pathname
		return (
			<div>
				{React.cloneElement(this.props.children, { key: key, appendixId: this.props.appendixId, frameId: this.props.frameId, param: this.props.param })}
			</div>
		)
	}
}

const mapStateToProps = (state, ownProps) => ({
	appendixId: ownProps.params.id,
	frameId: ownProps.params.frameid,
	// appendix: getAppendix(state, ownProps.params.id, ownProps) || null,
	// initialValues: {
	//   fields: getAppendixSel(state, ownProps.params.id, ownProps)
	// } || null,
	conf: state.eplan.conf
})


function mapDispatchToProps(dispatch) {
	return {
		onMount: (id, tab) => {
			dispatch(addTab(id, tab))
			dispatch(tabChange(id, tab.label))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(FrameContainer)