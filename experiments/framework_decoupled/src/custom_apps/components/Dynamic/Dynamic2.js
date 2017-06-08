import React,{Component} from 'react'
import styled from 'styled-components'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as dynamicActions from './dynamicActions'

export const DashboardDiv = styled.div`
    float: left;
    width: calc(100% - 290px);
    height: calc(100vh - 230px);
    padding-left: 20px;
    padding-right: 20px;
    background: #ecf0f1;
    margin-top: 10px;
`


class Dynamic2 extends Component {
    componentWillMount(){
this.props.updateTab(    
    {
    label:'Dynamic2',
    icon:'info',
    location:this.props.location.pathname,
    fixed:false}
)

    }
    render() {
        return (
            <DashboardDiv>
                Dynamic2
            </DashboardDiv>
        )
    }
}

const mapStateToProps = (state) => ({
    activeLabel: state.global.activeLabel
})
function mapDispatchToProps(dispatch) {
    return bindActionCreators(dynamicActions, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Dynamic2)