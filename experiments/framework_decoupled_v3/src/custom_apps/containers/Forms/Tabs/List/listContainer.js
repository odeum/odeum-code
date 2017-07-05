import React, { Component } from 'react'
// import PropTypes from 'prop-types'
// import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {push} from 'react-router-redux'
import {tabChange} from 'store/modules/tabs'
import {Div} from 'custom_apps/styles'
class List extends Component {

    
    componentWillMount() {
        //Fixed tab example
        this.props.onMount()
    }
    
    render() {
        return (
            <Div>
                Here are all the forms 
                <br/>
                <br/>
                <button onClick={(e)=>{e.preventDefault();this.props.onClick()}}>Open form</button>
            </Div>
        )
    }
}


const mapStateToProps = (state) => ({
})

const mapDispatchToProps = dispatch => ({
    onClick:()=>{
        dispatch(push('/forms/list/form'))
    },
    onMount:()=>{
        dispatch(tabChange('formlist','All Forms'))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(List)
