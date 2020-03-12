import * as actionType from './actionTypes';
import axios from '../../axios-notes';
import { InterfaceNote } from '../reducers/notes';

const fetchNotesSuccess = (notes: InterfaceNote[]) => {
    return {
        type: actionType.FETCH_NOTES_SUCCESS,
        notes: notes
    }
}

const fetchNotesFail = (error: any) => {
    return {
        type: actionType.FETCH_NOTES_FAIL,
        error: error
    }
}

export const fetchNotesStart = () => {
    return {
        type: actionType.FETCH_NOTES_START
    }
}

export const fetchNotes = () => {
    return (dispatch: any) => {
        dispatch(fetchNotesStart());
        axios.get('https://notepad-project-50d22.firebaseio.com/notes.json')
            .then(res => {
                const fetchedNotes = [];
                for (let key in res.data) {
                    fetchedNotes.push({
                        ...res.data[key],
                        id: key
                    });
                }
                dispatch(fetchNotesSuccess(fetchedNotes));
            })
            .catch(err => {
                dispatch(fetchNotesFail(err));
            });
    }
}

export const addNoteSuccess = (id: string, noteData: any) => {
    return {
        type: actionType.ADD_NOTE_SUCCESS,
        noteId: id,
        noteData: noteData
    }
}

export const addNoteFail = (error: any) => {
    return {
        type: actionType.ADD_NOTE_FAIL,
        error: error
    }
}

export const addNote = () => {
    let tempDate = new Date();
    let date = (tempDate.getMonth() + 1) + '-' + tempDate.getDate() + '-' + tempDate.getFullYear() + ' ' + tempDate.getHours() + ':' + (tempDate.getMinutes() < 10 ? '0' : '') + tempDate.getMinutes();
    const noteData = {
        title: '',
        content: '',
        date: date
   }
    return (dispatch: any) => {
        axios.post('/notes.json', noteData)
            .then(response => {
                dispatch(addNoteSuccess(response.data.name, noteData));
            })
            .catch(error =>
                dispatch(addNoteFail(error)));
    }
}

export const getId = (id: string) => {
    return {
        type: actionType.GET_ID,
        id: id
    }
}

export const editNoteSuccess = (id: string, editedNote: any) => {
    return {
        type: actionType.EDIT_NOTE_SUCCESS,
        id: id,
        note: editedNote
    }
}

export const editNote = (id: string, title: string, content: string) => {
    let tempDate = new Date();
    let date = (tempDate.getMonth() + 1) + '-' + tempDate.getDate() + '-' + tempDate.getFullYear() + ' ' + tempDate.getHours() + ':' + (tempDate.getMinutes() < 10 ? '0' : '') + tempDate.getMinutes();
    const editedNote = {
        title: title,
        content: content,
        date: date
    }
    return (dispatch: any) => {
        axios.put('/notes/' + id + '.json', editedNote)
            .then(response => {
                dispatch(editNoteSuccess(id, editedNote));
                alert('Chages saved!');
            })
            .catch(error =>
                console.log(error));
    }
}

export const deleteNoteSuccess = (id: string) => {
    return {
        type: actionType.DELETE_NOTE,
        id: id
    }
}

export const deleteNote = (id: string) => {
    return (dispatch: any) => {
        axios.delete('/notes/' + id + '.json')
            .then(response => {
                dispatch(deleteNoteSuccess(id));
            })
            .catch(error =>
                console.log(error));
    }
}

export const searchFilter = (filtered: InterfaceNote[]) => {
    return{
        type: actionType.SEARCH_FILTER,
        filtered: filtered
    }
}