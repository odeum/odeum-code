import styled from 'styled-components'

//TODO Rename file to to HeaderStyles

export const HeaderDiv = styled.div`
  height: 100px;
  width: 100%;
  background-color: #2c3e50;
  display: block;
`

export const HeaderLogoImg = styled.img`

`

export const HeaderLogoDiv = styled.div`
  float: left;
  padding-top: 30px;
  padding-bottom: 30px;
  padding-left: 3%;
  height: 40px;
`

export const HeaderSearchBarDiv = styled.div`
  float: left;
  text-align: center;
  width: 500px;
  padding-top: 30px;
  padding-bottom: 30px;
`

export const HeaderSearchBarInput = styled.input`
  border-radius: 3px 0px 0px 3px;
  border-color: #34495d;
  border-style:solid;
  width: 400px;
  height: 30px;
  text-align:center;
  background:#34495d;
  color:white;
`

export const HeaderSearchBarButton= styled.button`
  width:36px;
  height:36px;
  border: 1px solid #36695d;
  border-radius: 0px 5px 5px 0px;
  background: #3b97d3;
  color: #fff;
`

export const HeaderNotificationDiv = styled.div`
  padding-top: 30px;
  padding-bottom: 30px;
  color: #fff;
  background-color: #2c3e50;
  border: none;
`

export default HeaderDiv