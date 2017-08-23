import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Quill from 'app/containers/eplan-appendix/Appendix/Editors/Quill'
import { FormPanelWrapper, FormPanelHeader } from 'app/styles/EplanStyles'

class FormPanel extends Component {
	constructor(props) {
		super(props)

		this.state = {
			panellIsOpen: (this.props.index === 0) ? true : false,
			panelStyle: {
				borderBottomLeftRadius: (this.props.index === 0) ? '0' : '4px',
				borderBottomRightRadius: (this.props.index === 0) ? '0' : '4px',
			}
		}
	}

	handleOnClick = () => {
		if (this.state.panellIsOpen) {
			this.setState({ panellIsOpen: false })
		} else {
			this.setState({ panellIsOpen: true })
		}
		this.setState({ 
			panelStyle: {
				borderBottomLeftRadius: (this.state.panellIsOpen) ? '4px' : '0',
				borderBottomRightRadius: (this.state.panellIsOpen) ? '4px' : '0',
			} 
		})
	}

	render() {
		return (
			<FormPanelWrapper>
				<FormPanelHeader onClick={this.handleOnClick} style={this.state.panelStyle}>
					{this.props.label}
				</FormPanelHeader>
				<Quill {...this.props.input} label={this.props.label} panellIsOpen={this.state.panellIsOpen} />
				{this.props.touched && this.props.error &&
					<span>
						{this.props.error}
					</span>
				}
			</FormPanelWrapper>
		)
	}
}

FormPanel.propTypes = {
	index: PropTypes.number.isRequired,
	label: PropTypes.string.isRequired,
	input: PropTypes.any.isRequired,
	touched: PropTypes.any,
	error: PropTypes.any
}

export default FormPanel