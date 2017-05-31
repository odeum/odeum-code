import React, { Component } from 'react'
import { HeaderSearchBarInput, HeaderSearchBarDiv, HeaderSearchBarButtonDiv, HeaderSearchBarInputWrapper } from '../styles/HeaderStyles'

import Icon from '../../../assets/Icon'
import { ICON_SEARCH } from '../../../assets/icons'

// TODO: Use redux-form for search input
// TODO: SearchBarInput placeholder text needs other color that bright white

class HeaderSearch extends Component {
    render() {
       
        return (
            <HeaderSearchBarDiv>
                <form>
                    <HeaderSearchBarInputWrapper>
                        <HeaderSearchBarInput placeholder="Search for forms, reports, fields, users or comments ..." />
                    </HeaderSearchBarInputWrapper>
                </form>
                <HeaderSearchBarButtonDiv>
                    <Icon icon={ICON_SEARCH} size={20} active={true}/>
                </HeaderSearchBarButtonDiv>
            </HeaderSearchBarDiv>
        )
    }
}

export default HeaderSearch