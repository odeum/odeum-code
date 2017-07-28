import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAppendixAsync, getAppendixCfg } from 'app/store/modules/eplan'
import { publishAppendixToPlansystem } from 'app/data/eplan'
import { addTab, tabChange } from 'framework/store/modules/tabs'
import { Field, FieldArray, reduxForm } from 'redux-form'
import { WHDiv } from 'app/styles'
import { AppendixButtonPanel, AppendixButtonPanelDiv, AppendixForm, PublishStepTwoDiv, PublishLoadingDiv } from 'app/styles/EplanStyles'
import { getAppendixSel } from 'app/store/selectors/eplan'
import { renderDefault, renderQuill, renderTinyMCE, renderDraft } from './EditorSelector'
import Modal from 'react-modal'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import 'react-datepicker/dist/react-datepicker.css'
import Loader from 'halogen/FadeLoader'

//HOWTO: convert to styled components
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

function editorSelector(editor) {
    switch (editor) {
        case "default":
            return renderDefault
        case "quill":
            return renderQuill
        case "tinymce":
            return renderTinyMCE
        case "draft":
            return renderDraft
        default:
            return renderDefault
    }
}
let renderFields = ({ fields, editor }) => {
    console.log(fields, editor)
    return (
        <div>
            {fields.map((field, index) => (
                <Field
                    key={`${field}.id`}
                    name={`${field}.value`}
                    type="text"
                    component={editorSelector(editor)}
                    label={fields.get(index).caption} />))}
        </div>
    )
}
class Appendix extends Component {
    constructor(props) {
        super(props)
        this.state = { editor: "quill", configModalIsOpen: false, publishModalIsOpen: false, startDate: moment() }
        this.onEditorChange = this.onEditorChange.bind(this)
        this.openConfigModal = this.openConfigModal.bind(this)
        this.closeConfigModal = this.closeConfigModal.bind(this)
        this.saveConfigModal = this.saveConfigModal.bind(this)
        this.openPublishModal = this.openPublishModal.bind(this)
        this.closePublishModal = this.closePublishModal.bind(this)
        this.handleDateChange = this.handleDateChange.bind(this)
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
    onEditorChange(event) {
        this.setState({ editor: event.target.value })
        this.forceUpdate()
    }
    openConfigModal() {
        for (let field in this.props.appendix.fields) {
            // console.log(field)
        }

        this.setState({ configModalIsOpen: true })
    }
    closeConfigModal() {
        this.setState({ configModalIsOpen: false })
    }
    saveConfigModal() {
        //SAVE STUFF
        this.setState({ configModalIsOpen: false })
    }
    openPublishModal() {
        this.setState({ publishModalIsOpen: true })
    }
    closePublishModal() {
        this.setState({ publishModalIsOpen: false })
    }
    async onClickPublishAppendix() {
        document.getElementById('publishStepOne').style.display = 'none'
        document.getElementById('publishButton').style.display = 'none'
        document.getElementById('publishStepTwo').style.display = 'block'
        document.getElementById('publishLoadingDiv').style.display = 'block'

        try {
            await publishAppendixToPlansystem(this.props.appendix.appendixId).then((response) => {
                console.log('Publish result this:', response.errors)

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
    handleDateChange(date) {
        this.setState({ startDate: date })
    }
    render() {
        const { appendix } = this.props
        return (
            <WHDiv>
                <label>Debug: Change Editor</label>
                <select onChange={this.onEditorChange}>
                    <option value='quill'>Quill</option>
                    <option value='default'>HTML simple input/textarea</option>
                    <option value='tinymce'>TinyMCE</option>
                    <option value='draft'>Draft.js</option>
                </select>
                {appendix ?
                    <div>
                    {console.log(this.props.appendix.fields)}
                        <AppendixButtonPanel>
                            <AppendixButtonPanelDiv onClick={this.openConfigModal}>Indstillinger</AppendixButtonPanelDiv>
                            <AppendixButtonPanelDiv onClick={this.openPublishModal}>Publicer</AppendixButtonPanelDiv>
                            <AppendixButtonPanelDiv>PDF</AppendixButtonPanelDiv>
                            <AppendixButtonPanelDiv>Vis plan</AppendixButtonPanelDiv>
                        </AppendixButtonPanel>

                        <AppendixForm>
                            <h1>{appendix.name}</h1>
                            <FieldArray name={'fields'} component={renderFields} props={{ editor: this.state.editor }} />
                        </AppendixForm>

                        <Modal isOpen={this.state.configModalIsOpen} onRequestClose={this.closeConfigModal} style={customStyles} contentLabel="Indstillinger">
                            <h2>Indstillinger</h2>
                            <br />
                            <form>
                            Intern høring start: <DatePicker selected={this.state.startDate} onChange={this.handleDateChange} />
                            Intern høring slut: <DatePicker selected={this.state.startDate} onChange={this.handleDateChange} />
                            Forslag: <DatePicker selected={this.state.startDate} onChange={this.handleDateChange} />
                            Offentliggørelse: <DatePicker selected={this.state.startDate} onChange={this.handleDateChange} />
                            Høring start: <DatePicker selected={this.state.startDate} onChange={this.handleDateChange} />
                            Høring slut: <DatePicker selected={this.state.startDate} onChange={this.handleDateChange} />
                            Vedtagelse: <DatePicker selected={this.state.startDate} onChange={this.handleDateChange} />

                            <br /><br />
                            Vælg fase:<br />
                            <select>
                                <option>Kladde</option>
                                <option>Udkast</option>
                                <option>Intern høring</option>
                                <option>Forslag</option>
                            </select>
                            <br /><br />
                            <button onClick={this.saveConfigModal}>Gem ændringer</button>

                            </form>
                        </Modal>

                        <Modal isOpen={this.state.publishModalIsOpen} onRequestClose={this.closePublishModal} style={customStyles} contentLabel="Plansystem">
                            <h2>Publicer til plansystem 123</h2>

                            <div id="publishStepOne">
                                Tillæg {this.props.appendix.name} indmeldes med følgende status: {this.props.appendix.status}
                                <br /><br />
                                <button id="publishButton" onClick={(e) => {e.preventDefault(); this.onClickPublishAppendix()}}>Indmeld nu</button>
                            </div>
                            <PublishStepTwoDiv id="publishStepTwo">
                                <PublishLoadingDiv id="publishLoadingDiv">
                                    <Loader color="#000" size="50px" margin="4px" />
                                </PublishLoadingDiv>
                                <div id="publishStatusText"></div>
                                <br /><br />
                                <button onClick={(e) => {e.preventDefault(); this.closePublishModal()}}>Luk</button>
                            </PublishStepTwoDiv>
                        </Modal>
                    </div>
                    : null
                }
            </WHDiv>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    param: ownProps.params.id,
    appendix: getAppendixSel(state, ownProps.params.id, ownProps) || null,
    initialValues: getAppendixSel(state, ownProps.params.id, ownProps)
})

function mapDispatchToProps(dispatch) {
    return {
        onMount: (id, tab, param) => {
            dispatch(addTab(id, tab))
            dispatch(tabChange(id, tab.label))
            dispatch(getAppendixCfg())
            // dispatch(getAppendixAsync(param))
        },
        getAppendix: (param) => {
            dispatch(getAppendixAsync(param))
        }
    }
}

Appendix = reduxForm({ form: 'appendix', enableReinitialize: true })(Appendix)
export default connect(mapStateToProps, mapDispatchToProps)(Appendix)

/* const renderField = ({ input, label, type, meta: { touched, error } }) =>{
    return (<div style={{display:'flex',flexDirection:'row',marginBottom:'10px'}}>
     <label style={{width:'150px',padding:"30px 20px 50px 20px"}}>
      {label}
    </label>
       <Editor {...input} label={label} style={{height: '160px',width:'100%'}}/>
      {touched &&
        error &&
        <span>
          {error}
        </span>} 
       
  </div>
    )} */