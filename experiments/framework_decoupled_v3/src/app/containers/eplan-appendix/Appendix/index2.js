//DEPRECATED Not used anymore / BACKUP

/* React */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
/* Redux */
import { connect } from 'react-redux'
import { getAppendixAsync, updateAppendix, removeOpenApdx, publishAppendixToPlansystemAsync } from 'app/store/modules/eplan'
import { Field, reduxForm } from 'redux-form'
import { getAppendixSel, getAppendix } from 'app/store/selectors/eplan'

/* Framework */
import { addTab, tabChange } from 'framework/store/modules/tabs'
import TabsContainer from 'framework/containers/Tabs/TabsContainer'
/* Styling */
import { WHDiv } from 'app/styles'
import { AppendixButtonPanel, AppendixButtonPanelDiv, PulseLoader } from 'app/styles/EplanStyles'
import { Animation } from 'app/styles/EplanStyles'
import 'react-datepicker/dist/react-datepicker.css'

/* Components */
import moment from 'moment'
import { renderQuill } from './EditorSelector'
import Appendix from 'app/components/eplan-appendix/Appendix/Appendix'
import Settings from 'app/components/eplan-appendix/Appendix/Settings'
import Publish from 'app/components/eplan-appendix/Appendix/Publish'
import { getCompleteAppendixPdf, createCompleteAppendixPdf } from 'app/data/eplan'
import EditAppendix from 'app/containers/eplan-appendix/Appendix/Edit'
/* -------- END IMPORT ---------- */

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
class AppendixContainer extends Component {
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
    this.tabs = this.tabs.bind(this)
  }

  componentWillMount() {
    //TODO: Create the tabsConfig here
    this.props.onMount(
      this.props.id,
      {
        label: this.props.param,
        icon: 'mode_edit',
        location: '/eplan/list/' + this.props.param,
        fixed: false
      },
      this.props.param
    )
    this.tabs()
  }
  async componentDidMount() {
    await this.props.getAppendix(this.props.param)

  }
  tabs() {
    this.props.tabConfig(
      "appendix",
      [{
        label: "Tillægs tekst",
        location: "/eplan/list/" + this.props.param + "/edit",
        icon: "info",
        fixed: true
      },
      {
        label: "Rammer til tillæg",
        location: "/eplan/list/" + this.props.param + "/frames",
        icon: "info",
        fixed: true
      }
      ]
    )
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
    //SAVE STUFF
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
  async handlePdfChange(event) {
    if (event.target.value === 'create') {
      event.target.selectedIndex = 0 //reset dropwown to default
      try {
        await createCompleteAppendixPdf(this.props.appendix.appendixId).then((response) => {
          if (response.errorcode) {
            alert(response.description)
          } else {
            console.log(response)
          }
        })
      } catch (e) {
        console.log('Error:' + e)
      }
    } else if (event.target.value === 'view') {
      event.target.selectedIndex = 0 //reset dropwown to default
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
  handleViewAppendix(event) {
    if (event.target.value === 'viewpublic') {
      event.target.selectedIndex = 0 //reset dropwown to default
      window.open(this.props.appendix.folderUrl, '_viewappendix')
    }
  }
  render() {
    /* State */
    const { configModalIsOpen, publishModalIsOpen, dates } = this.state
    /* Props */
    const { appendix, handleSubmit, param } = this.props
    /* Functions */
    const { submitUpdate, openConfigModal, openPublishModal,
      closeConfigModal, handleDateChange, saveConfigModal,
      closePublishModal, onClickPublishAppendix, handlePdfChange, handleViewAppendix } = this
    return (
      <WHDiv>

      <TabsContainer id={"appendix"} />
       {appendix !== null ?
        <div>
          {React.cloneElement(this.props.children, { param: param })}
        </div>
       
          /* <Animation>
            <AppendixButtonPanel>
              <AppendixButtonPanelDiv onClick={openConfigModal}>Indstillinger</AppendixButtonPanelDiv>
              <AppendixButtonPanelDiv onClick={openPublishModal}>Publicer</AppendixButtonPanelDiv>
              <AppendixButtonPanelDiv>
                <select id="pdfSelect" onChange={handlePdfChange}>
                  <option value="0">PDF</option>
                  <option value="create">Opret PDF af tillæg</option>
                  <option value="view">Se PDF</option>
                </select>
              </AppendixButtonPanelDiv>
              <AppendixButtonPanelDiv>
                <select id="viewAppendixSelect" onChange={handleViewAppendix}>
                  <option value="0">Vis plan</option>
                  <option value="viewpublic">Vis offentlig udgave</option>
                </select>
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
          </Animation> */
          : <PulseLoader size="16px" color={'royalblue'} />}
      </WHDiv>
    )
  }
}
AppendixContainer.propTypes = {
  param: PropTypes.string.isRequired,
  appendix: PropTypes.object,
  conf: PropTypes.object

}
const mapStateToProps = (state, ownProps) => ({
  param: ownProps.params.id,
  appendix: getAppendix(state, ownProps.params.id, ownProps) || null,
  initialValues: {
    fields: getAppendixSel(state, ownProps.params.id, ownProps)
  } || null,
  conf: state.eplan.conf
})


function mapDispatchToProps(dispatch) {
  return {
    tabConfig: (id, tabs) => {
      dispatch(addTab(id, tabs[0]))
      dispatch(addTab(id, tabs[1]))
      dispatch(tabChange(id, tabs[0].label))
    },
    onMount: (id, tab) => {
      dispatch(addTab(id, tab))
      dispatch(tabChange(id, tab.label))
    },
    getAppendix: (param) => {
      dispatch(getAppendixAsync(param))
    },
    updateApd: (appendix, id) => {
      dispatch(updateAppendix(appendix, id))
    },
    unMount: (param) => {
      dispatch(removeOpenApdx(param))
    },
    publishToPlanSystem: async (id) => {
      return dispatch(await publishAppendixToPlansystemAsync(id))
    }
  }

}
AppendixContainer = reduxForm({
  form: 'appendix',
  enableReinitialize: true
})(AppendixContainer)
export default connect(mapStateToProps, mapDispatchToProps)(AppendixContainer)
