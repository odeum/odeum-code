import React, { Component } from 'react'
/* Redux */
import { connect } from 'react-redux'
import { Field, FieldArray, reduxForm } from 'redux-form'
import { addAppendixAsync } from 'app/store/modules/eplan'

/* APP Styles  */
import { FieldLabel } from 'app/styles/'
import { FramesForm } from 'app/styles/EplanStyles'

/* Framework Modal and form fields */
import FormFieldInput from 'framework/components/ReduxForm/FormFieldInput'
import FormFieldTextarea from 'framework/components/ReduxForm/FormFieldTextarea'
import FormFieldSelect from 'framework/components/ReduxForm/FormFieldSelect'
import Button from 'framework/components/Widgets/Button'
import { ModalWindow, ModalHeader, ModalContent, ModalHeaderIcon, ModalHeaderTitle, ModalHeaderClose, ModalButtonPanel } from 'framework/components/styles/ModalStyles'
import * as colors from 'framework/assets/colors'
import Icon from 'framework/assets/Icon'
import * as iconname from 'framework/assets/icons'

const required = value => (value ? undefined : 'Required')

let renderFields = ({ fields, meta: { error } }) => {
	return (
		<div>
			{fields.map((field, index) => {
				let _field
				let _fieldValidate = fields.get(index).mandatory ? [required] : []

				switch (fields.get(index).type) {
					case 'TEXT':
					case 'PLANSYSTEMID':
						_field = (fields.get(index).caption !== '') ? (
							<div key={fields.get(index).id}>
								<FieldLabel for={`${field}.value`}>{fields.get(index).caption}{fields.get(index).mandatory ? ' *' : ''}</FieldLabel>
								<Field name={`${field}.value`} type="text" component={FormFieldInput} label={fields.get(index).caption} validate={_fieldValidate} />
							</div>
						) : ''
						break
					case 'TEXTAREA':
						_field = (fields.get(index).caption !== '') ? (
							<div key={fields.get(index).id}>
								<FieldLabel for={`${field}.value`}>{fields.get(index).caption}{fields.get(index).mandatory ? ' *' : ''}</FieldLabel>
								<Field name={`${field}.value`} type="text" component={FormFieldTextarea} label={fields.get(index).caption} validate={_fieldValidate} />
							</div>
						) : ''
						break
					case 'SELECT':
						_field = (
							<div key={fields.get(index).id}>
								<FieldLabel for={`${field}.value`}>{fields.get(index).caption}{fields.get(index).mandatory ? ' *' : ''}</FieldLabel>
								<Field name={`${field}.value`} component={FormFieldSelect} label={fields.get(index).caption} validate={_fieldValidate}>
									{
										fields.get(index).options.map((opt, index) => {
											return (opt.text !== '') ? (<option key={opt.value} value={opt.value}>{opt.text}</option>) : ''
										})
									}
								</Field>
							</div>
						)
						break
					default:
						break
				}
				return _field
			})}
		</div>
	)
}

class NewAppendixModal extends Component {
	constructor(props) {
		super(props)
		/* Bind functions to this component */
		this.submitUpdate = this.submitUpdate.bind(this)
	}

	async submitUpdate(values) {
		let appendix = {
			'name': values.fields.splice(0, 1)[0].value,
			'number': values.fields.splice(0, 1)[0].value,
			'numberOfFrames': values.fields.splice(0, 1)[0].value,
			'doCommit': 1,
			'fields': values.fields
		}
		// console.log(appendix)
		await this.props.addApd(appendix).then(() => {
			console.log('addApd then')
			setTimeout(this.props.saveNewAppendix, 2000 )
		})
	}

	render() {
		const { newAppendixModalIsOpen, closeNewAppendixModal } = this.props
		// console.log(this.props)
		return (
			<div>
				<ModalWindow isOpen={newAppendixModalIsOpen} onRequestClose={closeNewAppendixModal} contentLabel="Tilføj tillæg">
					<ModalHeader>
						<ModalHeaderIcon>
							<Icon icon={iconname.ICON_ADD_CIRCLE} size={30} color={colors.MODAL_HEADER_ICON} active={true} />
						</ModalHeaderIcon>
						<ModalHeaderTitle>Tilføj kommuneplan tillæg</ModalHeaderTitle>
						<ModalHeaderClose onClick={(e) => { e.preventDefault(); closeNewAppendixModal() }}>
							<Icon icon={iconname.ICON_CLOSE} size={30} color={colors.MODAL_HEADER_ICON} active={true} />
						</ModalHeaderClose>
					</ModalHeader>
					<ModalContent>
						<FramesForm onSubmit={this.props.handleSubmit(this.submitUpdate)}>
							<FieldArray name={'fields'} component={renderFields} />
						</FramesForm>
						<ModalButtonPanel>
							<Button onClick={this.props.handleSubmit(this.submitUpdate)} icon={iconname.ICON_ADD_CIRCLE} size={18}>Opret nyt tillæg</Button>
						</ModalButtonPanel>
					</ModalContent>
				</ModalWindow>
			</div>
		)
	}
}

const mapStateToProps = (state, ownProps) => ({
	appendixIsSaving: state.eplan.appendixIsSaving || null,
	initialValues: {
		fields: state.eplan.conf ? state.eplan.conf.createFields : null
	} || null,
	conf: state.eplan.conf

})

function mapDispatchToProps(dispatch) {
	return {
		addApd: async (appendix) => {
			dispatch(await addAppendixAsync(appendix))
		},
	}
}

NewAppendixModal = reduxForm({
	form: 'eplan.NewAppendixModal',
	enableReinitialize: true
})(NewAppendixModal)

export default connect(mapStateToProps, mapDispatchToProps)(NewAppendixModal)
