import React, { Component } from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as formsActions from '../../formsActions'
import {FormsDiv} from'../../styles'
// import {Link} from 'react-router'
import {browserHistory} from 'react-router'
class FormList extends Component {
    
    componentWillMount() {
        //Move to Forms Container
        this.props.getForms()
    }
    handleClick(form){
        browserHistory.push('/forms/'+form.id)
        this.props.updateTab(
            {
            label: form.name,
            location: '/forms/'+form.id,
            icon: 'info',
            fixed: false
            }
        )
    }
    render() {
        return (
            <FormsDiv>
            <ul>{this.props.forms.map((form,index)=>(
                <li key={index}><button onClick={(e)=>{e.preventDefault();this.handleClick(form)}}>{form.id}</button> {form.name}</li>))}
                </ul>
            </FormsDiv>
        )
    }
}
const mapStateToProps = (state) =>({
    forms:state.forms.forms
})
function mapDispatchToProps(dispatch){
    return bindActionCreators(formsActions,dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(FormList)