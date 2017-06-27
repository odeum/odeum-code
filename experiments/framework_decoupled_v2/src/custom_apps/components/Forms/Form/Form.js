import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import TabsContainer from 'framework/containers/Tabs/TabsContainer'
import {injectAsyncReducers} from 'framework/store'
import forms from 'custom_apps/Forms/formsReducer'
injectAsyncReducers({
    forms: forms
})
var _ = require('lodash')
class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            formParams: false
        }
    }
    getTabs(formID){
        console.log(this.props.formProps)
        return this.props.formProps.tabChildrenDashboard
    }
    componentWillMount() {
        //TODO replace with formProps
        let FormProps = this.props.getForm(parseInt(this.props.id, 10))
        // console.log(this.state.formParams)
         console.log(this.props.formProps)
        if (FormProps !== undefined) {
            this.setState({ formParams: true })
            this.props.updateTab(
                {
                    label: FormProps.name,
                    location: '/forms/' + this.props.id,
                    icon: 'info',
                    fixed: false
                })
        }
        else {
            //this.setState({ formParams: true })
            this.props.updateTab(
                {
                    label: "Error",
                    location: '/forms/' + this.props.id,
                    icon: 'info',
                    fixed: false
                })
        }


    }
    render() {
       //TODO Implement Children with props
        return (
            this.state.formParams ?
                (
                    <div>It worked  {this.props.id} <TabsContainer children={this.props.formProps.tabChidlrenDashboard} 
                    activeTab={this.props.activeTab}/>{this.props.children}</div>) : (<div>Error 404</div>)
                   
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    console.log(ownProps)
    return ({
    id: ownProps.match.params.id,
    formProps: _.find(state.forms.forms,function (form){
        return form.id===parseInt(ownProps.params.id,10)}),
    activeTab: _.find(state.forms.forms,function (form){
        return form.id===parseInt(ownProps.params.id,10)}).activeTab
})}
// function mapDispatchToProps(dispatch) {
//     return bindActionCreators(formsActions, dispatch)
// }
export default connect(mapStateToProps /*,mapDispatchToProps*/)(Form)