import React, { Component } from 'react'
import { updateTab } from 'store/modules/tabs'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class General extends Component {
    componentWillMount() {
        this.props.updateTab({
            label: 'General',
            location: '/dashboard/general',
            icon: 'assignment_turned_in',
            fixed: true
        })
    }
    render() {
        return (
            <div>
              General ...
              <br />
              <br /> And now a little more content to see what happens ... And now a little more content to see what happens ... And now a little more content to see what happens
              ... And now a little more content to see what happens ... And now a little more content to see what happens ... And now a little more content to see what happens
              ... And now a little more content to see what happens ... And now a little more content to see what happens ... And now a little more content to see what happens
              ... And now a little more content to see what happens ... And now a little more content to see what happens ... And now a little more content to see what happens
              ... And now a little more content to see what happens ... And now a little more content to see what happens ... And now a little more content to see what happens
              ... And now a little more content to see what happens ...
            </div>
        )
    }
}

const mapStateToProps = state => ({})
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        updateTab
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(General)
