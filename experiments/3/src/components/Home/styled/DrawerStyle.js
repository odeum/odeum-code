import styled from 'styled-components'

export const DrawerWrapperDiv = styled.div`
  clear: both;
  background-color: #3b97d3;
  width: 300px;
  height: calc(100vh - 140px);
  float: left;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const DrawerBlueBar = styled.div`
  height: 70px;
  line-height: 70px;
  background-color: #3b97d3;
  border-bottom: 1px solid #3087bf;
  &:first-of-type {
    border-top: 1px solid #3087bf;
  }
`;

export const DrawerItemLink = styled.a`
  color: white;
  font-family: 'Source Sans Pro';
  font-size: 1rem;
  font-weight: bold;
  text-decoration: none;
  padding-left: 20px;
  // &:hover {
  //   color:black;
  // }
`;

export const DrawerContentDiv= styled.div`
  background: red;
  color: black;
`;