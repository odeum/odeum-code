import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import TabsContainer from 'containers/Tabs/TabsContainer'
// import * as formsActions from '../../formsActions'
import { getForm, getForms } from '../../../../modules/forms'
import { updateTab, loadTabs } from 'store/modules/tabs'
// import {browserHistory} from 'react-router'
var _ = require('lodash')
class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            formParams: false
        }
    }
    getTabs(formID) {
        return this.props.formProps.tabChildrenDashboard
    }
    componentWillMount() {
        let FormProps = this.props.getForm(parseInt(this.props.id, 10))
        if (FormProps !== undefined) {
            this.setState({
                formParams: true
            })
            this.props.updateTab(
                {
                    label: FormProps.name,
                    location: '/forms/' + this.props.id,
                    icon: 'info',
                    fixed: false
                })
        } else {
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
            <div>Form number: { this.props.id }
              <TabsContainer children={ this.props.formProps.tabChidlrenDashboard } activeTab={ this.props.activeTab } />
              { this.props.children }
            </div>) : (<div>Error 404</div>)

        )
    }
}
//TODO: Implement Selectors
const mapStateToProps = (state, ownProps) => ({
    id: ownProps.params.id,
    formProps: _.find(state.forms.forms, function(form) {
        return form.id === parseInt(ownProps.params.id, 10)
    }),
    activeTab: _.find(state.forms.forms, function(form) {
        return form.id === parseInt(ownProps.params.id, 10)
    }).activeTab
})
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        updateTab,
        loadTabs,
        getForm,
        getForms
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Form)