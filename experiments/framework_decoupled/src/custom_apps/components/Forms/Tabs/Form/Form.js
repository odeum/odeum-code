import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
// import TabsContainer from 'containers/Tabs/TabsContainer'
// import SubTabsContainer from 'containers/Tabs/SubTabsContainer'
// import Tab from 'components/Tabs/SubTabs'
// import * as formsActions from '../../formsActions'
import { getForms } from '../../../../modules/forms'
import {getForm} from 'custom_apps/selectors/forms'
import { updateTab, loadTabs } from 'store/modules/tabs'
import General from './Tabs/General/general'
import Configuration from './Tabs/Configuration/configuration'
// import {browserHistory} from 'react-router'

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
                    location: '/forms/' + this.props.id + '/' + FormProps.tabChildrenDashboard[0].label + '/' + FormProps.tabChildrenDashboard[2].label,
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
    routeHandler(arg) {
        switch (arg) {
            case 'General':
                return <General/>
            case 'Configuration':
                return <Configuration/>
            default:
                return null
        }
    }
    render() {
        //TODO Implement Children with props
        return (
        this.props.formProps ?
            (
            <div>Form number:
              { this.props.id }
              { /*<TabsContainer children={ this.props.formProps.tabChidlrenDashboard } activeTab={ this.props.activeTab } />
                                                                                                  { this.props.children }*/ }
              {/*<SubTabsContainer>
                <Tab name={ this.props.tabs1 }>
                  { this.routeHandler(this.props.tabs1) }
                </Tab>
                <Tab name={ 'Text' }>Text</Tab>
              </SubTabsContainer>
              <SubTabsContainer>
                <Tab name={ this.props.tabs2 }>
                  { this.routeHandler(this.props.tabs2) }
                </Tab>
                <Tab name={'Text'}>Text</Tab>
              </SubTabsContainer>*/}
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