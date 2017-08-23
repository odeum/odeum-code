import styled, { keyframes } from 'styled-components'
import { CLOUDY_DARK } from 'framework/assets/colors'
import Loader from 'halogen/PulseLoader'
import Modal from 'react-modal'
import Select from 'react-select'
import DatePicker from 'react-datepicker'
import 'react-select/dist/react-select.css'
import * as colors from 'framework/assets/colors'
import ReactQuill from 'react-quill'

export const DescriptionDiv = styled.div`
    float: left;
    font-family: 'Source Sans Pro';
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

export const ListAction = styled.div`
    float: left;
    margin-right: 5px;
`

export const ListLink = styled.a`
    color: #000;
    text-decoration: none;
    &:visited {
        color: #000;
    }
    &:active {
        color: #000;
    }
    &:focus {
        color: #000;
    }
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

export const AppendixHeader = styled.div`
    float: left;
    max-width: 80%;
    font-family: 'Source Sans Pro';
    font-size: 35px;
    font-weight: 400;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
`

export const AppendixButtonPanel = styled.div`
    float: right;
    margin-bottom: 20px;
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
    margin-bottom: 80px;
`

export const ExportStepTwoDiv = styled.div`
    display: none;
`

export const ExportLoadingDiv = styled.div`
    display: none;
`

export const AppendixButton = styled.button`
    background-color: #3b97d3;
    border: none;
    border-radius: 3px;
    color: #fff;
    font-size: 14px;
    min-width: 100px;
    height: 40px;
    /*box-shadow: 0px 5px 15px 0px rgba(0,0,0,0.33);*/
    cursor: pointer;
    padding-left: 10px;
    padding-right: 10px;
    font-family: 'Source Sans Pro';
    font-size: 16px;
    font-weight: 300;
    outline: none;
    user-select: none;
`

export const Appendix = styled.div`
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
    border: none;
    position: absolute;
    top: 50%;
    left: 50%;
    right: auto;
    bottom: auto;
    margin-right: -50%;
    width: 30%;
    height: auto;
    min-height: 500px;
    transform: translate(-50%, -50%);
    animation: ${fadeModal} 1s ease-in-out;
    background-color: white;
    outline: none;
    box-shadow: 0px 0px 50px 0px rgba(0,0,0,0.5);
`

export const ImageBrowserModalWindow = ModalWindow.extend`
    width: 50%;
    height: 50%;
`

export const ModalHeader = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 60px;
    background-color: ${colors.MODAL_HEADER};
    font-family: 'Source Sans Pro';
    font-size: 20px;
    font-weight: 300;
    color: ${colors.MODAL_HEADER_TITLE};
    box-sizing: border-box; 
    padding-left: 20px;
    padding-right: 20px;
    margin-bottom: 20px;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    user-select: none;
`

export const ModalHeaderIcon = styled.div`
    margin-right: 5px;
`

export const ModalHeaderTitle = styled.div`
    float: left;
`

export const ModalHeaderClose = styled.div`
    float: right;
    margin-left: auto;
    cursor: pointer;
`

export const ModalContent = styled.div`
    clear: both;
    box-sizing: border-box; 
    padding-left: 20px;
    padding-right: 20px;
    font-family: 'Source Sans Pro';
    font-size: 16px;
    font-weight: 300;
    height: 100%;
`

export const ModalButtonPanel = styled.div`
    /*position: relative;
    left: 0;
    bottom: 0;*/
    width: 100%;
    height: 60px;
    margin-top: 20px;
`

export const Animation = styled.div`
    animation: ${fadeIn} 0.7s ease-in-out
`

export const Dropdown = styled(Select) `
    &.Select--single {
        .Select-control {
        background-color: #3b97d3;
        border: none;
        border-radius: 3px;
        height: 37px;
        cursor: pointer;
        /*box-shadow: 0px 5px 15px 0px rgba(0,0,0,0.33);*/

        .Select-placeholder {
            color: #fff;
            font-family: 'Source Sans Pro';
            font-size: 16px;
            font-weight: 300;
            line-height: 37px;
            padding-left: 15px;
        }

        .Select-value {
            line-height: 37px !important;
        }

        .Select-value-label {
            line-height: 37px;
        }

        .Select-input {
            height: 37px;
        }

        .Select-arrow-zone {
            width: 50px;
        }

        .Select-arrow {
            border: none;
            border: solid #fff;
            border-width: 0 1px 1px 0;
            display: inline-block;
            padding: 5px;
            transform: rotate(45deg);
        }
        }

        .Select-menu-outer {
        background-color: #3b97d3;
        border: none;
        /*box-shadow: 0px 5px 15px 0px rgba(0,0,0,0.33);*/

        .Select-option {
            background-color: #3b97d3;
            color: #fff;
            font-family: 'Source Sans Pro';
            font-size: 15px;
            font-weight: 300;
            padding-left: 15px;
        }
        }
    }

    &.is-open > .Select-control .Select-arrow {
        top: 5px;
        transform: rotate(-135deg) !important;
    }

    &.is-focused:not(.is-open) > .Select-control {
        border-color: none;
        /*box-shadow: 0px 5px 15px 0px rgba(0,0,0,0.33);*/
    }
`

export const DatePickerStyled = styled(DatePicker)`
    box-sizing: border-box;
    width: 100%;
    height: 40px;
    background-color: #ecf0f1;
    color: #5e5e5e;
    font-family: 'Source Sans Pro';
    font-size: 16px;
    font-weight: 300;
    border-radius: 3px;
    border: none;
    margin-bottom: 15px;
    padding-left: 10px;
    padding-right: 10px;
`

export const FormPanelWrapper = styled.div`
    margin-bottom: 10px;
/* 
    &:first-of-type > .quill {
        display: block;
    }
    &:not(:first-of-type) > .quill {
        display: none;
    } */
`

export const FormPanelHeader = styled.div`
    width: 100%;
    height: 40px;
    line-height: 40px;
    color: #fff;
    background-color: ${colors.PRIMARY_BLUE};
    font-family: 'Source Sans Pro';
    font-size: 15px;
    font-weight: 300;
    padding-left: 10px;
    cursor: pointer;
    user-select: none;
    border-radius: 4px;
`

export const ReactQuillStyled = styled(ReactQuill)`
    div:nth-of-type(2) {
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
    }
`
