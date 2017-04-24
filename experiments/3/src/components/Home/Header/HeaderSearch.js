import React, { Component } from 'react';
import {HeaderSearchBarInput,HeaderSearchBarDiv,HeaderSearchBarButton} from '../styled'

class HeaderSearch extends Component {
    render() {
        return (
            <HeaderSearchBarDiv>
                <HeaderSearchBarInput placeholder="Searchbar" />
                <HeaderSearchBarButton>SIco</HeaderSearchBarButton>
            </HeaderSearchBarDiv>
        );
    }
}

export default HeaderSearch;