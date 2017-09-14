import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Editor from 'framework/components/Widgets/Editor'
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
		let field = null

		// if (this.props.input.type === 'ARTICLE') {
		field = <Editor {...this.props.input} label={this.props.label} panellIsOpen={this.state.panellIsOpen} />
		// } else if (this.props.input.type === 'TEXTAREA') {
		// 	field = <FormFieldTextarea name={this.props.input.name} component="input" type="text" />
		// }

		return (
			<FormPanelWrapper>
				<FormPanelHeader onClick={this.handleOnClick} style={this.state.panelStyle}>
					{this.props.label}
				</FormPanelHeader>
				{field}
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