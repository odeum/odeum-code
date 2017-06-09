import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as formsActions from '../../formsActions'
// import {browserHistory} from 'react-router'
class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            formParams: false
        }
    }
    componentWillMount() {
        let FormProps = this.props.getForm(parseInt(this.props.id, 10))
        // console.log(this.state.formParams)
        // console.log(FormProps)
        if (FormProps !== undefined) {
            this.setState({ formParams: true })
            this.props.updateTab(
                {
                    label: FormProps.name,
                    location: '/forms/' + this.props.id,
                    icon: 'info',
                    fixed: false
                })
        }
        else {
            //this.setState({ formParams: true })
            this.props.updateTab(
                {
                    label: "Error",
                    location: '/forms/' + this.props.id,
                    icon: 'info',
                    fixed: false
                })
        }


    }
    render() {
        return (
            this.state.formParams ?
                (
                    <div>It worked  {this.props.id}</div>) : (<div>Error 404</div>)
        )
    }
}
const mapStateToProps = (state, ownProps) => ({
    id: ownProps.params.id
})
function mapDispatchToProps(dispatch) {
    return bindActionCreators(formsActions, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Form)