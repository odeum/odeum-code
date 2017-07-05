import React, { Component } from 'react'
import {connect} from 'react-redux'
import General from 'custom_apps/components/Dashboard/Tabs/general'
import {tabChange} from 'store/modules/tabs'
class generalContainer extends Component {
    
    componentWillMount() {
        this.props.onMount()
    }
    
    render() {
        return (
            <div>
                <General props={'somepropshere'}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
})

function mapDispatchToProps(dispatch) {
    return{
        onMount: ()=>{
            dispatch(tabChange('dashboard','General'))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(generalContainer)