import React from 'react';
import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';
//import { css } from 'office-ui-fabric-react/lib/Utilities';

import Search from './Search/Search';
import AddNote from './AddNote/AddNote';

const toolbox = () => {
    const classNames = mergeStyleSets({
        search: {
            width: '90%',
            display: 'inline-block'
        },
        addButton: {
            width: '10%',
            display: 'inline-block'
        }
    })

    return (
        <div>
            <div className={classNames.search}><Search /></div>
            <div className={classNames.addButton}><AddNote /></div>
        </div>
    );
}

export default toolbox;