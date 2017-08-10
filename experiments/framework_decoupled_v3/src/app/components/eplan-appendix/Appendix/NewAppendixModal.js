import React from 'react'
import { /* AppendixButton */ ModalWindow, ModalHeader, ModalContent, ModalButtonPanel, ModalHeaderIcon, ModalHeaderTitle, ModalHeaderClose } from 'app/styles/EplanStyles'
import { FieldLabel, TextInputField } from 'app/styles/'
import * as Icons from 'react-icons/lib/md'
import * as iconname from 'framework/assets/icons'
import Button from 'framework/components/Widgets/Button'

const NewAppendixModal = ({ newAppendixModalIsOpen, closeNewAppendixModal, saveNewAppendix }) => {
    return (
        <div>
            <ModalWindow isOpen={newAppendixModalIsOpen} onRequestClose={closeNewAppendixModal} contentLabel="Tilføj tillæg">
                <ModalHeader>
                    <ModalHeaderIcon><Icons.MdAddCircleOutline size="30" color="#fff" /></ModalHeaderIcon>
                    <ModalHeaderTitle>Tilføj kommuneplan tillæg</ModalHeaderTitle>
                    <ModalHeaderClose onClick={(e) => { e.preventDefault(); closeNewAppendixModal() }}><Icons.MdClose size="30" color="#fff" /></ModalHeaderClose>
                </ModalHeader>
                <ModalContent>
                    <form>
                        <FieldLabel for="name">Kommuneplan tillæg navn</FieldLabel>
                        <TextInputField type="text" name="name" />
                        <br />
                        <FieldLabel for="number">Kommuneplan tillæg nummer</FieldLabel>
                        <TextInputField type="text" name="number" />
                        <br />
                        <FieldLabel for="numFrames">Antal kommuneplan rammer</FieldLabel>
                        <TextInputField type="text" name="numFrames" />
                        <br />
                        <br />
                    </form>
                    <ModalButtonPanel>
                        <Button onClick={saveNewAppendix} icon={iconname.ICON_ADD_CIRCLE} size={18}>Opret nyt tillæg</Button>
                    </ModalButtonPanel>
                </ModalContent>
            </ModalWindow>
        </div>
    )
}

export default NewAppendixModal