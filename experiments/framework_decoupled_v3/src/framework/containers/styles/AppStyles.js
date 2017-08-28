import styled from 'styled-components'
import { injectGlobal } from 'styled-components'
import styledNormalize from 'styled-normalize'

injectGlobal([`
    ${styledNormalize}

    html {
        font-size: 62.5%;
    }

    * {
        outline: none;
        box-sizing: border-box;
    }
`])

export const HomeDiv = styled.div`
    width: 100%;
    height: 100vh;
    margin: 0px;
    padding: 0px;
    background-color: #ecf0f1;
`

export const WorkspaceContainer = styled.div`
    float: left;
    width: calc(100% - 250px);
    align-items: stretch;
    margin: 20px;
    overflow: hidden;
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;    
`
