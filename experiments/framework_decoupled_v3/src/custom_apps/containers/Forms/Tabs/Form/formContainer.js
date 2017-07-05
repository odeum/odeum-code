import React, { Component } from 'react'
import {connect} from 'react-redux'
import {addTab,tabChange} from 'store/modules/tabs'
import {push} from 'react-router-redux'

class Form extends Component {
    
    componentWillMount() {

        this.props.onMount('formlist',{
            label:"Form",
            icon:"general",
            location:"/forms/list/form",//REFACTOR to ID
            fixed:false
        })
    }
   
    
    
    render() {
        return (
            <div>
              Form
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
})

function mapDispatchToProps(dispatch) {
    return{
        onMount: (id,tab)=>{
            dispatch(addTab(id,tab))
            dispatch(tabChange(id,tab.label))
        }
    }
    
}
export default connect(mapStateToProps,mapDispatchToProps)(Form)

