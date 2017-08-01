import React, { Component } from 'react'
/* Redux */

import { connect } from 'react-redux'

/* Framework */
import { tabChange } from 'framework/store/modules/tabs'

class Frames extends Component {

    componentWillMount() {
        this.props.onMount(this.props.param, "Rammer til tillæg")
    }

    render() {
        return (
            <div>
                FramesTable
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => ({
    param: ownProps.param
})
function mapDispatchToProps(dispatch) {
    return {
        onMount:(id,tab)=> {
            dispatch(tabChange(id,tab))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Frames)