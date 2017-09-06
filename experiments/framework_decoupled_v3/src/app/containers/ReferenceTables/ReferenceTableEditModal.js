import React, { Component } from 'react'
/* Redux */
import { connect } from 'react-redux'
import { Field, reset, reduxForm } from 'redux-form'
import { updateReferenceTableData } from 'app/store/modules/eplan'
// import { getReferenceTableEntry } from 'app/store/selectors/eplan'

/* Framework formfields */
import FormFieldInput from 'framework/components/ReduxForm/FormFieldInput'
import FormFieldTextarea from 'framework/components/ReduxForm/FormFieldTextarea'
import FormFieldArticle from 'framework/components/ReduxForm/FormFieldArticle'

import 'react-datepicker/dist/react-datepicker.css'
import { ModalWindow, ModalHeader, ModalContent, ModalHeaderIcon, ModalHeaderTitle, ModalHeaderClose, ModalButtonPanel } from 'framework/components/styles/ModalStyles'
import { FieldLabel } from 'app/styles/'
import Button from 'framework/components/Widgets/Button'
import * as iconname from 'framework/assets/icons'
import * as colors from 'framework/assets/colors'
import Icon from 'framework/assets/Icon'

const required = value => (value ? undefined : 'Required')

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
				case 1:
					return (
						<div key="value">
							<FieldLabel for="name">Tekst værdi 1 *</FieldLabel>
							<Field name="value" component={FormFieldInput} validate={[required]} />
						</div>)
				case 2:
					return (
						<div key="value">
							<FieldLabel for="name">Tekst værdi 1 *</FieldLabel>
							<Field name="value" component={FormFieldTextarea} validate={[required]} />
						</div>)
				case 3:
					return (
						<div key="value">
							<FieldLabel for="name">Tekst værdi 1 *</FieldLabel>
							<Field name="value" label="Tekst værdi 1" component={FormFieldArticle} validate={[required]} />
						</div>)
			}
		}
	}

	getField2TypeComponent() {
		if (this.props.referenceTable !== null) {
			switch (parseInt(this.props.referenceTable.field2Type, 10)) {
				default:
					return ''
				case 1:
					return (
						<div key="value2">
							<FieldLabel for="name">Tekst værdi 2 *</FieldLabel>
							<Field name="value2" component={FormFieldInput} validate={[required]} />
						</div>)
				case 2:
					return (
						<div key="value2">
							<FieldLabel for="name">Tekst værdi 2 *</FieldLabel>
							<Field name="value2" component={FormFieldTextarea} validate={[required]} />
						</div>)
				case 3:
					return (
						<div key="value2">
							<FieldLabel for="name">Tekst værdi 2 *</FieldLabel>
							<Field name="value2" label="Tekst værdi 2" component={FormFieldArticle} validate={[required]} />
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
							<FieldLabel for="name">Relationsværdi *</FieldLabel>
							<Field
								name="valueKey"
								component={FormFieldInput}
								type="text"
								placeholder="Relationsværdi"
								validate={[required]}
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