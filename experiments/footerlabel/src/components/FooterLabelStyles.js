import styled from 'styled-components'

export const FooterLabelDiv = styled.div`
    clear: both;
    display: block;
    z-index: 1000;
    position: relative;
    width: 100%;
    height: 40px;
    line-height: 40px;
    background-color: #fff;
    -webkit-box-shadow: 0 0 10px 0 #ccc;
    -moz-box-shadow: 0 0 10px 0 #ccc;
    box-shadow: 0 0 10px 0 #ccc;

    color: #5e5e5e;
    font-family: 'Source Sans Pro';
    font-size: 13px;
    font-weight: 300;
    text-align: center;
    user-select: none;
`

export const FooterLabelLink = styled.a`
    text-decoration: none;
    &:active {
        color: #5e5e5e
    }
`

export default FooterLabelDiv