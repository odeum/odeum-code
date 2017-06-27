import React, { Component } from 'react'
// import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import TabsContainer from 'framework/containers/Tabs/TabsContainer'
// import General from './Dashboard/General/general'

// var _ = require('lodash')
class Form extends Component {

    componentWillMount() {
        //TODO: Get Fake Form Data from fake_api
    }
    render() {
       //TODO Implement Children with props
        return (
                    
                    <div>It worked  {this.props.id} <TabsContainer tabs={[{label:"test"}]}/></div>
                   
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return ({
    id: ownProps.match.params.id
})}
// function mapDispatchToProps(dispatch) {
//     return bindActionCreators(formsActions, dispatch)
// }
export default connect(mapStateToProps /*,mapDispatchToProps*/)(Form)