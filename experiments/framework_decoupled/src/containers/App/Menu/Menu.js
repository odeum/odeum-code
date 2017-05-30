import React, { Component } from 'react'
import MenuItem from '../../../components/App/Menu/MenuItem'
import PropTypes from 'prop-types'
import * as styled from '../../../components/App/styles/MenuStyle'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
 
// import * as GlobalActions from '../../../store/actions/global'
import * as MenuActions from './menuActions'

class MenuContainer extends Component {
    active(sceneName){
        if(sceneName===this.props.active)
        return 'active'
        else
        return ''
    }
    render() {

// (_this is not used should it be a const?)
// eslint-disable-next-line 
    var _this = this.props
        return (
            <styled.MenuWrapperDiv>
                   {this.props.scenes.map((scene, index) => (<MenuItem name={scene.name} icon={scene.icon} location={scene.location} active={this.active(scene.name)} key={index}/>))}
            </styled.MenuWrapperDiv>
        )
    }
}
MenuContainer.propTypes = {
       scenes:PropTypes.array,
       active:PropTypes.string
}
const mapStateToProps = (state) =>({
     scenes: state.global.scenes,
     active: state.global.activeScene
})
function mapDispatchToProps(dispatch){
    return bindActionCreators(MenuActions,dispatch)

}
export default connect(mapStateToProps,mapDispatchToProps)(MenuContainer)