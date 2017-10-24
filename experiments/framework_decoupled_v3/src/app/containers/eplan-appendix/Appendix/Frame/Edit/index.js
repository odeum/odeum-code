import React, { Component } from 'react'
/* Redux */
import { connect } from 'react-redux'
import { getFrameDataAsync, setFrameDataAsync, getAppendixAsync, exportFrameToPlansystemAsync } from 'app/store/modules/eplan'
import { getFramesFields, openFrames, getFrameMetaData } from 'app/store/selectors/frames'
// import { getAppendix } from 'app/store/selectors/appendix'
import { Field, FieldArray, reduxForm } from 'redux-form'

/* Framework */
import { addTab, tabIsLoading } from 'framework/store/modules/tabs'

/* Styling */
import { PrimaryContainer, FieldLabel } from 'app/styles'
import { /* DescriptionDiv, */ AppendixButtonPanel, FramesForm, ToastContainerStyled } from 'app/styles/EplanStyles'

/* Components */
import FormFieldInput from 'framework/components/ReduxForm/FormFieldInput'
import FormFieldTextarea from 'framework/components/ReduxForm/FormFieldTextarea'
import FormFieldSelect from 'framework/components/ReduxForm/FormFieldSelect'
import ExportModal from 'app/components/eplan-appendix/Frames/ExportModal'


import Button from 'framework/components/Widgets/Button'
import * as iconname from 'framework/assets/icons'

import { toast } from 'react-toastify'

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
								<FieldLabel for={`${field}.value`}>{fields.get(index).caption}{fields.get(index).mandatory ? ' *' : ''}</FieldLabel>
								<Field name={`${field}.value`} type="text" component={FormFieldInput} label={fields.get(index).caption} validate={fields.get(index).mandatory ? [required] : []} />
							</div>
						) : ''
						break
					case 'TEXTAREA':
						_field = (fields.get(index).caption !== '') ? (
							<div key={fields.get(index).id}>
								<FieldLabel for={`${field}.value`}>{fields.get(index).caption}{fields.get(index).mandatory ? ' *' : ''}</FieldLabel>
								<Field name={`${field}.value`} type="text" component={FormFieldTextarea} label={fields.get(index).caption} validate={fields.get(index).mandatory ? [required] : []} />
							</div>
						) : ''
						break
					case 'SELECT':
						_field = (
							<div key={fields.get(index).id}>
								<FieldLabel for={`${field}.value`}>{fields.get(index).caption}{fields.get(index).mandatory ? ' *' : ''}</FieldLabel>
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
	tab = {
		id: this.props.frameId,
		label: "",
		location: '/eplan/list/' + this.props.appendixId + '/frames/' + this.props.frameId + '/edit',
		icon: 'mode_edit',
		fixed: false,
		isLoading: false,
		closeLink: '/eplan/list/' + this.props.appendixId + '/frames'
	}

	constructor(props) {
		super(props)
		this.state = {
			exportModalIsOpen: false,
			blank: null
		}
	}
	async componentWillMount() {
		const { appendixId, frameId } = this.props
		this.props.onMount(appendixId, this.tab)
		this.props.tabisLoading(appendixId, this.tab, true)
		await this.props.getAppendix(appendixId)
		await this.props.getFrameData(frameId)
		if (this.props.openFrame !== null) {
			this.tab.label = this.props.openFrame.name
			this.props.onMount(appendixId, this.tab)
			this.props.tabisLoading(appendixId, this.tab, false)
		}
	}

	submitUpdate = (values) => {
		this.props.setFrameData(this.props.frameId, values.fields, this.props.openFrame)
		toast.success('Dine ændringer er gemt')
	}

	openExportModal = () => {
		this.setState({
			exportModalIsOpen: true
		})
	}

	closeExportModal = () => {
		this.setState({
			exportModalIsOpen: false
		})
	}
	onClickExportFrame = async () => {
		document.getElementById('exportStepOne').style.display = 'none'
		document.getElementById('exportButton').style.display = 'none'
		document.getElementById('exportCloseButton').style.display = 'none'
		document.getElementById('exportStepTwo').style.display = 'block'
		document.getElementById('exportLoadingDiv').style.display = 'block'

		try {
			await this.props.exportToPlanSystem(this.props.frameId).then((response) => {
				document.getElementById('exportLoadingDiv').style.display = 'none'
				document.getElementById('exportCloseButton').style.display = 'block'

				console.log('onClickExportFrame', response)
				if (response.errors === 0) {
					document.getElementById('exportStatusText').innerText = 'Rammen blev indmeldt korrekt'
				} else {
					document.getElementById('exportStatusText').innerText = 'Rammen blev ikke indmeldt, fik følgende fejl: ' + response.result
				}
			})
		} catch (e) {
			console.log('Error:' + e)
		}
	}

	render() {
		return (
			<PrimaryContainer>
				<AppendixButtonPanel>
					<Button icon={iconname.ICON_CLOUD} onClick={this.openExportModal} size={18} >Exporter til plansystem</Button>
				</AppendixButtonPanel>
				{this.props.openFrame === null || this.props.appendix === null ?
					null :
					<PrimaryContainer>
						<FramesForm form={'EditFrame_form_' + this.props.frameId} onSubmit={this.props.handleSubmit(this.submitUpdate)}>
							<FieldArray name={'fields'} component={renderFields} />
							<div>
								<Button type="button" onClick={this.props.handleSubmit(this.submitUpdate)} icon={iconname.ICON_CHECK_CIRCLE} size={18}>Gem ændringer</Button>
							</div>
						</FramesForm>
					</PrimaryContainer>
				}
				 <ExportModal
					exportModalIsOpen={this.state.exportModalIsOpen}
					closeExportModal={this.closeExportModal}
					frame={this.props.openFrame}
					appendix={this.props.appendix}
					onClickExportFrame={this.onClickExportFrame}
				/>
				<ToastContainerStyled
					position="top-right"
					autoClose={5000}
					hideProgressBar={true}
					newestOnTop={true}
					closeOnClick
					pauseOnHover
				/>
			</PrimaryContainer>

		)
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		appendixId: ownProps.params.id,
		frameId: ownProps.params.frameid,
		appendix: state.eplan.openAppendix[ownProps.params.id] || null,
		openFrame: openFrames(state, ownProps.params.frameid) || null,
		form: 'EditFrame_form_' + ownProps.params.frameid,
		initialValues: {
			fields: getFramesFields(state, ownProps.params.frameid)
		} || null,
		conf: state.eplan.conf,
		framemeta: getFrameMetaData(state, ownProps.params.id, ownProps.params.frameid)
	}
}

function mapDispatchToProps(dispatch) {
	return {
		onMount: (id, tab) => {
			dispatch(addTab(id, tab))
			// dispatch(tabChange(id, tab.label))
		},
		getAppendix: async (appendixId) => {
			await dispatch(getAppendixAsync(appendixId))
		},
		getFrameData: async (frameId) => {
			return await dispatch(getFrameDataAsync(frameId))
		},
		setFrameData: async (frameId, data, frameData) => {
			await dispatch(setFrameDataAsync(frameId, data, frameData))
		},
		exportToPlanSystem: async (id) => {
			return await dispatch(exportFrameToPlansystemAsync(id))
		},
		tabisLoading: (id, tab, isLoading) => {
			dispatch(tabIsLoading(id, tab, isLoading))
		}
	}
}

EditFrame = reduxForm({
	destroyOnUnmount: false,
	keepDirtyOnReinitialize: true,
	enableReinitialize: true
})(EditFrame)

export default connect(mapStateToProps, mapDispatchToProps)(EditFrame)