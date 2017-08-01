import styled, { keyframes } from 'styled-components'
import { CLOUDY_DARK } from 'framework/assets/colors'
import Loader from 'halogen/PulseLoader'
import Modal from 'react-modal'

export const DescriptionDiv = styled.div`
   font-family: Source Sans Pro;
   font-style: normal;
   font-size: 13px;
   font-weight: 500;
   border-radius: 3px;
   margin-top: 3px;
   margin-bottom: 15px;
   background: white;
   border: 1px solid #ddd;
   width: 60%;
   padding: 3px;
`
export const Label = styled.label`
   color: #5e5e5e;
   margin-left: 10px;
`

export const PulseLoader = styled(Loader) `
   color: ${CLOUDY_DARK};
   position: absolute;
   top: 0;
   bottom: 0;
   left: 0;
   right: 0;
   display: flex;
   align-items: center;
   justify-content: center;
   font-size: 1em;
`
export const SelectRowNr = styled.select`
   background: #e3e5e5;
   color: #5e5e5e;
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
   -webkit-appearance: none;
   appearance: none;
`

export const SpanRowNr = styled.span`
   background: #e3e5e5;
   box-shadow: 1px 1px 5px ${CLOUDY_DARK};
   position: relative;
   display: inline-block;
   vertical-align: middle;
   margin: 3px;

   &:before {
     width: 2em;
     right: 0;
     top: 0;
     bottom: 0;
     border-radius: 0 3px 3px 0;
     pointer-events: none;
     position: absolute;
     content: "";
   }

   &:after {
     color: #5e5e5e;
     content: "\uD83E\uDC59";
     height: 1em;
     line-height: 1;
     right: 0.5em;
     top: 50%;
     margin-top: -.5em;
     position: absolute;
     pointer-events: none;
     background: #e3e5e5;
   }
`

export const AppendixButtonPanel = styled.div`
   float: right;
`

export const AppendixButtonPanelDiv = styled.div`
  float: right;
  margin-left: 20px;
  cursor: pointer;
  &:nth-of-type(3) {
    width: 150px;
  }
  &:nth-of-type(4) {
    width: 200px;
  }
`

export const AppendixForm = styled.form`
   clear: both;
`

export const PublishStepTwoDiv = styled.div`
   display: none;
`

export const PublishLoadingDiv = styled.div`
   display: none;
`

export const AppendixSaveButton = styled.button`
  background-color: #3b97d3;
  border: none;
  border-radius: 3px;
  color: #fff;
  font-size: 14px;
  width: 100px;
  height: 40px;
  box-shadow: 0px 5px 15px 0px rgba(0,0,0,0.33);
  vursor: pointer;
`

const fadeIn = keyframes`
 @keyframes  {
   from {
     /*  transform:translateY(-100%); */
     opacity: 0;
     width: 100%;
   }

   to {
     /*     transform:translateY(0%); */
     opacity: 1;
     width: 100%;
   }
 }
`
const fadeModal = keyframes`
 @keyframes  {
   from {
     opacity: 0;
     top: 0%;
     left: 50%;
   }

   to {
     opacity: 1;
     top: 50%;
     left: 50%;
   }
 }
`

export const ModalWindow = styled(Modal) `
    border-radius: 3px;
    border: 2px cyan royalblue;
    position: absolute;
    top: 50%;
    left: 50%;
    right: auto;
    bottom: auto;
    marginright: -50%;
    height: auto;
    transform: translate(-50%, -50%);
    animation: ${fadeModal} 1s ease-in-out;
    background-color: white;
    width: 30%;
`
export const Animation = styled.div`
   animation: ${fadeIn} 0.7s ease-in-out`