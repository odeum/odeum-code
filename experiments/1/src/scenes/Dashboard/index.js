import React, { Component } from 'react'

class Dashboard extends Component {
    constructor(props) {
        console.log('Dashboard constructor')
        super(props);
    }

    render() {
        return (
            <div className="dashboard">Dashboard</div>
        )
    }
}

export default Dashboard