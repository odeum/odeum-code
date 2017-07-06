import React, { Component } from 'react'
import {Div} from 'app/styles'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'
import {tabChange} from 'framework/store/modules/tabs'
const props={name:'Appendix List'}
class AppendixList extends Component {
    
    componentWillMount() {
        this.props.onMount(this.props.id,props.name)
    }
    
    render() {
        const {onClickButton} = this.props
        return (
            <Div>
                Here is the list<br/>
                <button onClick={(e)=>{e.preventDefault();onClickButton('801')}}>801</button><br/>
                <button onClick={(e)=>{e.preventDefault();onClickButton('802')}}>802</button><br/>
                <button onClick={(e)=>{e.preventDefault();onClickButton('803')}}>803</button>
            </Div>
        )
    }
}
const mapStateToProps = (state,ownProps) => ({
})

function mapDispatchToProps(dispatch) {
    return{
        onMount: (id,name)=>{
            dispatch(tabChange(id,name))
        },
        /*Demo purposes*/
        onClickButton:(location)=>{
            dispatch(push('/eplan/list/'+location))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AppendixList)