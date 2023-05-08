import { createContext, useContext, useEffect, useState } from 'react';
import ServiceNote from 'services/ServiceNote';

const NoteContext = createContext();

const serviceNote = new ServiceNote();

export const useNote = () => useContext(NoteContext);

export const NoteProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState(null);
  const [filter, setFilter] = useState('');
  // When delete note in list notes, countChangeNotes increase and rerenderin listNotes
  const [countDeleteNotes, setCountDeleteNotes] = useState(0);

  useEffect(() => {
    const loadNotes = async () => {
      const listNotes = await serviceNote.readNotes(filter);
      setCurrentNote(null);
      setNotes(listNotes);
    };

    loadNotes();
  }, [filter, countDeleteNotes]);

  // * Handler button ADD note
  const addNote = async () => {
    try {
      const newElement = await serviceNote.addNote();
      newElement.editing = true;

      const listNotes = await serviceNote.readNotes(filter);
      setNotes(listNotes);
      setCurrentNote(newElement);
    } catch {
      alert('Error add note');
    }
  };

  // * Handler button DELETE note
  const deleteNote = async note => {
    if (!note) return;

    try {
      await serviceNote.deleteNote(note.id);
      setCountDeleteNotes(prev => prev + 1);
    } catch {
      alert('Error delete note');
    }
  };

  // * Handler button EDITING note
  const editNote = note => {
    if (!currentNote) return;
    setCurrentNote(prev => ({ ...prev, editing: !prev.editing }));
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
