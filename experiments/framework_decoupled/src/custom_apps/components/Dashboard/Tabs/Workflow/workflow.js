import React, { Component } from 'react'
import { updateTab } from 'store/modules/tabs'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class Workflow extends Component {
    componentWillMount() {
        this.props.updateTab({
            label: 'Workflow',
            location: '/dashboard/workflow',
            icon: 'timeline',
            fixed: true
        })
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
    return bindActionCreators({
        updateTab
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Workflow)