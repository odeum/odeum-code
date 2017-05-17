import styled from 'styled-components'

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
  padding-left: 20px;
  height: 40px;
  user-select: none;
`

export const HeaderSearchBarDiv = styled.div`
  float: left;
  width: 500px;
  height: 70px;
  padding-top: 30px;
  padding-left: 30px;
`

export const HeaderSearchBarInputWrapper = styled.div`
  float: left;
  width: 400px;
  height: 30px;
`

export const HeaderSearchBarInput = styled.input`
  width: 390px;
  height: 30px;
  border: 0;
  border-radius: 5px 0 0 5px;
  background-color: #26495f;
  padding: 0;
  padding-left: 10px;
  font-family: 'Source Sans Pro';
  font-size: 16px;
  font-weight: 300;
  color: #fff;
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

export const HeaderSearchBarButtonDiv = styled.div`
  float: left;
  width: 30px;
  height: 28px;
  border-radius: 0 5px 5px 0;
  background: #3b97d3;
  color: #fff;
  font-size: 20px;
  outline: none;
  cursor: pointer;
  padding-top: 2px;
  padding-left: 8px;
`

export const HeaderNotificationDiv = styled.div`
  float: left;
  width: 100px;
  height: 80px;
  padding-top: 20px;
  color: #fff;
  background: #2c3e50;
  border: 0;
  font-size: 35px;
`

export const HeaderNotificationIcon = styled.div`
  float: none;
  clear: both;
  position: relative;
  width: 50px;
  height: 50px;
`

export const HeaderNotificationBadgeSpan = styled.span`
    border-radius: 30px;
    min-width: 14px;
    height: 14px;
    line-height: 14px;
    text-align: center;
    display: block;
    position: absolute;
    top: 5px;
    right: 15px;
    background-color: #3b97d3;
    padding: 2px;
    font-family: 'Source Sans Pro';
    font-size: 12px;
    font-weight: 300;
    color: #fff;
    user-select: none;
`

export default HeaderDiv