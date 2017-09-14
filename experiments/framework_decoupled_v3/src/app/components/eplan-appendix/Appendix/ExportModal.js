import React from 'react'
import { ModalWindow, ModalHeader, ModalContent, ModalHeaderIcon, ModalHeaderTitle, ModalHeaderClose, ModalButtonPanel } from 'framework/components/styles/ModalStyles'
import { ExportStepTwoDiv, ExportLoadingDiv, PulseLoader } from 'app/styles/EplanStyles'
import Button from 'framework/components/Widgets/Button'
import * as iconname from 'framework/assets/icons'
import * as colors from 'framework/assets/colors'
import Icon from 'framework/assets/Icon'

const ExportModal = ({ exportModalIsOpen, closeExportModal, customStyles, appendix, onClickExportAppendix }) => {
	// console.log(exportModalIsOpen, closeExportModal, customStyles, appendix, onClickExportAppendix)
	return (
		<div>
			{appendix !== null ?
				<ModalWindow isOpen={exportModalIsOpen} onRequestClose={closeExportModal} contentLabel="Eksportér til plansystem">
					<ModalHeader>
						<ModalHeaderIcon>
							<Icon icon={iconname.ICON_CLOUD_UPLOAD} size={30} color={colors.MODAL_HEADER_ICON} active={true} />
						</ModalHeaderIcon>
						<ModalHeaderTitle>Eksportér til plansystem</ModalHeaderTitle>
						<ModalHeaderClose onClick={(e) => { e.preventDefault(); closeExportModal() }}>
							<Icon icon={iconname.ICON_CLOSE} size={30} color={colors.MODAL_HEADER_ICON} active={true} />
						</ModalHeaderClose>
					</ModalHeader>
					<ModalContent>
						<div id="exportStepOne">
                        Tillæg {appendix.name} indmeldes med følgende status: {appendix.status}
							<ModalButtonPanel>                            
								<Button id="exportButton" onClick={async (e) => { e.preventDefault(); await onClickExportAppendix() }} icon={iconname.ICON_CLOUD_UPLOAD} size={18}>Eksportér</Button>
							</ModalButtonPanel>
						</div>
						<ExportStepTwoDiv id="exportStepTwo">
							<ExportLoadingDiv id="exportLoadingDiv">
								<PulseLoader color="royalblue" />
							</ExportLoadingDiv>
							<div id="exportStatusText"></div>
							<ModalButtonPanel>
								<Button id="exportCloseButton" onClick={(e) => { e.preventDefault(); closeExportModal() }} icon={iconname.ICON_CLOSE} size={18}>Luk</Button>
							</ModalButtonPanel>
						</ExportStepTwoDiv>
					</ModalContent>
				</ModalWindow>
				: ""
			}
		</div>
	)
}

export default ExportModal 