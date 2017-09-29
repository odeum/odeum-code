import React from 'react'
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
		this.handleInputChange = this.handleInputChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleInputChange(event) {
		const target = event.target
		const value = target.type === 'checkbox' ? target.checked : target.value
		const name = target.name

		this.setState({
			[name]: value
		})
	}

	handleSubmit(event) {
		event.preventDefault()
		this.props.onSubmit({ ...this.state })
	  }

	render() {
		return (
			<BackgroundDiv>
				<form>
				<HeaderDiv><Img src={HeaderLogo}/></HeaderDiv>
				<InputDiv>
					<LoginLabel>Username</LoginLabel>
					<Input 
						name="username"
						type="text"
						value={this.state.username}
						onChange={this.handleInputChange}/>
				</InputDiv>
				<InputDiv>
					<LoginLabel>Password</LoginLabel>
					<Input 
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


export default Login