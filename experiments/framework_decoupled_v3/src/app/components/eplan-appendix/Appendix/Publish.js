import React from 'react'
import { PublishStepTwoDiv, PublishLoadingDiv, PulseLoader, ModalWindow, ModalHeader, ModalContent, ModalButtonPanel, ModalHeaderIcon, ModalHeaderTitle, ModalHeaderClose } from 'app/styles/EplanStyles'
import * as Icons from 'react-icons/lib/md'
import theme from 'framework/assets/theme'
import Button from 'framework/components/Widgets/Button'
import * as iconname from 'framework/assets/icons'

const Publish = ({ publishModalIsOpen, closePublishModal, customStyles, appendix, onClickPublishAppendix }) => {
    return (
        <div>
            <ModalWindow isOpen={publishModalIsOpen} onRequestClose={closePublishModal} contentLabel="Plansystem">
                <ModalHeader>
                    <ModalHeaderIcon><Icons.MdCloudUpload size="30" color="#fff" style={theme.iconStyle} /></ModalHeaderIcon>
                    <ModalHeaderTitle>Publicer til plansystem</ModalHeaderTitle>
                    <ModalHeaderClose onClick={(e) => { e.preventDefault(); closePublishModal() }}><Icons.MdClose size="30" color="#fff" /></ModalHeaderClose>
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