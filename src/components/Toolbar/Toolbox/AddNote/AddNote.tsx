import React from 'react';
import { useDispatch } from 'react-redux';
import { CommandButton } from 'office-ui-fabric-react';
import * as actionCreator from '../../../../store/actions/index';

const AddNote = () => {
     const dispatch = useDispatch();
     const addNote = () => {
          dispatch(actionCreator.addNote())
     }
     return (
          <CommandButton
               iconProps={{ iconName: 'EditNote' }}
               title="Add Note"
               onClick={addNote} />
     );
}

export default AddNote;