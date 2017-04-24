
import styled from 'styled-components'

//TODO Rename file to to HeaderStyles

export const HeaderDiv = styled.div`
        height: 10%;
    /* background-color: #930; */
    width: 100%;
     background: #2c3e50;
    /* height: 10%;*/
     display: inline-flex;
     /*width:100%;*/
     height:10%;
     /*background-color:#930;*/
        width:900px;
`; 
export const HeaderLogoImg = styled.img`

`;
export const HeaderLogoDiv = styled.div`
padding-top: 30px;
padding-bottom: 30px;
padding-left: 3%;
height:100%;
`;
export const HeaderSearchBarDiv = styled.div`
  text-align: center;
  width: 500px;
padding-top: 30px;
padding-bottom: 30px;
`;
export const HeaderSearchBarInput = styled.input`
border-radius: 3px 0px 0px 3px;
border-color: #34495d;
border-style:solid;
width: 400px;
height: 30px;
text-align:center;
background:#34495d;
color:white;
`;
export const HeaderSearchBarButton= styled.button`
width:36px;
height:36px;
border: 1px solid #36695d;
border-radius: 0px 5px 5px 0px;
background:#3b97d3;
color:White;
`;
export const HeaderNotificationDiv = styled.div`
padding-top: 30px;
padding-bottom: 30px;
color:white;
background: #2c3e50;
border:0px;
`;
export default HeaderDiv;