import React, { Component } from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as tasksActions from './tasksActions'
import tabs from './Tabs/tabs'
import {Route} from 'react-router'
import {TasksDiv} from './style'
class Tasks extends Component {
    componentWillMount(){
        this.props.loadTabs()
    }
    render() {
        return (
            <TasksDiv>
                {/*//TODO tasks/task/:id*/}
                <Route path='/tasks/list' component={()=>(<tabs.TaskList addTab={this.props.addTab}/>)} />
                <Route path='/tasks/task/:id' component={tabs.TaskTab}/>
            </TasksDiv>
        );
    }
}
const mapStateToProps = (state) =>({

})
function mapDispatchToProps(dispatch){
    return bindActionCreators(tasksActions,dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Tasks);