import { useNote } from 'hooks/noteContext';
import { formatDateNote } from 'helpers/formatDateTime';
import { List, Item, Content, TimeNote } from './ListItem.styled';

const ListItem = () => {
  const { notes, currentNote, setCurrentNote } = useNote();

  return (
    <List>
      {notes.map(note => (
        <Item
          key={note.id}
          className={currentNote && note.id === currentNote.id ? 'Current' : ''}
          onClick={() => setCurrentNote(note)}
        >
          <h3>{note.title ? note.title : 'No title'}</h3>
          <Content>
            <TimeNote> {formatDateNote(note.date)}</TimeNote>
            {' ' + note.content}
          </Content>
        </Item>
      ))}
    </List>
  );
};

export default ListItem;
