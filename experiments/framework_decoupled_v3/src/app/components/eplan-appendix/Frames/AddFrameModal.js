import React from 'react'
import { ModalWindow, ModalHeader, ModalContent, ModalButtonPanel, ModalHeaderIcon, ModalHeaderTitle, ModalHeaderClose } from 'app/styles/EplanStyles'
import * as colors from 'framework/assets/colors'
import Icon from 'framework/assets/Icon'
import * as iconname from 'framework/assets/icons'
import Button from 'framework/components/Widgets/Button'

const AddFrameModal = ({ addFrameModalIsOpen, closeAddFrameModal, addNewFrame }) => {
    return (
        <div>
            <ModalWindow isOpen={addFrameModalIsOpen} onRequestClose={closeAddFrameModal} contentLabel="Tilføj ramme til kommuneplantillæg">
                <ModalHeader>
                    <ModalHeaderIcon>
                        <Icon icon={iconname.ICON_ADD_CIRCLE} size={30} color={colors.MODAL_HEADER_ICON} active={true} />
                    </ModalHeaderIcon>
                    <ModalHeaderTitle>Tilføj ramme til kommuneplantillæg</ModalHeaderTitle>
                    <ModalHeaderClose onClick={(e) => { e.preventDefault(); closeAddFrameModal() }}>
                        <Icon icon={iconname.ICON_CLOSE} size={30} color={colors.MODAL_HEADER_ICON} active={true} />
                    </ModalHeaderClose>
                </ModalHeader>
                <ModalContent>
                    Er du sikker på du vil tilføje en ny ramme?
                    <ModalButtonPanel>
                        <Button onClick={addNewFrame} icon={iconname.ICON_ADD_CIRCLE} size={18}>Ja</Button>
                        <Button onClick={closeAddFrameModal} icon={iconname.ICON_ADD_CIRCLE} size={18}>Nej</Button>
                    </ModalButtonPanel>
                </ModalContent>
            </ModalWindow>
        </div>
    )
}

export default AddFrameModal