import { nanoid } from 'nanoid';

let listNotes = [
  {
    id: 1,
    tilte: '1 Velit est cupidatat',
    content: 'Duis aliqua laboris est sit nisi aliqua nisi elit.',
    date: Date.now(),
  },
  {
    id: 2,
    tilte: '2 Laboris ut quis nostrud ullamco.',
    content:
      'Fugiat excepteur ea officia tempor minim elit consectetur cupidatat nisi ea aliquip ex.',
    date: Date.now(),
  },
  {
    id: 3,
    tilte: '3 Do fugiat mollit ',
    content: 'Eiusmod dolore laboris est commodo laboris eu ut ullamco esse.',
    date: Date.now(),
  },
];

// TODO Not write to bases field "editing" !!!!!!!!!!!!!
const ServiceNote = class {
  readNotes = async filter => {
    // * Read from DataBases
    const upperFilter = filter.toUpperCase();

    const filtersListNotes = listNotes.filter(note =>
      note.content.toUpperCase().includes(upperFilter)
    );

    return filtersListNotes;
  };

  deleteNote = async idNote => {
    // * delete note in DataBases
    listNotes = listNotes.filter(note => note.id !== idNote);

    // throw new Error('Error delete note');
  };

  addNote = async () => {
    const newElement = {
      id: nanoid(),
      tilte: '',
      content: '',
      date: Date.now(),
    };
    listNotes.push(newElement);
    return newElement;

    // throw new Error('Error add note');
  };
};

export default ServiceNote;
