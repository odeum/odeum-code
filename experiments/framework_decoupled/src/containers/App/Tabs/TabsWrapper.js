import React, { Component } from 'react'
import PropTypes from 'prop-types'
import * as styled from '../styles/TabStyles'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as tabsActions from './tabsActions'
// import { renderIcons } from '../../../assets/icons'

// TODO: Refactor active to bool and use consts for colors
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
        const act = (tab) => { return active(tab).includes('active')? true:false}
        var _this = this.props
        function isFixed(tab) {
            if (tab.fixed === undefined)
            { return null }
            if (!tab.fixed)
            { return <styled.TabLink to="/"><styled.TabClose className={active(tab)} onClick={e => { e.preventDefault()
                            _this.closeTab(tab) 
                        }}>x</styled.TabClose></styled.TabLink> }
// TODO: refactor x to real small icon for close
        }
        return (          
            <styled.TabList>
                {_this.children.map((tab, index) => (
//TODO: Notify the wrapper when entered directly to a component to properly display the activeLabel
                    <styled.TabLabel key={index} className={active(tab)}>
                        <div onClick={(e) => {e.preventDefault();this.props.updateTab(tab)}}>
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
    activeLabel: PropTypes.string,
}

const mapStateToProps = (state) => ({
    activeLabel: state.global.activeLabel
})

function mapDispatchToProps(dispatch) {
    return bindActionCreators(tabsActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TabsWrapper)