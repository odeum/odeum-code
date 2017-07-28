import React from 'react'
// import Modal from 'react-modal'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { ModalWindow } from 'app/styles/EplanStyles'
const Settings = ({ configModalIsOpen, closeConfigModal, handleDateChange, saveConfigModal,dates }) => {
    return (
        <div>
            <ModalWindow isOpen={ configModalIsOpen } onRequestClose={ closeConfigModal } contentLabel="Indstillinger">
                    <h2>Indstillinger</h2>
                    <br />
                    <form>
                      Intern høring start:
                      <DatePicker selected={ dates.date1 } onChange={(date) => handleDateChange(date, 'date1')} dateFormat="DD/MM/YYYY" showWeekNumbers />
                      Intern høring slut:
                      <DatePicker selected={ dates.date2 } onChange={(date) => handleDateChange(date, 'date2')} dateFormat="DD/MM/YYYY" showWeekNumbers />
                      Forslag:
                      <DatePicker selected={ dates.date3 } onChange={(date) => handleDateChange(date, 'date3')} dateFormat="DD/MM/YYYY" showWeekNumbers />
                      Offentliggørelse:
                      <DatePicker selected={ dates.date4 } onChange={(date) => handleDateChange(date, 'date4')} dateFormat="DD/MM/YYYY" showWeekNumbers />
                      Høring start:
                      <DatePicker selected={ dates.date5 } onChange={(date) => handleDateChange(date, 'date5')} dateFormat="DD/MM/YYYY" showWeekNumbers />
                      Høring slut:
                      <DatePicker selected={ dates.date6 } onChange={(date) => handleDateChange(date, 'date6')} dateFormat="DD/MM/YYYY" showWeekNumbers />
                      Vedtagelse:
                      <DatePicker selected={ dates.date7 } onChange={(date) => handleDateChange(date, 'date7')} dateFormat="DD/MM/YYYY" showWeekNumbers />
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
                      <br />
                      <br />
                      <button onClick={ saveConfigModal }>Gem ændringer</button>
                    </form>
                  </ModalWindow>
        </div>
    )
}

export default Settings