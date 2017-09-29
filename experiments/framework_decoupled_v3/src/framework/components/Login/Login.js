import React from 'react'
import PropTypes from 'prop-types'
import { Img, LoginLabel, BackgroundDiv, HeaderDiv, Input, InputDiv, LoginButton } from 'framework/components/styles/LoginStyles'
import HeaderLogo from '../../assets/eplan_logo.png'


// const Login__ = ({ onSubmit }) => {
// 	return (
// 		<BackgroundDiv>
// 			<HeaderDiv><Img src={HeaderLogo}/></HeaderDiv>
// 			<InputDiv>
// 				<LoginLabel>Username</LoginLabel>
// 				<Input id="username"/>
// 			</InputDiv>
// 			<InputDiv>
// 				<LoginLabel>Password</LoginLabel>
// 				<Input type='password'/>
// 			</InputDiv>
// 			<LoginButton onClick={(e) => {e.preventDefault();onSubmit()}}>Login</LoginButton>
// 		</BackgroundDiv>
// 	)
// }

class Login extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			username: '',
			password: ''
		}
	}

	componentDidMount = () => {
		this.usernameInput.focus()
	}

	handleInputChange = (event) => {
		const target = event.target
		const value = target.type === 'checkbox' ? target.checked : target.value
		const name = target.name

		this.setState({
			[name]: value
		})
	}

	handleSubmit = (event) => {
		event.preventDefault()
		let doSubmit = true
		if (this.state.username === '') {
			this.usernameInput.focus()
			doSubmit = false
		}
		if (doSubmit && this.state.password === '') {
			this.passwordInput.focus()
			doSubmit = false
		}
		if (doSubmit) {
			this.props.onSubmit({ ...this.state })
		}
	  }

	render() {
		return (
			<BackgroundDiv>
				<form>
				<HeaderDiv><Img src={HeaderLogo}/></HeaderDiv>
				{this.props.errorLogin ? <div> {this.props.errorLogin}</div> : null}
				<InputDiv>
					<LoginLabel>Username</LoginLabel>
					<Input
						innerRef={(input) => { this.usernameInput = input }}
						name="username"
						type="text"
						value={this.state.username}
						onChange={this.handleInputChange}/>
				</InputDiv>
				<InputDiv>
					<LoginLabel>Password</LoginLabel>
					<Input
						innerRef={(input) => { this.passwordInput = input }} 
						name="password"
						type="password"
						value={this.state.password}
						onChange={this.handleInputChange} />
				</InputDiv>
				<LoginButton onClick={this.handleSubmit}>Login</LoginButton>
				</form>
			</BackgroundDiv>
		)
	}
}

Login.PropTypes = {
	handleLogin: PropTypes.func.isRequired
}

export default Login