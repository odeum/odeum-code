import styled from 'styled-components'
import {WORKSPACE,CLOUDY_DARK} from 'framework/assets/colors'
export const DescriptionDiv = styled.div`

font-family: Source Sans Pro;
    font-style: normal;
    font-size: 13px;
    font-weight: 500;
    border-radius: 3px;
margin-top:3px;
margin-bottom:15px;
background: white;
border: 1px solid #ddd;
width: 60%;
padding:3px;
`
export const Label = styled.label`
color:#5E5E5E;
margin-left:10px;
`
export const SelectRowNr = styled.select`
  background: #E3E5E5;
  color: #5E5E5E;
  font-size: inherit;
  padding: .5em;
  padding-right: 1em;	
  padding-left: 1em;
  border: 0;
  margin: 0;
  border-radius: 3px;
  text-indent: 0.01px;
  text-overflow: '';
  -moz-appearance: none;
  -webkit-appearance:none;
  appearance: none;
`

export const SpanRowNr = styled.span`
background: #E3E5E5;
box-shadow: 1px 1px 5px ${CLOUDY_DARK};
position: relative;
display: inline-block;
vertical-align: middle;
margin:3px;
&:before{
width: 2em;
right: 0;
top: 0;
bottom: 0;
border-radius: 0 3px 3px 0;
pointer-events: none;
position:absolute;
content:""
}
&:after{
color:#5E5E5E;
content: "\uD83E\uDC59";
height: 1em;
line-height: 1;
right: 0.5em;
top: 50%;
margin-top: -.5em;
position:absolute;
pointer-events: none;
background: #E3E5E5;
}
`