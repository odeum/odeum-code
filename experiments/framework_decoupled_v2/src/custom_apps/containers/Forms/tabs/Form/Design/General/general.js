import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class General extends Component {
    componentWillMount() {
//     this.props.updateTab({
//     label: 'General',
//     location: '/dashboard/general',
//     icon: 'assignment_turned_in',
//     fixed: true
// })
// console.log('------------------------------------')
// console.log(this.props)
// console.log('------------------------------------')
    }
    render() {
        return (
            <div>
                General
            </div>
        )
    }
}

const mapStateToProps = state => ({})
function mapDispatchToProps(dispatch) {
    return bindActionCreators({}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(General)
