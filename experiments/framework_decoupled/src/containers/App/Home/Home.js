
import React, { Component } from 'react'
import PropTypes from 'prop-types'

//import * as styled from './styles'
import {HomeDiv} from '../styles/AppStyles'

//Header+Menu
import HeaderContainer from '../Header/Header'
import MenuContainer from '../Menu/Menu'

import TabsWrapper from '../Tabs/TabsWrapper'
import FooterContainer from '../Footer/Footer'

import * as colors from '../../../assets/colors'
import * as fonts from '../../../assets/fonts'
import {ThemeProvider} from 'styled-components'

//Redux+Router
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as GlobalActions from '../../../store/actions/global'

const theme = {
  background: colors.EMERALD_LIGHT,
  color: colors.TAB_COLOR_2,
  font: fonts.PRIMARY,
  tabs:{
      tab_text:colors.TAB_TEXT,
      tab_text_selected: colors.TAB_TEXT_SELECTED,
      tab:colors.TAB,
      tab_selected:colors.TAB_SELECTED
  },
  button: {
    color: colors.TAB_COLOR_1,
  }
}
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