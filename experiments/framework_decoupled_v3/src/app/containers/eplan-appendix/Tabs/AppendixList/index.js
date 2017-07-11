import React, { Component } from 'react'
import {Div} from 'app/styles'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'
import {tabChange} from 'framework/store/modules/tabs'
import AppendixTable from './Table/Table'
import {DescriptionDiv} from 'app/styles/EplanStyles'
import {getListAsync} from 'app/store/modules/eplan'
const props={name:'Appendix List'}

class AppendixList extends Component {
    constructor(props) {
        super(props)
        this.onClickButton = this.onClickButton.bind(this)
    }
    async componentWillMount() {
        this.props.onMount(this.props.id,props.name)
        await this.props.getList()
       
    }
    onClickButton(index){
        this.props.onClickButton(index)
    }
    render() {
        return (
            <Div>
                <DescriptionDiv>Small description placeholder</DescriptionDiv>
                {this.props.isLoading? null :<AppendixTable list={this.props.data} onClickButton={this.onClickButton}/>}

                  
            </Div>
        )
    }
}
const mapStateToProps = (state,ownProps) => ({
    data: state.eplan.data,
    isLoading: state.eplan.isLoading
})

function mapDispatchToProps(dispatch) {
    return {
        onMount: (id,name)=>{
            dispatch(tabChange(id,name))
        },
        onClickButton:(location)=>{
            dispatch(push('/eplan/list/'+location))
        },
        getList:()=>{
           dispatch(getListAsync())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AppendixList)