import React, { Component } from 'react'
import {connect} from 'react-redux'
import {changeId} from 'framework/store/modules/tabs'
import {PrimaryContainer} from 'app/styles'
class Dashboard extends Component {
    
    componentWillMount() {
        this.props.onMount()
    }
    
    render() {
        return (
            <PrimaryContainer out={false}>
                {this.props.children}
            </PrimaryContainer>
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

