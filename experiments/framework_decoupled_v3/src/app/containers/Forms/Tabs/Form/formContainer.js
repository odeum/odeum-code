import React, { Component } from 'react'
import {connect} from 'react-redux'
import {addTab,tabChange} from 'framework/store/modules/tabs'
// import {push} from 'react-router-redux'
import {Div} from 'app/styles'
// import FormComp from '../../../'
class Form extends Component {
    
    componentWillMount() {
        //Not fixed tab example
        this.props.onMount('formlist',{
            label:"Form",
            icon:"info",
            location:"/forms/list/form",//REFACTOR to ID
            fixed:false
        })
    }
   
    
    
    render() {
        return (
            <Div>
              Form
            </Div>
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
const FormCont = connect(mapStateToProps,mapDispatchToProps)(Form)
export default FormCont/*connect(mapStateToProps,mapDispatchToProps)(Form)*/

