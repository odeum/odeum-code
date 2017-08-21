import React from 'react'
import { ReactQuillStyled } from 'app/styles/EplanStyles'

const Quill = ({ value, onChange, panellIsOpen }) => {
	var quillStyle = {
		display: (panellIsOpen) ? 'block' : 'none',
	}

	return (
		<ReactQuillStyled value={value} onChange={onChange} modules={Quill.modules} style={quillStyle} />
	)
}

export default Quill

Quill.modules = {
	toolbar: {
		container: [
			[{ 'header': '1' }, { 'header': '2' }],
			[{ size: [] }],
			['bold', 'italic', 'underline', 'strike', 'blockquote'],
			[{ 'list': 'ordered' }, { 'list': 'bullet' }, 
				{ 'indent': '-1' }, { 'indent': '+1' }],
			['link', 'image', 'video'],
			['clean']
		],
		handlers: {
			"image": imageHandler,
	  	}
	}
}

function imageHandler() {
//	var range = this.quill.getSelection()
//	var value = prompt('What is the image URL')
//	this.quill.insertEmbed(range.index, 'image', value, Quill.sources.USER)
}