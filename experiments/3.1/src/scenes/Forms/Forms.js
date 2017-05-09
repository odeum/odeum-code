import React, { Component } from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as tasksActions from './formsActions'

class Forms extends Component {
    componentWillMount(){
        this.props.loadTabs()
    }
    render() {
        return (
            <div>
                {/*Tasks*/}
                <button onClick={e=>{e.preventDefault(); this.props.addTab()}}>Add new tab</button>
            </div>
        );
    }
}
const mapStateToProps = (state) =>({

})
function mapDispatchToProps(dispatch){
    return bindActionCreators(tasksActions,dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Forms);