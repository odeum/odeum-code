import React from 'react'
import StyledInput from './StyledInput'

function Input({ value, placeholder, onChange, autoFocus, width }) {
	return (
		<StyledInput autoFocus value={value} placeholder={placeholder} onChange={onChange} width={width} />
	)
}

export default Input
