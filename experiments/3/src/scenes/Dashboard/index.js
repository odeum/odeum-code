import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as dashboardActions from './dashboardActions'
import Dashboard from './Dashboard'
class DashboardContainer extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
              <Dashboard 
              changeTabs={this.props.changeTab} 
              tabs={this.props.tabs} 
              selected={this.props.selected}
              RemoveTab={this.props.closeTab}
              AddTab={this.props.openTab}/>
            </div>
        );
    }
}

DashboardContainer.propTypes = {
 tabs:PropTypes.array,
 selected: PropTypes.number
};
const mapStateToProps = (state) =>({
    tabs: state.dashboard.tabs,
    selected : state.dashboard.selected
})
function mapDispatchToProps(dispatch){
    return bindActionCreators(dashboardActions,dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(DashboardContainer);