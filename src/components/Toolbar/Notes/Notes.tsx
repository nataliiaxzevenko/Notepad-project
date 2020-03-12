import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actionCreator from '../../../store/actions/index';
import { InterfaceNote } from '../../../store/reducers/notes';

import Note from './Note/Note';

const Notes = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(actionCreator.fetchNotes())
    },[]);

    const notes = useSelector<any, InterfaceNote[]>(state => state.notesReducer.filtered);
    
    const error = useSelector<any, boolean>(state => state.notesReducer.error);
    //const loading = useSelector<any, boolean>(state => state.notesReducer.loading);

    if (error) return (<p>Your notes cannot be loaded!</p>);
    return (
        <div>
            {notes.map((note: InterfaceNote) => (
                <Note
                    key={note.id}
                    title={note.title}
                    content={note.content}
                    date={note.date}
                    id={note.id}
                />
            ))}
        </div>
    )
}

export default Notes;