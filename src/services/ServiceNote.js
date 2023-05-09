import { nanoid } from 'nanoid';

let listNotes = [
  {
    id: 1,
    title: '1 Velit est cupidatat',
    content: 'Duis aliqua laboris est sit nisi aliqua nisi elit.',
    date: Date.now(),
  },
  {
    id: 2,
    title: '2 Laboris ut quis nostrud ullamco.',
    content:
      'Fugiat excepteur ea officia tempor minim elit consectetur cupidatat nisi ea aliquip ex.',
    date: Date.now(),
  },
  {
    id: 3,
    title: '3 Do fugiat mollit ',
    content: 'Eiusmod dolore laboris est commodo laboris eu ut ullamco esse.',
    date: Date.now(),
  },
];
const ProviderLocalSorage = class {
  constructor() {
    this.listNotes = [
      {
        id: 1,
        title: '1 Velit est cupidatat',
        content: 'Duis aliqua laboris est sit nisi aliqua nisi elit.',
        date: Date.now(),
      },
      {
        id: 2,
        title: '2 Laboris ut quis nostrud ullamco.',
        content:
          'Fugiat excepteur ea officia tempor minim elit consectetur cupidatat nisi ea aliquip ex.',
        date: Date.now(),
      },
      {
        id: 3,
        title: '3 Do fugiat mollit ',
        content:
          'Eiusmod dolore laboris est commodo laboris eu ut ullamco esse.',
        date: Date.now(),
      },
    ];
  }

  readNotes = async filter => {
    return this.listNotes.filter(note =>
      note.content.toUpperCase().includes(filter)
    );
  };

  deleteNote = async () => {};
  addNote = async () => {};
  saveNote = async () => {};
};

// TODO Not write to bases field "editing" !!!!!!!!!!!!!
const ServiceNote = class {
  #cacheNotes = [];

  constructor(ProviderDB) {
    this.providerDB = new ProviderDB();
  }

  readNotes = async filter => {
    // * Read from DataBases
    const upperFilter = filter.toUpperCase();

    // ! Rewrite
    this.#cacheNotes = listNotes.filter(note =>
      note.content.toUpperCase().includes(upperFilter)
    );

    return [...this.#cacheNotes];
  };

  readNotesFromCache = async () => {
    return [...this.#cacheNotes];
  };

  deleteNote = async idNote => {
    // * delete note in DataBases

    // ! 1 Delete from Databases
    // * 2 Change cache
    this.#cacheNotes = this.#cacheNotes.filter(note => note.id !== idNote);

    // throw new Error('Error delete note');
  };

  addNote = async () => {
    const newElement = {
      id: nanoid(),
      title: '',
      content: '',
      date: Date.now(),
    };

    // ! 1 Add to databases

    // * 2 Change cache
    this.#cacheNotes.push(newElement);

    return newElement;

    // throw new Error('Error add note');
  };

  saveNote = async note => {
    console.log('saveNote');

    // ! 1 Save info to databases
    const saveElement = note;

    // * 2 Change cache
    const index = this.#cacheNotes.findIndex(element => element.id === note.id);

    if (index === -1) {
      //Error cache
      throw new Error('Error saving note');
    }

    this.#cacheNotes[index] = saveElement;

    return saveElement;
  };
};

const serviceNote = new ServiceNote(ProviderLocalSorage);

export default serviceNote;
