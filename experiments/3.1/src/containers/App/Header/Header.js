import React, { Component } from 'react'
import HeaderLogo from '../../../components/App/Header/HeaderLogo'
import HeaderSearch from '../../../components/App/Header/HeaderSearch'
import HeaderNotification from '../../../components/App/Header/HeaderNotification'
import PropTypes from 'prop-types'
import * as styled from '../../../components/App/styles/HeaderStyles'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as GlobalActions from '../../../store/actions/global'

class HeaderContainer extends Component {

        render() {
                return (
                        <styled.HeaderDiv>
                                <HeaderLogo onPush={this.props.onPush} />
                                <HeaderSearch />
                                <HeaderNotification />
                        </styled.HeaderDiv>
                )
        }
}
HeaderContainer.propTypes = {
        onPush: PropTypes.func.isRequired
}
const mapStateToProps = (state) => ({

})
function mapDispatchToProps(dispatch) {
        return bindActionCreators(GlobalActions, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);