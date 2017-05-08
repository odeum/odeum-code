import React, { Component, PropTypes } from 'react'
//import { connect } from 'react-redux'
import { browserHistory, Link } from 'react-router'
// import Explore from '../components/Explore'
import Header from '../components/Header'

class Eplan extends Component {
    static propTypes = {
        children: PropTypes.node
    }

    handleChange = nextValue => {
        browserHistory.push(`/${nextValue}`)
    }

    render() {
        const { children } = this.props
        return (
            <div>
                <Header />
                <div>
                    <ul>
                    <li><Link to="/dashboard">Dashboard</Link></li>
                    <li><Link to="/mikkel">Mikkel</Link></li>
                    <li><Link to="/mikkel/Mikkel">Mikkel igen</Link></li>
                    <li><Link to="/splittest">Splittest</Link></li>
                    </ul>
                </div>
                <div id="workspace">
                    {children}
                </div>
                
            </div>
        )
    }
}

export default Eplan