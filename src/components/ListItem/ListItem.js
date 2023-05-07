import { useNote } from 'hooks/noteContext';

import { List, Item } from './ListItem.styled';

const ListItem = () => {
  const { notes, currentNote, setCurrentNote } = useNote();

  return (
    <>
      <List>
        {notes.map(note => (
          <Item
            key={note.id}
            className={
              currentNote && note.id === currentNote.id ? 'Current' : ''
            }
            onClick={() => setCurrentNote(note)}
          >
            <h3>{note.tilte}</h3>
            <p>{note.date}</p>
            <p>{note.content}</p>
          </Item>
        ))}
      </List>
    </>
  );
};

export default ListItem;
