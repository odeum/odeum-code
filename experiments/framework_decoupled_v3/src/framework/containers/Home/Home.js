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
import { push } from 'react-router-redux'

//Login
import LoginContainer from 'framework/containers/Login/Login'

//REFACTOR
import { getAppendixCfg, doMyLogin, doCookieLogin } from 'app/store/modules/eplan'

class Home extends Component {

	async componentWillMount() {
		this.props.onMount()
		await this.props.auth()
		//Redirect only if logged in
		if (this.props.location.pathname === '/' && this.props.loggedIn === true) {
			this.props.Redirect()
		}
	}

	componentWillUpdate(nextProps, nextState) {
		//Header Redirect
		if (nextProps.location.pathname === '/' && nextProps.loggedIn === true) {
			this.props.Redirect()
		}

	}

	handleLogin = async (data) => {
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
					: this.props.loggedIn === false ? <LoginContainer handleLogin={this.handleLogin} errorLogin={this.props.errorLogin} /> : null}
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
	loggedIn: (state.eplan.authObj) ? (state.eplan.authObj.isLoggedIn === 1) ? true : false : false,
	errorLogin: state.eplan.loginErrorMessage
	//loggedIn: true
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
		},
		Redirect: () => {
			dispatch(push('/eplan/list'))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
