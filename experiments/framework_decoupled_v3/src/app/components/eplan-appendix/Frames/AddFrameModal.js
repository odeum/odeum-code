import React from 'react'
import { ModalWindow, ModalHeader, ModalContent, ModalHeaderIcon, ModalHeaderTitle, ModalHeaderClose } from 'framework/components/styles/ModalStyles'
import * as colors from 'framework/assets/colors'
import Icon from 'framework/assets/Icon'
import * as iconname from 'framework/assets/icons'
import { Button, ButtonPanel } from 'odeum-ui'

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
					<ButtonPanel justify="left">
						<Button onClick={closeAddFrameModal} icon="add_circle" label="Nej" />
						<Button onClick={addNewFrame} icon="add_circle" label="Ja" />
					</ButtonPanel>
				</ModalContent>
			</ModalWindow>
		</div>
	)
}

export default AddFrameModal