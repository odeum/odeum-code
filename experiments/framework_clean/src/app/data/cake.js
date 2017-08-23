import { create } from 'apisauce'

//API instance
const api = create({
	baseURL: 'https://jsonplaceholder.typicode.com',
	timeout: 10000,
	headers: {
		'Content-Type': 'application/json',
		'Accept': 'application/json'
	}
})
//Async function to return data
export async function getUsers() {
	var data = await api.get('/users')
		.then((response) => {
			console.log(response.data)
			return response.data
		})
	return data
}