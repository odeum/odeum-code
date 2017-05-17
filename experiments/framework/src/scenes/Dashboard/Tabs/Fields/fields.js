import React, { Component } from 'react'

class Fields extends Component {
    componentWillMount() {
        this.props.updateTabWrapper({
    label: 'Fields',
    location: '/dashboard/fields',
    icon: 'felter',
    fixed: true
})
    }
    render() {
        return (
            <div>
                Fields
            </div>
        )
    }
}

export default Fields