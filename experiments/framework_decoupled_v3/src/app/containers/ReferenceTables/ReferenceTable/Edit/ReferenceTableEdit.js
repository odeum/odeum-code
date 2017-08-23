import React, { Component } from 'react'
/* Redux */
import { connect } from 'react-redux'
import { removeOpenApdx } from 'app/store/modules/eplan'
// import { Field, reduxForm } from 'redux-form'

import { getReferenceTableEntryAsync, updateReferenceTable } from 'app/store/modules/eplan'
import { getReferenceTable, getReferenceTableSelectValues } from 'app/store/selectors/eplan'

import { List } from 'immutable'

// import { Field, reduxForm } from 'redux-form'
// import { getReferenceTableLabel } from 'app/store/selectors/eplan'

/* Framework */
import { tabChange } from 'framework/store/modules/tabs'

/* Styling */
import { PrimaryContainer } from 'app/styles'
import { DescriptionDiv, PulseLoader, AppendixButtonPanel } from 'app/styles/EplanStyles'

/* Components */
import ReferenceTableEditList from './Table/Table'
import Button from 'framework/components/Widgets/Button'
import * as iconname from 'framework/assets/icons'

// import ReferenceTableSettingsForm from './ReferenceTableSettingsForm'

import ReferenceTableSettingsModal from '../../ReferenceTableSettingsModal'
import ReferenceTableEditModal from '../../ReferenceTableEditModal'

class ReferenceTableEdit extends Component {
	constructor(props) {
		super(props)
		this.state = {
			settingsModalIsOpen: false,
			editModalIsOpen: false,
			editData: {},
		}

		/* Bind functions to this component */
		this.openSettingsModal = this.openSettingsModal.bind(this)
		this.closeSettingsModal = this.closeSettingsModal.bind(this)
		this.saveSettingsModal = this.saveSettingsModal.bind(this)
		// this.handleSetting = this.handleSetting.bind(this)
		// this.handleSettingsSubmit = this.handleSettingsSubmit.bind(this)
		// this.settingsForm = this.settingsForm.bind(this)

		this.openEditModal = this.openEditModal.bind(this)
		this.closeEditModal = this.closeEditModal.bind(this)
		this.saveEditModal = this.saveEditModal.bind(this)

	}

	openSettingsModal() {
		this.setState({
			settingsModalIsOpen: true,
			settingData: this.props.referenceTableEntry
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

	openEditModal(data) {
		console.log('openEditModal')
		console.log(data)

		this.setState({
			editModalIsOpen: true,
			editData: data
		})
	}

	closeEditModal() {
		this.setState({
			editModalIsOpen: false
		})
	}

	saveEditModal() {
		//TODO: Save changes
		this.setState({
			editModalIsOpen: false
		})
	}

	async componentWillMount() {
		console.log(this.props.referenceTableEntry)
		if (!this.props.referenceTable) {
			await this.props.getReferenceTableEntry(this.props.referenceTableId)
		}

		this.props.onMount(
		 	this.props.id,
		 	this.props.referenceTableId
		)
	}

	render() {
		return (
			<PrimaryContainer>
				<DescriptionDiv>Small description placeholder</DescriptionDiv>
				<AppendixButtonPanel>
					<Button icon={iconname.ICON_SETTINGS} size={18} onClick={this.openSettingsModal}>Egenskaber</Button>
					<Button icon={iconname.ICON_ADD_CIRCLE} size={18}>Tilføj ny værdi</Button>
				</AppendixButtonPanel>
				{this.props.referenceTable === null ? <PulseLoader size="15px" color={'royalblue'} /> : <ReferenceTableEditList list={List(this.props.referenceTable.data)} onClickButton={this.openEditModal} />}
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
	referencetables: state.eplan.referencetables,
	referenceTableSelectValues: getReferenceTableSelectValues(state),
	referenceTableId: ownProps.referenceTableId,
	referenceTable: getReferenceTable(state, ownProps.referenceTableId) || null,
})

function mapDispatchToProps(dispatch) {
	return {
		onMount: (id, param) => {
			dispatch(tabChange(id, param))
		},
		unMount: (param) => {
			//TODO Remove Open Appendix when *CLOSED* not when unmounted
			dispatch(removeOpenApdx(param))
		},
		getReferenceTableEntry: (id) => {
			dispatch(getReferenceTableEntryAsync(id))
		},
		updateReferenceTable: (referenceTableSettings, id) => {
			dispatch(updateReferenceTable(referenceTableSettings, id))
		},
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ReferenceTableEdit)