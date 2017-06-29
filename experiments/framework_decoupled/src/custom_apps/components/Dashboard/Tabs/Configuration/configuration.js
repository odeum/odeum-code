import React /*, { Component }*/ from 'react'
// import * as configurationActions from './configurationActions.js'
import { updateTab } from 'store/modules/tabs'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ODEUMTab from '../ODEUMTab'
class Configuration extends ODEUMTab {

    componentWillMount() {
        this.props.updateTab({
            label: 'Configuration',
            location: '/dashboard/configuration',
            icon: 'settings',
            fixed: true
        })

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
    return bindActionCreators({
        updateTab
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Configuration)