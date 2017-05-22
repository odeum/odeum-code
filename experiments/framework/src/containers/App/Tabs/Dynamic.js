import React,{Component} from 'react'
import styled from 'styled-components'
import {store} from '../../../index'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as tabsActions from './tabsActions'

export const DashboardDiv = styled.div`
    float: left;
    width: calc(100% - 290px);
    height: calc(100vh - 230px);
    padding-left: 20px;
    padding-right: 20px;
    background: #ecf0f1;
    margin-top: 10px;
`


class Dynamic extends Component {
    componentWillMount(){
        store.dispatch({type:'LOAD_LABEL',payload:{label:'Dynamic',icon:'generelt',location:this.props.location.pathname,fixed:false}})
       // console.log(store)
    }
    render() {
        return (
            <DashboardDiv>
                Dynamic
            </DashboardDiv>
        )
    }
}

const mapStateToProps = (state) => ({
    activeLabel: state.global.activeLabel
})
function mapDispatchToProps(dispatch) {
    return bindActionCreators(tabsActions, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Dynamic)