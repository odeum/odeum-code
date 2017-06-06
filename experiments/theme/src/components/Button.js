import styled from 'styled-components'
import { transparentize, darken } from 'polished'
import * as colors from './colors'

const Button = styled.button`
    -webkit-border-radius: 4;
    -moz-border-radius: 4;
    border-radius: 4px;
    font-family: Source Sans Pro;
    font-weight: 300;
    color: ${(props) => props.theme.button.color || 'white'}
    font-size: 34px;
    background: ${(props) => props.theme.button.background || colors.BUTTON_PRIMARY}
    padding: 10px 20px 10px 20px;
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
    &:active {        
        background: ${darken(0.1, colors.BUTTON_PRIMARY)};
        border-color: ${darken(0.1, colors.BUTTON_PRIMARY)};
        box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
        transform: translateY(2px);
    }

    &:hover {
    background: ${colors.BUTTON_PRIMARY_HOVER};
    }
`

export const ButtonGreen = styled.button`
    -webkit-border-radius: 4;
    -moz-border-radius: 4;
    border-radius: 4px;
    font-family: Source Sans Pro;
    color: ${(props) => props.theme.buttoncolor || 'white'}
    font-size: 34px;
    background: ${(props) => props.theme.buttonbackground || colors.BUTTON_ALTERNATIVE}
    padding: 10px 20px 10px 20px;
    margin-right: 0.7rem;
    border: none;
    text-decoration: none;

    &:focus {
        border-color: ${colors.BUTTON_ALTERNATIVE_FOCUS};
        box-shadow: 0 0 0 3px ${transparentize(0.7, colors.BUTTON_ALTERNATIVE_FOCUS)};
        outline: none;
    }

    &.is-active,
    &:active {
        background: #e6e6e6; /*${darken(0.1, colors.BUTTON_ALTERNATIVE)};*/
        border-color: ${darken(0.1, colors.BUTTON_ALTERNATIVE)};
        box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
        transform: translateY(2px);
    }

    &.is-active:focus:not(:active) {
		border-color: ${darken(0.1, colors.BUTTON_ALTERNATIVE)};
		box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
	}

    &:hover {
    background: ${colors.BUTTON_ALTERNATIVE_HOVER};
    }

`

export default Button
