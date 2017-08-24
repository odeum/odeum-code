import styled from 'styled-components'
import DropDown from 'framework/components/Widgets/DropDown'

export const EplanDropDown = styled(DropDown)`
    color:red;
    width:100%;
    padding:20px;
`

export const PrimaryContainer = styled.div`
    width: 100%;
    height: 100%;
    padding-top: 10px;
`

export const SecondaryContainer = PrimaryContainer.extend`
    box-sizing: border-box;
`

export const Header = styled.h3`
    font-family:'Source Sans Pro';
    font-size: 16px;
    font-weight: 400;
`