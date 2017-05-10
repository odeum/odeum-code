import React, { Component } from 'react'
// import DrawerWrapper from '../../../components/App/Menu/DrawerWrapper'
import MenuItem from '../../../components/App/Menu/MenuItem'
import PropTypes from 'prop-types'
import * as styled from '../../../components/App/styles/MenuStyle'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
 
// import * as GlobalActions from '../../../store/actions/global'
import * as DrawerActions from './menuActions'



class MenuContainer extends Component {
    render() {
    // console.log(this.props)
    var _this = this.props
        return (
            <styled.MenuWrapperDiv>
                {/*<DrawerItem name='Dashboard' location='/scenes/dashboard' onPush={this.props.onPush}>
                <div>Dashboard Test</div>
                <div>Test2</div>
                    {/*<Dashboard/>*/}
                {/*</DrawerItem>
                <DrawerItem name='Test' location='/users/Test' onPush={this.props.onPush}>
                <div>Test</div>
                <div></div>
                </DrawerItem>*/}
                
                   {this.props.scenes.map((scene,index)=>(<MenuItem name={scene.name} icon={scene.icon} location={scene.location} onPush={_this.changeScene} key={index}/>))}
                {/*<DrawerWrapper ScenesDrawer={Scenes}/>*/}
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
    //  scenes: state.global.scenes,
    //  activeScene: state.drawer.activeScene
})
function mapDispatchToProps(dispatch){
    return bindActionCreators(DrawerActions,dispatch)

}
export default connect(mapStateToProps,mapDispatchToProps)(MenuContainer)