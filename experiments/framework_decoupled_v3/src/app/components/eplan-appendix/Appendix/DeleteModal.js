import React from 'react'
import { ModalWindow, ModalHeader, ModalContent, ModalHeaderIcon, ModalHeaderTitle, ModalHeaderClose } from 'framework/components/styles/ModalStyles'
import * as iconname from 'framework/assets/icons'
import * as colors from 'framework/assets/colors'
import Icon from 'framework/assets/Icon'
import { Button, ButtonPanel } from 'odeum-ui'

const DeleteModal = ({ deleteModalIsOpen, closeDeleteModal, customStyles, appendix, onClickDeleteAppendix }) => {
	return (
		<div>
			{appendix !== null ?
				<ModalWindow isOpen={deleteModalIsOpen} onRequestClose={closeDeleteModal} contentLabel="Slet tillæg">
					<ModalHeader>
						<ModalHeaderIcon>
							<Icon icon={iconname.ICON_DELETE} size={30} color={colors.MODAL_HEADER_ICON} active={true} />
						</ModalHeaderIcon>
						<ModalHeaderTitle>Slet tillæg</ModalHeaderTitle>
						<ModalHeaderClose onClick={closeDeleteModal}>
							<Icon icon={iconname.ICON_CLOSE} size={30} color={colors.MODAL_HEADER_ICON} active={true} />
						</ModalHeaderClose>
					</ModalHeader>
					<ModalContent>
						Er du sikker på du vil slette tillæg <b>{appendix.name}</b>?
						<br />
						<ButtonPanel justify="left">                            
							<Button id="deleteCloseButton" onClick={closeDeleteModal} icon="close" label="Nej" />
							<Button id="deleteButton" onClick={onClickDeleteAppendix} icon="delete" label="Ja" />
						</ButtonPanel>
					</ModalContent>
				</ModalWindow>
				: ""
			}
		</div>
	)
}

export default DeleteModal 