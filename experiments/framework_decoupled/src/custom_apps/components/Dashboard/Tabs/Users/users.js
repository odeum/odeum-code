import React, { Component } from 'react'
import { updateTab } from 'store/modules/tabs'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class Users extends Component {
    componentWillMount() {
        this.props.updateTab({
            label: 'Users',
            location: '/dashboard/users',
            icon: 'people',
            fixed: true
        })
    }
    render() {
        return (
            <div>
              Users
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
export default connect(mapStateToProps, mapDispatchToProps)(Users)