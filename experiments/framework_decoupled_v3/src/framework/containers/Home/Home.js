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
// import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

//Login
import LoginContainer from 'framework/containers/Login/Login'

//REFACTOR
import {getAppendixCfg} from 'app/store/modules/eplan'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loggedIn: true
        }
        this.handleLogin = this.handleLogin.bind(this)
        //REFACTOR 
        this.props.onMount()
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
    activeScene: PropTypes.string.isRequired
}

const mapStateToProps = (state, ownProps) => ({
    activeScene: state.tabs.activeScene
})
//REFACTOR
function mapDispatchToProps(dispatch) {
    return{
        onMount: ()=>{
            dispatch(getAppendixCfg())
        }
    }
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
