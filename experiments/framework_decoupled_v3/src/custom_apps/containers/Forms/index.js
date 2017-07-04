import React, { Component } from 'react'
import {connect} from 'react-redux'
class Forms extends Component {
    
    render() {
        return (
            <div>
                Form
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
})

function mapDispatchToProps(dispatch) {
    return({
    })
}
export default connect(mapStateToProps,mapDispatchToProps)(Forms)

