import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as dashboardActions from './dashboardActions'
// import Dashboard from './Dashboard'
// import {push} from 'react-router-redux'
// import General from  '../../components/Tabs/General'
class DashboardContainer extends Component {
    componentWillMount(){
    
    //    this.props.dispatch(push('/dashboard/general'))
    //@ TODO Notify TabsWrapper with default tabs / Add default tab links in the tabs wrapper
    this.props.loadTabs()
    //@DONE change to default tab
    //   this.props.changeTab('/dashboard/general','General')
    }
    componentWillUpdate(){
        console.log('updated')
        // this.props.changeTab('/dashboard/somewhere')
        
           
    }
    render() {
        // this.props.changeTab('/dashboard/general','General')
        console.log(this.props)
        return (
            <div>

            </div>
        );
    }
}

DashboardContainer.propTypes = {
};
const mapStateToProps = (state) =>({
})
function mapDispatchToProps(dispatch){
    return bindActionCreators(dashboardActions,dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(DashboardContainer);