import React, { Component } from 'react'
import * as workflowActions from './workflowActions.js'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class Workflow extends Component {
    componentWillMount() {
//         this.props.updateTab({
//     label: 'Workflow',
//     location: '/dashboard/workflow',
//     icon: 'workflow',
//     fixed: true
// })
    }
    render() {
        return (
            <div>
                Workflow
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})
function mapDispatchToProps(dispatch) {
    return bindActionCreators(workflowActions, dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(Workflow)