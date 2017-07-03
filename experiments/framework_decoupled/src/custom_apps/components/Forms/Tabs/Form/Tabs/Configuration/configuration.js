import React , { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class Configuration extends Component {

    componentWillMount() {

    }
    render() {
        return (
            <div>
              Configuration
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})
function mapDispatchToProps(dispatch) {
    return bindActionCreators({}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Configuration)