import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {SettingsDiv} from './styles'
import * as settingsActions from './settingsActions'


class Settings extends Component {

    componentWillMount(){
        this.props.updateTab({label:'Settings',location:this.props.location.pathname,icon:'settings',fixed:false})
        //console.log(this.props)
    }
    render() {
        return (
            <SettingsDiv>
                <h3>Settings</h3>
                {this.props.activeLabel}
                {this.props.url}
            </SettingsDiv>
        )
    }
}

const mapStateToProps = (state,ownProps) => ({

})
function mapDispatchToProps(dispatch) {
    return bindActionCreators(settingsActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings)
