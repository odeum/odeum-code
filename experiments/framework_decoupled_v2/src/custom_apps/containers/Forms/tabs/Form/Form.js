import React, { Component } from 'react'
// import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import SubTabsContainer from 'framework/containers/Tabs/SubTabsContainer'
// import General from './Dashboard/General/general'

// var _ = require('lodash')
class Form extends Component {

    componentWillMount() {
        //TODO: Get Fake Form Data from fake_api
        //TODO: Notify the TabsContainer to create a tab for form ID
    }
    render() {
        // console.log(this.props.location)
        const tabs = [
            {
                label: 'General',
                icon: 'general',
                location: this.props.location.pathname + '/general'
            },
            {
                label: 'General2',
                icon: 'workflow',
                location: this.props.location.pathname + '/general2'
            }
        ]
        return (

            <div>It worked  {this.props.id} <SubTabsContainer tabs={tabs} /></div>

        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return ({
        id: ownProps.match.params.id
    })
}
// function mapDispatchToProps(dispatch) {
//     return bindActionCreators(formsActions, dispatch)
// }
export default connect(mapStateToProps /*,mapDispatchToProps*/)(Form)