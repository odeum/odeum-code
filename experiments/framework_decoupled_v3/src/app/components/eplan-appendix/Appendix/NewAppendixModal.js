import React from 'react'
import { AppendixButton, ModalWindow, ModalHeader, ModalContent, ModalButtonPanel, ModalHeaderIcon, ModalHeaderTitle, ModalHeaderClose } from 'app/styles/EplanStyles'
import * as Icons from 'react-icons/lib/md'

const NewAppendixModal = ({ newAppendixModalIsOpen, closeNewAppendixModal, saveNewAppendix }) => {
    return (
        <div>
            <ModalWindow isOpen={newAppendixModalIsOpen} onRequestClose={closeNewAppendixModal} contentLabel="Tilføj tillæg">
                <ModalHeader>
                    <ModalHeaderIcon><Icons.MdAddCircleOutline size="30" color="#fff" /></ModalHeaderIcon>
                    <ModalHeaderTitle>Tilføj tillæg</ModalHeaderTitle>
                    <ModalHeaderClose onClick={(e) => { e.preventDefault(); closeNewAppendixModal() }}><Icons.MdClose size="30" color="#fff" /></ModalHeaderClose>
                </ModalHeader>
                <ModalContent>
                    <form>
                        <input type="text" name="" placeholder="Kommuneplantillæg navn" />
                        <br />
                        <input type="text" name="" placeholder="Kommuneplantillæg nummer" />
                        <br />
                        <input type="text" name="" placeholder="Antal kommuneplanrammer" />
                        <br />
                        <br />
                    </form>
                    <ModalButtonPanel><AppendixButton onClick={saveNewAppendix}>Gem tillæg</AppendixButton></ModalButtonPanel>
                </ModalContent>
            </ModalWindow>
        </div>
    )
}

export default NewAppendixModal