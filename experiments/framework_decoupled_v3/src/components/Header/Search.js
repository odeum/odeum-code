import React, { Component } from 'react'
//Styled components
import { SearchBarInput, SearchBarDiv, SearchBarButtonDiv, SearchBarInputWrapper } from '../styles/HeaderStyles'
//Icons
import Icon from 'assets/Icon'
import { ICON_SEARCH } from 'assets/icons'

// TODO: Use redux-form for search input

class HeaderSearch extends Component {
    render() {
       
        return (
            <SearchBarDiv>
                <form>
                    <SearchBarInputWrapper>
                        <SearchBarInput placeholder="Search for forms, reports, fields, users or comments ..." />
                    </SearchBarInputWrapper>
                </form>
                <SearchBarButtonDiv>
                    <Icon icon={ICON_SEARCH} size={20} active={true}/>
                </SearchBarButtonDiv>
            </SearchBarDiv>
        )
    }
}

export default HeaderSearch