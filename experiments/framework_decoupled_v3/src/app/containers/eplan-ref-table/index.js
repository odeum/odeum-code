import React, { Component } from 'react'
import { changeId } from 'framework/store/modules/tabs'
import { connect } from 'react-redux'
const sceneProp = { id: 'ref_table' }
// const tabProp = {id:'eplan-list'}

class EplanReferenceTable extends Component {
	componentWillMount() {
		this.props.onMount()
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
})

function mapDispatchToProps(dispatch) {
	return {
		onMount: () => {
			dispatch(changeId(sceneProp.id))
		}
	}
    
}
export default connect(mapStateToProps, mapDispatchToProps)(EplanReferenceTable)