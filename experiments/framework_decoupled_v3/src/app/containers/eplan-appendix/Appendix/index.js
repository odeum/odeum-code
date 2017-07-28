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
      startDate: moment()
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
  }

  componentWillMount() {
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

  }
  async componentDidMount() {
    await this.props.getAppendix(this.props.param)
  }
  submitUpdate(values){
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

    //this.setState({ publishModalIsOpen: false })
  }
  handleDateChange(date, id) {
    this.setState({
      startDate: date
    })
  }
  render() {
     /* State */
    const { configModalIsOpen, publishModalIsOpen, startDate } = this.state
    /* Props */
    const { appendix, handleSubmit, } = this.props
    /* Functions */
    const { submitUpdate, openConfigModal, openPublishModal, 
      closeConfigModal, handleDateChange, saveConfigModal,
      closePublishModal,onClickPublishAppendix } = this
    return (
      <WHDiv>
        {appendix ?
          <Animation>
            <AppendixButtonPanel>
              <AppendixButtonPanelDiv onClick={openConfigModal}>Indstillinger</AppendixButtonPanelDiv>
              <AppendixButtonPanelDiv onClick={openPublishModal}>Publicer</AppendixButtonPanelDiv>
              <AppendixButtonPanelDiv>PDF</AppendixButtonPanelDiv>
              <AppendixButtonPanelDiv>Vis plan</AppendixButtonPanelDiv>
            </AppendixButtonPanel>

            <Appendix appendix={appendix} handleSubmit={handleSubmit(submitUpdate)} renderFields={renderFields} />
            <Settings
              configModalIsOpen={configModalIsOpen}
              closeConfigModal={closeConfigModal}
              startDate={startDate}
              handleDateChange={handleDateChange}
              saveConfigModal={saveConfigModal} />
            <Publish
              publishModalIsOpen={publishModalIsOpen}
              closePublishModal={closePublishModal}
              appendix={appendix}
              onClickPublishAppendix={onClickPublishAppendix}
            />

          </Animation>
          : <PulseLoader size="16px" color={'royalblue'} />}
      </WHDiv>
    )
  }
}
AppendixContainer.propTypes={
  param: PropTypes.string.isRequired,
  appendix: PropTypes.object,
  conf : PropTypes.object
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
    onMount: (id, tab, param) => {
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
