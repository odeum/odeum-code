import React, { Component } from 'react'
import {connect} from 'react-redux'
import {changeId} from 'store/modules/tabs'
class Forms extends Component {
    
    componentWillMount() {
        this.props.onMount()
    }
    
    render() {
        return (
            <div>
               {this.props.children}
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
})

function mapDispatchToProps(dispatch) {
    return{
        onMount: ()=>{
            dispatch(changeId('forms'))
        }
    }
    
}
export default connect(mapStateToProps,mapDispatchToProps)(Forms)

