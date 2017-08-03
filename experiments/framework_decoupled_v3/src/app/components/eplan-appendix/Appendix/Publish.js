import React from 'react'
import { PublishStepTwoDiv, PublishLoadingDiv, PulseLoader, AppendixButton, ModalWindow, ModalHeader, ModalContent, ModalButtonPanel, ModalHeaderIcon, ModalHeaderTitle, ModalHeaderClose } from 'app/styles/EplanStyles'
import * as Icons from 'react-icons/lib/md'

const Publish = ({ publishModalIsOpen, closePublishModal, customStyles, appendix, onClickPublishAppendix }) => {
    return (
        <div>
            <ModalWindow isOpen={publishModalIsOpen} onRequestClose={closePublishModal} contentLabel="Plansystem">
                <ModalHeader>
                    <ModalHeaderIcon><Icons.MdPublish size="30" color="#fff" /></ModalHeaderIcon>
                    <ModalHeaderTitle>Publicer til plansystem</ModalHeaderTitle>
                    <ModalHeaderClose onClick={(e) => { e.preventDefault(); closePublishModal() }}><Icons.MdClose size="30" color="#fff" /></ModalHeaderClose>
                </ModalHeader>
                <ModalContent>
                    <div id="publishStepOne">
                        Tillæg {appendix.name} indmeldes med følgende status: {appendix.status}
                        <ModalButtonPanel><AppendixButton id="publishButton" onClick={async (e) => { e.preventDefault(); await onClickPublishAppendix() }}>Indmeld nu</AppendixButton></ModalButtonPanel>
                    </div>
                    <PublishStepTwoDiv id="publishStepTwo">
                        <PublishLoadingDiv id="publishLoadingDiv">
                            <PulseLoader color="royalblue" />
                        </PublishLoadingDiv>
                        <div id="publishStatusText"></div>
                        <ModalButtonPanel><AppendixButton onClick={(e) => { e.preventDefault(); closePublishModal() }}>Luk</AppendixButton></ModalButtonPanel>
                    </PublishStepTwoDiv>
                </ModalContent>
            </ModalWindow>
        </div>
    )
}

export default Publish 