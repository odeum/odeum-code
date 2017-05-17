import React, { Component } from 'react'
import {HeaderSearchBarInput,HeaderSearchBarDiv,HeaderSearchBarButtonDiv,HeaderSearchBarInputWrapper} from '../styled/HeaderStyle'
import {renderIcons} from '../../Tabs/styled/icons'

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