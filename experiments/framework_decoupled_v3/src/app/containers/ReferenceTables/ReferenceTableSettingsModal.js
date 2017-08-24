import React, { Component } from 'react'
/* Redux */
import { connect } from 'react-redux'
import { reset, reduxForm } from 'redux-form'
import { updateReferenceTable,  addReferenceTable } from 'app/store/modules/eplan'
import { getReferenceTableEntry } from 'app/store/selectors/eplan'


import { FormField } from 'app/styles/EplanStyles'
import 'react-datepicker/dist/react-datepicker.css'
import { ModalWindow, ModalHeader, ModalContent, ModalButtonPanel, ModalHeaderIcon, ModalHeaderTitle, ModalHeaderClose } from 'app/styles/EplanStyles'
import { FieldLabel } from 'app/styles/'
import Button from 'framework/components/Widgets/Button'
import * as iconname from 'framework/assets/icons'
import * as colors from 'framework/assets/colors'
import Icon from 'framework/assets/Icon'

class ReferenceTableSettingsModal extends Component {
	constructor(props) {
		super(props)
		/* Bind functions to this component */
		this.submitUpdate = this.submitUpdate.bind(this)
	}

	submitUpdate(values) {
		if (values.id === null) {
			this.props.addReferenceTable(values)
		} else {
			this.props.updateReferenceTable(values, this.props.referenceTableId)
		}
		this.props.saveSettingsModal()
	}

	render() {
		/* Props */
		const { settingsModalIsOpen, closeSettingsModal, referenceTableSelectValues, handleSubmit } = this.props

		return (
			<div>
				<ModalWindow isOpen={settingsModalIsOpen} onRequestClose={closeSettingsModal} contentLabel="Indstillinger">
					<ModalHeader>
						<ModalHeaderIcon>
							<Icon icon={iconname.ICON_SETTINGS} size={30} color={colors.MODAL_HEADER_ICON} active={true} />
						</ModalHeaderIcon>
						<ModalHeaderTitle>Egenskaber</ModalHeaderTitle>
						<ModalHeaderClose onClick={(e) => { e.preventDefault(); closeSettingsModal() }}>
							<Icon icon={iconname.ICON_CLOSE} size={30} color={colors.MODAL_HEADER_ICON} active={true} />
						</ModalHeaderClose>
					</ModalHeader>
					<ModalContent>
						<form onSubmit={handleSubmit(this.submitUpdate)}>
							<FieldLabel for="name">Navn</FieldLabel>
							<FormField
								name="name"
								component="input"
								type="text"
								placeholder="Navn"
							/>
							<br/><br/>
							<FieldLabel for="name">SQL tabel navn</FieldLabel>
							<FormField
								name="sqlTable"
								component="input"
								type="text"
								placeholder="SQL tabel navn"
							/>
							<br/>
							<br/>
							<FieldLabel for="name">Felttype</FieldLabel>
							<FormField
								name="fieldType"
								component="select"
								type="text"
								placeholder="Felttype"
							>
            					<option value="1">Dropdown</option>
								<option value="2">Dropdown (multipel valg)</option>
							</FormField>
							<br/><br/>
							<FieldLabel for="name">Tekst værdi 1 type</FieldLabel>
							<FormField
								name="field1Type"
								component="select"
								type="text"
								placeholder="Tekst værdi 1 type"
							>
								<option value="1">Kort tekst</option>
								<option value="2">Lang tekst</option>
								<option value="3">WYSIWYG</option>

							</FormField>

							<br/><br/>
							<FieldLabel for="name">Tekst værdi 2 type</FieldLabel>
							<FormField
								name="field2Type"
								component="select"
								type="text"
								placeholder="Tekst værdi 2 type"
							>
								<option value="0" selected="selected">Anvendes ikke</option>
								<option value="1">Kort tekst</option>
								<option value="2">Lang tekst</option>
								<option value="3">WYSIWYG</option>

							</FormField>
							<br/><br/>
							<FieldLabel for="name">Overordnet reference-tabel</FieldLabel>
							<FormField
								name="parentReftableId"
								component="select"
								type="text"
								placeholder="Overordnet reference-tabel"
							>
								{
									referenceTableSelectValues.map((opt, index) => {
										return (<option value={opt.value}>{opt.label}</option>)
									})
								}
							</FormField>
						</form>
						<ModalButtonPanel>
							<Button onClick={handleSubmit(this.submitUpdate)} icon={iconname.ICON_CHECK_CIRCLE} size={18}>Gem ændringer</Button>
						</ModalButtonPanel>
					</ModalContent>
				</ModalWindow>
			</div>
		)
	}
}

const mapStateToProps = (state, ownProps) => ({
	referenceTableId: ownProps.referenceTableId,
	initialValues: getReferenceTableEntry(state, ownProps.referenceTableId) || null,
})

function mapDispatchToProps(dispatch) {
	return {
		updateReferenceTable: (referenceTableEntry, id) => {
			dispatch(updateReferenceTable(referenceTableEntry, id))
		},
		addReferenceTable: (referenceTableEntry, id) => {
			dispatch(addReferenceTable(referenceTableEntry))
			dispatch(reset('eplan.referencetables'))
		},

	}
}

ReferenceTableSettingsModal = reduxForm({
	form: 'eplan.referencetables',
	enableReinitialize: true
})(ReferenceTableSettingsModal)

export default connect(mapStateToProps, mapDispatchToProps)(ReferenceTableSettingsModal)