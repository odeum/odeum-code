import React from 'react'
import { ModalWindow, ModalHeader, ModalContent, ModalHeaderIcon, ModalHeaderTitle, ModalHeaderClose, ModalButtonPanel } from 'framework/components/styles/ModalStyles'
import Button from 'framework/components/Widgets/Button'
import * as iconname from 'framework/assets/icons'
import * as colors from 'framework/assets/colors'
import Icon from 'framework/assets/Icon'

const DeleteModal = ({ deleteModalIsOpen, closeDeleteModal, customStyles, appendix, onClickDeleteAppendix }) => {
	return (
		<div>
			{appendix !== null ?
				<ModalWindow isOpen={deleteModalIsOpen} onRequestClose={closeDeleteModal} contentLabel="Eksportér til plansystem">
					<ModalHeader>
						<ModalHeaderIcon>
							<Icon icon={iconname.ICON_DELETE} size={30} color={colors.MODAL_HEADER_ICON} active={true} />
						</ModalHeaderIcon>
						<ModalHeaderTitle>Eksportér til plansystem</ModalHeaderTitle>
						<ModalHeaderClose onClick={closeDeleteModal}>
							<Icon icon={iconname.ICON_CLOSE} size={30} color={colors.MODAL_HEADER_ICON} active={true} />
						</ModalHeaderClose>
					</ModalHeader>
					<ModalContent>
						<div id="exportStepOne">
                        Slet tillæg {appendix.name}!
							<ModalButtonPanel>                            
								<Button id="deleteButton" onClick={onClickDeleteAppendix} icon={iconname.ICON_DELETE} size={18}>OK</Button>
								<Button id="deleteCloseButton" onClick={closeDeleteModal} icon={iconname.ICON_CLOSE} size={18}>Luk</Button>
							</ModalButtonPanel>
						</div>
					</ModalContent>
				</ModalWindow>
				: ""
			}
		</div>
	)
}

export default DeleteModal 