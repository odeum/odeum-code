import React, { Component } from 'react';
import DrawerItem from '../../../components/Home/Drawer/DrawerItem'
import PropTypes from 'prop-types'
import * as s from '../../../components/Home/styled/DrawerStyle'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as DrawerActions from './drawerActions'



class DrawerContainer extends Component {
    render() {
    var _this = this.props
        return (
            <s.DrawerWrapperDiv>
                   {this.props.scenes.map((scene,index)=>(
                       <DrawerItem 
                       name={scene.name} 
                       icon={scene.icon} 
                       location={scene.location} 
                       onPush={_this.changeScene} 
                       key={index}/>))}
            </s.DrawerWrapperDiv>
        )
    }
}
DrawerContainer.propTypes = {
       changeScene: PropTypes.func.isRequired,
       scenes:PropTypes.array,
       activeScene:PropTypes.number
}
const mapStateToProps = (state) =>({
     scenes: state.global.scenes,
     activeScene: state.drawer.activeScene
})
function mapDispatchToProps(dispatch){
    return bindActionCreators(DrawerActions,dispatch)

}
export default connect(mapStateToProps,mapDispatchToProps)(DrawerContainer);