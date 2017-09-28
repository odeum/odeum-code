import React, { Component } from 'react'
import PropTypes from 'prop-types'
import RichTextEditor from 'react-rte'
const toolbarConfig = {
	display: ['INLINE_STYLE_BUTTONS', 'BLOCK_TYPE_BUTTONS', 'LINK_BUTTONS', 'BLOCK_TYPE_DROPDOWN', 'HISTORY_BUTTONS'],
	INLINE_STYLE_BUTTONS: [
		{
			label: 'Bold',
			style: 'BOLD',
			className: 'custom-css-class'
		},
		{
			label: 'Italic',
			style: 'ITALIC'
		},
		{
			label: 'Underline',
			style: 'UNDERLINE'
		}
	],
	BLOCK_TYPE_DROPDOWN: [
		{
			label: 'Normal',
			style: 'unstyled'
		},
		{
			label: 'Heading Large',
			style: 'header-one'
		},
		{
			label: 'Heading Medium',
			style: 'header-two'
		},
		{
			label: 'Heading Small',
			style: 'header-three'
		}
	],
	BLOCK_TYPE_BUTTONS: [
		{
			label: 'UL',
			style: 'unordered-list-item'
		},
		{
			label: 'OL',
			style: 'ordered-list-item'
		}
	]
}

export default class DraftEditor extends Component {
	static propTypes = {
		onChange: PropTypes.func.isRequired,
		value: PropTypes.string
	}
	constructor(props) {
		super(props)
		this.state = { value: RichTextEditor.createValueFromString(this.props.value, 'html') }
	}
	componentDidMount() {
		this.setState({
			value: this.props.value ?
				RichTextEditor.createValueFromString(this.props.value, 'html') : RichTextEditor.createEmptyValue()
		})
	}
	handleChange = value => {
		this.setState({ value: value })
		this.props.onChange(value.toString('html'))
	}
	render() {
		const { state: { value }, handleChange } = this
		return <div style={{ width: '100%' }}><RichTextEditor value={value} onChange={handleChange} toolbarConfig={toolbarConfig} /></div>
	}
}