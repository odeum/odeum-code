
import React, { Component } from 'react'
import PropTypes from 'prop-types'

//import * as styled from './styles'
import {HomeDiv} from '../styles/AppStyles'

//Header+Menu
import HeaderContainer from '../Header/Header'
import MenuContainer from '../Menu/Menu'

import TabsWrapper from '../Tabs/TabsWrapper'
import FooterContainer from '../Footer/Footer'

import theme from '../../../assets/theme'
import {ThemeProvider} from 'styled-components'

//Redux+Router
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as GlobalActions from '../../../store/actions/global'


class Home extends Component {
    
    
    render() {
        return (
            <ThemeProvider theme={theme}>
            <div>
            <HomeDiv>
                <HeaderContainer />
                <MenuContainer />
                
                <TabsWrapper children={this.props.tabChildren}/>
               
                {this.props.children}

               <FooterContainer />
            </HomeDiv>
           
            </div>
            </ThemeProvider>
        )
    }
}
Home.propTypes = {
     tabChildren: PropTypes.array
}

const mapStateToProps = (state,ownProps) =>({
    tabChildren: state.global.tabChildren
})
function mapDispatchToProps(dispatch){
    return bindActionCreators(GlobalActions,dispatch)
}
 export default connect(mapStateToProps,mapDispatchToProps)(Home)

//module.export=Home