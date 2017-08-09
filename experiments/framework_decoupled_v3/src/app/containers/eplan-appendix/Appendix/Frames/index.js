import React, { Component } from 'react'
import { List } from 'immutable'

/* Redux */

import { connect } from 'react-redux'
import { getAppendixAsync } from 'app/store/modules/eplan'
import { getAppendixSel, getAppendix } from 'app/store/selectors/eplan'

/* Framework */
import { tabChange } from 'framework/store/modules/tabs'

/* App */
import FramesTable from './FramesTable/Table'
import {DescriptionDiv,PulseLoader,AppendixButtonPanel,AppendixButton} from 'app/styles/EplanStyles'

class Frames extends Component {

    async componentWillMount() {
        this.props.onMount(this.props.param, "Rammer til tillæg")
        await this.props.getAppendix(this.props.param)
    }

    render() {
        return (
            <div>
                {this.props.framesIsLoading ? <PulseLoader size="15px" color={'royalblue'} /> : <FramesTable list={List(this.props.appendix.frames)} onClickButton={this.onClickButton} />}
            </div>
        )
    }
}
const mapStateToProps = (state,ownProps) => ({
    param: ownProps.param,
    appendix: getAppendix(state, ownProps.param, ownProps) || null,
    framesIsLoading: state.eplan.framesIsLoading
})

function mapDispatchToProps(dispatch) {
    return {
        onMount:(id,tab)=> {
            dispatch(tabChange(id,tab))
        },
        getAppendix: (param) => {
            dispatch(getAppendixAsync(param))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Frames)