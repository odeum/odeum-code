import React from 'react'
import ReactQuill from 'react-quill'

const Quill = ({ value, onChange }) => {
	return (
		<div style={{ width: '100%' }}>

			<ReactQuill value={value} 
				onChange={onChange}
				modules={Quill.modules}/>
		</div>
	)
}

export default Quill

Quill.modules = {
	toolbar: [
		[{ 'header': '1' }, { 'header': '2' }],
		[{ size: [] }],
		['bold', 'italic', 'underline', 'strike', 'blockquote'],
		[{ 'list': 'ordered' }, { 'list': 'bullet' }, 
			{ 'indent': '-1' }, { 'indent': '+1' }],
		['link', 'image', 'video'],
		['clean']
	]
}