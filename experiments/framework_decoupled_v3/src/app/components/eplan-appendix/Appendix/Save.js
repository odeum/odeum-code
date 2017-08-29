import React from 'react'
import { ModalWindow } from 'framework/components/styles/ModalStyles'


const SaveModal = () => {
	return (
		<ModalWindow>
			<p> Are you sure you want to save?</p>
			<button>Yes</button><button>No</button>
		</ModalWindow>
	)
}

export default SaveModal