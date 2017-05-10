import React, { Component } from 'react'
import * as styled from '../../../components/App/styles/FooterStyles'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as GlobalActions from '../../../store/actions/global'

class FooterContainer extends Component {
        render() {
                let date = new Date()
                return (
                        <styled.FooterDiv><b>ODEUM Report</b> v2.0.0 © Copyright {date.getFullYear()}</styled.FooterDiv>
                )
        }
}

const mapStateToProps = (state) => ({
})
function mapDispatchToProps(dispatch) {
        return bindActionCreators(GlobalActions, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(FooterContainer)