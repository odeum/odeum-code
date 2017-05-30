import React, { Component } from 'react'
import * as operationsActions from './operationsActions.js'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class Operations extends Component {
    componentWillMount() {
//         this.props.updateTab({
//     label: 'Operations',
//     location: '/dashboard/operations',
//     icon: 'operations',
//     fixed: true
// })
    }
    render() {
        return (
            <div>
                Operations
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})
function mapDispatchToProps(dispatch) {
    return bindActionCreators(operationsActions, dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(Operations)