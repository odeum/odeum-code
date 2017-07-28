import React from 'react'
// import Modal from 'react-modal'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { ModalWindow } from 'app/styles/EplanStyles'
const Settings = ({ configModalIsOpen, closeConfigModal, startDate, handleDateChange, saveConfigModal }) => {
    return (
        <div>
            <ModalWindow isOpen={configModalIsOpen} onRequestClose={closeConfigModal} contentLabel="Indstillinger">
                <h2 style={{textAlign:'center'}}>Indstillinger</h2>
                <br />
                <form style={{ marginLeft: 7 }}>
                    <label>Intern høring start:</label>
                    <br />
                    <DatePicker selected={startDate} onChange={handleDateChange} />
                    <label>Intern høring slut:</label>
                    <br />
                    <DatePicker selected={startDate} onChange={handleDateChange} />
                    <label>Forslag:</label>
                    <br />
                    <DatePicker selected={startDate} onChange={handleDateChange} />
                    <label>Offentliggørelse:</label>
                    <br />
                    <DatePicker selected={startDate} onChange={handleDateChange} />
                    <label>Høring start:</label>
                    <br />
                    <DatePicker selected={startDate} onChange={handleDateChange} />
                    <label>Høring slut:</label>
                    <br />
                    <DatePicker selected={startDate} onChange={handleDateChange} />
                    <label>Vedtagelse:</label>
                    <br />
                    <DatePicker selected={startDate} onChange={handleDateChange} />
                    <br />
                    <br />
                    <label>Vælg fase:</label>
                    <br />
                    <select>
                        <option>Kladde</option>
                        <option>Udkast</option>
                        <option>Intern høring</option>
                        <option>Forslag</option>
                    </select>
                    <br />
                    <br />
                    <button onClick={saveConfigModal} style={{marginBottom:10}}>Gem ændringer</button>
                </form>
            </ModalWindow>
        </div>
    )
}

export default Settings