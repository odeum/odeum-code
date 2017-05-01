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
  &:first-of-type {
    border-top: 1px solid #3087bf;
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
