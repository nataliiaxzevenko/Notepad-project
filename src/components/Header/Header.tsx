import React from 'react';

import Logo from '../Logo/Logo';

const style = {
    backgroundColor: '#ADD8E6',
    height: '50px',
    left: 0,
    top: 0,
    right: 0,
    flex: 'none'
}

const header = () => {
    return (
        <header style={style}>
            <Logo />
        </header>
    );
}

export default header;