import React from 'react';
import { Text, mergeStyleSets } from 'office-ui-fabric-react';
import { Card, ICardTokens } from '@uifabric/react-cards';
import {useDispatch} from 'react-redux';
import * as actionCreator from '../../../../store/actions/index';
import {InterfaceNote} from '../../../../store/reducers/notes';

const classNames = mergeStyleSets({
    item: {
        width: '100%',
        maxWidth: '400px'
    },
    section: {
        width: '95%',
        marginTop: '5px',
        //margin: '5px 0px 0px 12px',
    }
})

const cardTokens: ICardTokens = {
    childrenGap: 20,
    childrenMargin: 6,
    maxWidth: 400,
    minWidth: 212,
    width: '98%'
};


const Note = (props: InterfaceNote) => {

    const dispatch = useDispatch();

    let title = props.title === '' ? <Text variant={'large'}>New note</Text> : <Text variant={'large'}>{props.title}</Text>
    let content = props.content === '' ? null : <Text nowrap>{props.content}</Text>
    return (
        <div className="ms-Grid-row">
            <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg12">
                <Card aria-label="Basic horizontal card"
                    horizontal tokens={cardTokens}
                    onClick = {() => dispatch(actionCreator.getId(props.id))}
                >
                    <Card.Item className={classNames.item}>
                        <Card.Section className={classNames.section}>
                            {title}
                        </Card.Section>
                        <Card.Section className={classNames.section}>
                            {content}
                        </Card.Section>
                        <Card.Section className={classNames.section}>
                            <Text variant={'xSmall'}>{props.date}</Text>
                        </Card.Section>
                    </Card.Item>
                </Card>
            </div>
        </div>
    )
};

export default Note;