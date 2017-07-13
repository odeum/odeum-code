import styled from 'styled-components'
import { colorArr } from './colors'
import * as colors from './colors'
import { transparentize, darken } from 'polished'


export const CopyButton = styled.button`
    border-radius: 4px;
    font-family: 'Source Sans Pro';
    font-size: 14px;
    color: 'black';
    background: ${props => props.color || colors.BUTTON_DEFAULT};
    padding: '9px 20px 9px 15px';
    margin-right: 0.7rem;
    /* border: none; */
    border: 1px solid rgba(0, 0, 0, .2);
    text-decoration: none;

    &:focus {
        border-color: ${colors.BUTTON_DEFAULT_FOCUS};
        box-shadow: 0 0 0 3px ${transparentize(0.7, colors.BUTTON_DEFAULT)};
        outline: none;
    }

    &&:active {
        background: ${darken(0.1, colors.BUTTON_DEFAULT)};
        border-color: ${darken(0.1, colors.BUTTON_DEFAULT)};
        box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
        transform: translateY(2px);
    }

    &:hover {
        background: ${colors.BUTTON_DEFAULT_HOVER};
    }
`

export const DisplayColor = styled.div`
    float: left;
    width: 175px;
    height: 175px;
    margin-right: 5px;
    margin-bottom: 5px;
    padding: 10px
    border: 1px solid rgba(0, 0, 0, .2);
    background: ${props => props.color || colorArr[0].value};
    color: 'black';
    font-family: 'Source Sans Pro';
    font-size: 14px;
`