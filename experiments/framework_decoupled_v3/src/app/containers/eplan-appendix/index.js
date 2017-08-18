import React, { Component } from 'react'
import { changeId } from 'framework/store/modules/tabs'
import { connect } from 'react-redux'
const sceneProp = { id: 'eplan' }
// const tabProp = {id:'eplan-list'}

class EplanAppendix extends Component {
	componentWillMount() {
		this.props.onMount()
	}
    
	render() {
     
		return (

			React.cloneElement(this.props.children, sceneProp)

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
export default connect(mapStateToProps, mapDispatchToProps)(EplanAppendix)