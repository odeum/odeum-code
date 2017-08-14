import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import theme from './theme'
import * as colors from './colors'

export const Layout = ({ children }) => {
	return (
        <ThemeProvider theme={theme}>
            { children }
        </ThemeProvider>
	)
}

export const Wrapper = styled.section`
    color: ${colors.WORKSPACE};
    padding: 1.2rem 1.2rem 1.2rem 1.2rem;
    width: 100%;
    height: 750px;
    background: ${colors.WORKSPACE};
`

export const Spacer = styled.section`
    padding: ${(props) => props.space || '0.2rem' } 0.2rem 0.2rem 0.2rem;
    width: 100%;
    /*height: 5px;*/
    background: ${colors.WORKSPACE};
`

export const Text = styled.a`
    color: ${colors.ASPHALT_DARK};
    font-family: ${(props) => props.theme.font || 'Source Sans Pro'};
    font-size: ${(props) => props.theme.buttonSize.default.size || '18px'};
    font-weight: ${(props) => props.theme.fontWeight || 300};
    /*padding: 10px 10px 10px 10px*/
`

export const Header = styled.h1`
    color: ${colors.ASPHALT_DARK};
    font-family: ${(props) => props.theme.font || 'Source Sans Pro'};
    font-size: ${(props) => props.theme.buttonSize.large.size || '18px'};
    font-weight: ${(props) => props.theme.fontWeight || 300};
    /*padding: 10px 10px 10px 10px*/
`

export const Room = styled.div`
    /* padding: 4rem 4rem 4rem 4rem; */
    width: 100%;
    float: left;
    /* width: 20px; */
    height: 20px;
    margin: 5px;
    /*border: 1px solid rgba(0, 0, 0, .2);*/
`
