
//REMOVE As it is no longer used

import React from 'react';
import PropTypes from 'prop-types'
const Header = (onPush) => {
    console.log(onPush)
    return (
        <div>
            <h2>Header Dumb for HeaderContainer </h2>
        </div>
    );
};

Header.propTypes = {
    onPush:PropTypes.func.isRequired,
};


export default Header;