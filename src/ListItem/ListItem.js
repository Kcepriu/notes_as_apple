import { useNote } from 'hooks/noteContext';

import { WrapListItem } from './ListItem.styled';

const listNotes = [
  {
    id: 1,
    tilte: 'Velit est cupidatat',
    content: 'Duis aliqua laboris est sit nisi aliqua nisi elit.',
    date: Date.now(),
  },
  {
    id: 1,
    tilte: 'Laboris ut quis nostrud ullamco.',
    content:
      'Fugiat excepteur ea officia tempor minim elit consectetur cupidatat nisi ea aliquip ex.',
    date: Date.now(),
  },
  {
    id: 1,
    tilte: 'Do fugiat mollit ',
    content: 'Eiusmod dolore laboris est commodo laboris eu ut ullamco esse.',
    date: Date.now(),
  },
];

const ListItem = () => {
  const { notes } = useNote();

  return (
    <WrapListItem>
      <ul>
        {notes.map(note => (
          <li key={note.id}>{note.tilte}</li>
        ))}
      </ul>
    </WrapListItem>
  );
};

export default ListItem;
