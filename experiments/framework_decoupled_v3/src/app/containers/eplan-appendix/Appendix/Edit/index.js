import React, { Component } from 'react'
/* Redux */
import { connect } from 'react-redux'
import { getAppendixAsync, updateAppendix, removeOpenApdx, publishAppendixToPlansystemAsync } from 'app/store/modules/eplan'
import { Field, reduxForm } from 'redux-form'
import { getAppendixSel, getAppendix } from 'app/store/selectors/eplan'

/* Framework */
import { tabChange } from 'framework/store/modules/tabs'

/* Styling */
import { WHDiv } from 'app/styles'
import { AppendixButtonPanel, AppendixButtonPanelDiv, PulseLoader } from 'app/styles/EplanStyles'
import { Animation } from 'app/styles/EplanStyles'
import * as Icons from 'react-icons/lib/md'

/* Components */
import moment from 'moment'
import { renderQuill } from '../EditorSelector'
import Appendix from 'app/components/eplan-appendix/Appendix/Appendix'
import Settings from 'app/components/eplan-appendix/Appendix/Settings'
import Publish from 'app/components/eplan-appendix/Appendix/Publish'
import { getCompleteAppendixPdf, createCompleteAppendixPdf } from 'app/data/eplan'
import Select from 'react-select'
import 'react-select/dist/react-select.css'

let renderFields = ({ fields }) => {
  return (
    <div>
      {fields.map((field, index) => {
        return (
          <Field key={fields.get(index).id} name={`${field}.value`} type="text" component={renderQuill} label={fields.get(index).caption} />)
      })}
    </div>
  )
}

class EditAppendix extends Component {
  constructor(props) {
    super(props)
    this.state = {
      configModalIsOpen: false,
      publishModalIsOpen: false,
      dates: {
        date1: moment(),
        date2: moment(),
        date3: moment(),
        date4: moment(),
        date5: moment(),
        date6: moment(),
        date7: moment()
      }
    }

    /* Bind functions to this component */
    this.submitUpdate = this.submitUpdate.bind(this)
    this.openConfigModal = this.openConfigModal.bind(this)
    this.closeConfigModal = this.closeConfigModal.bind(this)
    this.saveConfigModal = this.saveConfigModal.bind(this)
    this.openPublishModal = this.openPublishModal.bind(this)
    this.closePublishModal = this.closePublishModal.bind(this)
    this.handleDateChange = this.handleDateChange.bind(this)
    this.onClickPublishAppendix = this.onClickPublishAppendix.bind(this)
    this.handlePdfChange = this.handlePdfChange.bind(this)
    this.handleViewAppendix = this.handleViewAppendix.bind(this)
  }
  
  componentWillMount() {
    this.props.onMount(
      this.props.param,
      "Tillægs tekst"
    )
  }
  
  async componentDidMount() {
    await this.props.getAppendix(this.props.param)
  }

  submitUpdate(values) {
    this.props.updateApd(values, this.props.param)
  }
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
  saveConfigModal() {
    //TODO: Save changes
    this.setState({
      configModalIsOpen: false
    })
  }
  openPublishModal() {
    this.setState({
      publishModalIsOpen: true
    })
  }
  closePublishModal() {
    this.setState({
      publishModalIsOpen: false
    })
  }
  handleDateChange(date, id) {
    if (id === 'date1') {
      this.setState({ dates: { ...this.state.dates, date1: date } })
    } else if (id === 'date2') {
      this.setState({ dates: { ...this.state.dates, date2: date } })
    } else if (id === 'date3') {
      this.setState({ dates: { ...this.state.dates, date3: date } })
    } else if (id === 'date4') {
      this.setState({ dates: { ...this.state.dates, date4: date } })
    } else if (id === 'date5') {
      this.setState({ dates: { ...this.state.dates, date5: date } })
    } else if (id === 'date6') {
      this.setState({ dates: { ...this.state.dates, date6: date } })
    } else if (id === 'date7') {
      this.setState({ dates: { ...this.state.dates, date7: date } })
    }
  }
  async handlePdfChange(option) {
    if (option.value === 'create') {
      try {
        await createCompleteAppendixPdf(this.props.appendix.appendixId).then((response) => {
          if (response.errorcode) {
            alert(response.description)
          } else {
            window.open(response, '_pdfview')
          }
        })
      } catch (e) {
        console.log('Error:' + e)
      }
    } else if (option.value === 'view') {
      try {
        await getCompleteAppendixPdf(this.props.appendix.appendixId).then((response) => {
          if (response.errorcode) {
            alert(response.description)
          } else {
            //TODO: window open dont work as it's blocked in the browser
            window.open(response, '_pdfview')
          }
        })
      } catch (e) {
        console.log('Error:' + e)
      }
    }
  }
  handleViewAppendix(option) {
    if (option.value === 'viewpublic') {
      window.open(this.props.appendix.folderUrl, '_viewappendix')
    }
  }
  async onClickPublishAppendix() {
    document.getElementById('publishStepOne').style.display = 'none'
    document.getElementById('publishButton').style.display = 'none'
    document.getElementById('publishStepTwo').style.display = 'block'
    document.getElementById('publishLoadingDiv').style.display = 'block'

    try {
      await this.props.publishToPlanSystem(this.props.appendix.appendixId).then((response) => {
        console.log('Publish result this:', response)

        if (response.errors === 0) {
          document.getElementById('publishLoadingDiv').style.display = 'none'
          document.getElementById('publishStatusText').innerText = 'Tillæget blev indmeldt korrekt'
        } else {
          document.getElementById('publishLoadingDiv').style.display = 'none'
          document.getElementById('publishStatusText').innerText = 'Tillæget blev ikke indmeldt, fik følgende fejl: ' + response.result
        }
      })
    } catch (e) {
      console.log('Error:' + e)
    }
  }

 render() {
    /* State */
    const { configModalIsOpen, publishModalIsOpen, dates } = this.state
    /* Props */
    const { appendix, handleSubmit } = this.props
    /* Functions */
    const { submitUpdate, openConfigModal, openPublishModal,
      closeConfigModal, handleDateChange, saveConfigModal,
      closePublishModal, onClickPublishAppendix, handlePdfChange, handleViewAppendix } = this

    const pdfOptions = [
      { value: 'create', label: 'Opret PDF af tillæg' },
      { value: 'view', label: 'Se PDF' }
    ]
    const viewOptions = [
      { value: 'viewpublic', label: 'Vis offentlig udgave' }
    ]

    return (
      <WHDiv>
         {appendix !== null ?
          <Animation>
            <AppendixButtonPanel>
              <AppendixButtonPanelDiv onClick={openConfigModal}><Icons.MdSettings size="30" color="#000" /></AppendixButtonPanelDiv>
              <AppendixButtonPanelDiv onClick={openPublishModal}><Icons.MdPublish size="30" color="#000" /></AppendixButtonPanelDiv>
              <AppendixButtonPanelDiv>
                <Select
                  name="pdfSelect"
                  value="one"
                  options={pdfOptions}
                  onChange={handlePdfChange}
                  searchable={false}
                  clearable={false}
                  placeholder="PDF"
                />
              </AppendixButtonPanelDiv>
              <AppendixButtonPanelDiv>
                <Select
                  name="viewAppendixSelect"
                  value="one"
                  options={viewOptions}
                  onChange={handleViewAppendix}
                  searchable={false}
                  clearable={false}
                  placeholder="Vis plan"
                />
              </AppendixButtonPanelDiv>
            </AppendixButtonPanel>
            <Appendix appendix={appendix} handleSubmit={handleSubmit(submitUpdate)} renderFields={renderFields} />
            <Settings
              configModalIsOpen={configModalIsOpen}
              closeConfigModal={closeConfigModal}
              handleDateChange={handleDateChange}
              saveConfigModal={saveConfigModal}
              dates={dates} />
            <Publish
              publishModalIsOpen={publishModalIsOpen}
              closePublishModal={closePublishModal}
              appendix={appendix}
              onClickPublishAppendix={onClickPublishAppendix}
            />
          </Animation>
          : <PulseLoader color="royalblue"/>
        }
      </WHDiv>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  param: ownProps.param,
  appendix: getAppendix(state, ownProps.param, ownProps) || null,
  initialValues: {
    fields: getAppendixSel(state, ownProps.param, ownProps)
  } || null,
  conf: state.eplan.conf
})

function mapDispatchToProps(dispatch) {
  return {
    onMount: (id,param) =>{
      dispatch(tabChange(id,param))
    },
    getAppendix: (param) => {
      dispatch(getAppendixAsync(param))
    },
    updateApd: (appendix, id) => {
      dispatch(updateAppendix(appendix, id))
    },
    unMount: (param) => {
      //TODO Remove Open Appendix when *CLOSED* not when unmounted
      dispatch(removeOpenApdx(param))
    },
    publishToPlanSystem: async (id) => {
      return dispatch(await publishAppendixToPlansystemAsync(id))
    }
  }
}

EditAppendix = reduxForm({
  form: 'appendix',
  enableReinitialize: true
})(EditAppendix)

export default connect(mapStateToProps, mapDispatchToProps)(EditAppendix)