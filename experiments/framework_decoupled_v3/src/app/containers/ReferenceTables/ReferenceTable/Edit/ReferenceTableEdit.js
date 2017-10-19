import React, { Component } from 'react'

/* Redux */
import { connect } from 'react-redux'
import { removeOpenApdx } from 'app/store/modules/eplan'

import { getReferenceTableEntryAsync, updateReferenceTable } from 'app/store/modules/eplan'
import { getReferenceTableSelectValues } from 'app/store/selectors/eplan'

/* Framework */
import { addTab, tabIsLoading } from 'framework/store/modules/tabs'

/* Styling */
import { PrimaryContainer } from 'app/styles'
import { AppendixButtonPanel } from 'app/styles/EplanStyles'

/* Components */
import ReferenceTableEditList from './Table/Table'
import Button from 'framework/components/Widgets/Button'
import * as iconname from 'framework/assets/icons'
import ReferenceTableSettingsModal from '../../ReferenceTableSettingsModal'
import ReferenceTableEditModal from '../../ReferenceTableEditModal'

class ReferenceTableEdit extends Component {
	tab = {
		id: this.props.referenceTableId,
		label: '',
		location: '/reference/list/' + this.props.referenceTableId + '/edit',
		icon: 'mode_edit',
		fixed: false,
		isLoading: false,
		closeLink: '/reference/list'
	}
	constructor(props) {
		super(props)
		this.state = {
			settingsModalIsOpen: false,
			editModalIsOpen: false,
			editData: {
				id: null,
				parentKey: "",
				valueKey: "",
				value: "",
				value2: "",
				reftableId: this.props.referenceTableId
			},
			confirm: ''
		}

		/* Bind functions to this component */
		this.closeSettingsModal = this.closeSettingsModal.bind(this)
		this.saveSettingsModal = this.saveSettingsModal.bind(this)
		this.closeEditModal = this.closeEditModal.bind(this)
		this.saveEditModal = this.saveEditModal.bind(this)
	}
	openSettingsModal = () => {
		this.setState({
			settingsModalIsOpen: true,
		})
	}
	closeSettingsModal() {
		this.setState({
			settingsModalIsOpen: false
		})
	}
	saveSettingsModal() {
		this.setState({
			settingsModalIsOpen: false
		})
	}
	openEditModalInit = () => {
		this.openEditModal(this.state.editData)
	}
	openEditModal = (_data) => {
		this.setState({
			editModalIsOpen: true,
			editData: _data
		})
	}
	closeEditModal() {
		this.setState({
			editModalIsOpen: false
		})
	}
	saveEditModal() {
		this.setState({
			editModalIsOpen: false,
			editData: {
				id: null,
				parentKey: "",
				valueKey: "",
				value: "",
				value2: "",
				reftableId: this.props.referenceTableId
			}
		})
	}

	async componentWillMount() {
		if (this.props.referenceTable) {
			this.tab.label = this.props.referenceTable.name
		}
		this.props.onMount(
			this.props.id,
			this.tab
		)
		if (!this.props.referenceTableValues) {
			this.props.tabisLoading(this.props.id, this.tab, true)
			var d = await this.props.getReferenceTableEntry(this.props.referenceTableId)
			console.log(d)
			this.props.tabisLoading(this.props.id, this.tab, false)
		}
	}

	componentWillUpdate(nextProps, nextState) {
		if (nextProps.referenceTable !== this.props.referenceTable) {
			this.tab.label = nextProps.referenceTable.name
			this.props.changeTab(this.props.id, this.tab)
		}
	}

	render() {
		return (
			<PrimaryContainer>
				{/* <DescriptionDiv>Small description placeholder</DescriptionDiv> */}
				<AppendixButtonPanel>
					<Button icon={iconname.ICON_SETTINGS} size={18} onClick={this.openSettingsModal}>Egenskaber</Button>
					<Button icon={iconname.ICON_ADD_CIRCLE} size={18} onClick={this.openEditModalInit}>Tilføj ny værdi</Button>
				</AppendixButtonPanel>
				{this.props.referenceTableValues === null || this.props.referenceTable === null ? null : <ReferenceTableEditList referenceTableId={this.props.referenceTableId} onClickButton={this.openEditModal} />}
				<ReferenceTableSettingsModal
					settingsModalIsOpen={this.state.settingsModalIsOpen}
					closeSettingsModal={this.closeSettingsModal}
					saveSettingsModal={this.saveSettingsModal}
					referenceTableSelectValues={this.props.referenceTableSelectValues}
					referenceTableId={this.props.referenceTableId}
				/>
				<ReferenceTableEditModal
					editModalIsOpen={this.state.editModalIsOpen}
					editData={this.state.editData}
					closeEditModal={this.closeEditModal}
					saveEditModal={this.saveEditModal}
					referenceTableId={this.props.referenceTableId}
				/>
			</PrimaryContainer>
		)
	}
}

const mapStateToProps = (state, ownProps) => ({
	referenceTableSelectValues: getReferenceTableSelectValues(state),
	referenceTableId: ownProps.referenceTableId,
	referenceTable: state.eplan.referenceTables[ownProps.referenceTableId] || null,
	referenceTableValues: state.eplan.referenceTableValues[ownProps.referenceTableId] ||  null,
	mystate: state
})

function mapDispatchToProps(dispatch) {
	return {
		onMount: (instanceID, tab) => {
			dispatch(addTab(instanceID, tab))
		},
		unMount: (param) => {
			//TODO Remove Open Appendix when *CLOSED* not when unmounted
			dispatch(removeOpenApdx(param))
		},
		changeTab: (instanceID, tab) => {
			dispatch(addTab(instanceID, tab))
		},
		tabisLoading: (instanceID, tab, isLoading) => {
			dispatch(tabIsLoading(instanceID, tab, isLoading))
			// dispatch(tabChange(instanceID, tab.label))			
		},
		getReferenceTableEntry: async (id) => {
			await dispatch(await getReferenceTableEntryAsync(id))
		},
		updateReferenceTable: async (referenceTableSettings, id) => {
			await dispatch(await updateReferenceTable(referenceTableSettings, id))
		},
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ReferenceTableEdit)