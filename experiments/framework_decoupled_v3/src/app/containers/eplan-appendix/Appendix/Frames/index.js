import React, { Component } from 'react'
// import { List } from 'immutable'

/* Redux */
import { push } from 'react-router-redux'
import { connect } from 'react-redux'
import { getAppendixAsync, setFrameFilterText, addFrame } from 'app/store/modules/eplan'
// import { getAppendix } from 'app/store/selectors/appendix'
/* Framework */
import { tabChange, tabIsLoading } from 'framework/store/modules/tabs'

/* App */
import FramesTable from './FramesTable/Table'
import { AppendixButtonPanel, ToastContainerStyled } from 'app/styles/EplanStyles'
import { PrimaryContainer } from 'app/styles/'
import * as iconname from 'framework/assets/icons'
import Button from 'framework/components/Widgets/Button'
import AddFrameModal from 'app/components/eplan-appendix/Frames/AddFrameModal'
import Input from 'framework/components/Widgets/Input/Input'


import { toast } from 'react-toastify'

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

		// this.onClickButton = this.onClickButton.bind(this)
		// this.openAddFrameModal = this.openAddFrameModal.bind(this)
		// this.closeAddFrameModal = this.closeAddFrameModal.bind(this)
		// this.addNewFrame = this.addNewFrame.bind(this)
		// this.setFilter = this.setFilter.bind(this)
	}

	//#region Lifecycle methods

	async componentWillMount() {
		
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

	//#endregion

	onClickButton = (index) => {
		this.props.onClickButton(index, this.props.param)
	}

	openAddFrameModal = () => {
		this.setState({
			addFrameModalIsOpen: true
		})
	}

	closeAddFrameModal = () => {
		this.setState({
			addFrameModalIsOpen: false
		})
	}

	addNewFrame = async () => {
		await this.props.addAppendixFrame(this.props.param)
		this.closeAddFrameModal()
		toast.success('Rammen tilføjet korrekt')
	}
	setFilter = (event) => {
		this.props.setFilterText(event.target.value)
	}
	render() {
		const { addFrameModalIsOpen } = this.state
		const { framesFilterText } = this.props
		const { openAddFrameModal, closeAddFrameModal, addNewFrame } = this
		// console.log('framesTable', this.props.framesTable)
		return (
			<PrimaryContainer>
				<AppendixButtonPanel>
					<Input value={framesFilterText} onChange={this.setFilter} />
					<Button onClick={openAddFrameModal} icon={iconname.ICON_ADD_CIRCLE} size={18}>Tilføj ny ramme</Button>
				</AppendixButtonPanel>
				{this.props.framesIsLoading ? null : <FramesTable onClickButton={this.onClickButton} id={this.props.param} />}
				<AddFrameModal
					addFrameModalIsOpen={addFrameModalIsOpen}
					closeAddFrameModal={closeAddFrameModal}
					addNewFrame={addNewFrame}
				/>
				<ToastContainerStyled
					position="top-right"
					autoClose={5000}
					hideProgressBar={true}
					newestOnTop={true}
					closeOnClick
					pauseOnHover
				/>
			</PrimaryContainer>
		)
	}
}

const mapStateToProps = (state, ownProps) => ({
	param: ownProps.param,
	framesIsLoading: state.eplan.framesIsLoading,
	framesFilterText: state.eplan.framesTableFilterText
})

function mapDispatchToProps(dispatch) {
	return {
		onMount: (instanceID, tab) => {
			dispatch(tabChange(instanceID, tab.label))
		},
		onClickButton: (frameId, appendixId) => {
			dispatch(push('/eplan/list/' + appendixId + '/frames/' + frameId + '/edit'))
		},
		getAppendix: async (param) => {
			await dispatch(await getAppendixAsync(param))
		},
		tabisLoading: (instanceID, tab, isLoading) => {
			dispatch(tabIsLoading(instanceID, tab, isLoading))
		},
		setFilterText: (text) => {
			dispatch(setFrameFilterText(text))
		},
		addAppendixFrame: async (appendixId) => {
			await dispatch(await addFrame(appendixId))
		},
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Frames)