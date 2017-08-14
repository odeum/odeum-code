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

//Login
import LoginContainer from 'framework/containers/Login/Login'

//REFACTOR
import { getAppendixCfg } from 'app/store/modules/eplan'

class Home extends Component {
	constructor(props) {
		super(props)
		this.state = {
			loggedIn: true
		}
		this.handleLogin = this.handleLogin.bind(this)
		this.props.onMount()
	}
<<<<<<< HEAD
	handleLogin() {
=======
	handleLogin(){
>>>>>>> b9e26af4a5d935f0d8a078dc29ee9aa6983ff9a0
		this.setState({ loggedIn: true })
	}
	render() {
		return (
            
			<ThemeProvider theme={theme}>
				{this.state.loggedIn ?
					<div>
						<HomeDiv>
							<HeaderContainer />
<<<<<<< HEAD
							<div style={{ display: 'flex', height: 'calc(100vh - 140px)' }}>
								<MenuContainer />
								<WorkspaceContainer>
									<TabsContainer style={{ border: 'solid 1px blue' }} id={this.props.activeScene} />
									{this.props.children}
								</WorkspaceContainer>
							</div>
							<FooterContainer />
						</HomeDiv>
					</div>
					: <LoginContainer handleLogin={this.handleLogin} />}
=======
							<MenuContainer />
							<TabsContainer id={this.props.activeScene} />
							{ this.props.children }
							<FooterContainer />
						</HomeDiv>
					</div>
					: <LoginContainer handleLogin={this.handleLogin}/>}
>>>>>>> b9e26af4a5d935f0d8a078dc29ee9aa6983ff9a0
			</ThemeProvider>
		)
	}
}
Home.propTypes = {
	activeScene: PropTypes.string.isRequired
}

const mapStateToProps = (state, ownProps) => ({
	activeScene: state.tabs.activeScene
})
//REFACTOR
function mapDispatchToProps(dispatch) {
	return {
		onMount: () => {
			dispatch(getAppendixCfg())
		}
	}
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
