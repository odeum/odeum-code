import React, { Component } from 'react'
/* Redux */
import { connect } from 'react-redux'
import { reset, reduxForm } from 'redux-form'
import { updateReferenceTableData } from 'app/store/modules/eplan'
// import { getReferenceTableEntry } from 'app/store/selectors/eplan'


import { FormField, FormFieldTextarea } from 'app/styles/EplanStyles'
import FormFieldArticle from 'framework/components/ReduxForm/FormFieldArticle'
import 'react-datepicker/dist/react-datepicker.css'
import { ModalWindow, ModalHeader, ModalContent, ModalButtonPanel, ModalHeaderIcon, ModalHeaderTitle, ModalHeaderClose } from 'app/styles/EplanStyles'
import { FieldLabel } from 'app/styles/'
import Button from 'framework/components/Widgets/Button'
import * as iconname from 'framework/assets/icons'
import * as colors from 'framework/assets/colors'
import Icon from 'framework/assets/Icon'

class ReferenceTableEditModal extends Component {
	constructor(props) {
		super(props)
		/* Bind functions to this component */
		this.submitUpdate = this.submitUpdate.bind(this)
	}

	async submitUpdate(values) {
		await this.props.updateReferenceTableData(values, this.props.referenceTableId)
		this.props.saveEditModal()
	}

	getField1TypeComponent() {
		if (this.props.referenceTable !== null) {
			switch (this.props.referenceTable.field1Type) {
				default:
					return ''
				case '1':
					return (
						<div key="value">
							<FieldLabel for="name">Tekst værdi 1</FieldLabel>
							<FormField name="value" component="input" />
						</div>)
				case 2:
					return (
						<div key="value">
							<FieldLabel for="name">Tekst værdi 1</FieldLabel>
							<FormFieldTextarea name="value" component="textarea" />
						</div>)
				case 3:
					return (
						<div key="value">
							<FieldLabel for="name">Tekst værdi 2</FieldLabel>
							<FormField name="value" label="Tekst værdi 2" component={FormFieldArticle} />
						</div>)
			}
		}
	}

	getField2TypeComponent() {
		if (this.props.referenceTable !== null) {
			switch (this.props.referenceTable.field2Type) {
				default:
					return ''
				case '1':
					return (
						<div key="value2">
							<FieldLabel for="name">Tekst værdi 2</FieldLabel>
							<FormField name="value2" component="input" />
						</div>)
				case 2:
					return (
						<div key="value2">
							<FieldLabel for="name">Tekst værdi 2</FieldLabel>
							<FormFieldTextarea name="value2" component="textarea" />
						</div>)
				case 3:
					return (
						<div key="value2">
							<FieldLabel for="name">Tekst værdi 2</FieldLabel>
							<FormField name="value2" label="Tekst værdi 2" component={FormFieldArticle} />
						</div>)
			}
		}
	}

	render() {
		/* Props */
		const { editModalIsOpen, closeEditModal, handleSubmit } = this.props

		return (
			<div>
				<ModalWindow isOpen={editModalIsOpen} onRequestClose={closeEditModal} contentLabel="Indstillinger">
					<ModalHeader>
						<ModalHeaderIcon>
							<Icon icon={iconname.ICON_SETTINGS} size={30} color={colors.MODAL_HEADER_ICON} active={true} />
						</ModalHeaderIcon>
						<ModalHeaderTitle>Rediger</ModalHeaderTitle>
						<ModalHeaderClose onClick={(e) => { e.preventDefault(); closeEditModal() }}>
							<Icon icon={iconname.ICON_CLOSE} size={30} color={colors.MODAL_HEADER_ICON} active={true} />
						</ModalHeaderClose>
					</ModalHeader>
					<ModalContent>
						<form onSubmit={handleSubmit(this.submitUpdate)}>
							<FieldLabel for="name">Relationsværdi</FieldLabel>
							<FormField
								name="valueKey"
								component="input"
								type="text"
								placeholder="Relationsværdi"
							/>
							{this.getField1TypeComponent()}
							{this.getField2TypeComponent()}
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
	referenceTable: state.eplan.referenceTables[ownProps.referenceTableId] || null,
	initialValues: ownProps.editData || null
})

function mapDispatchToProps(dispatch) {
	return {
		updateReferenceTableData: (referenceTableEntry, id) => {
			dispatch(updateReferenceTableData(referenceTableEntry, id))
			dispatch(reset('eplan.referencetabledata'))
		},
	}
}

ReferenceTableEditModal = reduxForm({
	form: 'eplan.referencetabledata',
	enableReinitialize: true
})(ReferenceTableEditModal)

export default connect(mapStateToProps, mapDispatchToProps)(ReferenceTableEditModal)