
import React, { Component } from 'react';
import PropTypes from 'prop-types'

//import * as s from './styles'
import {HomeDiv} from './styled'

//Header+Menu
import HeaderContainer from './Header'
import DrawerContainer from './Drawer'

//@TODO TabsWrapper should be moved to Containers 
//@ It is a container
import TabsWrapper from './Tabs/TabsWrapper'
import FooterContainer from './Footer'


//Redux+Router
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as GlobalActions from '../../store/actions/global'

class HomeContainer extends Component {

    render() {
        return (
            <div>
            <HomeDiv>
                <HeaderContainer />
                <DrawerContainer />
              
                <TabsWrapper children={this.props.tabChildren}/>
              
               {this.props.children}

               <FooterContainer />
            </HomeDiv>
           
            </div>
        )
    }
}
HomeContainer.propTypes = {
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
export default connect(mapStateToProps,mapDispatchToProps)(HomeContainer)