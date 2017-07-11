import React, { Component } from 'react'
import {Div} from 'app/styles'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'
import {tabChange} from 'framework/store/modules/tabs'
import {List} from 'immutable'
import AppendixTable from './Table/Table'
import data from 'app/data/dummyData'
import {DescriptionDiv} from 'app/styles/EplanStyles'
const props={name:'Appendix List'}
// const list = [
//     'Brian Vaughn',
//     'Christian Broberg',
//     'Mette Bugge',
//     'Mathilde Porsmose',
//     'Max Porsmose',
//     'Amalie Hayes'
    
// ]

class AppendixList extends Component {
    constructor(props) {
        super(props)
        const list=List(data)
        this.state = {
            data:list
        }
        this.onClickButton = this.onClickButton.bind(this)
    }
    componentWillMount() {
        this.props.onMount(this.props.id,props.name)
    }
    onClickButton(index){
        this.props.onClickButton(index)
    }
    render() {
        return (
            <Div>
                <DescriptionDiv>Small description placeholder</DescriptionDiv>
                <AppendixTable list={this.state.data} onClickButton={this.onClickButton}/>

                  
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