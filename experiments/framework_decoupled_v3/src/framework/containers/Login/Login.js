import React, { Component } from 'react'
import Login from 'framework/components/Login/Login'
import { connect } from 'react-redux'

class LoginContainer extends Component {
	async componentWillUnmount () {
	}
    
	render() {
		return (
			<div>
				<Login onSubmit = {this.props.handleLogin} errorLogin={this.props.errorLogin}/>
			</div>
		)
	}
}
const mapStateToProps = (state) => ({
})

function mapDispatchToProps(dispatch) {
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)