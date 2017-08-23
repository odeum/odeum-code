import React, { Component } from 'react'
import { ReactQuillStyled } from 'app/styles/EplanStyles'
import ImageBrowserModal from 'framework/components/Widgets/ImageBrowserModal'
import { getImagesList } from 'app/data/eplan' //getAppendixFramesList
// import { List } from 'immutable'

class Quill extends Component {
	constructor(props) {
		super(props)

		this.state = {
			imageBrowserModalIsOpen: false,
			imagesList: null
		}

		this.openImageBrowserModal = this.openImageBrowserModal.bind(this)
		this.closeImageBrowserModal = this.closeImageBrowserModal.bind(this)
		this.insertImage = this.insertImage.bind(this)

		this.modules = {
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
					"image": this.openImageBrowserModal,
				}
			}
		}
	}

	async componentWillMount() {
		this.setQuillStyle(this.props)

		let list = await getImagesList('/')
		// console.log(list)
		this.setState({ imagesList: list })
	}

	componentWillUpdate(nextProps) {
		this.setQuillStyle(nextProps)
	}

	setQuillStyle(props) {
		this.quillStyle = {
			display: (props.panellIsOpen) ? 'block' : 'none'
		}
	}

	openImageBrowserModal() {
		this.setState({
			imageBrowserModalIsOpen: true
		})
	}

	closeImageBrowserModal() {
		this.setState({
			imageBrowserModalIsOpen: false
		})
	}

	insertImage() {
		console.log(this.reactQuillRef)
		this.reactQuillRef.getEditor().insertEmbed(10, 'image', 'http://quilljs.com/images/cloud.png')
	}

	render() {
		return (
			<div>
				<ReactQuillStyled ref={(el) => { this.reactQuillRef = el }} value={this.props.value} onChange={this.props.onChange} modules={this.modules} style={this.quillStyle} />
				{this.state.imagesList !== null ? <ImageBrowserModal imageBrowserModalIsOpen={this.state.imageBrowserModalIsOpen} closeImageBrowserModal={this.closeImageBrowserModal} list={this.state.imagesList} insertImage={this.insertImage} /> : ""}
			</div>
		)
	}
}

export default Quill

// function imageHandler() {
// alert('imageHandler')
//	var range = this.quill.getSelection()
//	var value = prompt('What is the image URL')
//	this.quill.insertEmbed(range.index, 'image', value, Quill.sources.USER)
// }
