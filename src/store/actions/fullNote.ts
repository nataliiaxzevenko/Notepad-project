import * as actionType from './actionTypes';

export const getFullNote = (id: string, title: string, content: string) => {
    return {
        type: actionType.GET_FULL_NOTE,
        id: id,
        title: title,
        content: content
    }
}

export const titleChanged = (title: string) => {
    return{
        type: actionType.TITLE_CHANGED,
        title: title
    }
}

export const contentChanged = (content: string) => {
    return{
        type: actionType.CONTENT_CHANGED,
        content: content
    }
}

export const editNoteFinished = () => {
    return{
        type: actionType.EDIT_NOTE_FINISHED
    }
}