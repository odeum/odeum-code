import React, { Component } from 'react'

/* Redux */
import {connect} from 'react-redux'
import {getAppendixAsync,updateAppendix,removeOpenApdx} from 'app/store/modules/eplan'
import {Field, reduxForm } from 'redux-form'
import {getAppendixSel,getAppendix} from 'app/store/selectors/eplan'

/* Framework */
import {addTab,tabChange} from 'framework/store/modules/tabs'

/* Styling */
import {WHDiv} from 'app/styles'

/* Components */
import {renderQuill} from './EditorSelector'
import Appendix from 'app/components/eplan-appendix/Appendix'
 
 
var _ = require('lodash')  

let renderFields = ({fields})=>
{
return(
    <div>
    {fields.map((field,index)=>{
        return(
 <Field
        key={fields.get(index).id}
        name={`${field}.value`}
        type="text"
        component={renderQuill}
        label={fields.get(index).caption}/>)})}
    </div>
    )
}
class AppendixContainer extends Component {
    constructor(props) {
        super(props)
        this.showResults = this.showResults.bind(this)
        this.filterAppendix = this.filterAppendix.bind(this)
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
    }
    /* Change to call server => */
    showResults = values =>{
        console.log('-----Values-----')
        console.log(values)
        // console.log(`${JSON.stringify(values,null,1)}`)
        this.props.updateApd(values, this.props.param)
    }
    filterAppendix(){
          const {conf,appendix} = this.props
          let filteredAppendix = appendix
        /* Filter */
    
        filteredAppendix.fields =  _.intersectionBy(filteredAppendix.fields, conf.editFields,'id')

        return filteredAppendix
    }
    render() {
        const {appendix,handleSubmit,} = this.props   
        const {showResults} = this
        return (
                <WHDiv>
            {appendix?
<div>

                <Appendix 
                appendix={this.props.appendix}
                handleSubmit={handleSubmit(showResults)}
                renderFields={renderFields}/> 
                
                </div> 
                :null}
                </WHDiv>
        )
    }
}

const mapStateToProps = (state,ownProps) => ({
    param:ownProps.params.id,
    appendix: getAppendix(state,ownProps.params.id,ownProps)||null,
    initialValues: {fields:getAppendixSel(state,ownProps.params.id,ownProps)}||null,
    conf: state.eplan.conf
})


function mapDispatchToProps(dispatch) {
    return{
        onMount: (id,tab,param)=>{
            dispatch(addTab(id,tab))
            dispatch(tabChange(id,tab.label))
        },
        getAppendix:(param)=>{
            dispatch(getAppendixAsync(param))
        },
        updateApd:(appendix,id)=>{
            dispatch(updateAppendix(appendix,id))
        },
        unMount: (param)=>{
            dispatch(removeOpenApdx(param))
        }
    }
    
}
AppendixContainer = reduxForm({form:'appendix',fields:['fields[]'],enableReinitialize:true})(AppendixContainer)
export default connect(mapStateToProps,mapDispatchToProps)(AppendixContainer)
