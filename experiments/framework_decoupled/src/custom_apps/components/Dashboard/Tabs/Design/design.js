import React, { Component } from 'react'
import * as designActions from './designActions.js'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
class Design extends Component {
    componentWillMount() {
        this.props.updateTab({
    label: 'Design',
    location: '/dashboard/design',
    icon: 'opacity',
    fixed: true
})
    }
    render() {
        return (
            <div>
                Design
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    
})
function mapDispatchToProps(dispatch) {
    return bindActionCreators(designActions, dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(Design)
