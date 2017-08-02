import styled from 'styled-components'
import * as colors from 'framework/assets/colors'

export const ContentHeader = styled.div`
`
export const Cell = styled.div` 
  font-family: Source Sans Pro;
  align-items: center;
  height: 40px;
`

export const CellCentered = styled.div` 
  font-family: Source Sans Pro;
  align-items: center;
  height: 40px;
  text-align: center;
`

export const HeaderCell = styled.div`
  display: flex;
  height: 50px;
  background-color: #2C3E50;
  font-family: Source Sans Pro;
  font-style: normal;
  font-size: 15px;
  font-weight: 500;
  text-transform: none;
  cursor: pointer;
  align-items: center;
  padding-left: 3px;
`

export const HeaderCellCentered = styled.div`
  display: flex;
  height: 50px;
  background-color: #2C3E50;
  font-family: Source Sans Pro;
  font-style: normal;
  font-size: 15px;
  font-weight: 500;
  text-transform: none;
  cursor: pointer;
  align-items: center;
  justify-content: center;
`

export const InputRow = styled.div`
  display:flex;
`

export const ContentBox = styled.div`
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  font-family: Source Sans Pro;
  font-style: normal;
  font-size: 15px;
  font-weight: 500;
  padding-top: 10px;
  cursor: pointer;
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
height: calc(100vh - 400px);
`
export const HeaderRow = styled.div`
  width:${props=> props.width+'px'};
  display: flex;
  flex-direction: row;
  margin-top:10px;
  // margin-bottom:3px;
  color:white;
  fill:white;
  overflow:hidden;
  align-items:center;
  // border-bottom: 1px solid #e0e0e0;
  font-family: Source Sans Pro;
  font-style: normal;
  font-size: 15px;
  font-weight: 600;
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
export const SearchDiv = styled.div`
  display:flex;
  flex-direction:row;
  width: 500px;
  padding-top: 10px;
  padding-left: 10px;
`

export const SearchInput = styled.input`
  width: 200px;
  height: 30px;
  border: 1px solid #dedede;
  border-radius: 3px 0 0 3px;
  background-color: #fff;
  padding: 0;
  padding-left: 10px;
  font-family: 'Source Sans Pro';
  font-size: 16px;
  font-weight: 300;
//   color: #fff;
  outline: none;
  -webkit-appearance: none;

  &::placeholder {
    color: #fff;
  }
  &:-ms-input-placeholder {
    color: #fff;
  }
  &::-webkit-input-placeholder {
    color: #fff;
  }
  &::-moz-placeholder {
    color: #fff;
    opacity: 1;
  }
`

export const SearchButtonDiv = styled.div`
  width: 25px;
  height: 30px;
  border-radius: 0 1px 1px 0;
  background: #3b97d3;
  color: #fff;
  font-size: 20px;
  outline: none;
  cursor: pointer;
  padding-top: 2px;
  padding-left: 8px;
`
