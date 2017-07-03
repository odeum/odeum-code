import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { loadTabs, updateTab } from 'store/modules/tabs'
import { FormsDiv } from '../../formsStyles'
import { browserHistory } from 'react-router'

class FormList extends Component {

    componentWillMount() {}
    handleClick(form) {
        browserHistory.push('/forms/' + form.id +'/'+form.tabChildrenDashboard[0].label+'/'+form.tabChildrenDashboard[2].label)
    }
    render() {
        return (
            <FormsDiv>
              <ul>
                { this.props.forms.map((form, index) => (
                      <li key={ index }>
                        <button onClick={ (e) => {
                                              e.preventDefault();this.handleClick(form)
                                          } }>
                          { form.id }
                        </button>
                        { form.name }
                      </li>)) }
              </ul>
            </FormsDiv>
        )
    }
}
const mapStateToProps = (state) => ({
    forms: state.forms.forms
})
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        loadTabs,
        updateTab
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(FormList)