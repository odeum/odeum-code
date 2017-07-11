import styled from 'styled-components'
import * as colors from 'framework/assets/colors'
export const ContentHeader = styled.div`
`
export const Col = styled.div`
    font-family: Source Sans Pro;
`
export const ColName = styled.div`
  overflow:z; 
`
export const Row = styled.div`
  padding-top: 10px;
  display: flex;
  flex: 1 1 auto;
  flex-direction: row;
  border-bottom: 1px solid #fff;
  justify-content: space-around;
  font-family: Source Sans Pro;
  font-style: normal;
  font-size: 15px;
  font-weight: 500;
  border-radius: 3px;
  background:${(props)=>{return props.index %2? '#ededed':'white'}};
    &:hover {
		background: ${colors.TAB_HOVER};
	}
`

export const HeaderCell = styled.div`

`
export const InputRow = styled.div`
display:flex;
`
export const ContentBox = styled.div`
  align-items:center;
  padding: 0 1rem 1rem 1rem;
  background: white;
`
export const HeaderRow = styled.div`
  display:flex;
  flex: 1 1 auto;
  flex-direction: row;
  justify-content: space-around;
  background-color: #2C3E50;
  color:white;
  fill: white;
  font-family: Source Sans Pro;
    font-style: normal;
    font-size: 15px;
    font-weight: 600;
    border-radius: 3px;
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
export const ColStatus = styled.div`
color: ${(props)=> props.done? 'green':'red'}
`