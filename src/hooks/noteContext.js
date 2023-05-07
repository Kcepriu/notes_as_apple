import { createContext, useContext, useState } from 'react';

const NoteContext = createContext();

export const useNote = () => useContext(NoteContext);

export const NoteProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const [curentNote, setCurentNote] = useState(null);
  const [filter, setFilter] = useState('');

  return (
    <NoteContext.Provider
      value={{ notes, setNotes, curentNote, setCurentNote, filter, setFilter }}
    >
      {children}
    </NoteContext.Provider>
  );
};
