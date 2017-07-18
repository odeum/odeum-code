import React, { Component } from 'react'
import {changeId} from 'framework/store/modules/tabs'
import {connect} from 'react-redux'
import {getAppendixCfg} from 'app/store/modules/eplan'
const sceneProp ={id:'eplan'}
// const tabProp = {id:'eplan-list'}

class EplanAppendix extends Component {
    componentWillMount() {
        this.props.onMount()
    }
    
    render() {
     
        return (
            <div style={{height:'100%'}}>
               {React.cloneElement(this.props.children, sceneProp)}
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
})

function mapDispatchToProps(dispatch) {
    return{
        onMount: ()=>{
            dispatch(changeId(sceneProp.id))
            dispatch(getAppendixCfg())
        }
    }
    
}
export default connect(mapStateToProps,mapDispatchToProps)(EplanAppendix)