import React from 'react'
import { reduxForm } from 'redux-form'
import { Input, Label } from './SimpleFormStyles' 

const SimpleForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
      <div>
        {/*<Label>First Name</Label>*/}
        <div>
          <Input
            name="firstName"
            component="input"
            type="text"
            placeholder="First Name"
          />
        </div>
      </div>
      <div>
        {/*<Label>Last Name</Label>*/}
        <div>
          <Input
            name="lastName"
            component="input"
            type="text"
            placeholder="Last Name"
          />
        </div>
      </div>
      <div>
        {/*<Label>Email</Label>*/}
        <div>
          <Input
            name="email"
            component="input"
            type="email"
            placeholder="Email"
          />
        </div>
      </div>
      <div>
        {/*<Label>Sex</Label>*/}
        <div>
          <Label>
            <Input name="sex" component="input" type="radio" value="male" />
            {' '}
            Male
          </Label>
          <Label>
            <Input name="sex" component="input" type="radio" value="female" />
            {' '}
            Female
          </Label>
        </div>
      </div>
      <div>
        <br />
        <Label>Favorite Color</Label>
        <div>
          <Input name="favoriteColor" component="select">
            {/*<option />*/}
            <option value="ff0000">Red</option>
            <option value="00ff00">Green</option>
            <option value="0000ff">Blue</option>
          </Input>
        </div>
      </div>
      <div>
        <Label htmlFor="employed">Employed</Label>
        <div>
          <Input
            name="employed"
            id="employed"
            component="input"
            type="checkbox"
          />
        </div>
      </div>
      <div>
        <Label>Notes</Label>
        <div>
          <Input name="notes" component="textarea" />
        </div>
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>Submit</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'simple', // a unique identifier for this form
})(SimpleForm)