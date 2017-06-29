import React, { Component } from 'react'
import { updateTab } from 'store/modules/tabs'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class Operations extends Component {
    componentWillMount() {
        this.props.updateTab({
            label: 'Actions',
            location: '/dashboard/actions',
            icon: 'code',
            fixed: true
        })
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
    return bindActionCreators({
        updateTab
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Operations)