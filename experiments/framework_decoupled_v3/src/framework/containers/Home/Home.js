//React
import React, { Component } from 'react'
import PropTypes from 'prop-types'
//Styles
import { HomeDiv, WorkspaceContainer } from '../styles/AppStyles'
import theme from 'framework/assets/theme'
import { ThemeProvider } from 'styled-components'

//Header+Menu
import HeaderContainer from '../Header/Header'
import MenuContainer from '../Menu/Menu'

import TabsContainer from '../Tabs/TabsContainer'
import FooterContainer from '../Footer/Footer'

//Redux+Router
// import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
// import { push } from 'react-router-redux'

//Login
import LoginContainer from 'framework/containers/Login/Login'

//REFACTOR
import { getAppendixCfg, doMyLogin, doCookieLogin } from 'app/store/modules/eplan'

class Home extends Component {
	constructor(props) {
		super(props)
		this.state = {
			loggedIn: false
		}
		this.handleLogin = this.handleLogin.bind(this)

	}
	componentWillMount = () => {
		this.props.onMount()
		if (this.props.location.pathname === '/')
			this.props.Redirect()
	}

	async componentWillMount() {
		await this.props.auth()
	}

	async handleLogin(data) {
		await this.props.login(data)
	}
	render() {
		return (

			<ThemeProvider theme={theme}>
				{this.props.loggedIn ?
					<div>

						<HomeDiv>
							<HeaderContainer />
							<div style={{ display: 'flex', flex: 1, height: '100%', overflow: 'auto' }}>
								<MenuContainer />
								<WorkspaceContainer>
									<TabsContainer style={{ border: 'solid 1px blue' }} instanceID={this.props.activeScene} />
									{this.props.children}
								</WorkspaceContainer>
							</div>
							<FooterContainer />
						</HomeDiv>
					</div>
					: <LoginContainer handleLogin={this.handleLogin} />}
			</ThemeProvider>
		)
	}
}
Home.propTypes = {
	activeScene: PropTypes.string.isRequired
}

const mapStateToProps = (state, ownProps) => ({
	activeScene: state.tabReducer.activeScene,
	authObj: state.eplan.authObj,
	loggedIn: (state.eplan.authObj) ? state.eplan.authObj.isLoggedIn : false
})

function mapDispatchToProps(dispatch) {
	return {
		onMount: () => {
			dispatch(getAppendixCfg())
			// dispatch(replace('/eplan/list'))
		},
		login: async (data) => {
			dispatch(await doMyLogin(data))
		},
		auth: async () => {
			dispatch(await doCookieLogin())
			
		}
	}

}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
