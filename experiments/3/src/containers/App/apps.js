import React from 'react'
import { Link, Route } from 'react-router-dom'
import App from './app.js'
// import { push } from 'react-router-redux'
const Apps = ({ match, dispatch }) => {
   // console.log(dispatch)
    return (
        <div>
            <ul>
                <li><a href="" onClick={e => {
                    e.preventDefault()
                    dispatch(`${match.url}/comp1`)
                }
                }> Dispatch Comp1 </a></li>
               <li> <a href="" onClick={e => {
                    e.preventDefault()
                    dispatch(`${match.url}/comp2`)
                }
                }> Dispatch2 </a></li>
                <li><Link to='/apps'>App</Link></li>
                <li><Link to={`${match.url}/comp1`}>comp1</Link></li>
                <li><Link to={`${match.url}/comp2`}>comp2</Link></li>
            </ul>
            <Route path={`${match.url}/:topicId`} component={App} />
            <Route path={match.url} />
        </div>
    )
}

export default Apps