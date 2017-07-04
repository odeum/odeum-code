import React, { Component } from 'react'
import {connect} from 'react-redux'
import {addTab,tabChange} from 'store/modules/tabs'
class FormList extends Component {
    
    componentWillMount() {

        this.props.onMount('forms',{
            label:"Form",
            icon:"general",
            location:"form",//REFACTOR to ID
            fixed:false
        })
    }
    
    render() {
        return (
            <div>
              Form List
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
})

function mapDispatchToProps(dispatch) {
    return{
        onMount: (id,tab)=>{
            dispatch(addTab(id,tab))
            dispatch(tabChange(id,tab.label))
        }
    }
    
}
export default connect(mapStateToProps,mapDispatchToProps)(FormList)

