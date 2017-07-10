import React, { Component } from 'react'
import {Div} from 'app/styles'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'
import {tabChange} from 'framework/store/modules/tabs'
import {List} from 'immutable'
import Table from './Table/Table'
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
    }
    componentWillMount() {
        this.props.onMount(this.props.id,props.name)
    }
    onClickButton(index){
        this.props.onClickButton(index)
    }
    // rowRenderer({key,index,isScrolling,isVisible,style}){
    //     return(
    //         <div key={key} style={style}>
    //             <tr className={'h1'}>
    //                 <td> {list[index]}</td>
    //                 <td><button onClick={(e)=>{e.preventDefault();this.onClickButton(index)}}>{index}</button><br/></td>
    //             </tr>
               
                
    //         </div>
    //     )
    // }
    render() {
         const {onClickButton} = this.props
        return (
            <Div>
                <DescriptionDiv>Small notification/descriptor placeholder</DescriptionDiv>
                <Table list={this.state.data} onClickButton={onClickButton}/>

                    {/*<List
                    width={500}
                    height={500}
                    rowCount={list.length}
                    rowHeight={30}
                    rowRenderer={({key,index,isScrolling,isVisible,style})=>((
            <div key={key} style={style}>
                <tr className={'h1'}>
                    <td> {list[index]}</td>
                    <td><button onClick={(e)=>{e.preventDefault();this.onClickButton(index)}}>{index}</button><br/></td>
                </tr>
               
                
            </div>
        ))}

                    />*/}
{/*
                <button onClick={(e)=>{e.preventDefault();onClickButton('801')}}>801</button><br/>
                <button onClick={(e)=>{e.preventDefault();onClickButton('802')}}>802</button><br/>
                <button onClick={(e)=>{e.preventDefault();onClickButton('803')}}>803</button>*/}
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