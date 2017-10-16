import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm, FieldArray } from 'redux-form'
import 'react-datepicker/dist/react-datepicker.css'
import { ModalWindow, ModalHeader, ModalContent, ModalHeaderIcon, ModalHeaderTitle, ModalHeaderClose, ModalButtonPanel } from 'framework/components/styles/ModalStyles'
import { DropdownSelect, DatePickerStyled, DatePickerStyledWrapper } from 'app/styles/EplanStyles'
import { FieldLabel } from 'app/styles/'
import Button from 'framework/components/Widgets/Button'
import * as iconname from 'framework/assets/icons'
import * as colors from 'framework/assets/colors'
import Icon from 'framework/assets/Icon'
import { Flex, Box } from 'grid-styled'
import moment from 'moment'
import 'moment/locale/da'

let renderDropdownStatus = ({ statusOptions, input }) => {
	let onChng = (value) => {
		input.onChange(value.value)
	}
	console.log(input)
	return <DropdownSelect
		className="statusSelect"
		name="status"
		value={input.value}
		options={statusOptions}
		searchable={false}
		clearable={false}
		placeholder="Vælg status"
		onChange={onChng}
	/>
}

/* let renderFields = (props) => {
	let renderF = (fields) => {
		var Fields = []
		Object.keys(fields).map((field, index) => {
			return Fields.push(
				<div key={fields[field].id}>
					<Flex wrap>
						<Box width={[1, 1, 1, 1, 7 / 12]}>
							<Field index={index} name={`fields.${field}.value`} type="text" component={FormPanel} label={fields[field].mandatory ? fields[field].caption + ' *' : fields[field].caption} />
						</Box>
					</Flex>
				</div>
			)
		})
		return Fields
	} */
let renderFields = ({ fields }) => {
	// console.log(fields.getAll())
	var allFields = fields.getAll()
	var DateFields = []
	Object.keys(allFields).map((field, index) => {
		// console.log('-----field,index-----')
		// console.log(field, index)
		return DateFields.push(
			<DatePickerStyledWrapper key={allFields[field].id}>
				<FieldLabel for="name">{allFields[field].caption}</FieldLabel>
				<Field index={index} name={`dates.${field}.value`} type="text" component={renderForm} />
			</DatePickerStyledWrapper>
		)
	})
	return (
		<Box>
			{DateFields}
		</Box>
	)
}
let renderForm = ({ input }) => {
	// console.log(input)
	let pickDate = (value) => {
		input.onChange(value !== null ? value.format() : '')
	}
	/* (value, event) => {
				input.onChange(value !== null ? value.format() : '')
			} */
	return (
		<DatePickerStyled
			selected={dateChecker(input.value)}
			autoOk={true}
			dateFormat="DD/MM/YYYY"
			showWeekNumbers
			onChange={pickDate}
		/>
	)
}
function dateChecker(date) {
	var momentDate = moment(date)
	return momentDate._isValid ? momentDate : null
}
class AppendixConfigModal extends Component {
	constructor(props) {
		super(props)
		this.dateChecker = this.dateChecker.bind(this)
	}
	dateChecker(date) {
		var momentDate = moment(date)
		return momentDate._isValid ? momentDate : null
	}
	render() {
		// console.log('-----this.props-----')
		// console.log(this.props)
		const { configModalIsOpen, closeConfigModal, statusOptions, handleStatusChange, saveConfigModal } = this.props
		return (
			<div>
				{this.props.dates !== undefined ?
					<ModalWindow isOpen={configModalIsOpen} onRequestClose={closeConfigModal} contentLabel="Indstillinger">
						<ModalHeader>
							<ModalHeaderIcon>
								<Icon icon={iconname.ICON_SETTINGS} size={30} color={colors.MODAL_HEADER_ICON} active={true} />
							</ModalHeaderIcon>
							<ModalHeaderTitle>Indstillinger</ModalHeaderTitle>
							<ModalHeaderClose onClick={closeConfigModal}>
								<Icon icon={iconname.ICON_CLOSE} size={30} color={colors.MODAL_HEADER_ICON} active={true} />
							</ModalHeaderClose>
						</ModalHeader>
						<ModalContent>
							<form>
								<Flex wrap>
									<Box width={[1 / 2]}>
										<FieldLabel for="name">Vælg fase:</FieldLabel>
										{/* <DropdownSelect
											className="status"
											name="status"
											value="one	"
											options={statusOptions}
											onChange={handleStatusChange}
											searchable={false}
											clearable={false}
											placeholder="Vælg status"
										/>  */}
										<Field
											name="status.value"
											component={renderDropdownStatus}
											handleStatusChange={handleStatusChange}
											statusOptions={statusOptions}
											label='Dropdown Status'
											value="value"
										/>
										<FieldArray name={'dates'} component={renderFields} />

									</Box>
								</Flex>
							</form>
							<ModalButtonPanel>
								<Button onClick={this.props.handleSubmit(saveConfigModal)} icon={iconname.ICON_CHECK_CIRCLE} size={18}>Gem ændringer</Button>
							</ModalButtonPanel>
						</ModalContent>
					</ModalWindow> : null}
			</div>
		)
	}
}

const mapStateToProps = (state, ownProps) => {
	// console.log('---OwnProps.Status---')
	// console.log(ownProps.status)
	return ({
		initialValues: { dates: ownProps.dates, status: ownProps.status },
		form: 'appendixDates_' + ownProps.appendixId
	})
}
function mapDispatchToProps(dispatch) {
	return {
		onMount: (instanceID, param) => {
		}
	}
}

AppendixConfigModal = reduxForm({
	enableReinitialize: true,
	destroyOnUnmount: false,
	keepDirtyOnReinitialize: true
})(AppendixConfigModal)

export default connect(mapStateToProps, mapDispatchToProps)(AppendixConfigModal)