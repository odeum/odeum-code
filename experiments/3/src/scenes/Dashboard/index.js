import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as dashboardActions from './dashboardActions'
import General from '../../components/Tabs/General'
import Users from '../../components/Tabs/Users'
import { Route } from 'react-router'
import {DashboardDiv} from './style'
import tabs from './Tabs/tabs'
class DashboardContainer extends Component {
    componentWillMount() {

        //@ TODO Notify TabsWrapper with default tabs / Add default tab links in the tabs wrapper
        //INFO Temporary Proof of Concept
        this.props.loadTabs(this.props.specialTab)
        console.log(this.props.specialTab)
    }
    render() {
        return (
            <DashboardDiv>
            <Route path="/dashboard/general" component={tabs.General}/>
            <Route path="/dashboard/fields" component={tabs.Fields}/>
            <Route path="/dashboard/workflow" component={tabs.Workflow}/>
            <Route path="/:dashboard/users" component={tabs.Users}/>
            <Route path="/dashboard/operations" component={tabs.Operations}/>
            <Route path="/dashboard/configuration" component={tabs.Configuration}/>
            <Route path="/dashboard/design" component={tabs.Design}/>
            
            </DashboardDiv>
        );
    }
}

DashboardContainer.propTypes = {
};
const mapStateToProps = (state,ownProps) => ({
    specialTab: {label:ownProps.match.params.name.charAt(0).toUpperCase()+ownProps.match.params.name.slice(1),icon:ownProps.match.params.name}
})
function mapDispatchToProps(dispatch) {
    return bindActionCreators(dashboardActions, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);