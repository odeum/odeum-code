import React, { Component } from 'react';
import PropTypes from 'prop-types'
import * as s from '../styled/tabs'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as tabsActions from './tabsActions'
import { renderIcons } from '../styled/icons'

class TabsWrapper extends Component {
    static propTypes = {
        children: PropTypes.array,
        activeLabel: PropTypes.string
    }
    icoColor(className) {
        if (className.includes('active'))
        { return ('white') }
        else {
            return ('#34495d')
        }
    }

    render() {
        let active = (tab) => (tab.label === this.props.activeLabel ? 'active' : '');
        var _this = this.props;
        return (
            <s.TabList >
                {_this.children.map((tab, index) => (
                    <s.TabLabel key={index} className={active(tab)}>
                        <s.TabLink href="#" onClick={e => { e.preventDefault(); _this.changeTab(tab.location, tab.label) }} 
                            className={active(tab)}>
                            <s.Ico>{renderIcons(tab.icon, active(tab))}</s.Ico>
                            {tab.label}
                        </s.TabLink>
                        <s.TabLink href="#" onClick={e => {e.preventDefault(); _this.closeTab(tab)}}>
                            <s.TabClose className={active(tab)}>x</s.TabClose>
                        </s.TabLink>
                    </s.TabLabel>))}
            </s.TabList>
        );
    }
}
const mapStateToProps = (state) => ({
    activeLabel: state.global.activeLabel
})
function mapDispatchToProps(dispatch) {
    return bindActionCreators(tabsActions, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(TabsWrapper)