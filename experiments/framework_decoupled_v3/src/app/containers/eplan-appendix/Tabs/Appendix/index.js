import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getAppendixAsync} from 'app/store/modules/eplan'
import {addTab,tabChange} from 'framework/store/modules/tabs'
import {Div} from 'app/styles'
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
    
    render() {
        const {appendix,param} = this.props
        return (
            <Div>
                Here is the appendix with id: {param}
            {appendix?
            <div style={{overflow:'hidden'}}>
            <h1>{appendix.name}</h1>
            {appendix.fields.map((form)=>(
                <div style={{display:'flex','flex-direction':'row'}}>
                    <div style={{width:'150px'}}>
                        <label style={{"padding-right":"5px;"}}>{form.name}</label>
                        </div>
                        <input value={form.value}/>
                        <br/>
                    </div>))}
            </div>
            :null}
            </Div>
        )
    }
}

const mapStateToProps = (state,ownProps) => ({
    param:ownProps.params.id,
    appendix: state.eplan.openAppendix[0]
})

function mapDispatchToProps(dispatch) {
    return{
        onMount: (id,tab,param)=>{
            dispatch(addTab(id,tab))
            dispatch(tabChange(id,tab.label))
            dispatch(getAppendixAsync(param))
        }
    }
    
}

export default connect(mapStateToProps,mapDispatchToProps)(Appendix)