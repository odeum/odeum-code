import styled from 'styled-components'
import { transparentize, darken } from 'polished'
import * as colors from './colors'

const Button = styled.button`
    -webkit-border-radius: 4;
    -moz-border-radius: 4;
    border-radius: 4px;
    font-family: Arial;
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

    &.is-active,
    &:active {
        background: ${darken(0.1, colors.BUTTON_PRIMARY)};
        border-color: ${darken(0.1, colors.BUTTON_PRIMARY)};
        box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
        transform: translateY(2px);
    }

    &:hover {
    background: ${colors.BUTTON_PRIMARY_HOVER};
    /*box-shadow: 0 1px 0 rgba(0,0,0,0.1);*/
    /*  background-image: -webkit-linear-gradient(top, ${colors.BUTTON_PRIMARY_HOVER}, #3498db);
    background-image: -moz-linear-gradient(top, ${colors.BUTTON_PRIMARY_HOVER}, #3498db);
    background-image: -ms-linear-gradient(top, ${colors.BUTTON_PRIMARY_HOVER}, #3498db);
    background-image: -o-linear-gradient(top, ${colors.BUTTON_PRIMARY_HOVER}, #3498db);
    background-image: linear-gradient(to bottom, ${colors.BUTTON_PRIMARY_HOVER}, #3498db);
    */  text-decoration: none;
    }
`

export const ButtonGreen = styled.button`
    -webkit-border-radius: 4;
    -moz-border-radius: 4;
    border-radius: 4px;
    font-family: Arial;
    color: ${(props) => props.theme.button || 'white'}
    font-size: 34px;
    background: ${(props) => props.theme.background || colors.BUTTON_ALTERNATIVE}
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
    /*box-shadow: 0 1px 0 rgba(0,0,0,0.1);*/
    /*  background-image: -webkit-linear-gradient(top, ${colors.BUTTON_PRIMARY_HOVER}, #3498db);
    background-image: -moz-linear-gradient(top, ${colors.BUTTON_PRIMARY_HOVER}, #3498db);
    background-image: -ms-linear-gradient(top, ${colors.BUTTON_PRIMARY_HOVER}, #3498db);
    background-image: -o-linear-gradient(top, ${colors.BUTTON_PRIMARY_HOVER}, #3498db);
    background-image: linear-gradient(to bottom, ${colors.BUTTON_PRIMARY_HOVER}, #3498db);
    */  text-decoration: none;
    }
`

export const ButtonStyled = styled.button`

`

export default Button
