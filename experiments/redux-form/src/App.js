import React from 'react'
import {Field, reduxForm} from 'redux-form'


let App= () => {
  return (
    <div>
      <h1>Live Redux-Form Coding</h1>
      <form action="">
        <div>
          <label>First Name</label>
          <Field name="firstName" component="input" />
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

