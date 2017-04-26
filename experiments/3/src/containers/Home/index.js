import React, { Component } from 'react';
//import * as s from './styled'
import {HomeDiv} from './styled'
import Home from '../../components/Home'
import HeaderContainer from './Header'
import DrawerContainer from './Drawer'
import PropTypes from 'prop-types'
//import Header from '../../components/Home/Header'
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
                {/*<Home scene={this.props.scene} comp={this.props.comp} />*/}
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