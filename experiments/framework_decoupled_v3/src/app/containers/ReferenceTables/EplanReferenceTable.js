import React, { Component } from 'react'
import { changeInstance } from 'framework/store/modules/tabs'
import { connect } from 'react-redux'
import { getReferenceTableListAsync } from 'app/store/modules/eplan'
import { push } from 'react-router-redux'

const sceneProp = { id: 'ref_table' }


class EplanReferenceTable extends Component {
	async componentWillMount() {
		this.props.onMount()
		await this.props.getList()
	}
	componentDidMount = () => window.location.pathname === '/reference' ? this.props.onIncompletePath() : null

	render() {
		return (
			<div>
				{this.props.children !== null ? React.cloneElement(this.props.children, sceneProp) : null}
			</div>
		)
	}
}
const mapStateToProps = (state) => ({
	/* referencetables: state.eplan.referencetables,
	referencetablesIsLoading: state.eplan.referencetablesIsLoading */
})

function mapDispatchToProps(dispatch) {
	return {
		onMount: () => {
			dispatch(changeInstance(sceneProp.id))
		},
		getList: async () => {
			await dispatch(getReferenceTableListAsync())
		},
		onIncompletePath: () => {
			dispatch(push('/reference/list'))
		}
	}

}
export default connect(mapStateToProps, mapDispatchToProps)(EplanReferenceTable)