import React from 'react'
import { StyledFormFieldInput } from './FormFieldInputStyles'

const FormFieldInput = ({
	input,
	label,
	type,
	meta: { touched, error, warning },
	disabled }) =>
	<div>
		<StyledFormFieldInput meta={{ touched, error, warning }} {...input} placeholder={label} type={type} disabled={disabled}/>
		{touched &&
			((error &&
				<span>
					{error}
				</span>) ||
				(warning &&
					<span>
						{warning}
					</span>))}
	</div>

export default FormFieldInput