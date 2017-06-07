import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import theme from './theme'
import * as colors from './colors'

export const Wrapper = styled.section`
    color: ${colors.WORKSPACE};
    padding: 1.2rem 1.2rem 1.2rem 1.2rem;
    width: 100%;
    height: 800px;
    background: ${colors.WORKSPACE};
`

export const Spacer = styled.section`
    padding: ${(props) => props.space || '0.2rem' } 0.2rem 0.2rem 0.2rem;
    width: 100%;
    /*height: 5px;*/
    background: ${colors.WORKSPACE};
`

export const Text = styled.p`
    margin: 0rem 0.38rem
    font-size: 1rem
    font-family: ${(props) => props.theme.font || 'sans-serif'}
    padding: 10px 10px 10px 10px
`

export const Layout = ({children}) => {
    return(
        <ThemeProvider theme={theme}>
            { children }
        </ThemeProvider>
    )
}