import React from 'react'

const Cake = ({ type, changeCake, CakeArray }) => {
	return (
		<div>
			<h2>Here's Cake type: {type}</h2>
			<table style={{ border: "1px solid black" }}>
				{CakeArray.map((type, index) => (
					<tr key={index} ><h3>{type}</h3></tr>
				))}
			</table>
		
			<button onClick={(e) => {e.preventDefault();changeCake('vanilla')}}>Change Cake</button>
		</div>
	)
}

export default Cake