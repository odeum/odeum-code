import React from 'react';
import PropTypes from 'prop-types'
import {PanelDiv} from './styled'
const Panel = props => {
    return (
        <PanelDiv>
            {props.children}
        </PanelDiv>
    );
};

Panel.propTypes = {
    label: PropTypes.string.isRequired,
    icon:PropTypes.string,
    children:PropTypes.element
};

export default Panel;