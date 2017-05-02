import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as dashboardActions from './dashboardActions'

class DashboardContainer extends Component {
    componentWillMount() {

        //@ TODO Notify TabsWrapper with default tabs / Add default tab links in the tabs wrapper
        //INFO Temporary Proof of Concept
        this.props.loadTabs()
    }
    render() {
        return (
            <div>
            </div>
        );
    }
}

DashboardContainer.propTypes = {
};
const mapStateToProps = (state) => ({
})
function mapDispatchToProps(dispatch) {
    return bindActionCreators(dashboardActions, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);