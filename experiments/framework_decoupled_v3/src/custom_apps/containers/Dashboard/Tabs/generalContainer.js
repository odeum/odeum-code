import React, { Component } from 'react'
import {connect} from 'react-redux'
import General from 'custom_apps/components/Dashboard/Tabs/general'
class generalContainer extends Component {
    render() {
        return (
            <div>
                <General/>
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
export default connect(mapStateToProps,mapDispatchToProps)(generalContainer)