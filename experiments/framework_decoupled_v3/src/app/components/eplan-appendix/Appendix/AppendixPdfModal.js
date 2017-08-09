import React from 'react'
import { ModalWindow, ModalHeader, ModalContent, ModalHeaderIcon, ModalHeaderTitle, ModalHeaderClose } from 'app/styles/EplanStyles'
import * as Icons from 'react-icons/lib/md'
import PDF from 'react-pdf-js'

const AppendixPdfModal = ({ pdfModalIsOpen, closePdfModal, onDocumentComplete, onPageComplete, page, pagination, pdfFile }) => {
    return (
        <div>
            <ModalWindow isOpen={pdfModalIsOpen} onRequestClose={closePdfModal} contentLabel="PDF">
                <ModalHeader>
                    <ModalHeaderIcon><Icons.MdAddCircleOutline size="30" color="#fff" /></ModalHeaderIcon>
                    <ModalHeaderTitle>Kommuneplantillæg PDF</ModalHeaderTitle>
                    <ModalHeaderClose onClick={(e) => { e.preventDefault(); closePdfModal() }}><Icons.MdClose size="30" color="#fff" /></ModalHeaderClose>
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