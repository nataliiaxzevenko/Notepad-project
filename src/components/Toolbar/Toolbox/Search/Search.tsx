import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SearchBox } from 'office-ui-fabric-react';
import { InterfaceNote } from '../../../../store/reducers/notes';
import * as actionCreator from '../../../../store/actions/index';

const Search = () => {
  const dispatch = useDispatch();

  const listNotes = useSelector<any, InterfaceNote[]>(state => state.notesReducer.notes);

  useEffect(() => {
    dispatch(actionCreator.searchFilter(listNotes))
  })

  const searchHandler = (event: any) => {
    let newList = [];
    const newValue = event?.target.value;
    if (newValue !== '' && newValue !== undefined) {
      const currList = listNotes;
      newList = currList.filter(note => {
        const lowerTitle = note.title.toLowerCase();
        const lowerContent = note.content.toLowerCase();
        const filter = newValue?.toLowerCase();

        return lowerTitle.includes(filter) || lowerContent.includes(filter);
      })
    } else {
      newList = listNotes;
    }
    dispatch(actionCreator.searchFilter(newList));
  }

  return (
    <SearchBox
      placeholder="Search"
      value=''
      onChange={searchHandler}
      underlined={true}
    />
  )
}

export default Search;