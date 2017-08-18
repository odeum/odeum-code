import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Quill from 'app/containers/eplan-appendix/Appendix/Editors/Quill'
import { FormPanelWrapper, FormPanelHeader } from 'app/styles/EplanStyles'

class FormPanel extends Component {
	constructor(props) {
		super(props)
		this.state = {
			panellIsOpen: (this.props.index === 0) ? true : false
		}
	}

	handleOnClick = () => {
		if (this.state.panellIsOpen) {
			this.setState({ panellIsOpen: false })
		} else {
			this.setState({ panellIsOpen: true })
		}
	}

	render() {
		return (
			<FormPanelWrapper>
				<FormPanelHeader onClick={this.handleOnClick}>
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
	label: PropTypes.string.isRequired,
	input: PropTypes.any.isRequired,
	touched: PropTypes.any.isRequired,
	error: PropTypes.any
}

export default FormPanel