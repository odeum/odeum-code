import React from 'react'
import { reduxForm } from 'redux-form'
import { Label, Input } from './components/Styles'

let App = () => {
  return (
    <div>
      <h1>Live Redux-Form Coding</h1>
      <form action="">
        <div>

          <Label>First Name:</Label>
          <Input name="firstName" component="input" type="text" placeholder="First name" />
          <br />
          
          <Label>Last Name:</Label>
          <Input name="lastName" component="input" type="text" placeholder="Last name" />
          <br />
          
          <Label>E-mail:</Label>
          <Input name="email" component="input" type="email" placeholder="E-mail" />
          <br />

          <Label>Favorite color:</Label>
          <Input name="favoriteColor" component="select" type="text" placeholder="Favorite color">
            <option>Choose color</option>
            <option value="ff0000">Red</option>
            <option value="00ff00">Green</option>
            <option value="0000ff">Blue</option>
          </Input>
          <br />

        </div>
      </form>
    </div>
  )
}

// Decorated the form
App = reduxForm({
    form: 'appForm'

})(App)

export default App
