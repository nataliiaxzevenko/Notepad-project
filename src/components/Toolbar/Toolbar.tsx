import React from 'react';
import 'office-ui-fabric-core/dist/css/fabric.min.css';
import { getTheme, mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';
import { ScrollablePane, ScrollbarVisibility } from 'office-ui-fabric-react/lib/ScrollablePane';
import { Sticky, StickyPositionType } from 'office-ui-fabric-react/lib/Sticky';

import Toolbox from './Toolbox/Toolbox';
import Notes from './Notes/Notes';

const theme = getTheme();
const classNames = mergeStyleSets({
    wrapper: {
        height: '100%',
        position: 'relative'
    },
    pane: {
        width: '100%',
        height: '100%',
        maxWidth: '400px',
        border: '1px solid ' + theme.palette.neutralLight
    },
    sticky: {
        color: theme.palette.neutralDark,
        padding: '5px 20px 5px 10px',
        fontSize: '13px',
        backgroundColor: 'white'
    },
    textContent: {
        display: 'inline-block',
        width: '95%',
        margin: 'auto',
        maxWidth: '380px'
    }
});

const toolbar = (props: any) => {

    return (
        <div className="ms-Grid-row" style={{height: '100%'}}>
            <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg12" style={{height: '100%'}}>
                <div className={classNames.wrapper}>
                    <ScrollablePane styles={{ root: classNames.pane }} scrollbarVisibility={ScrollbarVisibility.auto}>
                        <Sticky stickyPosition={StickyPositionType.Header}>
                            <div className={classNames.sticky}><Toolbox /></div>
                        </Sticky>
                        <div className={classNames.textContent}><Notes/></div>
                    </ScrollablePane>
                </div>
            </div>
        </div>


    );
}

export default toolbar;