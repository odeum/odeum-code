import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Cell } from 'app/styles/TableStyles'

export default class OnClickCell extends Component {
	handleClick = () => {
		this.props.cellOnClick(this.props.data)
	}

	render() {
		return (<Cell onClick={this.handleClick}>{this.props.children}</Cell>)
	}
}

OnClickCell.propTypes = {
	cellOnClick: PropTypes.func.isRequired,
	data: PropTypes.object.isRequired
}