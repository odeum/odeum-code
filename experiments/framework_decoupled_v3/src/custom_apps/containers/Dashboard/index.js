import React, { Component } from 'react'
import {connect} from 'react-redux'
import {changeId} from 'store/modules/tabs'
import {Div} from 'custom_apps/styles'
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

