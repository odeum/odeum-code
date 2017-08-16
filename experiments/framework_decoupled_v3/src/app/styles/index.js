import styled, { keyframes } from 'styled-components'

export const Div = styled.div`
    width: 100%;
    height: 100%;
    padding: 20px;
    background-color: #fff;
    overflow-y: scroll;
    box-sizing: border-box;
`

const fadeIn = keyframes`
    from{
    /*  transform:translateY(-100%); */
        opacity:0;
        width:100%;
    }
    to{
    /*     transform:translateY(0%); */
        opacity:1;
        width:100%;
    }
`

export const PrimaryContainer = styled.div`
/*    animation: ${fadeIn} 0.7s ease-in-out;*/
    width: 100%;
    height: 100%;
    padding-top: 10px;
    padding-bottom: 20px;
    `

export const SecondaryContainer = PrimaryContainer.extend`
   /* padding: 20px;*/
    box-sizing: border-box;
`

export const IconButton = styled.div`
    cursor: pointer;
`

export const FieldLabel = styled.label`
    display: inline-block;
    color: #181818;
    font-family: 'Source Sans Pro';
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 5px;
`

export const TextInputField = styled.input`
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
