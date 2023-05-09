import { createContext, useContext, useEffect, useState } from 'react';
import serviceNote from 'services/ServiceNote';

const NoteContext = createContext();

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

  // * Save editing note
  useEffect(() => {
    if (!currentNote?.toSave) return;

    const startSaveNote = async () => {
      try {
        await serviceNote.saveNote(currentNote);
        const listNotes = await serviceNote.readNotesFromCache();
        setNotes(listNotes);
      } catch {
        alert('Error saved note');
      }
    };

    startSaveNote();
  }, [currentNote]);

  // * Handler button ADD note
  const addNote = async () => {
    try {
      const newElement = await serviceNote.addNote();
      newElement.editing = true;

      const listNotes = await serviceNote.readNotesFromCache();
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

      const listNotes = await serviceNote.readNotesFromCache();
      setNotes(listNotes);

      setCurrentNote(null);
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
