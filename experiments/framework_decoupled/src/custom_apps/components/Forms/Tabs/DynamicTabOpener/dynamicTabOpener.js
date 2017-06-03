import React, { Component } from 'react'
import * as DynamicTabOpenerActions from './DynamicTabOpenerActions.js'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class DynamicTabOpener extends Component {
    componentWillMount() {
        // this.props.updateTab({
        //     label: 'Dynamic Tab Opener',
        //     location: '/forms/dynamictabopener',
        //     icon: 'general',
        //     fixed: true
        // })
        // console.log('------------------------------------')
        // console.log(this.props)
        // console.log('------------------------------------')
    }
    render() {

        return (
            <div>
                Dynamic Tab Opener
                <div>
                    <button onClick={e => {
                        e.preventDefault()
                        this.props.updateTab({
                            label: 'Dynamic',
                            location: '/forms/dynamic',
                            icon: 'assignment',
                            fixed: false
                        })
                    }}>DO THE MAGIC TRICK </button>
                      <button onClick={e => {
                        e.preventDefault()
                        this.props.updateTab({
                            label: 'Dynamic2',
                            location: '/forms/dynamic2',
                            icon: 'assignment',
                            fixed: false
                        })
                    }}>DO THE MAGIC TRICK 2</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})
function mapDispatchToProps(dispatch) {
    return bindActionCreators(DynamicTabOpenerActions, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(DynamicTabOpener)