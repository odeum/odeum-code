import React, { Component } from 'react'
/* Redux */
import { connect } from 'react-redux'
import { getFrameDataAsync, setFrameDataAsync } from 'app/store/modules/eplan'
import { getFrameFieldsSel } from 'app/store/selectors/eplan'
import { Field, FieldArray, reduxForm } from 'redux-form'

/* Framework */
import { tabChange } from 'framework/store/modules/tabs'

/* Styling */
import { PrimaryContainer, FieldLabel } from 'app/styles'
import { /* DescriptionDiv, */ PulseLoader, AppendixButtonPanel, FramesForm } from 'app/styles/EplanStyles'

/* Components */
import FormFieldInput from 'framework/components/ReduxForm/FormFieldInput'
import FormFieldTextarea from 'framework/components/ReduxForm/FormFieldTextarea'
import FormFieldSelect from 'framework/components/ReduxForm/FormFieldSelect'

import Button from 'framework/components/Widgets/Button'
import * as iconname from 'framework/assets/icons'

const required = value => (value ? undefined : 'Required')

let renderFields = ({ fields }) => {
	return (
		<div>
			{fields.map((field, index) => {
				let _field
				switch (fields.get(index).type) {
					case 'TEXT':
						_field = (fields.get(index).caption !== '') ? (
							<div key={fields.get(index).id}>
								<FieldLabel for={`${field}.value`}>{fields.get(index).caption}</FieldLabel>
								<Field name={`${field}.value`} type="text" component={FormFieldInput} label={fields.get(index).caption} validate={fields.get(index).mandatory ? [required] : []} />
							</div>
						) : ''
						break
					case 'TEXTAREA':
						_field = (fields.get(index).caption !== '') ? (
							<div key={fields.get(index).id}>
								<FieldLabel for={`${field}.value`}>{fields.get(index).caption}</FieldLabel>
								<Field name={`${field}.value`} type="text" component={FormFieldTextarea} label={fields.get(index).caption} validate={fields.get(index).mandatory ? [required] : []} />
							</div>
						) : ''
						break
					case 'SELECT':
						_field = (
							<div key={fields.get(index).id}>
								<FieldLabel for={`${field}.value`}>{fields.get(index).caption}</FieldLabel>
								<Field name={`${field}.value`} component={FormFieldSelect} label={fields.get(index).caption} validate={fields.get(index).mandatory ? [required] : []}>
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

class EditFrame extends Component {
	constructor(props) {
		super(props)

		/* Bind functions to this component */
		this.submitUpdate = this.submitUpdate.bind(this)
	}
	async componentWillMount() {
		if (this.props.openFrame === null) {
			await this.props.getFrameData(this.props.frameId)
		}
		// this.props.dispatch(initialize('EditFrame_form_' + this.props.frameId, this.props.initialValues, true))
	}

	componentWillReceiveProps(nextProps) {
	}

	componentWillUnmount = () => {
	}
	
	componentDidMount() {
		// this.props.dispatch(initialize('EditFrame_form_' + this.props.frameId, this.props.initialValues, true))
	}
	submitUpdate(values) {
		this.props.setFrameData(this.props.frameId, values.fields, this.props.openFrame)
	}


	render() {
		// this.props.dispatch(initialize('EditFrame_form_' + this.props.frameId, this.props.initialValues, true))
		return (
			<PrimaryContainer>
				{/* <DescriptionDiv>Small description placeholder</DescriptionDiv> */}
				<AppendixButtonPanel>
					<Button icon={iconname.ICON_CLOUD} size={18} >Exporter til plansystem</Button>
					{/* <Button icon={iconname.ICON_ADD_CIRCLE} size={18}>Knap 2</Button> */}
				</AppendixButtonPanel>
				{this.props.openFrame === null ? 
					<PulseLoader size="15px" color={'royalblue'} /> : 
					<PrimaryContainer>
						<FramesForm form={'EditFrame_form_' + this.props.frameId} onSubmit={this.props.handleSubmit(this.submitUpdate)}>
							<FieldArray name={'fields'} component={renderFields}/>
							<div>
							<Button type="button" onClick={this.props.handleSubmit(this.submitUpdate)} icon={iconname.ICON_CHECK_CIRCLE} size={18}>Gem ændringer</Button>
							</div>
						</FramesForm>
					</PrimaryContainer>
				}
				{/* <ReferenceTableSettingsModal
				settingsModalIsOpen={this.state.settingsModalIsOpen}
				closeSettingsModal={this.closeSettingsModal}
				saveSettingsModal={this.saveSettingsModal}
				referenceTableSelectValues={this.props.referenceTableSelectValues}
				referenceTableId={this.props.referenceTableId}
				 /> */}
				{/* <ReferenceTableEditModal
				editModalIsOpen={this.state.editModalIsOpen}
				editData={this.state.editData}
				closeEditModal={this.closeEditModal}
				saveEditModal={this.saveEditModal}
				referenceTableId={this.props.referenceTableId}
				 /> */}
				 
			</PrimaryContainer>

		)
	}
}

const mapStateToProps = (state, ownProps) => ({
	frameId: ownProps.frameId,
	openFrame: state.eplan.openFrames[ownProps.frameId] || null,
	form: 'EditFrame_form_' + ownProps.frameId,
	initialValues: {
		fields: getFrameFieldsSel(state, ownProps.frameId)
	} || null,
	conf: state.eplan.conf
})

function mapDispatchToProps(dispatch) {
	return {
		onMount: (id, param) => {
			dispatch(tabChange(id, param))
		},
		getFrameData: (frameId) => {
			dispatch(getFrameDataAsync(frameId))
		},
		setFrameData: (frameId, data, frameData) => {
			dispatch(setFrameDataAsync(frameId, data, frameData))
		},
		unMount: (param) => {
			//TODO Remove Open Appendix when *CLOSED* not when unmounted
			console.log(param)
			// dispatch(removeOpenApdx(param))
		},
		// publishToPlanSystem: async (id) => {
		// 	return dispatch(await exportAppendixToPlansystemAsync(id))
		// }
	}
}

EditFrame = reduxForm({
	destroyOnUnmount: false,
	keepDirtyOnReinitialize: true,
	enableReinitialize: true
})(EditFrame)

export default connect(mapStateToProps, mapDispatchToProps)(EditFrame)