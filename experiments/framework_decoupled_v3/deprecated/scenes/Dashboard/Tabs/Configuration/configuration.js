import React, { Component } from 'react'

class Configuration extends Component {
    componentWillMount() {
        this.props.updateTab({
    label: 'Configuration',
    location: '/dashboard/configuration',
    icon: 'settings',
    fixed: true
})
    }
    render() {
        return (
            <div>
                Configuration
            </div>
        )
    }
}

export default Configuration