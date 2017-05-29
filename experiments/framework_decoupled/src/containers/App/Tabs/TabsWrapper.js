import React, { Component } from 'react'
import PropTypes from 'prop-types'
import * as styled from '../styles/TabStyles'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as tabsActions from './tabsActions'
import { renderIcons } from '../../../assets/icons'

class TabsWrapper extends Component {

    icoColor(className) {
        if (className.includes('active'))
        { return ('white') }
        else {
            return ('#34495d')
        }
    }

    render() {
       
        let active = (tab) => (tab.label === this.props.activeLabel ? 'active' : '')
        var _this = this.props
        function isFixed(tab) {
            if (tab.fixed === undefined)
            { return null }
            if (!tab.fixed)
            { return <styled.TabClose className={active(tab)}>x</styled.TabClose> }
        }
        return (
            <div ref={(element) => {this.element = element}}>
            <styled.TabList >
                {_this.children.map((tab, index) => (
                    <styled.TabLabel key={index} className={active(tab)} >
                        <styled.TabLink to={tab.location} className={active(tab)}>
                            <styled.Icon>{renderIcons(tab.icon, active(tab))}</styled.Icon>
                            {tab.label}
                        </styled.TabLink>
                        {/*@TODO if isFixed() call the anchor and the x*/}
                        <styled.TabLink href="#" onClick={e => { e.preventDefault()
                            _this.closeTab(tab) 
                        }}>
                            {isFixed(tab)}
                        </styled.TabLink>
                    </styled.TabLabel>))}
            </styled.TabList>
            </div>
        )
    }
}
TabsWrapper.propTypes = {
    children: PropTypes.array,
    activeLabel: PropTypes.string,
}
const mapStateToProps = (state) => ({
    activeLabel: state.global.activeLabel
})
function mapDispatchToProps(dispatch) {
    return bindActionCreators(tabsActions, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(TabsWrapper)