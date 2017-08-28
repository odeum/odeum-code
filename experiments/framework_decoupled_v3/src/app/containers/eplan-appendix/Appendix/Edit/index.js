import React, { Component } from 'react'
/* Redux */
import { connect } from 'react-redux'
import { getAppendixAsync, updateAppendix, removeOpenApdx, exportAppendixToPlansystemAsync } from 'app/store/modules/eplan'
import { Field, reduxForm } from 'redux-form'
import { getAppendixSel, getAppendix, getAppendixDates } from 'app/store/selectors/eplan'

/* Framework */
import { tabChange } from 'framework/store/modules/tabs'

/* Styling */
import { SecondaryContainer, IconButton } from 'app/styles'
import { Animation, AppendixHeader, PulseLoader, DropdownSelect, ToastContainerStyled } from 'app/styles/EplanStyles'
import * as Icons from 'react-icons/lib/md'

/* Components */
import AppendixConfigModal from './AppendixConfigModal'
// import moment from 'moment'
// import { renderQuill } from '../EditorSelector'
import { Flex, Box } from 'grid-styled'
import Appendix from 'app/components/eplan-appendix/Appendix/Appendix'
// import SettingsModal from 'app/components/eplan-appendix/Appendix/SettingsModal'
import ExportModal from 'app/components/eplan-appendix/Appendix/ExportModal'
// import AppendixPdfModal from 'app/components/eplan-appendix/Appendix/AppendixPdfModal'
// import SaveModal from 'app/components/eplan-appendix/Appendix/Save'
import { getCompleteAppendixPdf, createCompleteAppendixPdf } from 'app/data/eplan'
import FormPanel from 'app/components/eplan-appendix/Appendix/FormPanel'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

var fileDownload = require('react-file-download')

let renderFields = ({ fields }) => {
	return (
		<div>
			{fields.map((field, index) => {
				return (
					<div key={fields.get(index).id}>
						<Flex wrap>
							<Box width={[1, 1, 1, 1, 7 / 12]}>
								<Field index={index} name={`${field}.value`} type="text" component={FormPanel} label={fields.get(index).caption} />
								{/* <FormPanel index={index} input={fields.get(index)} /> */}
								{/* name={`${field}.value`} label={fields.get(index).caption} */}

							</Box>
						</Flex>
					</div>
				)
			})}
		</div>
	)
}

class EditAppendix extends Component {
	constructor(props) {
		super(props)
		this.state = {
			configModalIsOpen: false,
			exportModalIsOpen: false,
			pdfIsLoading: false,
			// pdfModalIsOpen: false,
			// pdfFile: '',
			dates: []
		}
		/* Bind functions to this component */
		this.submitUpdate = this.submitUpdate.bind(this)
		this.submitUpdateAndCommit = this.submitUpdateAndCommit.bind(this)
		this.openConfigModal = this.openConfigModal.bind(this)
		this.closeConfigModal = this.closeConfigModal.bind(this)
		this.saveConfigModal = this.saveConfigModal.bind(this)
		this.openExportModal = this.openExportModal.bind(this)
		this.closeExportModal = this.closeExportModal.bind(this)
		// this.handleDateChange = this.handleDateChange.bind(this)
		this.onClickExportAppendix = this.onClickExportAppendix.bind(this)
		this.handlePdfChange = this.handlePdfChange.bind(this)
		this.handleViewAppendix = this.handleViewAppendix.bind(this)
		// this.openPdfModal = this.openPdfModal.bind(this)
		// this.closePdfModal = this.closePdfModal.bind(this)
		// this.setDates = this.setDates.bind(this)
	}

	componentWillMount() {
		this.props.onMount(
			this.props.param,
			"Tillægs tekst"
		)
		this.props.reset()
	}
	componentWillUpdate(nextProps, nextState) {
		if (nextProps !== this.props)
			console.log(nextProps)
	}

	componentWillUnmount() {
		this.props.reset()
	}

	async componentDidMount() {
		if (this.props.appendix === null) {
			await this.props.getAppendix(this.props.param)
		}
	}

	async submitUpdate(values) {
		await this.props.updateApd(values, this.props.param, false)
		toast.success('Dine ændringer er gemt')
	}

	async submitUpdateAndCommit(values) {
		await this.props.updateApd(values, this.props.param, true)
		toast.success('Dine ændringer er gemt')
	}

	openExportModal() {
		this.setState({
			exportModalIsOpen: true
		})
	}

	closeExportModal() {
		this.setState({
			exportModalIsOpen: false
		})
	}

	// openPdfModal() {
	// 	this.setState({
	// 		pdfModalIsOpen: true
	// 	})
	// }

	// closePdfModal() {
	// 	this.setState({
	// 		pdfModalIsOpen: false
	// 	})
	// }
	openConfigModal() {
		this.setState({
			configModalIsOpen: true
		})
	}

	closeConfigModal() {
		this.setState({
			configModalIsOpen: false
		})
	}

	async saveConfigModal(values) {
		//TODO: Save changes
		// console.log(values.dates)
		this.setState({
			configModalIsOpen: false
		})
		var appendix = {
			fields: values.dates
		}


		//await this.props.updateApd()
		await this.props.updateApd(appendix, this.props.param, false)
		//console.log('saveconfigmodal', appendix)
	}
	/* 	handleDateChange(date, id) {
			var newDate = { id: id, ...date }
			var newArray = this.state.dates
			newArray.push(newDate)
			this.setState({
				dates: newArray
			})
			console.log('-----date-----')
			console.log(this.state.dates)
		} */

	async handlePdfChange(option) {
		this.setState({ pdfIsLoading: true })
		if (option.value === 'create') {
			try {
				await createCompleteAppendixPdf(this.props.appendix.appendixId).then((response) => {
					if (response.errorcode) {
						alert(response.description)
					} else {
						// this.setState({ pdfFile: response })
						// this.openPdfModal()
						fileDownload(atob(response.result), 'test.pdf')
					}
				})
			} catch (e) {
				console.log('Error:' + e)
			}
		} else if (option.value === 'download') {
			try {
				await getCompleteAppendixPdf(this.props.appendix.appendixId).then((response) => {
					if (response.errorcode) {
						alert(response.description)
					} else {
						// this.setState({ pdfFile: response })
						// this.openPdfModal()
						fileDownload(atob(response.result), 'test.pdf')
					}
				})
			} catch (e) {
				console.log('Error:' + e)
			}
		}
		this.setState({ pdfIsLoading: false })
	}

	handleViewAppendix(option) {
		if (option.value === 'viewpublic') {
			window.open(this.props.appendix.folderUrl, '_viewappendix')
		}
	}

	async onClickExportAppendix() {
		document.getElementById('exportStepOne').style.display = 'none'
		document.getElementById('exportButton').style.display = 'none'
		document.getElementById('exportCloseButton').style.display = 'none'
		document.getElementById('exportStepTwo').style.display = 'block'
		document.getElementById('exportLoadingDiv').style.display = 'block'

		try {
			await this.props.exportToPlanSystem(this.props.appendix.appendixId).then((response) => {
				//console.log('Export result this:', response)

				document.getElementById('exportLoadingDiv').style.display = 'none'
				document.getElementById('exportCloseButton').style.display = 'block'

				if (response.errors === 0) {
					document.getElementById('exportStatusText').innerText = 'Tillæget blev indmeldt korrekt'
				} else {
					document.getElementById('exportStatusText').innerText = 'Tillæget blev ikke indmeldt, fik følgende fejl: ' + response.result
				}
			})
		} catch (e) {
			console.log('Error:' + e)
		}
	}
	onDocumentComplete = (pages) => {
		this.setState({ page: 1, pages })
	}

	onPageComplete = (page) => {
		this.setState({ page })
	}

	handlePrevious = () => {
		this.setState({ page: this.state.page - 1 })
	}

	handleNext = () => {
		this.setState({ page: this.state.page + 1 })
	}

	handlePdfDownload = () => {
		alert('Download PDF')
	}

	renderPagination = (page, pages) => {
		let previousButton = <IconButton style={{ float: 'left' }} className="previous" onClick={this.handlePrevious}><Icons.MdArrowBack size="60" color="#3b97d3" /></IconButton>
		if (page === 1) {
			previousButton = ''
		}
		let nextButton = <IconButton style={{ float: 'right' }} className="next" onClick={this.handleNext}><Icons.MdArrowForward size="60" color="#3b97d3" /></IconButton>
		if (page === pages) {
			nextButton = ''
		}
		let downloadButton = <IconButton style={{ textAlign: 'center' }} className="next" onClick={this.handlePdfDownload}><Icons.MdFileDownload size="60" color="#3b97d3" /></IconButton>
		return (
			<div style={{ marginBottom: '20px' }}>
				<Flex wrap>
					<Box width={[4 / 12]}>
						{previousButton}
					</Box>
					<Box width={[4 / 12]}>
						{downloadButton}
					</Box>
					<Box width={[4 / 12]}>
						{nextButton}
					</Box>
				</Flex>
			</div>
		)
	}

	render() {
		/* State */
		// , pdfModalIsOpen, pdfFile, page
		const { configModalIsOpen, exportModalIsOpen } = this.state
		/* Props */
		const { appendix, handleSubmit, appendixDates } = this.props
		/* Functions */
		const { submitUpdate, submitUpdateAndCommit, openConfigModal, openExportModal,
			closeConfigModal, saveConfigModal,
			closeExportModal, onClickExportAppendix, handlePdfChange,
			handleViewAppendix } = this
		// closePdfModal, onDocumentComplete, onPageComplete
		const pdfOptions = [
			{ value: 'create', label: 'Opret PDF af tillæg' },
			{ value: 'download', label: 'Download PDF' }
		]
		const viewOptions = [
			{ value: 'viewpublic', label: 'Vis offentlig udgave' }
		]

		// let pagination = null
		// if (this.state.pages) {
		// 	pagination = this.renderPagination(this.state.page, this.state.pages)
		// }

		const statusOptions = [
			{ value: '1', label: 'Kladde' },
			{ value: '2', label: 'Udkast' },
			{ value: '3', label: 'Intern høring' },
			{ value: '4', label: 'Forslag' }
		]

		return (
			<SecondaryContainer>
				{appendix !== null && appendixDates !== undefined ?

					<Animation>
						{this.props.appendixIsSaving || this.state.pdfIsLoading ? <PulseLoader color="royalblue" /> :
							<div>
								<div>
									<Flex wrap>
										<Box width={[1, 1, 1, 1, 8 / 12]} mb={10}>
											<AppendixHeader>{appendix.name}</AppendixHeader>
										</Box>
										<Box width={[1, 1, 1, 1, 4 / 12]} mb={20}>
											<Flex wrap>
												<Box width={[1, 1, 1, 1, 9 / 12]}>
													<Flex wrap>
														<Box width={[1, 1, 1, 1, 6 / 12]} pb={[15, 15, 15, 15, 0]} pr={[0, 0, 0, 0, 15]}>
															<DropdownSelect
																className="pdfSelect"
																name="pdfSelect"
																value="one"
																options={pdfOptions}
																onChange={handlePdfChange}
																searchable={false}
																clearable={false}
																placeholder="PDF"
															/>
															{/* 															<CustomDD label="Se PDF">
																<h3>See PDF</h3>
																<h3>Download PDF</h3>
															</CustomDD> */}
														</Box>
														<Box width={[1, 1, 1, 1, 6 / 12]} pb={[15, 15, 15, 15, 0]} pl={[0, 0, 0, 0, 15]}>
															<DropdownSelect
																className="viewAppendixSelect"
																name="viewAppendixSelect"
																value="one"
																options={viewOptions}
																onChange={handleViewAppendix}
																searchable={false}
																clearable={false}
																placeholder="Vis plan"
															/>
														</Box>
													</Flex>
												</Box>
												<Box width={[1, 1, 1, 1, 3 / 12]}>
													<IconButton onClick={openConfigModal} style={{ float: 'right' }}><Icons.MdSettings size="40" color="#3b97d3" /></IconButton>
													<IconButton onClick={openExportModal} style={{ float: 'right' }}><Icons.MdCloudUpload size="40" color="#3b97d3" /></IconButton>
												</Box>
											</Flex>
										</Box>
									</Flex>
								</div>
								<AppendixConfigModal
									configModalIsOpen={configModalIsOpen}
									closeConfigModal={closeConfigModal}
									saveConfigModal={saveConfigModal}
									dates={appendixDates}
									statusOptions={statusOptions} />
								<ExportModal
									exportModalIsOpen={exportModalIsOpen}
									closeExportModal={closeExportModal}
									appendix={appendix}
									onClickExportAppendix={onClickExportAppendix}
								/>
								{/* <AppendixPdfModal
									pdfModalIsOpen={pdfModalIsOpen}
									closePdfModal={closePdfModal}
									onDocumentComplete={onDocumentComplete}
									onPageComplete={onPageComplete}
									page={page}
									pagination={pagination}
									pdfFile={pdfFile}
								/> */}
								<ToastContainerStyled
									position="top-right"
									autoClose={5000}
									hideProgressBar={true}
									newestOnTop={true}
									closeOnClick
									pauseOnHover
								/>
								<Appendix appendix={appendix} handleSubmit={handleSubmit(submitUpdate)} handleSubmitAndCommit={handleSubmit(submitUpdateAndCommit)} renderFields={renderFields} />
							</div>}
					</Animation>
					: <PulseLoader color="royalblue" />
				}
			</SecondaryContainer>
		)
	}
}

const mapStateToProps = (state, ownProps) => ({
	param: ownProps.param,
	appendix: getAppendix(state, ownProps.param, ownProps) || null,
	initialValues: {
		fields: getAppendixSel(state, ownProps.param, ownProps)
	} || null,
	conf: state.eplan.conf,
	appendixIsSaving: state.eplan.appendixIsSaving,
	appendixDates: getAppendixDates(state, ownProps.param, ownProps)
})

function mapDispatchToProps(dispatch) {
	return {
		onMount: (instanceID, param) => {
			dispatch(tabChange(instanceID, param))
		},
		getAppendix: async (param) => {
			dispatch(await getAppendixAsync(param))
		},
		updateApd: async (appendix, id, commit) => {
			dispatch(await updateAppendix(appendix, id, commit))
		},
		unMount: (param) => {
			//TODO Remove Open Appendix when *CLOSED* not when unmounted
			dispatch(removeOpenApdx(param))
		},
		exportToPlanSystem: async (id) => {
			return dispatch(await exportAppendixToPlansystemAsync(id))
		}
	}
}

EditAppendix = reduxForm({
	form: 'appendix',
	enableReinitialize: true
})(EditAppendix)

export default connect(mapStateToProps, mapDispatchToProps)(EditAppendix)