import styled,{css} from 'styled-components'

export const PanelDiv = styled.div`
    float: left;
    width: 90%;
    height: calc(100vh - 230px);
    padding: 30px;
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    background-color: #fff;
`;

export const TabList = styled.ul`
    margin: 0;
    padding: 0;
    margin-top: 30px;
    height: 40px;
`;

export const TabLabel = styled.li`
    display: inline-block;
    height: 40px;
    line-height: 40px;
    background-color: #e3e5e5;
    border-radius: 5px 5px 0px 0px;
    // border-bottom: 2px solid #f5f5f5;
    padding-left: 20px;
    padding-right: 20px;
    margin-right: 1px;
    ${props => props.className === 'active' && css`
        background-color: #3b97d3;
    `}
`;
    
export const TabLink = styled.a`
    display: inline-flex;
    text-decoration: none;
    color: #5e5e5e;
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-size: 15px;
    font-weight: 400;
    ${props => props.className === 'active' && css`
        color: white;
    `}
`;

export const Ico = styled.div`
    margin: 0;
    padding: 0;
    padding-right: 5px;
    ${props => props.className === 'active' && css`
        color: white;
    `}
`;

export const Tabss = styled.div`
    float: left;
    width: calc(100% - 300px);
    margin-left: 20px;
    background: #ecf0f1;
`;