import React from 'react'
import { Header, EplanDropDown } from 'app/styles'

const Users = ({ users }) => {
	return (
		<div>
			<EplanDropDown label={'Extra Info'} onClick={() => { console.log('Hello')}}>
				<p>Text</p>
			</EplanDropDown>
			{users.map((user, index) => (
				<div>
					<Header key={index} >{user.name}</Header>

				</div>
			))}
		</div>
	)
}

export default Users