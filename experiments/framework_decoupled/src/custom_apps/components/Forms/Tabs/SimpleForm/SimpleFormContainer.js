import React, { Component } from 'react'
import * as sfActions from './SimpleFormActions.js'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import showResults from './showResults'
import SimpleForm from './SimpleForm'
import { Values } from 'redux-form-website-template'
class SimpleFormContainer extends Component {
    componentWillMount(){
        this.props.updateTab({
    label: 'Simple Form Submit',
    location: '/forms/simple',
    icon: 'general',
    fixed: false
})
        // console.log('------------------------------------')
      //   console.log(this.props)
        // console.log('------------------------------------')
    }
    render() {
       
        return (
            <div>
                <SimpleForm onSubmit={showResults} />
                 <Values form="simple" />
                
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})
function mapDispatchToProps(dispatch) {
    return bindActionCreators(sfActions, dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(SimpleFormContainer)