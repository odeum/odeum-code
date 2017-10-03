import styled, { keyframes } from 'styled-components'

const spin = keyframes`
from {
    transform: rotate(0deg);
}

to {
    transform: rotate(359deg);
}
`
const sizes = {
	xxxs: {
		diameter: '8px',
		border: '2px'
	},
	xxs: {
		diameter: '13px',
		border: '2px'
	},
	xs: {
		diameter: '25px',
		border: '5px'
	},
	s: {
		diameter: '50px',
		border: '10px'

	},
	m: {
		diameter: '80px',
		border: '12px'

	},
	l: {
		diameter: '120px',
		border: '16px'

	},
	xl: {
		diameter: '200px',
		border: '20px'

	}
}
const velocities = {
	slow: '3s',
	medium: '2s',
	fast: '1s',
	superfast: '0.5s'
}

const StyledSmoothLoader = styled.div`
width: ${({ size }) => sizes[size].diameter};
height: ${({ size }) => sizes[size].diameter};
border-style: solid;
border-color: rgba(0,0,0,0);
border-top-color: ${({ color }) => color };
border-width: 2px 0px 0px 0px;
border-radius: 50%;
animation: ${spin} ${({ velocity }) => velocities[velocity]} infinite linear;
`

StyledSmoothLoader.defaultProps = {
	size: 'm',
	velocity: 'fast',
	color: '#EEEDED'
}
export default StyledSmoothLoader