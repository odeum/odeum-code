import styled,{css} from 'styled-components'

export const PanelDiv = styled.div`
    height: calc(100vh - 240px);
    padding: 20px;
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    background-color: #fff;
    border-radius: 0px 5px 5px 5px;
    overflow: scroll;
`

export const TabList = styled.ul`
    margin: 0;
    padding: 0;
    height: 40px;
`

export const TabLabel = styled.li`
    display: inline-block;
    height: 40px;
    line-height: 40px;
    background-color: #e3e5e5;
    border-radius: 5px 5px 0px 0px;
    padding-left: 20px;
    padding-right: 20px;
    margin-right: 1px;
    ${props => props.className === 'active' && css`
        background-color: #3b97d3;
    `}
`
    
export const TabLink = styled.a`
    display: inline-flex;
    text-decoration: none;
    color: #5e5e5e;
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-size: 15px;
    font-weight: 300;
    ${props => props.className === 'active' && css`
        color: white;
    `}
`

export const Ico = styled.div`
    font-size: 20px;
    margin: 0;
    margin-top: -2px;
    margin-right: 5px;
    padding: 0;
    ${props => props.className === 'active' && css`
        color: white;
    `}
`

export const Tabss = styled.div`
    clear: both;
    width: 100%;
`