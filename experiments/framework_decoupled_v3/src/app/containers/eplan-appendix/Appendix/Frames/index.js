import React, { Component } from 'react'
import { List } from 'immutable'

/* Redux */
import {push} from 'react-router-redux'
import { connect } from 'react-redux'
import { getAppendixAsync } from 'app/store/modules/eplan'
import { getAppendix } from 'app/store/selectors/eplan' //getAppendixSel

/* Framework */
import { tabChange } from 'framework/store/modules/tabs'

/* App */
import FramesTable from './FramesTable/Table'
import {PulseLoader,AppendixButtonPanel} from 'app/styles/EplanStyles'//AppendixButton
import {WHDiv} from 'app/styles/'
import * as iconname from 'framework/assets/icons'
import Button from 'framework/components/Widgets/Button'
import AddFrameModal from 'app/components/eplan-appendix/Frames/AddFrameModal'

class Frames extends Component {
    constructor(props) {
        super(props)

        this.state = {
            addFrameModalIsOpen: false,
        }

        this.onClickButton = this.onClickButton.bind(this)
        this.openAddFrameModal = this.openAddFrameModal.bind(this)
        this.closeAddFrameModal = this.closeAddFrameModal.bind(this)
        this.addNewFrame = this.addNewFrame.bind(this)
    }

    async componentWillMount() {
        this.props.onMount(this.props.param, "Rammer til tillæg")
        await this.props.getAppendix(this.props.param)
    }

    onClickButton(index){
        this.props.onClickButton(index, this.props.param)
    }

    openAddFrameModal() {
        this.setState({
            addFrameModalIsOpen: true
        })
    }

    closeAddFrameModal() {
        this.setState({
            addFrameModalIsOpen: false
        })
    }

    addNewFrame() {
        alert("TODO")
        this.closeAddFrameModal()
    }

    render() {
        const { addFrameModalIsOpen } = this.state

        const { openAddFrameModal, closeAddFrameModal, addNewFrame } = this

        return (
            <WHDiv>
                <AppendixButtonPanel>
                    <Button onClick={openAddFrameModal} icon={iconname.ICON_ADD_CIRCLE} size={18}>Tilføj ny ramme</Button>
                </AppendixButtonPanel>
                {this.props.framesIsLoading ? <PulseLoader size="15px" color={'royalblue'} /> : <FramesTable list={List(this.props.appendix.frames)} onClickButton={this.onClickButton} />}
            <AddFrameModal
              addFrameModalIsOpen={addFrameModalIsOpen}
              closeAddFrameModal={closeAddFrameModal}
              addNewFrame={addNewFrame}
            />
            </WHDiv>
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
        onClickButton:(frameId, appendixId)=>{
            dispatch(push('/eplan/list/'+appendixId+'/frames/'+frameId+'/edit'))
        },
        getAppendix: (param) => {
            dispatch(getAppendixAsync(param))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Frames)