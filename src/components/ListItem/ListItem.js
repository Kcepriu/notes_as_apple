import { useNote } from 'hooks/noteContext';
import { formatDateNote } from 'helpers/formatDateTime';
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
            <p>{formatDateNote(note.date)}</p>
            <p>{note.content}</p>
          </Item>
        ))}
      </List>
    </>
  );
};

export default ListItem;
