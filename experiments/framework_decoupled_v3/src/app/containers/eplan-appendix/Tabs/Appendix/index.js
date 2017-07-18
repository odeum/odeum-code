import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getAppendixAsync} from 'app/store/modules/eplan'
import {addTab,tabChange} from 'framework/store/modules/tabs'
import {Field,FieldArray, reduxForm } from 'redux-form'
import {Div} from 'app/styles'
import {getAppendixSel} from 'app/store/selectors/eplan'


const renderField = ({ input, label, type, meta: { touched, error } }) =>{
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
{
return(
    <div>
    {fields.map((field,index)=>(
 <Field
        key={`${field}.id`}
        name={`${field}.value`}
        type="text"
        component={renderField}
        label={fields.get(index).name}/>))}
    </div>
    )
}
class Appendix extends Component {

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
    
    render() {
        const {appendix} = this.props
        return (
            <Div style={{overflowY:'scroll',width:'90%',height:'90%'}}>
            {appendix?
            <form >
                <h1>{appendix.name}</h1>
                 <FieldArray name={'fields'} component={renderFields}/>
            </form>:null}
            </Div>
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
            // dispatch(getAppendixAsync(param))
        },
        getAppendix:(param)=>{
            dispatch(getAppendixAsync(param))
        }
    }
    
}
Appendix = reduxForm({form:'appendix',enableReinitialize:true})(Appendix)
export default connect(mapStateToProps,mapDispatchToProps)(Appendix)