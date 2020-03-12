import * as actionType from '../actions/actionTypes';

export interface InterfaceNote {
    id: string,
    title: string,
    content: string,
    date: string,
}

export interface ListNotes {
    notes: InterfaceNote[],
    error: boolean,
    loading: boolean,
    selectedNoteId: string,
    filtered: InterfaceNote[]
}


const initialState: ListNotes = {
    notes: [],
    error: false,
    loading: false,
    selectedNoteId: '',
    filtered: []
}

const reducer = (state = initialState, action: any) => {
    switch (action.type) {
        case actionType.FETCH_NOTES_SUCCESS:
            return {
                ...state,
                notes: action.notes,
                error: false,
                loading: false
            }
        case actionType.FETCH_NOTES_START:
            return {
                ...state,
                error: false,
                loading: true
            }
        case actionType.FETCH_NOTES_FAIL:
            return {
                ...state,
                error: true
            }
        case actionType.ADD_NOTE_FAIL:
            return {
                ...state,
                loading: false
            }
        case actionType.ADD_NOTE_SUCCESS:
            const newNote = {
                ...action.noteData,
                id: action.noteId
            }
            return {
                ...state,
                loading: false,
                notes: state.notes.concat(newNote),
                selectedNoteId: action.noteId
            };
        case actionType.GET_ID:
            return {
                ...state,
                selectedNoteId: action.id
            }
        case actionType.EDIT_NOTE_SUCCESS:
            const editedNote = {
                ...action.note,
                id: action.id
            }
            return {
                ...state,
                notes: state.notes.map(note => note.id === action.id ? editedNote : note)
            }
        case actionType.DELETE_NOTE:
            return {
                ...state,
                notes: state.notes.filter(note => note.id !== action.id),
                selectedNoteId: ''
            }
        case actionType.SEARCH_FILTER:
            return {
                ...state,
                filtered: action.filtered
            }

        default:
            return state;
    }
}

export default reducer;