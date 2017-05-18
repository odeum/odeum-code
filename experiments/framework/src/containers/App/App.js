
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import routes from '../../config/routes'
import { Router } from 'react-router'

// //import * as styled from './styles'
// import {AppDiv} from './styles/AppStyles'

// //Header+Menu
// import HeaderContainer from './Header/Header'
// import MenuContainer from './Menu/Menu'

// import TabsWrapper from './Tabs/TabsWrapper'
// import FooterContainer from './Footer/Footer'


// //Redux+Router
// import {bindActionCreators} from 'redux'
// import {connect} from 'react-redux'
// import * as GlobalActions from '../../store/actions/global'

class AppContainer extends Component {
    
    render() {
        //  console.log(this.props)
        //  console.log(routes)
        return (
            <Provider store={this.props.store}>
            <div>
                <Router history={this.props.history} routes={routes}/>
            {/*<AppDiv>
                <HeaderContainer />
                <MenuContainer />
                
                <TabsWrapper children={this.props.tabChildren}/>
               
                {this.props.children}

               <FooterContainer />
            </AppDiv>*/}

           
            </div>
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