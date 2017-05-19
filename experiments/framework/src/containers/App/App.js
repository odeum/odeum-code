
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
// import routes from '../../config/routes'
import { Router } from 'react-router'
// import routes from '../../config/appInitializer.js'
// //import * as styled from './styles'
// import {AppDiv} from './styles/AppStyles'
// import childRoutes from '../../custom_apps/routes.js'
/* eslint-disable */

// //Header+Menu
// import HeaderContainer from './Header/Header'
// import MenuContainer from './Menu/Menu'

// import TabsWrapper from './Tabs/TabsWrapper'
// import FooterContainer from './Footer/Footer'


// //Redux+Router
// import {bindActionCreators} from 'redux'
// import {connect} from 'react-redux'
// import * as GlobalActions from '../../store/actions/global'
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
        //  console.log(this.props)
        // console.log(appInit)
        // console.log(routes)
        console.log(rootRoute)
        return (
            <Provider store={this.props.store}>
                <Router history={this.props.history} routes={rootRoute}/>
                </Provider>

        )
    }
}
AppContainer.propTypes = {
    // // onPush:PropTypes.func.isRequired,
    //  tabChildren: PropTypes.array
    history:PropTypes.object.isRequired,
    store:PropTypes.object.isRequired
}


export default AppContainer