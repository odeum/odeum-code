import React, { Component } from 'react'
import {Div} from 'app/styles'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'
import {tabChange} from 'framework/store/modules/tabs'
import {List} from 'immutable'
import AppendixTable from './Table/Table'
import data from 'app/data/dummyData'
import getFormsFormAPI from 'app/data/eplan'
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
        
        this.state = {
            data:List([]),
            isLoading:true
        }
        this.onClickButton = this.onClickButton.bind(this)
    }
    async componentWillMount() {
        this.props.onMount(this.props.id,props.name)
        var dat=await getFormsFormAPI()
        this.setState({data:dat, isLoading:false})
    }
    onClickButton(index){
        this.props.onClickButton(index)
    }
    render() {
        return (
            <Div>
                <DescriptionDiv>Small description placeholder</DescriptionDiv>
                {this.state.isLoading?null :<AppendixTable list={this.state.data} onClickButton={this.onClickButton}/>}

                  
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
        onClickButton:(location)=>{
            dispatch(push('/eplan/list/'+location))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AppendixList)