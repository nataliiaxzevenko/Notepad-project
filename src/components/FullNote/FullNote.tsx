import React, { useEffect } from 'react';
import { TextField, DefaultButton, PrimaryButton } from 'office-ui-fabric-react';
import { useSelector, useDispatch } from 'react-redux';
import { InterfaceNote } from '../../store/reducers/notes';
import { IFullNote } from '../../store/reducers/fullNote';
import * as actionCreator from '../../store/actions/index';

const stylesTitle = () => {
    return {
        root: {
            marginTop: '5px',
            marginBottom: '5px'
        },
        field: {
            fontSize: '20px'
        }
    }
}

const stylesContent = () => {
    return {
        root: {
            height: '85%',
            padding: 0,
            margin: 0
        },
        field: {
            height: '100%'
        },
        wrapper: {
            height: '100%'
        },
        fieldGroup: {
            height: '100%'
        }
    }
}

const FullNote = (props: any) => {

    const dispatch = useDispatch();
    
    const selectedId = useSelector<any, string>(state => state.notesReducer.selectedNoteId);
    const notes = useSelector<any, InterfaceNote[]>(state => state.notesReducer.notes);
    const fullNote = useSelector<any, IFullNote>(state => state.fullNoteReducer.note);
    const changed = useSelector<any, boolean>(state => state.fullNoteReducer.changed);

    useEffect(() => {
        notes.map(note =>
            note.id === selectedId ? dispatch(actionCreator.getFullNote(note.id, note.title, note.content)) : null
        )
    }, [selectedId]);

    const saveClickHandler = () => {
        const title = fullNote.title;
        const content = fullNote.content;
        dispatch(actionCreator.editNote(selectedId, title, content));
        dispatch(actionCreator.editNoteFinished());
    }

    const cancelClickHandler = (id: string) => {
        dispatch(actionCreator.deleteNote(id));
    }

    const onTitleChangeHandler = (event: any) => {
        const newTitle = event.target.value;
        dispatch(actionCreator.titleChanged(newTitle));
    }

    const onContentChangeHandler = (event: any) => {
        const newContent = event.target.value;
        dispatch(actionCreator.contentChanged(newContent));
    }
    if (selectedId === '') return <p>Please click on note from list or add new note!</p>
    return (
        <div style={{ height: '100%', width: '100%' }}>
            <TextField
                styles={stylesTitle} borderless
                placeholder="Title..."
                value={fullNote.title}
                onChange={onTitleChangeHandler} />
            <TextField
                styles={stylesContent} borderless multiline
                placeholder="Type your note..."
                value={fullNote.content}
                onChange={onContentChangeHandler} />
            <DefaultButton text="Delete"
                onClick={() => cancelClickHandler(selectedId)} allowDisabledFocus />
            <PrimaryButton text="Save"
                onClick={saveClickHandler} allowDisabledFocus disabled={!changed} />
        </div>
    );
};

export default FullNote;