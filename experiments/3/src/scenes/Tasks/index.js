import React, { Component } from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as tasksActions from './tasksActions'

class Tasks extends Component {
    componentWillMount(){
        this.props.loadTabs()
    }
    render() {
        return (
            <div>
                Tasks
            </div>
        );
    }
}
const mapStateToProps = (state) =>({

})
function mapDispatchToProps(dispatch){
    return bindActionCreators(tasksActions,dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Tasks);