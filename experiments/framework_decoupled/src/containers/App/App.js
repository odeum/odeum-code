import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { Router } from 'react-router'
import rootRoute from './rootRoute'

class AppContainer extends Component {
    render() {
        return (
            <Provider store={ this.props.store }>
              <Router history={ this.props.history } routes={ rootRoute } />
            </Provider>
        )
    }
}

AppContainer.propTypes = {
    history: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired
}

export default AppContainer