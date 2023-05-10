import { nanoid } from 'nanoid';

const ProviderPsevdoList = class {
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

  deleteNote = async idNote => {
    this.listNotes.filter(note => note.id !== idNote);
  };

  addNote = async newElement => {
    newElement.id = nanoid();

    this.listNotes.push(newElement);

    return newElement;
  };

  saveNote = async note => {
    const saveElement = { ...note, toSave: false, editing: false };

    const index = this.listNotes.findIndex(element => element.id === note.id);

    if (index === -1) {
      //Error cache
      throw new Error('Error saving note');
    }

    this.listNotes[index] = saveElement;

    return saveElement;
  };
};

export default ProviderPsevdoList;
