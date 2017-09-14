import React, { Component } from 'react'
import Logo from 'framework/components/Header/Logo'
// import Search from 'framework/components/Header/Search'
// import Notification from 'framework/components/Header/Notification'
import { HeaderDiv } from 'framework/components/styles/HeaderStyles'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'


class HeaderContainer extends Component {
	render() {
		return (
			<HeaderDiv>
				<Logo />
{/* 			<Search />
				<Notification /> */}
			</HeaderDiv>
		)
	}
}
HeaderContainer.propTypes = {
}

const mapStateToProps = (state) => ({
})

function mapDispatchToProps(dispatch) {
	return bindActionCreators({}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)