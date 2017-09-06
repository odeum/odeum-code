import React from 'react'
import { StyledFormFieldTextarea } from './FormFieldTextareaStyles'

export const FormFieldTextarea = ({
	input,
	label,
	type,
	meta: { touched, error, warning }
  }) => 
  	<div>
		<StyledFormFieldTextarea meta={{ touched, error, warning }} {...input} placeholder={label} type={type} />
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


export default FormFieldTextarea