import React, { Component } from 'react'
import {HeaderSearchBarInput,HeaderSearchBarDiv,HeaderSearchBarButtonDiv,HeaderSearchBarInputWrapper} from '../styles/HeaderStyles'
import {renderIcons} from '../../../assets/icons'

class HeaderSearch extends Component {
    render() {
        return (
            <HeaderSearchBarDiv>
                <form>
                    <HeaderSearchBarInputWrapper>
                        <HeaderSearchBarInput placeholder="Searchbar" />
                    </HeaderSearchBarInputWrapper>
                </form>
                <HeaderSearchBarButtonDiv>{renderIcons('search','active')}</HeaderSearchBarButtonDiv>
            </HeaderSearchBarDiv>
        )
    }
}

export default HeaderSearch