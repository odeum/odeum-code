import React, { Component } from 'react'
import { connect } from 'react-redux'
import { tabChange } from 'framework/store/modules/tabs'
import { getUsersAsync } from 'app/store/modules/cake'
import Users from 'app/components/Dashboard/users'
class UsersContainer extends Component {
	//The CWM must be async as we are returning async data
	async componentWillMount() {
		//await the function to return the data 
		await this.props.onMount()
	}
	
	render() {
		//How not to write 100 million times this.props
		//So you can write const {users, posts, comments} = this.props and lower you use posts instead of this.props.posts
		const { users } = this.props
		console.log(users)
		return (
			<div>
				{/* If(users !== []) 
				 return <Users users={users}/> (damn name conventions)
				 else
				 return <h1>Loading</h1> 
				 */}
				 <h1>User names:</h1>
				{users !== [] ?
					<Users users={users}/> :
					<h1>Loading</h1>}
				
			</div>
		)
	}
}
const mapStateToProps = (state) => ({
	users: state.cake.users
})

function mapDispatchToProps(dispatch) {
	return {
		onMount: async () => {
			dispatch(tabChange('dashboard', 'Users'))
			//We set the function inside onMount to get the users as soon as the component mounts
			dispatch(await getUsersAsync())
		}

	}
    
}
export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)