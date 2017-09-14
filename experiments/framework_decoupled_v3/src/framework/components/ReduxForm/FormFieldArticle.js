import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Editor from 'framework/components/Widgets/Editor'

class FormFieldArticle extends Component {
	render() {
		return (<div>
			<Editor {...this.props.input} label={this.props.label} panellIsOpen={true} />
		</div>)
	}
}

FormFieldArticle.propTypes = {
	label: PropTypes.string.isRequired,
	input: PropTypes.any.isRequired
}

export default FormFieldArticle