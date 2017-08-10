import React from 'react'
// import Modal from 'react-modal'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { ModalWindow, ModalHeader, ModalContent, ModalButtonPanel, ModalHeaderIcon, ModalHeaderTitle, ModalHeaderClose } from 'app/styles/EplanStyles'
import Button from 'framework/components/Widgets/Button'
import * as iconname from 'framework/assets/icons'
import * as colors from 'framework/assets/colors'
import Icon from 'framework/assets/Icon'

const Settings = ({ configModalIsOpen, closeConfigModal, handleDateChange, saveConfigModal, dates }) => {
  return (
    <div>
      <ModalWindow isOpen={configModalIsOpen} onRequestClose={closeConfigModal} contentLabel="Indstillinger">
        <ModalHeader>
            <ModalHeaderIcon>
                <Icon icon={iconname.ICON_SETTINGS} size="30" color={colors.MODAL_HEADER_ICON} active={true} />
            </ModalHeaderIcon>
            <ModalHeaderTitle>Indstillinger</ModalHeaderTitle>
            <ModalHeaderClose onClick={(e) => { e.preventDefault(); closeConfigModal() }}>
                <Icon icon={iconname.ICON_CLOSE} size="30" color={colors.MODAL_HEADER_ICON} active={true} />
            </ModalHeaderClose>
        </ModalHeader>
        <ModalContent>
            <form>
                Intern høring start:
                <DatePicker selected={dates.date1} onChange={(date) => handleDateChange(date, 'date1')} dateFormat="DD/MM/YYYY" showWeekNumbers />
                Intern høring slut:
                <DatePicker selected={dates.date2} onChange={(date) => handleDateChange(date, 'date2')} dateFormat="DD/MM/YYYY" showWeekNumbers />
                Forslag:
                <DatePicker selected={dates.date3} onChange={(date) => handleDateChange(date, 'date3')} dateFormat="DD/MM/YYYY" showWeekNumbers />
                Offentliggørelse:
                <DatePicker selected={dates.date4} onChange={(date) => handleDateChange(date, 'date4')} dateFormat="DD/MM/YYYY" showWeekNumbers />
                Høring start:
                <DatePicker selected={dates.date5} onChange={(date) => handleDateChange(date, 'date5')} dateFormat="DD/MM/YYYY" showWeekNumbers />
                Høring slut:
                <DatePicker selected={dates.date6} onChange={(date) => handleDateChange(date, 'date6')} dateFormat="DD/MM/YYYY" showWeekNumbers />
                Vedtagelse:
                <DatePicker selected={dates.date7} onChange={(date) => handleDateChange(date, 'date7')} dateFormat="DD/MM/YYYY" showWeekNumbers />
                <br />
                <br />
                Vælg fase:
                <br />
                <select>
                <option>Kladde</option>
                <option>Udkast</option>
                <option>Intern høring</option>
                <option>Forslag</option>
                </select>
            </form>
        <ModalButtonPanel>
              <Button onClick={saveConfigModal} icon={iconname.ICON_CHECK_CIRCLE} size={18}>Gem ændringer</Button>
        </ModalButtonPanel>
        </ModalContent>
      </ModalWindow>
    </div>
  )
}

export default Settings