import styled from 'styled-components'

export const DrawerWrapperDiv = styled.div`
  clear: both;
  background-color: #3b97d3;
  width: 250px;
  height: calc(100vh - 180px);
  float: left;
  padding-top: 20px;
  padding-bottom: 20px;
`

export const DrawerBlueBar = styled.div`
  height: 50px;
  line-height: 50px;
  background-color: #3b97d3;
  border-bottom: 1px solid #3087bf;
  cursor: pointer;
  color: #fff;
  font-family: 'Source Sans Pro';
  font-size: 15px;
  font-weight: 300;
  text-decoration: none;
  padding-left: 20px;
  user-select: none;

  &:first-of-type {
    border-top: 1px solid #3087bf;
  }
  &:hover {
    background-color: #81c1ea;
  }
`


export const DrawerContentDiv = styled.div`
  background: red;
  color: black;
`

export const Ico = styled.div`
  float: left;
  font-size: 20px;
  margin: 0;
  margin-top: -3px;
  margin-right: 10px;
  padding: 0;
`

export const Arrow = styled.div`
  float: right;
  // color: #297cb2;
  color: #fff;
  font-size: 25px;
  margin: 0;
  margin-top: -3px;
  margin-right: 10px;
  padding: 0;
  &:hover {
    color: #fff;
  }
`
export const DrawerItemLink = styled.a`
  color: #fff;
  font-family: 'Source Sans Pro';
  font-size: 1rem;
  font-weight: 300;
  text-decoration: none;
  padding-left: 20px;
  // &:hover {
  //   color:black;
  // }
`
