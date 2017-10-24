import React, { Component } from 'react'
/* Redux */
import { connect } from 'react-redux'
import { Field, reset, reduxForm } from 'redux-form'
import { updateReferenceTable } from 'app/store/modules/eplan'
import { getReferenceTableEntry } from 'app/store/selectors/eplan'
// import { FormField } from 'app/styles/EplanStyles'

/* Framework formfields */
import FormFieldInput from 'framework/components/ReduxForm/FormFieldInput'
// import FormFieldTextarea from 'framework/components/ReduxForm/FormFieldTextarea'
import FormFieldSelect from 'framework/components/ReduxForm/FormFieldSelect'

import 'react-datepicker/dist/react-datepicker.css'
import { ModalWindow, ModalHeader, ModalContent, ModalHeaderIcon, ModalHeaderTitle, ModalHeaderClose, ModalButtonPanel } from 'framework/components/styles/ModalStyles'
import { ToastContainerStyled } from 'app/styles/EplanStyles'
import { FieldLabel } from 'app/styles/'
import Button from 'framework/components/Widgets/Button'
import * as iconname from 'framework/assets/icons'
import * as colors from 'framework/assets/colors'
import Icon from 'framework/assets/Icon'
import { toast } from 'react-toastify'

const required = value => (value ? undefined : 'Required')

class ReferenceTableSettingsModal extends Component {
	constructor(props) {
		super(props)
		/* Bind functions to this component */
		this.submitUpdate = this.submitUpdate.bind(this)

	}

	submitUpdate(values) {
		this.props.updateReferenceTable(values, this.props.referenceTableId)
		this.props.saveSettingsModal()
		toast.success('Dine ændringer er gemt')
	}

	render() {
		/* Props */
		const { settingsModalIsOpen, closeSettingsModal, referenceTableSelectValues, handleSubmit } = this.props

		return (
			<div>
				<ModalWindow isOpen={settingsModalIsOpen} onRequestClose={closeSettingsModal} contentLabel="Egenskaber">
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
							<FieldLabel for="name">Navn *</FieldLabel>
							<Field
								name="name"
								component={FormFieldInput}
								type="text"
								placeholder="Navn"
								validate={[required]}
							/>
							<FieldLabel for="name">SQL tabel navn</FieldLabel>
							<Field
								name="sqlTable"
								component={FormFieldInput}
								type="text"
								placeholder="SQL tabel navn"
								validate={[required]}
							/>
							<FieldLabel for="name">Felttype *</FieldLabel>
							<Field
								name="fieldType"
								component={FormFieldSelect}
								type="text"
								placeholder="Felttype"
								validate={[required]}
							>
								<option value="1">Dropdown</option>
								<option value="2">Dropdown (multipel valg)</option>
							</Field>
							<FieldLabel for="name">Tekst værdi 1 type *</FieldLabel>
							<Field
								name="field1Type"
								component={FormFieldSelect}
								type="text"
								placeholder="Tekst værdi 1 type"
							>
								<option value="1">Kort tekst</option>
								<option value="2">Lang tekst</option>
								<option value="3">WYSIWYG</option>

							</Field>
							<FieldLabel for="name">Tekst værdi 2 type *</FieldLabel>
							<Field
								name="field2Type"
								component={FormFieldSelect}
								type="text"
								placeholder="Tekst værdi 2 type"
							>
								<option value="0" defaultValue>Anvendes ikke</option>
								<option value="1">Kort tekst</option>
								<option value="2">Lang tekst</option>
								<option value="3">WYSIWYG</option>
							</Field>
							<FieldLabel for="name">Overordnet reference-tabel *</FieldLabel>
							<Field
								name="parentReftableId"
								component={FormFieldSelect}
								type="text"
								placeholder="Overordnet reference-tabel"
								validate={[required]}
							>
								{
									referenceTableSelectValues.map((opt, index) => {
										return (<option key={opt.value} value={opt.value}>{opt.label}</option>)
									})
								}
							</Field>
						</form>
						<ModalButtonPanel>
							<Button onClick={handleSubmit(this.submitUpdate)} icon={iconname.ICON_CHECK_CIRCLE} size={18}>Gem ændringer</Button>
						</ModalButtonPanel>
					</ModalContent>
				</ModalWindow>
				<ToastContainerStyled
					position="top-right"
					autoClose={5000}
					hideProgressBar={true}
					newestOnTop={true}
					closeOnClick
					pauseOnHover
				/>
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
		updateReferenceTable: async (referenceTableEntry, id) => {
			await dispatch(updateReferenceTable(referenceTableEntry, id))
			dispatch(reset('eplan.referencetables'))
		},
	}
}

ReferenceTableSettingsModal = reduxForm({
	form: 'eplan.referencetables',
	enableReinitialize: true
})(ReferenceTableSettingsModal)

export default connect(mapStateToProps, mapDispatchToProps)(ReferenceTableSettingsModal)
