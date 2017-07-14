import styled from 'styled-components'
import * as colors from 'framework/assets/colors'

export const ContentHeader = styled.div`
`

export const Cell = styled.div` 
    font-family: Source Sans Pro;
    align-items: center;
    height:40px;
`



export const HeaderCell = styled.div`
display: flex;
background-color: #2C3E50;
font-family: Source Sans Pro;
    font-style: normal;
    font-size: 15px;
    font-weight: 500;
text-transform: none;
cursor: pointer;
height: 30px;
padding-left: 3px;
align-items: center;

`
export const InputRow = styled.div`
display:flex;
`
export const ContentBox = styled.div`
`
export const Row = styled.div`
 display: flex;
 flex-direction: row;
  border-bottom: 1px solid #fff;
  font-family: Source Sans Pro;
  font-style: normal;
  font-size: 15px;
  font-weight: 500;
  background:${(props)=>{return props.index %2? '#ededed':'white'}};
    &:hover {
		background: ${colors.TAB_HOVER};
        color: white;
  }
      &:active{
        background: ${colors.TAB_SELECTED};
      } 
`
export const AutoSizerDiv = styled.div`

height: calc(100vh - 300px);
`
export const HeaderRow = styled.div`
width:${props=> props.width+'px'};
display: flex;
flex-direction: row;
margin-top:10px;
margin-bottom:3px;
color:white;
fill:white;
overflow:hidden;
align-items:center;
border-bottom: 1px solid #e0e0e0;
font-family: Source Sans Pro;
    font-style: normal;
    font-size: 15px;
    font-weight: 600;

/*  

  justify-content: space-around;
 */
`
export const NoRows = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1em;
  color: #bdbdbd;
`
export const LabeledInput = styled.input`
`
export const CellStatus = styled.div`
color: ${(props)=> props.done? 'green':'red'}
`