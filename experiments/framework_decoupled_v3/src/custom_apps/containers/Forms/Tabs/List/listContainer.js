import React, { Component } from 'react'
// import PropTypes from 'prop-types'
// import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {push} from 'react-router-redux'
import {tabChange} from 'store/modules/tabs'

class List extends Component {

    
    componentWillMount() {
        this.props.onMount()
    }
    
    render() {
        return (
            <div>
                Here are all the forms <br/>
                <button onClick={(e)=>{e.preventDefault();this.props.onClick()}}>Open form</button>
            </div>
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
