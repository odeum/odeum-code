import React, { Component } from 'react'
/* Redux */
import { connect } from 'react-redux'
import { removeOpenApdx } from 'app/store/modules/eplan'
// import { Field, reduxForm } from 'redux-form'

import { getReferenceTableEntryAsync, updateReferenceTable } from 'app/store/modules/eplan'
import { getReferenceTableSelectValues } from 'app/store/selectors/eplan'

import { List } from 'immutable'

// import { Field, reduxForm } from 'redux-form'
// import { getReferenceTableLabel } from 'app/store/selectors/eplan'

/* Framework */
import { tabChange } from 'framework/store/modules/tabs'

/* Styling */
import { PrimaryContainer } from 'app/styles'
import { /* DescriptionDiv, */ PulseLoader, AppendixButtonPanel } from 'app/styles/EplanStyles'

/* Components */
import ReferenceTableEditList from './Table/Table'
import Button from 'framework/components/Widgets/Button'
import * as iconname from 'framework/assets/icons'

// import ReferenceTableSettingsForm from './ReferenceTableSettingsForm'

import ReferenceTableSettingsModal from '../../ReferenceTableSettingsModal'
import ReferenceTableEditModal from '../../ReferenceTableEditModal'

var _ = require('lodash')

class ReferenceTableEdit extends Component {
	constructor(props) {
		super(props)
		this.state = {
			settingsModalIsOpen: false,
			editModalIsOpen: false,
			editData: {}
		}

		/* Bind functions to this component */
		this.openSettingsModal = this.openSettingsModal.bind(this)
		this.closeSettingsModal = this.closeSettingsModal.bind(this)
		this.saveSettingsModal = this.saveSettingsModal.bind(this)

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
		this.setState({
			editModalIsOpen: false
		})
		console.log(this.props.referenceTableValues)
	}

	async componentWillMount() {
		if (!this.props.referenceTableValues) {
			await this.props.getReferenceTableEntry(this.props.referenceTableId)
		}
		this.props.onMount(
		 	this.props.id,
		 	this.props.referenceTableId
		)
	}

	render() {

		// console.log('render')
		// if (this.props.referenceTable !== null) {
		// 	console.log(this.props.referenceTable)
		// }

		// if (this.props.referenceTableValues !== null) {
		// 	console.log(this.props.referenceTableValues)
		// }

		return (
			<PrimaryContainer>
				{/* <DescriptionDiv>Small description placeholder</DescriptionDiv> */}
				<AppendixButtonPanel>
					<Button icon={iconname.ICON_SETTINGS} size={18} onClick={() => this.openSettingsModal()}>Egenskaber</Button>
					<Button icon={iconname.ICON_ADD_CIRCLE} size={18} onClick={() => this.openEditModal({
						id: null,
						parentKey: "",
						valueKey: "",
						value: "",
						value2: "",
						reftableId: this.props.referenceTableId
					})}>Tilføj ny værdi</Button>
				</AppendixButtonPanel>
				{this.props.referenceTableValues === null || this.props.referenceTable === undefined  ? <PulseLoader size="15px" color={'royalblue'} /> : <ReferenceTableEditList list={List(_.map(this.props.referenceTableValues.data))} data={this.props.referenceTable} onClickButton={this.openEditModal} />}
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
	// referenceTableValues: getReferenceTableValues(state, ownProps.referenceTableId) || List(),
	referenceTableSelectValues: getReferenceTableSelectValues(state),
	referenceTableId: ownProps.referenceTableId,
	referenceTable: state.eplan.referenceTables[ownProps.referenceTableId], //getReferenceTableEntry(state, ownProps.referenceTableId), // state.eplan.referenceTableValues[ownProps.referenceTableId] || null,
	referenceTableValues: state.eplan.referenceTableValues[ownProps.referenceTableId] || null,
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