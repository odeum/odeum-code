import React, { Component } from 'react'
// import DrawerWrapper from '../../../components/App/Menu/DrawerWrapper'
import MenuItem from '../../../components/App/Menu/MenuItem'
import PropTypes from 'prop-types'
import * as styled from '../../../components/App/styles/MenuStyle'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
 
// import * as GlobalActions from '../../../store/actions/global'
import * as MenuActions from './menuActions'



class MenuContainer extends Component {
    render() {
    // console.log(this.props)
    var _this = this.props
        return (
            <styled.MenuWrapperDiv>
                   {this.props.scenes.map((scene,index)=>(<MenuItem name={scene.name} icon={scene.icon} location={scene.location} onPush={_this.changeScene} key={index}/>))}
            </styled.MenuWrapperDiv>
        )
    }
}
MenuContainer.propTypes = {
       changeScene: PropTypes.func.isRequired,
       scenes:PropTypes.array,
       activeScene:PropTypes.number
}
const mapStateToProps = (state) =>({
     scenes: state.global.scenes,
     activeScene: state.menu.activeScene
})
function mapDispatchToProps(dispatch){
    return bindActionCreators(MenuActions,dispatch)

}
export default connect(mapStateToProps,mapDispatchToProps)(MenuContainer)