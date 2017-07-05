import React, { Component } from 'react'
import {connect} from 'react-redux'
import {changeId} from 'store/modules/tabs'
import TabsContainer from 'containers/Tabs/TabsContainer'
import styled from 'styled-components'
class Forms extends Component {
    
    componentWillMount() {
        this.props.onMount()
    }
    
    render() {
    const Div = styled.div`
    float: left;
    width: calc(100% - 290px);
    height: calc(100vh - 230px);
    padding-left: 20px;
    padding-right: 20px;
    background: #ecf0f1;
    margin-top: 10px;
`
        return (
            <Div>
                <TabsContainer id='formlist'/>
                <br/>
               {this.props.children}
            </Div>
        )
    }
}
const mapStateToProps = (state) => ({
})

function mapDispatchToProps(dispatch) {
    return{
        onMount: ()=>{
            dispatch(changeId('forms'))
        }
    }
    
}
export default connect(mapStateToProps,mapDispatchToProps)(Forms)

