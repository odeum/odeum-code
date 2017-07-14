import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getAppendixAsync} from 'app/store/modules/eplan'
import {addTab,tabChange} from 'framework/store/modules/tabs'
import {Field,FieldArray, reduxForm } from 'redux-form'
import {Div} from 'app/styles'
import {getAppendixSel} from 'app/store/selectors/eplan'


const renderField = ({ input, label, type, meta: { touched, error } }) =>{
    console.log(input)
    return (<div style={{display:'flex',flexDirection:'row',marginBottom:'10px'}}>
    <label style={{width:'150px',paddingRight:"30px",marginRight:"30px"}}>
      {label}
    </label>
      <textarea {...input} type={type} placeholder={label} style={{height: '160px',width:'100%'}}/>
      {touched &&
        error &&
        <span>
          {error}
        </span>}
  </div>
    )}
let renderFields = ({fields})=>
{console.log(fields)
return(
    <div>
    {fields.map((field,index)=>{
        console.log()
    return <Field
        name={`${field}.value`}
        type="text"
        component={renderField}
        label={fields.get(index).name}/>})}
    </div>
    )
}
class Appendix extends Component {
    
   async componentWillMount() {
      await this.props.onMount(
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
    }
    
    render() {
        const {appendix} = this.props
        return (
            <Div>
            {appendix?
            <form>
                <h1>{appendix.name}</h1>
                <FieldArray name={'fields'} component={renderFields}/>
             <div>
          
            </div>
            </form>:null}
            </Div>
        )
    }
}
/*

                /* {fields.map((field,index)=>
                (<div key={index} style={{display:'flex'}}>
                    <div style={{width:'150px'}}>
                        <label style={{"paddingRight":"5px;"}}>{field.name}</label>
                        </div>
                      
                        <br/>
                    </div>))}
   {   Object.keys( appendix.fields ).map( p => Object.assign( appendix.fields[p], {field:p})).map((field,index)=>{
             
                return <div key={index} style={{display:'flex'}}>
                    <div style={{width:'150px'}}>
                        <label style={{"paddingRight":"5px;"}}>{field.name}</label>
                        </div>
                        <Field name={`${field.id}`} component='input'/>
                        <br/>
                    </div>})}
            </div>
<AppendixForm appendix={appendix}/> */
            /* <div>
            <h1>{appendix.name}</h1>
            {appendix.fields.map((form)=>(
                <div style={{display:'flex','flex-direction':'row'}}>
                    <div style={{width:'150px'}}>
                        <label style={{"padding-right":"5px;"}}>{form.name}</label>
                        </div>
                        <input value={form.value}/>
                        <br/>
                    </div>))}
            </div> */
const mapStateToProps = (state,ownProps) => ({
    param:ownProps.params.id,
    appendix: state.eplan.openAppendix[0],//change to selector
    initialValues: state.eplan.openAppendix[0],
    fields:getAppendixSel(0,state,ownProps)
})

function mapDispatchToProps(dispatch) {
    return{
        onMount: (id,tab,param)=>{
            dispatch(addTab(id,tab))
            dispatch(tabChange(id,tab.label))
            // dispatch(getAppendixAsync(param))
        },
        getAppendix:(param)=>{
            dispatch(getAppendixAsync(param))
        }
    }
    
}
Appendix = reduxForm({form:'appendix',enableReinitialize:true})(Appendix)
export default connect(mapStateToProps,mapDispatchToProps)(Appendix)