import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getForms } from '../../../../modules/forms'
import {getForm} from 'custom_apps/selectors/forms'
import { updateTab, loadTabs } from 'store/modules/tabs'


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
        let FormProps = this.props.formProps
        if (FormProps !== undefined) {
            this.setState({
                formParams: true
            })
            this.props.updateTab(
                {
                    label: FormProps.name,
                    location: '/forms/' + this.props.id + '/general/something',
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
        this.props.formProps ?
            (
            <div>Form number:
              { this.props.id }
              {this.props.children}
            </div>) : (<div>Error 404</div>)

        )
    }
}
//TODO: Implement Selectors
const mapStateToProps = (state, ownProps) => ({
    id: ownProps.params.id,
    formProps: getForm(parseInt(ownProps.params.id,10),state,ownProps),
    tabs1: ownProps.params.tabs1,
    tabs2: ownProps.params.tabs2
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