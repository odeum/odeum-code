import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as dashboardActions from './dashboardActions'
// import General from '../../components/Tabs/General'
// import Users from '../../components/Tabs/Users'
// import { Route } from 'react-router'
import {DashboardDiv} from './style'
// import tabs from './Tabs/tabs'
class DashboardContainer extends Component {
    componentWillMount() {

        //@ TODO Notify TabsWrapper with default tabs / Add default tab links in the tabs wrapper
        //INFO Temporary Proof of Concept
        this.props.loadTabs()
         console.log(this.props)
    }
    render() {
        const childWithProps = React.Children.map(this.props.children,
        (child)=> React.cloneElement(child,{updateTabWrapper:this.props.updateTab}))
        return (
            <DashboardDiv>
            {childWithProps}
            </DashboardDiv>
        )
    }
}

DashboardContainer.propTypes = {
}
const mapStateToProps = (state,ownProps) => ({

})
function mapDispatchToProps(dispatch) {
    return bindActionCreators(dashboardActions, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer)