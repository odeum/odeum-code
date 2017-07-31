import styled,{keyframes} from 'styled-components'

export const Div = styled.div`
    float: left;
    width: calc(100% - 300px);
    height: calc(100vh - 250px);
    padding-left: 15px;
    padding-right: 15px;
    background: #ecf0f1;
    margin-top: 10px;
    background:white;
    margin-left:10px;  
    overflow-y:scroll;
`
const fadeIn = keyframes`
from{
   /*  transform:translateY(-100%); */
    opacity:0;
    width:100%;
}
to{
/*     transform:translateY(0%); */
    opacity:1;
    width:100%;
}
`
export const WHDiv = styled.div`
animation: ${fadeIn} 0.7s ease-in-out;
width:100%;
height:100%;
`