import React from 'react'
import { Header } from 'app/styles'
const Users = ({ users }) => {
	return (
		<div>
			{users.map((user, index ) => (
				<Header key={index} >{user.name}</Header>
			))}
		</div>
	)
}

export default Users