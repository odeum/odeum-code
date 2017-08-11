import React from 'react'
import { ModalWindow, ModalHeader, ModalContent, ModalHeaderIcon, ModalHeaderTitle, ModalHeaderClose } from 'app/styles/EplanStyles'
import PDF from 'react-pdf-js'
import * as colors from 'framework/assets/colors'
import Icon from 'framework/assets/Icon'
import * as iconname from 'framework/assets/icons'

const AppendixPdfModal = ({ pdfModalIsOpen, closePdfModal, onDocumentComplete, onPageComplete, page, pagination, pdfFile }) => {
	return (
		<div>
			<ModalWindow isOpen={pdfModalIsOpen} onRequestClose={closePdfModal} contentLabel="PDF">
				<ModalHeader>
					<ModalHeaderIcon>
						<Icon icon={iconname.ICON_ADD_CIRCLE} size={30} color={colors.MODAL_HEADER_ICON} active={true} />
					</ModalHeaderIcon>
					<ModalHeaderTitle>Kommuneplantillæg PDF</ModalHeaderTitle>
					<ModalHeaderClose onClick={(e) => { e.preventDefault(); closePdfModal() }}>
						<Icon icon={iconname.ICON_CLOSE} size={30} color={colors.MODAL_HEADER_ICON} active={true} />
					</ModalHeaderClose>
				</ModalHeader>
				<ModalContent>
					<PDF file={pdfFile}
						onDocumentComplete={onDocumentComplete}
						onPageComplete={onPageComplete}
						page={page}
					/>
					{pagination}
				</ModalContent>
			</ModalWindow>
		</div>
	)
}

export default AppendixPdfModal