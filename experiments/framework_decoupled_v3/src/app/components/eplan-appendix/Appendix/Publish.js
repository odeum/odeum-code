import React from 'react'
import { PublishStepTwoDiv, PublishLoadingDiv,ModalWindow, PulseLoader } from 'app/styles/EplanStyles'
import Loader from 'halogen/FadeLoader'



const Publish = ({ publishModalIsOpen, closePublishModal, customStyles, appendix, onClickPublishAppendix }) => {
    return (
        <div>

            <ModalWindow isOpen={publishModalIsOpen} onRequestClose={closePublishModal} contentLabel="Plansystem">
                <h2>Publicer til plansystem</h2>
                <div id="publishStepOne">
                    Tillæg
                      {appendix.name} indmeldes med følgende status:
                      {appendix.status}
                    <br />
                    <br />
                    <button id="publishButton" onClick={async (e) => {
                        e.preventDefault(); await onClickPublishAppendix()
                    }}>Indmeld nu</button>
                </div>
                <PublishStepTwoDiv id="publishStepTwo">
                    <PublishLoadingDiv id="publishLoadingDiv">
                        <PulseLoader color="royalblue" />
                    </PublishLoadingDiv>
                    <div id="publishStatusText"></div>
                    <br />
                    <br />
                    <button onClick={(e) => {
                        e.preventDefault()
                        closePublishModal()
                    }}>Luk</button>
                </PublishStepTwoDiv>
            </ModalWindow>
        </div>
    )
}

export default Publish 