import React, { Component } from 'react'

class Workflow extends Component {
    componentWillMount() {
        this.props.updateTab({
    label: 'Workflow',
    location: '/dashboard/workflow',
    icon: 'arbejdsgang',
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

export default Workflow