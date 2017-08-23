import React, { Component } from 'react'
/* Redux */
import { connect } from 'react-redux'
import { reset, reduxForm } from 'redux-form'
import { updateReferenceTableData, addReferenceTable } from 'app/store/modules/eplan'
// import { getReferenceTableEntry } from 'app/store/selectors/eplan'


import { FormField } from 'app/styles/EplanStyles'
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

	submitUpdate(values) {
		// if (values.id === null) {
		// 	this.props.addReferenceTable(values)
		// } else {
		this.props.updateReferenceTableData(values, this.props.referenceTableId)
		// }
		console.log(values)
		this.props.saveEditModal()
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
							<br /><br />
							<FieldLabel for="name">Tekst værdi 1</FieldLabel>
							<FormField
								name="value"
								component="input"
								type="text"
								placeholder="Tekst værdi 1"
							/>
							<br />
							<br />							
							<FieldLabel for="name">Tekst værdi 2</FieldLabel>
							<FormField
								name="value2"
								component="input"
								type="text"
								placeholder="Tekst værdi 2"
							/>
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
	// referenceTableEntry: getReferenceTableEntry(state, ownProps.referenceTableId) || null,
	initialValues: ownProps.editData || null,
})

function mapDispatchToProps(dispatch) {
	return {
		updateReferenceTableData: (referenceTableEntry, id) => {
			dispatch(updateReferenceTableData(referenceTableEntry, id))
		},
		addReferenceTable: (referenceTableEntry, id) => {
			dispatch(addReferenceTable(referenceTableEntry))
			dispatch(reset('eplan.referencetables'))
		},

	}
}

ReferenceTableEditModal = reduxForm({
	form: 'eplan.referencetabledata',
	enableReinitialize: true
})(ReferenceTableEditModal)

export default connect(mapStateToProps, mapDispatchToProps)(ReferenceTableEditModal)