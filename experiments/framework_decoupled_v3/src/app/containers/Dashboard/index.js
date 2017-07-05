import React, { Component } from 'react'
import {connect} from 'react-redux'
import {changeId} from 'framework/store/modules/tabs'
import {Div} from 'app/styles'
class Dashboard extends Component {
    
    componentWillMount() {
        this.props.onMount()
    }
    
    render() {
        return (
            <Div>
                {this.props.children}
            </Div>
        )
    }
}
const mapStateToProps = (state) => ({
})

function mapDispatchToProps(dispatch) {
    return{
        onMount: ()=>{
            dispatch(changeId('dashboard'))
        }
    }
    
}
export default connect(mapStateToProps,mapDispatchToProps)(Dashboard)

