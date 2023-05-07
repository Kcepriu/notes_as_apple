const listNotes = [
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

const ServiceNote = class {
  readNotes = async filter => {
    const upperFilter = filter.toUpperCase();

    const filtersListNotes = listNotes.filter(note =>
      note.content.toUpperCase().includes(upperFilter)
    );

    return filtersListNotes;
  };
};

export default ServiceNote;
