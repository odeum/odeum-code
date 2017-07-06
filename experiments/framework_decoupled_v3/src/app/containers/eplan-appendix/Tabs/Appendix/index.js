import React, { Component } from 'react'
import {connect} from 'react-redux'
// import General from 'app/components/Dashboard/Tabs/general'
import {addTab,tabChange} from 'framework/store/modules/tabs'
import {Div} from 'app/styles'
class Appendix extends Component {
    
    componentWillMount() {
        this.props.onMount(
            this.props.id,
            {
                label:this.props.param,
                icon:'mode_edit',
                location:'/eplan/list/'+this.props.param,
                fixed:false
            }
        )
}
    
    render() {
        return (
            <Div>
                Here is the appendix with id: {this.props.param}
            </Div>
        )
    }
}

const mapStateToProps = (state,ownProps) => ({
    param:ownProps.params.id
})

function mapDispatchToProps(dispatch) {
    return{
        onMount: (id,tab)=>{
            dispatch(addTab(id,tab))
            dispatch(tabChange(id,tab.label))
        }
    }
    
}

export default connect(mapStateToProps,mapDispatchToProps)(Appendix)