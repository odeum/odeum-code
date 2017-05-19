import React, { Component } from 'react'

class Design extends Component {
    componentWillMount() {
        this.props.updateTab({
    label: 'Design',
    location: '/dashboard/design',
    icon: 'design',
    fixed: true
})
    }
    render() {
        return (
            <div>
                Design
            </div>
        )
    }
}

export default Design