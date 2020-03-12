import React from 'react';

import Toolbar from '../Toolbar/Toolbar';
import FullNote from '../FullNote/FullNote';

const mainBody = (props: any) => {

    return (
        <div className="ms-Grid" dir="ltr" style={{height: '100%', marginBottom: '50px'}}>
            <div className="ms-Grid-row" style={{ height: '100%', position: 'relative', boxSizing: 'border-box'}}>
                <div className="ms-Grid-col ms-sm4 ms-md4 ms-lg3" style={{height: '100%'}}><Toolbar /></div>
                <div className="ms-Grid-col ms-sm4 ms-md4 ms-lg9" style={{height: '100%'}}><FullNote /></div>
            </div>
        </div>
    );
}

export default mainBody;