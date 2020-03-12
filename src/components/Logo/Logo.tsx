import React from "react";

import notepadLogo from '../../assets/images/notepad-logo-png-1.png';
import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';

const classNames = mergeStyleSets({
    image: {
        display: 'inline-block',
        position: 'relative',
        height: 40,
        width: 40,
        marginLeft: 27,
        marginTop: 5,
        objectFit: 'fill'
    }
});

const logo = () => {
    return (
        <div>
            <img src={notepadLogo} className={classNames.image} />
        </div>
    );
}

export default logo;