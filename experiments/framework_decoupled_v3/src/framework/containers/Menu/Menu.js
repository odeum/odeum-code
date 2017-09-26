import React, { Component } from 'react'
import MenuItem from 'framework/components/Menu/MenuItem'
import PropTypes from 'prop-types'
//Styles
import { MenuDiv, MenuHeader, MenuIconDiv } from './StyledMenu'
//Redux
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { changeInstance } from 'framework/store/modules/tabs'
import { getMenuItems } from 'framework/store/selectors/menuSelector'
import Icon from 'framework/assets/Icon'



class MenuContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {
			close: true
		}
		this.active = this.active.bind(this)
		this.switch = this.switch.bind(this)
	}
	active(sceneName) {
		if (sceneName === this.props.active)
			return true
		else
			return false
	}
	switch = () => {
		if (this.state.close) { this.setState({ close: false }) }
		else { this.setState({ close: true }) }
	}
	render() {
		const { scenes } = this.props
		const { close } = this.state
		return (
			<MenuDiv close={close}>
				<MenuHeader close={close}><MenuIconDiv onClick={this.switch}><Icon icon={'menu'} size={18} active={true} /></MenuIconDiv></MenuHeader>
				{Object.keys(scenes).map((scene, index) => (
					<MenuItem name={scenes[scene].name}
						icon={scenes[scene].icon}
						location={scenes[scene].location}
						active={this.active(scenes[scene].sceneID)}
						key={index}
						onLoad={this.props.changeInstance}
						id={scenes[scene].sceneID}
						close={this.state.close}
					/>))}
			</MenuDiv>
		)
	}
}
MenuContainer.propTypes = {
	scenes: PropTypes.object.isRequired,
	active: PropTypes.string.isRequired
}

const mapStateToProps = (state, props) => ({
	scenes: getMenuItems(state, props),
	active: state.tabReducer.activeScene
})

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		changeInstance
	}, dispatch)

}

export default connect(mapStateToProps, mapDispatchToProps)(MenuContainer)