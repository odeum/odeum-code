import React, { Component } from 'react'
import { updateTab } from 'store/modules/tabs'
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
    return bindActionCreators({
        updateTab
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Design)
