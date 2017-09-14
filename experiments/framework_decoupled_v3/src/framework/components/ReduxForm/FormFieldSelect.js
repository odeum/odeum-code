import React from 'react'
import { StyledFormFieldSelect } from './FormFieldSelectStyles'

const FormFieldSelect = ({
	children,
	input,
	label,
	type,
	meta: { touched, error, warning }
}) => {
	return (<div>
		<StyledFormFieldSelect meta={{ touched, error, warning }} {...input} placeholder={label} type={type}>
			{children}
		</StyledFormFieldSelect>
		{touched &&
			((error &&
				<span>
					{error}
				</span>) ||
				(warning &&
					<span>
						{warning}
					</span>))}
	</div>)
}
export default FormFieldSelect