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



class Home extends Component {
    render() {
        return (
            <ThemeProvider theme={ theme }>
              <div>
                <HomeDiv>
                  <HeaderContainer />
                  <MenuContainer />
                  <TabsContainer id={this.props.activeScene} />
                  { this.props.children }
                  <FooterContainer />
                </HomeDiv>
              </div>
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
