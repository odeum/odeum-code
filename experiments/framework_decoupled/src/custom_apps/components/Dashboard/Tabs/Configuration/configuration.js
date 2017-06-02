import React/*, { Component }*/ from 'react'
import * as configurationActions from './configurationActions.js'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ODEUMTab from './ODEUMTab'
class Configuration extends ODEUMTab {
    constructor(props) {
        super(props)
    }
    componentWillMount() {
        this.props.updateTab({
    label: 'Configuration',
    location: '/dashboard/configuration',
    icon: 'settings',
    fixed: true
})
    this.updateTab(this)
    }
    render() {
        return (
            <div>
                Configuration
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})
function mapDispatchToProps(dispatch) {
    return bindActionCreators(configurationActions, dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(Configuration)