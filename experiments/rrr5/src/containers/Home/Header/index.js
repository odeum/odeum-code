import React, { Component } from 'react'
import HeaderLogo from '../../../components/Home/Header/HeaderLogo'
import HeaderSearch from '../../../components/Home/Header/HeaderSearch'
import HeaderNotification from '../../../components/Home/Header/HeaderNotification'
import PropTypes from 'prop-types'
import * as styled from '../../../components/Home/styled/HeaderStyle'
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