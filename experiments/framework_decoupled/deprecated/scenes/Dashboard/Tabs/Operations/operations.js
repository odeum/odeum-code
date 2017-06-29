import React, { Component } from 'react'

class Operations extends Component {
    componentWillMount() {
        this.props.updateTab({
    label: 'Actions',
    location: '/dashboard/operations',
    icon: 'handlinger',
    fixed: true
})
    }
    render() {
        return (
            <div>
                Actions
            </div>
        )
    }
}

export default Operations