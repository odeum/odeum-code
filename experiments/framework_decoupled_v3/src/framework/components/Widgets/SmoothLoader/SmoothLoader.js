import React from 'react'
import StyledSmoothLoader from './StyledSmoothLoader'


const SmoothLoader = (props) => (
	<StyledSmoothLoader size={props.size} velocity={props.velocity} color={props.color} />
)

export default SmoothLoader

