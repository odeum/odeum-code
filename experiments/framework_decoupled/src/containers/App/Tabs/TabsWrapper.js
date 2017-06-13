import React, { Component } from 'react'
import PropTypes from 'prop-types'
import * as styled from '../styles/TabStyles'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as tabsActions from './tabsActions'
import * as colors from '../../../assets/colors'
import {ICON_CLOSE} from  '../../../assets/icons'
import Icon from '../../../assets/Icon'
// import { renderIcons } from '../../../assets/icons'

// TODO Refactor active to bool and use consts for colors

class TabsWrapper extends Component {
    icoColor(className) {
        if (className.includes('active'))
        { return (colors.ICON_ACTIVE_COLOR) }
        else {
            return (colors.ICON_DEFAULT_COLOR)
        }
    }

    render() { 
     
        let active = (tab) => (tab.label === this.props.activeTab ? 'active' : '')
        const act = (tab) => { return active(tab).includes('active')? true:false}
        var _this = this.props
        function isFixed(tab) {
            if (tab.fixed === undefined)
            { return null }
            if (!tab.fixed)
            { return <styled.TabCloseLink to="/"><styled.TabClose className={active(tab)} onClick={e => { e.preventDefault()
                            _this.closeTab(tab) 
                        }}><Icon icon={ICON_CLOSE} active={act(tab)} size={12}/></styled.TabClose></styled.TabCloseLink> }
// DONE refactor x to real small icon for close
        }
        return (          
            <styled.TabList>
                {_this.children.map((tab, index) => (
//TODO Notify the wrapper when entered directly to a component to properly display the activeTab
                    <styled.TabLabel key={index} className={active(tab)}>
                        {/*TODO Replace the updateTab with setActive()*/}
                        <div onClick={(e) => {e.preventDefault();this.props.setActive(tab)}}>
                        <styled.TabLink to={tab.location} className={active(tab)}>
                            <styled.TabDiv>
                         <styled.TabIconDiv> <styled.TabIcon icon={tab.icon} active={act(tab)}/> </styled.TabIconDiv>
                        {tab.label}
                         </styled.TabDiv>
                
                        </styled.TabLink>
                        </div>
                      
                            {isFixed(tab)}
                        
                    </styled.TabLabel>))}
            </styled.TabList>            
        )
    }
}
TabsWrapper.propTypes = {
    children: PropTypes.array,
    activeTab: PropTypes.string,
}

const mapStateToProps = (state) => ({
    activeTab: state.global.activeTab
})

function mapDispatchToProps(dispatch) {
    return bindActionCreators(tabsActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TabsWrapper)