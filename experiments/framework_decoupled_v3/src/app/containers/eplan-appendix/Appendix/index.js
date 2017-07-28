import React, { Component } from 'react'

/* Redux */
import { connect } from 'react-redux'
import { getAppendixAsync, updateAppendix, removeOpenApdx } from 'app/store/modules/eplan'
import { Field, reduxForm } from 'redux-form'
import { getAppendixSel, getAppendix } from 'app/store/selectors/eplan'

/* Framework */
import { addTab, tabChange } from 'framework/store/modules/tabs'

/* Styling */
import { WHDiv } from 'app/styles'
import { AppendixButtonPanel, AppendixButtonPanelDiv, PublishStepTwoDiv, PublishLoadingDiv } from 'app/styles/EplanStyles'
import Modal from 'react-modal'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import 'react-datepicker/dist/react-datepicker.css'
import Loader from 'halogen/FadeLoader'

/* Components */
import { renderQuill } from './EditorSelector'
import Appendix from 'app/components/eplan-appendix/Appendix'

//Refactor to REDUX
import { publishAppendixToPlansystem, getCompleteAppendixPdf, createCompleteAppendixPdf } from 'app/data/eplan'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '30%',
        height: '50%'
    }
}

// var _ = require('lodash')

let renderFields = ({fields}) => {
    return (
        <div>
          { fields.map((field, index) => {
                return (
                    <Field key={ fields.get(index).id } name={ `${field}.value` } type="text" component={ renderQuill } label={ fields.get(index).caption } />)
            }) }
        </div>
    )
}
class AppendixContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            configModalIsOpen: false,
            publishModalIsOpen: false,
            date1: moment(),
            date2: moment(),
            date3: moment(),
            date4: moment(),
            date5: moment(),
            date6: moment(),
            date7: moment()
        }
        this.showResults = this.showResults.bind(this)
        this.openConfigModal = this.openConfigModal.bind(this)
        this.closeConfigModal = this.closeConfigModal.bind(this)
        this.saveConfigModal = this.saveConfigModal.bind(this)
        this.openPublishModal = this.openPublishModal.bind(this)
        this.closePublishModal = this.closePublishModal.bind(this)
        this.handleDateChange = this.handleDateChange.bind(this)
        this.handlePdfChange = this.handlePdfChange.bind(this)
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
    /* Change to call server => */
    showResults = values => {
        this.props.updateApd(values, this.props.param)
    }
    openConfigModal() {
        // for (let field in this.props.appendix.fields) {
        //     console.log(field)
        // }
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
            await publishAppendixToPlansystem(this.props.appendix.appendixId).then((response) => {
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
    handleDateChange(date, id) {
        if (id === 'date1') {
            this.setState({ date1: date })
        } else if (id === 'date2') {
            this.setState({ date2: date })
        } else if (id === 'date3') {
            this.setState({ date3: date })
        } else if (id === 'date4') {
            this.setState({ date4: date })
        } else if (id === 'date5') {
            this.setState({ date5: date })
        } else if (id === 'date6') {
            this.setState({ date6: date })
        } else if (id === 'date7') {
            this.setState({ date7: date })
        }
    }
    async handlePdfChange(event) {
        if (event.target.value === 'create') {
            event.target.selectedIndex = 0 //reset to default
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
            event.target.selectedIndex = 0 //reset to default
            try {
                await getCompleteAppendixPdf(this.props.appendix.appendixId).then((response) => {
                    if (response.errorcode) {
                        alert(response.description)
                    } else {
                        console.log(response)
                    }
                })
            } catch (e) {
                console.log('Error:' + e)
            }
        }
    }

    render() {
        const {appendix, handleSubmit, } = this.props
        const {showResults} = this

        return (
            <WHDiv>
              { appendix ?
                <div>
                  <AppendixButtonPanel>
                    <AppendixButtonPanelDiv onClick={ this.openConfigModal }>Indstillinger</AppendixButtonPanelDiv>
                    <AppendixButtonPanelDiv onClick={ this.openPublishModal }>Publicer</AppendixButtonPanelDiv>
                    <AppendixButtonPanelDiv>
                        <select id="pdfSelect" onChange={this.handlePdfChange}>
                            <option value="0">PDF</option>
                            <option value="create">Opret PDF af tillæg</option>
                            <option value="view">Se PDF</option>
                        </select>
                    </AppendixButtonPanelDiv>
                    <AppendixButtonPanelDiv>Vis plan</AppendixButtonPanelDiv>
                  </AppendixButtonPanel>
                  <Appendix appendix={ this.props.appendix } handleSubmit={ handleSubmit(showResults) } renderFields={ renderFields } />
                  <Modal isOpen={ this.state.configModalIsOpen } onRequestClose={ this.closeConfigModal } style={ customStyles } contentLabel="Indstillinger">
                    <h2>Indstillinger</h2>
                    <br />
                    <form>
                      Intern høring start:
                      <DatePicker selected={ this.state.date1 } onChange={(date) => this.handleDateChange(date, 'date1')} dateFormat="DD/MM/YYYY" showWeekNumbers />
                      Intern høring slut:
                      <DatePicker selected={ this.state.date2 } onChange={(date) => this.handleDateChange(date, 'date2')} dateFormat="DD/MM/YYYY" showWeekNumbers />
                      Forslag:
                      <DatePicker selected={ this.state.date3 } onChange={(date) => this.handleDateChange(date, 'date3')} dateFormat="DD/MM/YYYY" showWeekNumbers />
                      Offentliggørelse:
                      <DatePicker selected={ this.state.date4 } onChange={(date) => this.handleDateChange(date, 'date4')} dateFormat="DD/MM/YYYY" showWeekNumbers />
                      Høring start:
                      <DatePicker selected={ this.state.date5 } onChange={(date) => this.handleDateChange(date, 'date5')} dateFormat="DD/MM/YYYY" showWeekNumbers />
                      Høring slut:
                      <DatePicker selected={ this.state.date6 } onChange={(date) => this.handleDateChange(date, 'date6')} dateFormat="DD/MM/YYYY" showWeekNumbers />
                      Vedtagelse:
                      <DatePicker selected={ this.state.date7 } onChange={(date) => this.handleDateChange(date, 'date7')} dateFormat="DD/MM/YYYY" showWeekNumbers />
                      <br />
                      <br />
                      Vælg fase:
                      <br />
                      <select>
                        <option>Kladde</option>
                        <option>Udkast</option>
                        <option>Intern høring</option>
                        <option>Forslag</option>
                      </select>
                      <br />
                      <br />
                      <button onClick={ this.saveConfigModal }>Gem ændringer</button>
                    </form>
                  </Modal>
                  <Modal isOpen={ this.state.publishModalIsOpen } onRequestClose={ this.closePublishModal } style={ customStyles } contentLabel="Plansystem">
                    <h2>Publicer til plansystem123</h2>
                    <div id="publishStepOne">
                      Tillæg
                      { this.props.appendix.name } indmeldes med følgende status:
                      { this.props.appendix.status }
                      <br />
                      <br />
                      <button id="publishButton" onClick={ (e) => { e.preventDefault(); this.onClickPublishAppendix() } }>Indmeld nu</button>
                    </div>
                    <PublishStepTwoDiv id="publishStepTwo">
                      <PublishLoadingDiv id="publishLoadingDiv">
                        <Loader color="#000" size="50px" margin="4px" />
                      </PublishLoadingDiv>
                      <div id="publishStatusText"></div>
                      <br />
                      <br />
                      <button onClick={ (e) => { e.preventDefault(); this.closePublishModal() } }>Luk</button>
                    </PublishStepTwoDiv>
                  </Modal>
                </div>
                : null }
            </WHDiv>
        )
    }
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
        }
    }

}
AppendixContainer = reduxForm({
    form: 'appendix',
    fields: ['fields[]'],
    enableReinitialize: true
})(AppendixContainer)
export default connect(mapStateToProps, mapDispatchToProps)(AppendixContainer)
