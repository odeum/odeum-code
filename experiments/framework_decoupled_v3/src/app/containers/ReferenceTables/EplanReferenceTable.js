import React, { Component } from 'react'
import { changeInstance } from 'framework/store/modules/tabs'
import { connect } from 'react-redux'
import { getReferenceTableListAsync } from 'app/store/modules/eplan'

const sceneProp = { id: 'ref_table' }


class EplanReferenceTable extends Component {
	async componentWillMount() {
		this.props.onMount()
		 await this.props.getList()
	}
    
	render() {
		return (
			<div style={{ height: '100%' }}>
				{React.cloneElement(this.props.children, sceneProp)}
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
		getList: () => {
			dispatch(getReferenceTableListAsync())
		}
	}
    
}
export default connect(mapStateToProps, mapDispatchToProps)(EplanReferenceTable)