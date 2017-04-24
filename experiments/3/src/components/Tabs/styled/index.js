import styled,{css} from 'styled-components'

export const PanelDiv = styled.div`
            padding-left: 15px;
            font-family: 'Source Sans Pro';
            font-style:normal;
            font-weight:400;
            font-size:14px;
`;


export const TabLabel = styled.li`
        display:inline-block;
        font-family: 'Source Sans Pro';
        font-style: normal;
        font-size: 15px;
        font-weight: 400;
    `;
    
export const TabLink = styled.a`
        padding: 10px 12px;
        display: inline-flex;
        color: #444;
        text-decoration: none;
        border-bottom: 2px solid #f5f5f5;
        border-radius:2px 2px 0px 0px;
        background-color: #ecf0f0;
        color:black;
        ${props => props.className === 'active' &&
                css`
                color:white;
        background-color: #3b97d3;
         `}
    `;
export const TabList = styled.ul`
          margin: 0;
          padding: 0;    
    `;
export const Ico = styled.div`
         padding-right: 5px;
         ${props => props.className === 'active' &&
                css`
                color:white;
            `}
    `;
export const Tabss = styled.div`
/*TODO Change margin*/
          margin-left: 200px;
          background: #fff;  
        `;