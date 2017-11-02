import React, { Component } from 'react'
/* Redux */
import { connect } from 'react-redux'
import { push } from 'react-router-redux'

import {
	getAppendixAsync, updateAppendix,
	exportAppendixToPlansystemAsync
} from 'app/store/modules/eplan'

import { Field, reduxForm } from 'redux-form'

import {
	getAppendixEdit, getAppendix,
	getAppendixDates, getAppendixStatus, getAppendixPlanID
} from 'app/store/selectors/appendix'

/* Framework */
import { addTab, tabIsLoading, tabClose } from 'framework/store/modules/tabs'

/* Styling */
import { SecondaryContainer, IconButton } from 'app/styles'
import { AppendixHeader, DropdownSelect, ToastContainerStyled } from 'app/styles/EplanStyles'
import * as Icons from 'react-icons/lib/md'

/* Components */
import AppendixConfigModal from './AppendixConfigModal'
import { Flex, Box } from 'grid-styled'
import Appendix from 'app/components/eplan-appendix/Appendix/Appendix'
import ExportModal from 'app/components/eplan-appendix/Appendix/ExportModal'
import DeleteModal from 'app/components/eplan-appendix/Appendix/DeleteModal'
import { getAppendixPdf, createAppendixPdf } from 'app/data/eplan'
import { deleteAppendixAsync } from 'app/store/modules/eplan'
import FormPanel from 'app/components/eplan-appendix/Appendix/FormPanel'
import { toast } from 'react-toastify'
import fileDownload from 'js-file-download'

let renderFields = (props) => {
	let renderF = (fields) => {
		var Fields = []
		Object.keys(fields).map((field, index) => {
			return Fields.push(
				<div key={fields[field].id}>
					<Flex wrap>
						<Box width={[1, 1, 1, 1, 1]}>
							<Field index={index} name={`fields.${field}.value`} type="text" component={FormPanel} label={fields[field].mandatory ? fields[field].caption + ' *' : fields[field].caption} />
						</Box>
					</Flex>
				</div>
			)
		})
		return Fields
	}

	return (
		<div>
			{renderF(props.fields.getAll())}
		</div>
	)
}


class EditAppendix extends Component {
	tab = {
		id: 'tillaeg_tekst',
		label: "Tillægs tekst",
		location: "/eplan/list/" + this.props.param + "/edit",
		icon: "info",
		fixed: true,
		isLoading: true,
		closeLink: ''
	}
	constructor(props) {
		super(props)
		this.state = {
			configModalIsOpen: false,
			exportModalIsOpen: false,
			deleteModalIsOpen: false,
			pdfIsLoading: false
		}
	}

	componentWillMount() {
		this.props.onMount(
			this.props.param,
			this.tab
		)
	}
	componentDidUpdate(nextProps, nextState) {
		if (this.props.appendixIsLoading !== undefined) {
			if (this.props.appendixIsLoading !== true) {
				this.props.tabisLoading(this.props.param, this.tab, false)
			}
		}

	}
	async componentDidMount() {
		if (this.props.appendix === null) {
			await this.props.getAppendix(this.props.param)
		}
		if (this.props.appendixIsLoading !== true) {
			this.props.tabisLoading(this.props.param, this.tab, false)
		}
	}

	submitUpdate = async (values) => {
		await this.props.updateApd(values, this.props.param, false)
		toast.success('Dine ændringer er gemt')
	}

	submitUpdateAndCommit = async (values) => {
		await this.props.updateApd(values, this.props.param, true)
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

	openDeleteModal = () => {
		this.setState({
			deleteModalIsOpen: true
		})
	}

	closeDeleteModal = () => {
		this.setState({
			deleteModalIsOpen: false
		})
	}

	onClickDeleteAppendix = async () => {
		this.closeDeleteModal()
		let res = await this.props.deleteAppendix(this.props.appendix.appendixId)
		if (res.errors === 0 && res.result === 'Success') {
			this.props.closeTab('eplan', { id: res.appendixId })
		}
	}

	openConfigModal = () => {
		this.setState({
			configModalIsOpen: true
		})
	}

	closeConfigModal = () => {
		this.setState({
			configModalIsOpen: false
		})
	}

	saveConfigModal = async (values) => {
		this.setState({
			configModalIsOpen: false
		})
		var appendix = {
			fields: values.dates
		}

		// appendix.fields[values.status.id] = values.status
		console.log(appendix)
		await this.props.updateApd(appendix, this.props.param, false)
		toast.success('Dine ændringer er gemt')
	}

	handleActionChange = async (option) => {

		switch (option.value) {
			case 'plansettings':
				console.log('plansettings', option)
				this.openConfigModal()
				break
			case 'planexport':
				console.log('planexport', option)
				this.openExportModal()
				break
			case 'planviewpublic':
				console.log('planviewpublic', option)
				window.open(this.props.appendix.folderUrl, '_viewappendix')
				break
			case 'plandelete':
				console.log('plandelete', option)
				this.openDeleteModal()
				break
			case 'pdfcreate':
				console.log('pdfcreate', option)	
				this.setState({ pdfIsLoading: true })
				try {
					await createAppendixPdf(this.props.appendix.appendixId).then((response) => {
						if (response.errorcode) {
							toast.success(response.description)
						} else if (response.message) {
							toast.success(response.message)
						} else {
							//fileDownload(atob(response.result), 'test.pdf')
						}
					})
				} catch (e) {
					console.log('Error:' + e)
				}
				this.setState({ pdfIsLoading: false })
				break
			case 'pdfdownload':
				console.log('pdfdownload', option)
				this.setState({ pdfIsLoading: true })
				try {
					await getAppendixPdf(this.props.appendix.appendixId).then((response) => {
						if (response.errorcode) {
							toast.success(response.description)
						} else {
							fileDownload(atob(response.result), 'test.pdf')
						}
					})
				} catch (e) {
					console.log('Error:' + e)
				}
				this.setState({ pdfIsLoading: false })
				break
			default:
				console.log('default', option)
				break
		}

	}

	handlePdfChange = async (option) => {
		this.setState({ pdfIsLoading: true })
		if (option.value === 'create') {
			try {
				await createAppendixPdf(this.props.appendix.appendixId).then((response) => {
					if (response.errorcode) {
						alert(response.description)
					} else {
						fileDownload(atob(response.result), 'test.pdf')
					}
				})
			} catch (e) {
				console.log('Error:' + e)
			}
		} else if (option.value === 'download') {
			try {
				await getAppendixPdf(this.props.appendix.appendixId).then((response) => {
					if (response.errorcode) {
						alert(response.description)
					} else {
						fileDownload(atob(response.result), 'test.pdf')
					}
				})
			} catch (e) {
				console.log('Error:' + e)
			}
		}
		this.setState({ pdfIsLoading: false })
	}

	handleViewAppendix = (option) => {
		console.log(option)
		if (option.value === 'viewpublic') {
			window.open(this.props.appendix.folderUrl, '_viewappendix')
		}
	}

	onClickExportAppendix = async () => {
		document.getElementById('exportStepOne').style.display = 'none'
		document.getElementById('exportButton').style.display = 'none'
		document.getElementById('exportCloseButton').style.display = 'none'
		document.getElementById('exportStepTwo').style.display = 'block'
		document.getElementById('exportLoadingDiv').style.display = 'block'

		try {
			await this.props.exportToPlanSystem(this.props.appendix.appendixId).then((response) => {
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
		const { configModalIsOpen, exportModalIsOpen, deleteModalIsOpen } = this.state
		/* Props */
		const { appendix, handleSubmit, appendixDates, appendixStatus, appendixPlanID } = this.props
		/* Functions */
		const { submitUpdate, submitUpdateAndCommit, 
			closeConfigModal, saveConfigModal, onClickDeleteAppendix, closeDeleteModal,
			closeExportModal, onClickExportAppendix, handleActionChange } = this

		const actionOptions = [
			{ value: 'planheader', label: '--- PLAN ---', disabled: true },
			{ value: 'plansettings', label: 'Indstillinger' },
			{ value: 'planexport', label: 'Eksportér til plansystem' },
			{ value: 'planviewpublic', label: 'Vis offentlig udgave' },
			{ value: 'plandelete', label: 'Slet tillæg' },
			{ value: 'pdfheader', label: '--- PDF ---', disabled: true },
			{ value: 'pdfcreate', label: 'Opret PDF af tillæg' },
			{ value: 'pdfdownload', label: 'Download PDF' }
		]

		const statusOptions = [
			{ value: '-1', label: '' },
			{ value: "aflyst", label: "Aflyst" },
			{ value: "forslag", label: "Forslag" },
			{ value: "kladde", label: "Kladde" },
			{ value: "vedtaget", label: "Vedtaget" }
		]

		return (
			(appendix !== null && appendixDates !== undefined) ?
				(this.props.appendixIsSaving || this.state.pdfIsLoading) ? null :
					<SecondaryContainer>
						<Flex wrap>
							<Box width={[1, 1, 1, 9 / 12, 9 / 12]} mb={10}>
								<AppendixHeader>{appendix.name}</AppendixHeader>
							</Box>
							<Box width={[1, 1, 1, 3 / 12, 3 / 12]} mb={20}>
								<DropdownSelect
									className="pdfSelect"
									name="pdfSelect"
									value="one"
									options={actionOptions}
									onChange={handleActionChange}
									searchable={false}
									clearable={false}
									placeholder="Handlinger"
								/>
							</Box>
						</Flex>
						<AppendixConfigModal
							configModalIsOpen={configModalIsOpen}
							closeConfigModal={closeConfigModal}
							saveConfigModal={saveConfigModal}
							dates={appendixDates}
							status={appendixStatus}
							statusOptions={statusOptions}
							planID={appendixPlanID}
							appendixId={appendix.appendixId}
						/>
						<ExportModal
							exportModalIsOpen={exportModalIsOpen}
							closeExportModal={closeExportModal}
							appendix={appendix}
							onClickExportAppendix={onClickExportAppendix}
						/>
						<DeleteModal
							deleteModalIsOpen={deleteModalIsOpen}
							closeDeleteModal={closeDeleteModal}
							appendix={appendix}
							onClickDeleteAppendix={onClickDeleteAppendix}
						/>

						<ToastContainerStyled
							position="top-right"
							autoClose={5000}
							hideProgressBar={true}
							newestOnTop={true}
							closeOnClick
							pauseOnHover
						/>
						<Appendix appendix={appendix} handleSubmit={handleSubmit(submitUpdate)} handleSubmitAndCommit={handleSubmit(submitUpdateAndCommit)} renderFields={renderFields} />
					</SecondaryContainer>
				: null
		)
	}
}

const mapStateToProps = (state, ownProps) => ({
	param: ownProps.param,
	appendix: getAppendix(state, ownProps.param, ownProps) || null,
	initialValues: {
		fields: getAppendixEdit(state, ownProps.param, ownProps)
	},
	conf: state.eplan.conf,
	appendixIsSaving: state.eplan.appendixIsSaving,
	appendixDates: getAppendixDates(state, ownProps.param, ownProps),
	appendixStatus: getAppendixStatus(state, ownProps.param, ownProps),
	appendixPlanID: getAppendixPlanID(state, ownProps.param, ownProps),
	form: 'appendix_' + ownProps.param,
	appendixIsLoading: state.eplan.ApdxLoading[ownProps.param]
})

function mapDispatchToProps(dispatch) {
	return {
		onMount: (instanceID, tab) => {
			dispatch(addTab(instanceID, tab))
		},
		closeTab: (instanceID, tab) => {
			dispatch(tabClose(instanceID, tab))
			dispatch(push('/eplan/list/'))
		},
		getAppendix: async (param) => {
			await dispatch(getAppendixAsync(param))
		},
		updateApd: async (appendix, id, commit) => {
			await dispatch( updateAppendix(appendix, id, commit))
		},
		exportToPlanSystem: async (id) => {
			return await dispatch(exportAppendixToPlansystemAsync(id))
		},
		deleteAppendix: async (id) => {
			return await dispatch(deleteAppendixAsync(id))
		},
		tabisLoading: (id, tab, isLoading) => {
			dispatch(tabIsLoading(id, tab, isLoading))
		}
	}
}

EditAppendix = reduxForm({
	enableReinitialize: true,
	destroyOnUnmount: false,
	keepDirtyOnReinitialize: true
})(EditAppendix)

export default connect(mapStateToProps, mapDispatchToProps)(EditAppendix)