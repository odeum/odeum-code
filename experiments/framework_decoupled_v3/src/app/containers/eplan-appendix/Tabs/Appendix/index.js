import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getAppendixAsync,getAppendixCfg} from 'app/store/modules/eplan'
import {addTab,tabChange} from 'framework/store/modules/tabs'
import {Field,FieldArray, reduxForm } from 'redux-form'
import {WHDiv} from 'app/styles'
import {getAppendixSel} from 'app/store/selectors/eplan'
import {renderDefault,renderQuill,renderTinyMCE,renderDraft} from './EditorSelector'

function editorSelector(editor) {
    console.log('------------------------------------')
    console.log(editor)
    console.log('------------------------------------')
    switch(editor){
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
let renderFields = ({fields,editor})=>
{console.log(fields,editor)
return(
    <div>
    {fields.map((field,index)=>(
 <Field
        key={`${field}.id`}
        name={`${field}.value`}
        type="text"
        component={editorSelector(editor)}
        label={fields.get(index).caption}/>))}
    </div>
    )
}
class Appendix extends Component {
    constructor(props) {
        super(props)
        this.state = {editor:"quill"}
        this.onEditorChange = this.onEditorChange.bind(this)
    }

    componentWillMount() {
       this.props.onMount(
            this.props.id,
            {
                label:this.props.param,
                icon:'mode_edit',
                location:'/eplan/list/'+this.props.param,
                fixed:false
            },
            this.props.param
        )
}
    async componentDidMount(){
        await this.props.getAppendix(this.props.param)
        console.log(this.props.fields)
    }
    onEditorChange(event){
        this.setState({editor:event.target.value})
        this.forceUpdate()
    }
    render() {
        const {appendix} = this.props
        return (
            <WHDiv>
            <label>Debug: Change Editor</label>
            <select onChange={this.onEditorChange}>
                    <option value='quill'>Quill</option>
                    <option value='default'>HTML simple input/textarea</option>
                    <option value='tinymce'>TinyMCE</option>
                    <option value='draft'>Draft.js</option>
                </select>
            {appendix?
            <form >
                <h1>{appendix.name}</h1>
                <FieldArray name={'fields'} component={renderFields} props={{editor:this.state.editor}}/>  
            </form>:null}
            </WHDiv>
        )
    }
}

const mapStateToProps = (state,ownProps) => ({
    param:ownProps.params.id,
    appendix: getAppendixSel(state,ownProps.params.id,ownProps)||null,
    initialValues: getAppendixSel(state,ownProps.params.id,ownProps)
})

function mapDispatchToProps(dispatch) {
    return{
        onMount: (id,tab,param)=>{
            dispatch(addTab(id,tab))
            dispatch(tabChange(id,tab.label))
            dispatch(getAppendixCfg())
            // dispatch(getAppendixAsync(param))
        },
        getAppendix:(param)=>{
            dispatch(getAppendixAsync(param))
        }
    }
    
}
Appendix = reduxForm({form:'appendix',enableReinitialize:true})(Appendix)
export default connect(mapStateToProps,mapDispatchToProps)(Appendix)

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