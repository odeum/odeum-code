import React, { Component } from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as tasksActions from './formsActions'
import {FormsDiv} from './styles'
class Forms extends Component {
    componentWillMount(){
        this.props.loadTabs()
    }
    render() {
        return (
            <FormsDiv>
                {/*Tasks*/}
                <button onClick={e=>{e.preventDefault(); this.props.addTab()}}>Add new tab</button>
            </FormsDiv>
        )
    }
}
const mapStateToProps = (state) =>({

})
function mapDispatchToProps(dispatch){
    return bindActionCreators(tasksActions,dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Forms)