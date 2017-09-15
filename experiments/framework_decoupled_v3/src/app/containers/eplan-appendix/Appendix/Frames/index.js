import React, { Component } from 'react'
import { List } from 'immutable'

/* Redux */
import { push } from 'react-router-redux'
import { connect } from 'react-redux'
import { getAppendixAsync } from 'app/store/modules/eplan'
import { getAppendix } from 'app/store/selectors/appendix' //getAppendixSel

/* Framework */
import { tabChange, tabIsLoading } from 'framework/store/modules/tabs'

/* App */
import FramesTable from './FramesTable/Table'
import { AppendixButtonPanel } from 'app/styles/EplanStyles'//AppendixButton
import { PrimaryContainer } from 'app/styles/'
import * as iconname from 'framework/assets/icons'
import Button from 'framework/components/Widgets/Button'
import AddFrameModal from 'app/components/eplan-appendix/Frames/AddFrameModal'

class Frames extends Component {
	tab = {
		id: 'rammer',
		label: "Rammer til tillæg",
		location: '/eplan/list/' + this.props.params.id + '/frames',
		icon: "info",
		fixed: true,
		isLoading: false,
		closeLink: ''
	}
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
		console.log(this.props.frameIsLoading)

		this.props.onMount(this.props.param, this.tab)
		if (this.props.framesIsLoading === true) {
			this.props.tabisLoading(this.props.param, this.tab, true)
		}
		await this.props.getAppendix(this.props.param)

	}
	componentWillUpdate(nextProps, nextState) {
		if (this.props.framesIsLoading !== true || nextProps.frameIsLoading !== true)
			this.props.tabisLoading(this.props.param, this.tab, false)
	}
	onClickButton(index) {
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
			<PrimaryContainer>
				<AppendixButtonPanel>
					<Button onClick={openAddFrameModal} icon={iconname.ICON_ADD_CIRCLE} size={18}>Tilføj ny ramme</Button>
				</AppendixButtonPanel>
				{this.props.framesIsLoading ? null : <FramesTable list={List(this.props.appendix.frames)} onClickButton={this.onClickButton} />}
				<AddFrameModal
					addFrameModalIsOpen={addFrameModalIsOpen}
					closeAddFrameModal={closeAddFrameModal}
					addNewFrame={addNewFrame}
				/>
			</PrimaryContainer>
		)
	}
}
const mapStateToProps = (state, ownProps) => ({
	param: ownProps.param,
	appendix: getAppendix(state, ownProps.param, ownProps) || null,
	framesIsLoading: state.eplan.framesIsLoading
})

function mapDispatchToProps(dispatch) {
	return {
		onMount: (instanceID, tab) => {
			//dispatch(addTab(instanceID, tab))
			dispatch(tabChange(instanceID, tab.label))
		},
		onClickButton: (frameId, appendixId) => {
			dispatch(push('/eplan/list/' + appendixId + '/frames/' + frameId + '/edit'))
		},
		getAppendix: (param) => {
			dispatch(getAppendixAsync(param))
		},
		tabisLoading: (instanceID, tab, isLoading) => {
			dispatch(tabIsLoading(instanceID, tab, isLoading))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Frames)