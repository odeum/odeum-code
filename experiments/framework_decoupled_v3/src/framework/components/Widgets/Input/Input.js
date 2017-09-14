import React from 'react'
import StyledInput from './StyledInput'

function Input({ value, placeholder, onChange, autoFocus }) {
	return (
		<StyledInput autoFocus value={value} placeholder={placeholder} onChange={onChange}/>
	)
}

export default Input
