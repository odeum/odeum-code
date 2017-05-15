import React, { Component } from 'react'
import generalActions from './generalActions.js'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
class General extends Component {
    componentWillMount(){
        // console.log("Test")
        // this.props.updateTab('General')
        // 
        // console.log(generalActions)
    }
    render() {
        /*eslint-*/
        console.log(this.props)
        return (
            <div>
                General
            </div>
        )
    }
}

// const mapStateToProps = (state) => ({

// })
// function mapDispatchToProps(dispatch) {
//     return bindActionCreators(generalActions, dispatch)
// }
export default General