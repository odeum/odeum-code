import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
// import { browserHistory } from 'react-router'
import { resetErrorMessage } from '../actions'

class Mikkel extends Component {
    static propTypes = {
        login: PropTypes.string.isRequired
    }
    render() {
        const { login } = this.props
        return (
            <div>Mikkel's side: {login}</div>

        )
    }
}


const mapStateToProps = (state, ownProps) => {
  // We need to lower case the login due to the way GitHub's API behaves.
  // Have a look at ../middleware/api.js for more details.
  const login = (!ownProps.params.login) ? 'uden parameter' : 'med parameter: ' + ownProps.params.login
//   console.log(login)
//   console.log(state)
  return {
    login
  }
}

export default connect(mapStateToProps, {resetErrorMessage})(Mikkel)