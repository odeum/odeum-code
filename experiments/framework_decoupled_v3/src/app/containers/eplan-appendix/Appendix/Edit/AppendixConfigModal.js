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

let renderFields = ({ fields }) => {
	return (
		<Box>
			{fields.map((field, index) => {
				return (
						<DatePickerStyledWrapper key={fields.get(index).id}>
							<FieldLabel for="name">{fields.get(index).caption}</FieldLabel>
							<Field index={index} name={`${field}.value`} type="text" component={renderForm} />
						</DatePickerStyledWrapper>
				)
			})}

		</Box>
	)
}
let renderForm = ({ input }) => {
	// console.log(input)
	return (
		<DatePickerStyled
			selected={dateChecker(input.value)}
			autoOk={true}
			dateFormat="DD/MM/YYYY"
			showWeekNumbers
			onChange={(value, event) => {
				input.onChange(value !== null ? value.format() : '')
			}
			}
		/>
	)
}
function dateChecker(date) {
	// console.log(date)
	var momentDate = moment(date)
	return momentDate._isValid ? momentDate : null
}
class AppendixConfigModal extends Component {
	constructor(props) {
		super(props)
		this.dateChecker = this.dateChecker.bind(this)
		// console.log(props)
	}
	dateChecker(date) {
		var momentDate = moment(date)
		return momentDate._isValid ? momentDate : null
	}
	render() {
		// const { dateChecker } = this
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
							<ModalHeaderClose onClick={(e) => { e.preventDefault(); closeConfigModal() }}>
								<Icon icon={iconname.ICON_CLOSE} size={30} color={colors.MODAL_HEADER_ICON} active={true} />
							</ModalHeaderClose>
						</ModalHeader>
						<ModalContent>
							<form>
								<Flex wrap>
									<Box width={[1 / 2]}>
									<FieldLabel for="name">Vælg fase:</FieldLabel>
										<DropdownSelect
											className="statusSelect"
											name="statusSelect"
											value="one"
											options={statusOptions}
											onChange={handleStatusChange}
											searchable={false}
											clearable={false}
											placeholder="Vælg status"
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

const mapStateToProps = (state, ownProps) => ({
	initialValues: { dates: ownProps.dates }
})

function mapDispatchToProps(dispatch) {
	return {
		onMount: (instanceID, param) => {
		}
	}
}

AppendixConfigModal = reduxForm({
	form: 'appendixDates',
	enableReinitialize: true
})(AppendixConfigModal)

export default connect(mapStateToProps, mapDispatchToProps)(AppendixConfigModal)