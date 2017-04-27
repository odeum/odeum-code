
import React, { Component } from 'react';
import PropTypes from 'prop-types'

//Header+Drawer

//import * as s from './styled'
import {HomeDiv} from './styled'

import HeaderContainer from './Header'
import DrawerContainer from './Drawer'

//Redux+Router
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as GlobalActions from '../../store/actions/global'

class HomeContainer extends Component {

    render() {
      
     // console.log(this.props)
        return (
            <div>
            <HomeDiv>
                <HeaderContainer />
                <DrawerContainer />
           
               {this.props.children}
            </HomeDiv>
           
            </div>
        )
    }
}
HomeContainer.propTypes = {
    onPush:PropTypes.func.isRequired,

}

const mapStateToProps = (state,ownProps) =>({

    comp: state.drawer.comp
})
function mapDispatchToProps(dispatch){
    return bindActionCreators(GlobalActions,dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(HomeContainer)