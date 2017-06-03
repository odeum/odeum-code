import React, { Component } from 'react'
import * as sfActions from './SimpleFormActions.js'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import showResults from './showResults'
import SimpleForm from './SimpleForm'

class SimpleFormContainer extends Component {
    componentWillMount(){
        this.props.updateTab({
    label: 'Simple Form',
    location: '/forms/simple',
    icon: 'assignment',
    fixed: true
})
        // console.log('------------------------------------')
      //   console.log(this.props)
        // console.log('------------------------------------')
    }
    render() {
       
        return (
            <div>
                <SimpleForm onSubmit={showResults} />
               
                
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