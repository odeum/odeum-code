import React, { Component } from 'react'
import * as configurationActions from './configurationActions.js'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class Configuration extends Component {
    componentWillMount() {
//         this.props.updateTab({
//     label: 'Configuration',
//     location: '/dashboard/configuration',
//     icon: 'configuration',
//     fixed: true
// })
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