import React, { Component } from 'react'
import PropTypes from 'prop-types'

// import * as iconname from './components/icons'
import * as colors from 'framework/assets/colors'
import theme from 'framework/assets/theme'
import Icon from 'framework/assets/Icon'
import StyledButton from 'framework/components/styles/ButtonStyles'

//TODO: constructor, switch buttonType, sizes, fonts, and colors from theme!!!
class Button extends Component {
	constructor(props) {
		super(props)
		this.state = { message: this.props.children }
	}
	handleClick = (event) => {
		/*event.preventDefault()*/
		/*event.persist()*/
		console.log(event.type)
		console.log(this.state.message)
		console.log(this.props.children)
	}

	render() {
		return (
			<StyledButton id={this.props.id} onClick={this.props.onClick}>  {/* onClickCapture={(event) => this.handleClick(event)}  -- onClick={this.handleClick*/}
				<Icon icon={this.props.icon} size={this.props.size} color={colors.BUTTON_TEXT} active={true} style={theme.iconButtonStyle} /><span>{this.props.children}</span>
			</StyledButton>
		)
	}
}

Button.propTypes = {
	icon: PropTypes.string/* .isRequired */,
	size: PropTypes.number,
	color: PropTypes.string,
	active: PropTypes.bool,
	id: PropTypes.string,
	onClick: PropTypes.func,
	style: PropTypes.shape({
		verticalAlign: PropTypes.string,
		paddingRight: PropTypes.string
	})
}

Button.defaultProps = {
	name: 'info',
	size: 75,
	color: colors.ICON_DEFAULT_COLOR,
	active: false,
	style: {
		verticalAlign: '-5px',
		paddingRight: '8px'
	}
}

export default Button
