import React, { Component } from 'react'
import Icon from 'assets/Icon'
import { ICON_SEARCH } from 'assets/icons'
import {
    SearchBarDiv,
    SearchBarInputDiv,
    SearchBarInput,
    SearchBarButtonDiv
} from 'framework/components/Styles/HeaderStyles'

class Search extends Component {
    render() {
        return (
            <SearchBarDiv>
                <form>
                    <SearchBarInputDiv>
                        <SearchBarInput placeholder="Search for forms, reports, fields, users or comments ..." />
                    </SearchBarInputDiv>
                </form>
                <SearchBarButtonDiv>
                    <Icon icon={ICON_SEARCH} size={20} active={true} />
                </SearchBarButtonDiv>
            </SearchBarDiv>
        )
    }
}

export default Search