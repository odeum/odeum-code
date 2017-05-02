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
    height: 40px;
    margin: 0;
    padding: 0;
    padding:20px 0px 20px 10px;
    overflow:hidden;
`
export const TabClose = styled.div`
    position: absolute;
    top:-15px;
    right:5px;
    font-size:12px;
    ${props => props.className === 'active' && css`
      color:white;
    `}
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
    position:relative;
`
    
export const TabLink = styled.a`
    display: inline-flex;
    text-decoration: none;
    outline: 0;
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
    margin: 0;
    margin-top: -1px;
    margin-right: 3px;
    padding: 0;
    ${props => props.className === 'active' && css`
        color: white;
    `}
`

export const Tabss = styled.div`
    clear: both;
    width: 100%;
`