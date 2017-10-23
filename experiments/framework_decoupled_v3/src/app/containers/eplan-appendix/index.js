import React, { Component } from 'react'
import { changeInstance } from 'framework/store/modules/tabs'
import { connect } from 'react-redux'

const sceneProp = { id: 'eplan' }

class EplanAppendix extends Component {
	async componentWillMount() {
		this.props.onMount()
	}

	render() {

		return (
			<div>
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
			dispatch(changeInstance(sceneProp.id))
		}
	}

}
export default connect(mapStateToProps, mapDispatchToProps)(EplanAppendix)