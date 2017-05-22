import React, { Component } from 'react'
import * as usersActions from './usersActions.js'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class Users extends Component {
    componentWillMount() {
        this.props.updateTab({
    label: 'Users',
    location: '/dashboard/users',
    icon: 'users',
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
    return bindActionCreators(usersActions, dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(Users)