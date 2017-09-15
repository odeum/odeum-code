import React, { Component } from 'react'
import { Div } from 'app/styles/index'
import { connect } from 'react-redux'
// import { replace } from 'react-router-redux'

class index extends Component {
	componentWillMount() {
		this.props.onMount()
	}
	render() {
		return (
			<Div>
				{this.props.children}
			</Div>
		)
	}
}
const mapStateToProps = (state, ownProps) => ({

})
function mapDispatchToProps(dispatch) {
	return {
		onMount: () => {
			// return dispatch(replace('/eplan/list'))
		}
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(index)