import React from 'react'
import { ModalWindow } from 'app/styles/EplanStyles'
import { AppendixButton } from 'app/styles/EplanStyles'

const NewAppendixModal = ({ newAppendixModalIsOpen, closeNewAppendixModal, saveNewAppendix }) => {
    return (
        <div>
            <ModalWindow isOpen={newAppendixModalIsOpen} onRequestClose={closeNewAppendixModal} contentLabel="Tilføj tillæg">
                <h2>Tilføj tillæg</h2>
                <br />
                <form>
                    <br />
                    <br />
                    <AppendixButton onClick={saveNewAppendix}>Tilføj tillæg</AppendixButton>
                </form>
            </ModalWindow>
        </div>
    )
}

export default NewAppendixModal