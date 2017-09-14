import React, { Component } from 'react'
import Login from 'framework/components/Login/Login'
import { getAppendixCfg } from 'app/store/modules/eplan'
import { connect } from 'react-redux'

class LoginContainer extends Component {
	async componentWillUnmount () {
		await this.props.onMount()
	}
    
	render() {
		return (
			<div>
				<Login onSubmit = {this.props.handleLogin}/>
			</div>
		)
	}
}
const mapStateToProps = (state) => ({
})

function mapDispatchToProps(dispatch) {
	return {
		onMount: () => {
			dispatch(getAppendixCfg())
		}
	}
    
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)