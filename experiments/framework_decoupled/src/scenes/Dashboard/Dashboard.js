import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as dashboardActions from './dashboardActions'
// import General from '../../components/Tabs/General'
// import Users from '../../components/Tabs/Users'
// import { Route } from 'react-router'
import {DashboardDiv} from './styles'
// import tabs from './Tabs/tabs'
class DashboardContainer extends Component {
    componentWillMount() {
        this.props.loadTabs()
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