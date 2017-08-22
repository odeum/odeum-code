import React from 'react'

const Cake = ({ type, changeCake }) => {
	return (
		<div>
			<h2>Here's Cake type: {type}</h2>
			<button onClick={(e) => {e.preventDefault();changeCake('vanilla')}}>Change Cake</button>
		</div>
	)
}

export default Cake