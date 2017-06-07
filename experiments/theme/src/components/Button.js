import styled from 'styled-components'
import { transparentize, darken } from 'polished'
import * as colors from './colors'

const Button = styled.button`
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    font-family: ${(props) => props.theme.font || 'Source Sans Pro'}
    font-size: ${(props) => props.theme.buttonSize.normal.size || '18px'}
    font-weight: 300;
    color: ${(props) => props.theme.button.color || 'white'}    
    background: ${(props) => props.theme.button.background || colors.BUTTON_PRIMARY}
    padding: 10px 20px 10px 15px; /* top, right, buttom, left */
    margin-right: 0.7rem;
    border: none;
    text-decoration: none;

    &:focus {
        border-color: ${colors.BUTTON_PRIMARY_FOCUS};
        box-shadow: 0 0 0 3px ${transparentize(0.7, colors.BUTTON_PRIMARY)};
        outline: none;
    }

    /*&.is-active,
    &.active,*/
    &&:active {
        background: ${darken(0.1, colors.BUTTON_PRIMARY)};
        border-color: ${darken(0.1, colors.BUTTON_PRIMARY)};
        box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
        transform: translateY(2px);
    }

    &:hover {
        background: ${colors.BUTTON_PRIMARY_HOVER};
    }
`

export default Button
