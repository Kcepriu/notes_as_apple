import { createContext, useContext, useEffect, useState } from 'react';
import ServiceNote from 'services/ServiceNote';

const NoteContext = createContext();

const serviceNote = new ServiceNote();

export const useNote = () => useContext(NoteContext);

export const NoteProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState(null);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const loadNotes = async () => {
      const listNotes = await serviceNote.readNotes(filter);
      setCurrentNote(null);
      setNotes(listNotes);
    };

    loadNotes();
  }, [filter]);

  const addNote = () => {};
  const deleteNote = note => {};
  const editNote = note => {
    // if (f nb yt )
  };

  return (
    <NoteContext.Provider
      value={{
        notes,
        setNotes,
        currentNote,
        setCurrentNote,
        filter,
        setFilter,
        addNote,
        deleteNote,
        editNote,
      }}
    >
      {children}
    </NoteContext.Provider>
  );
};
