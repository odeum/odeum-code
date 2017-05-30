import React, { Component } from 'react'
import {HeaderSearchBarInput,HeaderSearchBarDiv,HeaderSearchBarButtonDiv,HeaderSearchBarInputWrapper} from '../styles/HeaderStyles'
// import {renderIcons} from '../../../assets/icons'
import Icon from '../../../assets/Icon'
import {ICON_SEARCH} from '../../../assets/icons'
// import * as colors from '../../../assets/colors'
class HeaderSearch extends Component {
    render() {
        const active = 'active'
        return (
            <HeaderSearchBarDiv>
                <form>
                    <HeaderSearchBarInputWrapper>
                        <HeaderSearchBarInput placeholder="Searchbar" />
                    </HeaderSearchBarInputWrapper>
                </form>
                <HeaderSearchBarButtonDiv>
                    <Icon icon={ICON_SEARCH} size={20} active={active}/>
                </HeaderSearchBarButtonDiv>
            </HeaderSearchBarDiv>
        )
    }
}

export default HeaderSearch