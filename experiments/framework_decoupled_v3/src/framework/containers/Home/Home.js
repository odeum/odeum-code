//React
import React, { Component } from 'react'
import PropTypes from 'prop-types'
//Styles
import { HomeDiv } from '../styles/AppStyles'
import theme from 'framework/assets/theme'
import { ThemeProvider } from 'styled-components'

//Header+Menu
import HeaderContainer from '../Header/Header'
import MenuContainer from '../Menu/Menu'

import TabsContainer from '../Tabs/TabsContainer'
import FooterContainer from '../Footer/Footer'

//Redux+Router
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

//Login
import LoginContainer from 'framework/containers/Login/Login'



class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loggedIn: false
        }
        this.handleLogin = this.handleLogin.bind(this)
    }
    handleLogin(){
        this.setState({loggedIn:true})
    }
    render() {
        return (
            
            <ThemeProvider theme={ theme }>
            {this.state.loggedIn?
              <div>
                <HomeDiv>
                  <HeaderContainer />
                  <MenuContainer />
                  <TabsContainer id={this.props.activeScene} />
                  { this.props.children }
                  <FooterContainer />
                </HomeDiv>
              </div>
               : <LoginContainer handleLogin={this.handleLogin}/>}
            </ThemeProvider>
        )
    }
}
Home.propTypes = {
    tabChildren: PropTypes.array,
    activeTab: PropTypes.string,
}

const mapStateToProps = (state, ownProps) => ({
    tabChildren: state.tabs.tabChildren,
    activeScene: state.tabs.activeScene
})

function mapDispatchToProps(dispatch) {
    return bindActionCreators({}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
