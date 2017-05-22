import React, { Component } from 'react'

class Operations extends Component {
    componentWillMount() {
        this.props.updateTab({
    label: 'Operations',
    location: '/dashboard/operations',
    icon: 'handlinger',
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

export default Operations