import React, { Component } from 'react'
import * as fieldsActions from './fieldsActions.js'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class Fields extends Component {
    componentWillMount() {
        this.props.updateTab({
    label: 'Fields',
    location: '/dashboard/fields',
    icon: 'input',
    fixed: true
})
    }
    render() {
        return (
            <div>
                Fields
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    
})
function mapDispatchToProps(dispatch) {
    return bindActionCreators(fieldsActions, dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(Fields)