
import React, { Component } from 'react'
import PropTypes from 'prop-types'

//import * as styled from './styles'
import {HomeDiv} from '../styles/AppStyles'

//Header+Menu
import HeaderContainer from '../Header/Header'
import MenuContainer from '../Menu/Menu'

import TabsWrapper from '../Tabs/TabsWrapper'
import FooterContainer from '../Footer/Footer'


//Redux+Router
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as GlobalActions from '../../../store/actions/global'

class Home extends Component {
    
    render() {
        // console.log(this.props)
        return (
            <div>
            <HomeDiv>
                <HeaderContainer />
                <MenuContainer />
                
                <TabsWrapper children={this.props.tabChildren}/>
               
                {this.props.children}

               <FooterContainer />
            </HomeDiv>
           
            </div>
        )
    }
}
Home.propTypes = {
    // onPush:PropTypes.func.isRequired,
     tabChildren: PropTypes.array
}

const mapStateToProps = (state,ownProps) =>({
    tabChildren: state.global.tabChildren,
    comp: state.menu.comp
})
function mapDispatchToProps(dispatch){
    return bindActionCreators(GlobalActions,dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(Home)