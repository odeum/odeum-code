import React, { Component } from 'react'

class Users extends Component {
    componentWillMount() {
        this.props.updateTab({
    label: 'Users',
    location: '/dashboard/users',
    icon: 'brugere',
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

export default Users