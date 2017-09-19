/* React */
import React, { Component } from 'react'
/* Redux */
import { connect } from 'react-redux'

import { getReferenceTableListAsync, getReferenceTableEntryAsync } from 'app/store/modules/eplan'
// import { getReferenceTableLabel } from 'app/store/selectors/eplan'

/* Framework */
// import { tabChange } from 'framework/store/modules/tabs'

/* Styling */

/* Components */

/* -------- END IMPORT ---------- */
class ReferenceTableContainer extends Component {
	tab = {
		id: this.props.referenceTableId,
		label: this.props.referenceTableId,
		location: '/reference/list/' + this.props.referenceTableId + '/edit',
		icon: 'mode_edit',
		fixed: false,
		isLoading: false,
		closeLink: '/reference/list'
	}
	constructor(props) {
		super(props)
		this.state = {}
	}
	async componentWillMount() {
		if (!this.props.referencetables) {

			await this.props.getList()
		}

		this.props.onMount(this.props.id, this.tab)
	}

	render() {
		let key = this.props.location.pathname
		return (
			<div>
				{React.cloneElement(this.props.children, { key: key, referenceTableId: this.props.referenceTableId, id: this.props.id })}
			</div>
		)
	}
}

const mapStateToProps = (state, ownProps) => ({
	referencetables: state.eplan.referenceTables,
	referencetablesIsLoading: state.eplan.referencetablesIsLoading,
	referenceTableId: ownProps.params.id,
	conf: state.eplan.conf
})

function mapDispatchToProps(dispatch) {
	return {
		onMount: (id, tab) => {
		//	dispatch(addTab(id, tab))
		//  dispatch(tabChange(id, tab.label))
		},
		getReferenceTable: (id) => {
			dispatch(getReferenceTableEntryAsync(id))
		},
		getList: () => {
			dispatch(getReferenceTableListAsync())
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ReferenceTableContainer)