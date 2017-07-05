import React, { Component } from 'react'
import {connect} from 'react-redux'
import {changeId} from 'framework/store/modules/tabs'
import TabsContainer from 'framework/containers/Tabs/TabsContainer'
import {Div} from 'app/styles'
class Forms extends Component {
    
    componentWillMount() {
        this.props.onMount()
    }
    
    render() {

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

