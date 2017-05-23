
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { Router } from 'react-router'


const rootRoute={
    childRoutes:[{
        path:'/',
        component: require('./Home/Home').default,
        childRoutes:[
            require('../../custom_apps/routes.js')
        ]
    }]
}

class AppContainer extends Component {
    
    render() {
        return (
            
            <Provider store={this.props.store}>
                <Router history={this.props.history} routes={rootRoute}/>
                </Provider>
        )
    }
}
AppContainer.propTypes = {
    history:PropTypes.object.isRequired,
    store:PropTypes.object.isRequired
}


export default AppContainer