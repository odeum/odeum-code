import React, { Component } from 'react'
import { updateTab } from 'store/modules/tabs'
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
    return bindActionCreators({
        updateTab
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Fields)