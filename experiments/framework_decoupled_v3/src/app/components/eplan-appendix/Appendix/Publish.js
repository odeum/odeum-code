import React from 'react'
import { PublishStepTwoDiv, PublishLoadingDiv, PulseLoader, ModalWindow, ModalHeader, ModalContent, ModalButtonPanel, ModalHeaderIcon, ModalHeaderTitle, ModalHeaderClose } from 'app/styles/EplanStyles'
import Button from 'framework/components/Widgets/Button'
import * as iconname from 'framework/assets/icons'
import * as colors from 'framework/assets/colors'
import Icon from 'framework/assets/Icon'

const Publish = ({ publishModalIsOpen, closePublishModal, customStyles, appendix, onClickPublishAppendix }) => {
	return (
		<div>
			<ModalWindow isOpen={publishModalIsOpen} onRequestClose={closePublishModal} contentLabel="Plansystem">
				<ModalHeader>
					<ModalHeaderIcon>
						<Icon icon={iconname.ICON_CLOUD_UPLOAD} size={30} color={colors.MODAL_HEADER_ICON} active={true} />
					</ModalHeaderIcon>
					<ModalHeaderTitle>Publicer til plansystem</ModalHeaderTitle>
					<ModalHeaderClose onClick={(e) => { e.preventDefault(); closePublishModal() }}>
						<Icon icon={iconname.ICON_CLOSE} size={30} color={colors.MODAL_HEADER_ICON} active={true} />
					</ModalHeaderClose>
				</ModalHeader>
				<ModalContent>
					<div id="publishStepOne">
                        Tillæg {appendix.name} indmeldes med følgende status: {appendix.status}
						<ModalButtonPanel>                            
							<Button id="publishButton" onClick={async (e) => { e.preventDefault(); await onClickPublishAppendix() }} icon={iconname.ICON_CLOUD_UPLOAD} size={18}>Publicer</Button>
						</ModalButtonPanel>
					</div>
					<PublishStepTwoDiv id="publishStepTwo">
						<PublishLoadingDiv id="publishLoadingDiv">
							<PulseLoader color="royalblue" />
						</PublishLoadingDiv>
						<div id="publishStatusText"></div>
						<ModalButtonPanel>
							<Button id="publishCloseButton" onClick={(e) => { e.preventDefault(); closePublishModal() }} icon={iconname.ICON_CLOSE} size={18}>Luk</Button>
						</ModalButtonPanel>
					</PublishStepTwoDiv>
				</ModalContent>
			</ModalWindow>
		</div>
	)
}

export default Publish 