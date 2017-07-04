import React, { Component } from 'react'

class Dashboard extends Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}
export default Dashboard
