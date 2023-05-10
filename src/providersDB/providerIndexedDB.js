import { openDB } from 'idb';

const ProviderIndexedDB = class {
  #DATABASE_NAME = 'notesDb';
  #TABLE_NEME_NOTES = 'notes';

  db = null;

  initDB = async () => {
    const table_name = this.#TABLE_NEME_NOTES;
    this.db = await openDB(this.#DATABASE_NAME, 1, {
      upgrade(db) {
        db.createObjectStore(table_name, {
          keyPath: 'id',
          autoIncrement: true,
        });
      },
    });
  };

  reconectDB = async () => {
    if (!this.db) {
      await this.initDB();
    }
  };

  getAllNotes = async table_name => {
    await this.reconectDB();

    const tx = this.db.transaction(table_name);
    const objectStore = tx.objectStore(table_name);
    const notes = await objectStore.getAll();

    return notes;
  };

  addToTable = async (table_name, data) => {
    await this.reconectDB();

    const tx = this.db.transaction(table_name, 'readwrite');
    const objectStore = tx.objectStore(table_name);
    const id = await objectStore.add(data);
    const newElement = await objectStore.get(id);

    return newElement;
  };

  deleteById = async (table_name, id) => {
    await this.reconectDB();

    const tx = this.db.transaction(table_name, 'readwrite');
    await tx.objectStore(table_name).delete(id);
  };

  updateById = async (table_name, data) => {
    await this.reconectDB();

    const tx = this.db.transaction(table_name, 'readwrite');
    const objectStore = tx.objectStore(table_name);
    const id = await objectStore.put(data);
    const obj = await objectStore.get(id);

    return obj;
  };

  // Interface function -----------------
  readNotes = async filter => {
    const listNotes = await this.getAllNotes(this.#TABLE_NEME_NOTES);

    return listNotes.filter(note =>
      note.content.toUpperCase().includes(filter)
    );
  };

  deleteNote = async idNote => {
    await this.deleteById(this.#TABLE_NEME_NOTES, idNote);
  };

  addNote = async newNote => {
    const newElement = await this.addToTable(this.#TABLE_NEME_NOTES, newNote);
    return newElement;
  };

  saveNote = async note => {
    const updateNote = await this.updateById(this.#TABLE_NEME_NOTES, note);
    return updateNote;
  };
};

export default ProviderIndexedDB;
