
import React, { Component } from 'react';
import PropTypes from 'prop-types'

//import * as styled from './styles'
import {AppDiv} from './styles/AppStyles'

//Header+Menu
import HeaderContainer from './Header/Header'
import DrawerContainer from './Menu/Menu'

//@TODO TabsWrapper should be moved to Containers 
//@ It is a container
import TabsWrapper from './Tabs/TabsWrapper'
import FooterContainer from './Footer/Footer'


//Redux+Router
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as GlobalActions from '../../store/actions/global'

class AppContainer extends Component {

    render() {
        return (
            <div>
            <AppDiv>
                <HeaderContainer />
                <MenuContainer />
                
                <TabsWrapper children={this.props.tabChildren}/>
               {this.props.children}

               <FooterContainer />
            </AppDiv>
           
            </div>
        )
    }
}
AppContainer.propTypes = {
    onPush:PropTypes.func.isRequired,
    tabChildren: PropTypes.array
}

const mapStateToProps = (state,ownProps) =>({
    tabChildren: state.global.tabChildren,
    comp: state.drawer.comp
})
function mapDispatchToProps(dispatch){
    return bindActionCreators(GlobalActions,dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(AppContainer)