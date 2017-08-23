import React from 'react'
const Users = ({ users }) => {
	return (
		<div>
			{users.map((user, index ) => (
				<h3 key={index} >{user.name}</h3>
			))}
		</div>
	)
}

export default Users