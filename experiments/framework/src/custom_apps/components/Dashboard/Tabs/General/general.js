import React, { Component } from 'react'
import * as generalActions from './generalActions.js'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import showResults from './showResults'
import SimpleForm from './SimpleForm'
import { Values } from 'redux-form-website-template'
class General extends Component {
    componentWillMount(){
        this.props.updateTab({
    label: 'General',
    location: '/dashboard/general',
    icon: 'general',
    fixed: true
})
        // console.log('------------------------------------')
        // console.log(this.props)
        // console.log('------------------------------------')
    }
    render() {
       
        return (
            <div>
                General
                 <SimpleForm onSubmit={showResults} />
                 <Values form="simple" />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})
function mapDispatchToProps(dispatch) {
    return bindActionCreators(generalActions, dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(General)