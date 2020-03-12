import * as actionType from '../actions/actionTypes';
import Note from '../../components/Toolbar/Notes/Note/Note';

export interface IFullNote {
    title: string,
    content: string,
    id: string
}

export interface IInitialState {
    note: IFullNote,
    changed: boolean
}

const initialState: IInitialState = {
    note: {
        title: '',
        content: '',
        id: ''
    },
    changed: false
};

const reducer = (state = initialState, action: any) => {
    switch (action.type) {
        case actionType.GET_FULL_NOTE:
            return {
                ...state,
                note: {
                    title: action.title,
                    content: action.content,
                    id: action.id
                }
            }
        case actionType.TITLE_CHANGED:
            return {
                ...state,
                note: {
                    ...state.note,
                    title: action.title
                },
                changed: true
            }
        case actionType.CONTENT_CHANGED:
            return {
                ...state,
                note: {
                    ...state.note,
                    content: action.content
                },
                changed: true
            }
        case actionType.EDIT_NOTE_FINISHED:
            return {
                ...state,
                changed: false
            }
        default:
            return state;
    }
}

export default reducer;